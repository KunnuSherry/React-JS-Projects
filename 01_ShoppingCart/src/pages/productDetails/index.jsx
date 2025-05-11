import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ShoppingCartContext } from "../../context";
import {
  Star,
  StarHalf,
  Check,
  Clock,
  Truck,
  ShieldCheck,
  ArrowLeft
} from "lucide-react";

function ProductDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { productDetails, setProductDetails, handleAddToCart } = useContext(ShoppingCartContext);
  const [quantity, setQuantity] = useState(1);
  const [currentImage, setCurrentImage] = useState(0);

    function handleGoToCart(){
        navigate(`/cart`)
    }

  async function fetchProductDetails() {
    setProductDetails(null); // Reset before fetch to show loading spinner
    const apiResponse = await fetch(`https://dummyjson.com/products/${id}`);
    const result = await apiResponse.json();
    setProductDetails(result);
  }

  useEffect(() => {
    fetchProductDetails();
  }, [id]);

  if (!productDetails) {
    return (
      <div className="min-h-screen bg-gray-100 flex justify-center items-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-orange-500"></div>
      </div>
    );
  }

  const discountedPrice = (
    productDetails.price *
    (1 - productDetails.discountPercentage / 100)
  ).toFixed(2);

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} fill="#FFA41C" stroke="#FFA41C" size={18} />);
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half" fill="#FFA41C" stroke="#FFA41C" size={18} />);
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} stroke="#FFA41C" fill="none" size={18} />);
    }

    return stars;
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-gray-800 text-white px-4 py-2 text-sm">
        <div className="max-w-screen-xl mx-auto flex items-center">
          <ArrowLeft size={14} className="mr-2" />
          <span className="mr-2">Back to results</span>
          <span className="mx-2">/</span>
          <span className="mr-2">{productDetails.brand}</span>
          <span className="mx-2">/</span>
          <span className="text-gray-300">{productDetails.category}</span>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto p-4">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-2/5">
            <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
              <div className="aspect-square overflow-hidden rounded-lg mb-4 flex items-center justify-center bg-gray-50">
                <img
                  src={productDetails.images?.[currentImage] || ""}
                  alt={productDetails.title}
                  className="object-contain h-full"
                />
              </div>
              <div className="flex gap-2 overflow-x-auto py-2">
                {productDetails.images?.slice(0, 3).map((img, index) => (
                  <div
                    key={index}
                    className={`border-2 rounded cursor-pointer flex-shrink-0 w-16 h-16 flex items-center justify-center ${
                      currentImage === index ? "border-orange-500" : "border-gray-200"
                    }`}
                    onClick={() => setCurrentImage(index)}
                  >
                    <img
                      src={img}
                      alt={`${productDetails.title} view ${index + 1}`}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="md:w-3/5">
            <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
              <h1 className="text-2xl font-medium">{productDetails.title}</h1>
              <div className="flex items-center mt-1">
                <div className="flex items-center mr-3">
                  {renderStars(productDetails.rating)}
                  <span className="ml-2 text-sm text-blue-500 hover:underline cursor-pointer">
                    {productDetails.reviews?.length || 0} ratings
                  </span>
                </div>
                <div className="text-sm text-blue-500 hover:underline cursor-pointer border-l border-gray-300 pl-3">
                  {productDetails.category}
                </div>
              </div>

              <div className="border-b border-gray-200 my-4"></div>

              <div className="flex items-baseline">
                <span className="text-red-600 mr-2 text-sm">
                  -{productDetails.discountPercentage}%
                </span>
                <span className="text-red-600 text-3xl font-medium">${discountedPrice}</span>
                <span className="ml-2 text-gray-500 line-through">
                  ${productDetails.price.toFixed(2)}
                </span>
              </div>

              <div className="mt-4 text-sm text-gray-800">{productDetails.description}</div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                <div className="flex">
                  <div className="w-1/3 text-sm text-gray-600">Brand</div>
                  <div className="w-2/3 text-sm">{productDetails.brand}</div>
                </div>
                <div className="flex">
                  <div className="w-1/3 text-sm text-gray-600">SKU</div>
                  <div className="w-2/3 text-sm">{productDetails.sku || "N/A"}</div>
                </div>
                <div className="flex">
                  <div className="w-1/3 text-sm text-gray-600">Weight</div>
                  <div className="w-2/3 text-sm">{productDetails.weight || "N/A"} oz</div>
                </div>
                <div className="flex">
                  <div className="w-1/3 text-sm text-gray-600">Stock</div>
                  <div className="w-2/3 text-sm">
                    {productDetails.stock > 10 ? (
                      <span className="text-green-600 flex items-center">
                        <Check size={16} className="mr-1" /> In Stock
                      </span>
                    ) : (
                      <span className="text-red-600 flex items-center">
                        <Clock size={16} className="mr-1" />
                        {productDetails.availabilityStatus || "Low Stock"} ({productDetails.stock} left)
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-6 border-t border-gray-200 pt-4">
                <div className="flex items-start mb-3">
                  <Truck size={20} className="mr-2 text-gray-600 mt-1" />
                  <div>
                    <div className="text-sm font-medium">Shipping Information</div>
                    <div className="text-sm text-gray-600">
                      {productDetails.shippingInformation || "Ships within 3-5 business days"}
                    </div>
                  </div>
                </div>
                <div className="flex items-start mb-3">
                  <ShieldCheck size={20} className="mr-2 text-gray-600 mt-1" />
                  <div>
                    <div className="text-sm font-medium">Return Policy</div>
                    <div className="text-sm text-gray-600">
                      {productDetails.returnPolicy || "30-day return policy"}
                    </div>
                  </div>
                </div>
                <div className="flex items-start">
                  <ShieldCheck size={20} className="mr-2 text-gray-600 mt-1" />
                  <div>
                    <div className="text-sm font-medium">Warranty</div>
                    <div className="text-sm text-gray-600">
                      {productDetails.warrantyInformation || "1-year limited warranty"}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Purchase Box */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-xl font-medium text-red-600 mb-1">${discountedPrice}</div>
              <div className="text-sm text-gray-500 line-through mb-3">
                ${productDetails.price.toFixed(2)}
              </div>
              <button onClick={()=>handleAddToCart(productDetails)} className="mt-4 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
