import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
    
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-800 text-white shadow-sm shadow-white rounded-xl p-4 mb-6'>
            <div className='w-full flex justify-center mb-4'>
                <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
                className='rounded-xl h-56 ' />

            </div>
            <div className="flex justify-center">
            <h2
            className='text-xl font-bold'
            >{title}</h2></div>
        </div>
    </Link>
  )
}


export default PostCard