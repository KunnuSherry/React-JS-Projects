import { useDispatch, useSelector } from "react-redux"
import { handleDelete } from "../store/slices/blogSlice";

function BlogList() {
    const {blog} = useSelector(state=>state)
    const {blogList} = blog;
    const dispatch = useDispatch()

    function onDeleteBlogId(id){
        dispatch(handleDelete({id}))
    };

    return(
        <div className="flex items-center justify-center min-h-screen bg-black text-gray-100 p-6">
            <div className="w-full max-w-4xl">
                <div className="bg-gray-900 rounded-lg shadow-xl overflow-hidden border border-purple-500">
                    <div className="bg-gradient-to-r from-purple-800 to-indigo-900 p-6 rounded-t-lg">
                        <h1 className="text-3xl font-bold text-center mb-2 text-white transform transition-transform duration-300 hover:scale-110">
                            Blog List
                        </h1>
                        <div className="w-24 h-1 bg-purple-400 mx-auto rounded-full animate-pulse" />
                    </div>
                    
                    <div className="p-6">
                        <ul className="space-y-4">
                            {
                                blogList?.length > 0 ? blogList.map(singleBlog =>
                                    <div key={singleBlog.id} className="bg-gray-800 rounded-lg p-4 border-2 border-gray-700 transition-all duration-300 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/30 hover:-translate-y-1">
                                        <li className="text-xs px-2 py-1 bg-purple-900 rounded-full text-purple-300 font-medium mb-2">ID: {singleBlog.id}</li>
                                        <li className="text-xl font-bold mb-2 text-white hover:text-purple-300 transition-all duration-300">{singleBlog.title}</li>
                                        <li className="text-gray-300">{singleBlog.description}</li>
                                        <button className="bg-red-500 p-2 font-bold text-gray-100 " onClick={()=>onDeleteBlogId(singleBlog.id)}>Delete Blog</button>
                                    </div>
                                ) : 
                                <div className="text-center py-16">
                                    <h1 className="text-2xl font-bold text-gray-300">No Blogs Added</h1>
                                </div>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogList