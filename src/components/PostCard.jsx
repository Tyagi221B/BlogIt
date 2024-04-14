import appwriteService from '../appwrite/config'
import { Link } from 'react-router-dom'

function PostCard({post}) {
    const date = new Date(post.$createdAt).toLocaleDateString('en-US')

    return (
        <Link to={`/post/${post.$id}`}>
            <div className="max-w-md shadow-xl rounded-xl overflow-hidden flex flex-col justify-between">
                <div className='h-96 overflow-scroll'>
                <img 
                    className="w-full h-auto" 
                    src={appwriteService.getFilePreview(post.featuredImage)} 
                    alt={post.title} 
                />
                </div>

                <div className="sm:px-6 px-2 py-4 flex flex-wrap justify-between items-center">
                    <div className="font-bold text-xl mb-2">{post.title}</div>
                    <p className="text-sm">{date}</p>
                </div>


            </div>
        </Link>
    )
}

export default PostCard