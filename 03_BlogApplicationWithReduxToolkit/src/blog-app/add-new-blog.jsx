import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleInputChange, handleAdd } from "../store/slices/blogSlice";
function AddNewBlog() {

    const {blog} = useSelector((state)=>state)
    console.log(blog)

    const dispatch = useDispatch()

    function onChangeInput(event){
        dispatch(handleInputChange({
            [event.target.name] : [event.target.value]
        }))
    }

    function handleSubmit(event){
        event.preventDefault();
        dispatch(handleAdd());
    }


  const [isHovered, setIsHovered] = useState({
    title: false,
    description: false,
    button: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-gray-100 p-6">
      <div className="w-full max-w-md transform transition-all duration-500 hover:scale-105">
        <div className="bg-gray-900 rounded-lg shadow-xl overflow-hidden border border-purple-500 transform transition-all duration-500">
          <div className="bg-gradient-to-r from-purple-800 to-indigo-900 p-6 rounded-t-lg">
            <h1 className="text-3xl font-bold text-center mb-2 text-white transform transition-transform duration-300 hover:scale-110">
              Add New Blog
            </h1>
            <div className="w-24 h-1 bg-purple-400 mx-auto rounded-full animate-pulse" />
          </div>

          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            <div className="space-y-2 transform transition-all duration-300 hover:-translate-y-1">
              <label 
                className="block text-purple-300 text-lg font-medium transition-all duration-300"
                htmlFor="title"
              >
                Enter Blog Title
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="title"
                  placeholder="Enter Blog Title"
                  id="title"
                  onChange={onChangeInput}
                  value={blog?.formData?.title}
                  onMouseEnter={() => setIsHovered({...isHovered, title: true})}
                  onMouseLeave={() => setIsHovered({...isHovered, title: false})}
                  className={`w-full px-4 py-3 bg-gray-800 text-white rounded-lg border-2 outline-none transition-all duration-300 ${
                    isHovered.title ? "border-purple-400 shadow-lg shadow-purple-500/20" : "border-gray-700"
                  }`}
                />
              </div>
            </div>

            <div className="space-y-2 transform transition-all duration-300 hover:-translate-y-1">
              <label 
                className="block text-purple-300 text-lg font-medium transition-all duration-300"
                htmlFor="description"
              >
                Enter Blog Description
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="description"
                  placeholder="Enter Blog Description"
                  id="description"
                  onChange={onChangeInput}
                  value = {blog?.formData?.description}
                  onMouseEnter={() => setIsHovered({...isHovered, description: true})}
                  onMouseLeave={() => setIsHovered({...isHovered, description: false})}
                  className={`w-full px-4 py-3 bg-gray-800 text-white rounded-lg border-2 outline-none transition-all duration-300 ${
                    isHovered.description ? "border-purple-400 shadow-lg shadow-purple-500/20" : "border-gray-700"
                  }`}
                />
              </div>
            </div>

            <button
              type="submit"
              onMouseEnter={() => setIsHovered({...isHovered, button: true})}
              onMouseLeave={() => setIsHovered({...isHovered, button: false})}
              className={`w-full px-6 py-3 rounded-lg font-bold text-white transition-all duration-500 ease-in-out transform ${
                isSubmitting 
                  ? "bg-gray-600 cursor-not-allowed" 
                  : isHovered.button 
                    ? "bg-gradient-to-r from-purple-600 to-indigo-700 scale-105 shadow-lg shadow-purple-500/50" 
                    : "bg-gradient-to-r from-purple-700 to-indigo-800 hover:from-purple-600 hover:to-indigo-700"
              }`}
            >
                Add New Blog
            </button>
          </form>
        </div>
        
        <div className="text-center mt-4 text-gray-400 opacity-70">
          <p className="text-sm animate-pulse">Your creativity starts here</p>
        </div>
      </div>
    </div>
  );
}

export default AddNewBlog;