import { useContext } from "react";
import { ShoppingCartContext } from "../../context";
import { useNavigate } from "react-router-dom";
import ProductTile from "../../components/productTile";

function Cart() {
  const { cartItems } = useContext(ShoppingCartContext);
  const navigate = useNavigate();

  return (
    <div className="bg-gray-900 min-h-screen text-gray-100">
      <div className="max-w-5xl mx-auto max-md:max-w-xl py-8 px-4">
        <h1 className="text-3xl font-bold text-white text-center mb-2">
          My Cart
        </h1>
        <div className="w-16 h-1 bg-gray-500 mx-auto mb-8"></div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          <div className="md:col-span-2 space-y-6">
            {cartItems?.length ? (
              cartItems.map((singleCartItem) => (
                <ProductTile 
                  key={singleCartItem.id || Math.random().toString()} 
                  singleCartItem={singleCartItem} 
                />
              ))
            ) : (
              <div className="bg-gray-800 rounded-lg p-8 text-center">
                <h1 className="text-xl text-gray-300">Your cart is empty</h1>
                <p className="text-gray-400 mt-2">Add some items to get started</p>
              </div>
            )}
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6 h-max shadow-lg">
            <h3 className="text-xl font-bold text-white border-b border-gray-700 pb-3">
              Order Summary
            </h3>
            <ul className="text-gray-300 mt-6 space-y-4">
              <li className="flex justify-between items-center">
                <span>Subtotal</span>
                <span>
                  ${" "}
                  {cartItems
                    .reduce((acc, curr) => acc + curr.totalPrice, 0)
                    .toFixed(2)}
                </span>
              </li>
              <li className="flex justify-between items-center text-gray-400">
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </li>
              <li className="flex justify-between items-center pt-4 border-t border-gray-700 font-bold text-white">
                <span>Total</span>
                <span>
                  ${" "}
                  {cartItems
                    .reduce((acc, curr) => acc + curr.totalPrice, 0)
                    .toFixed(2)}
                </span>
              </li>
            </ul>
            
            <div className="mt-6 flex flex-col gap-3">
              <button
                disabled={cartItems.length === 0}
                className="w-full py-3 bg-white text-gray-900 font-bold rounded hover:bg-gray-200 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Checkout
              </button>
              <button
                onClick={() => navigate("/products")}
                className="w-full py-3 bg-gray-700 text-white font-bold rounded hover:bg-gray-600 transition"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;