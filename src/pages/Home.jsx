import { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";

// // Function to shuffle array elements (Fisher-Yates shuffle algorithm)
// function shuffleArray(array) {
// 	for (let i = array.length - 1; i > 0; i--) {
// 		const j = Math.floor(Math.random() * (i + 1));
// 		[array[i], array[j]] = [array[j], array[i]];
// 	}
// 	return array;
// }

function Home() {
	const [posts, setPosts] = useState([]);
	console.log(posts);

	useEffect(() => {
		appwriteService.getPosts().then((posts) => {
			if (posts) {
				// Shuffle the posts array
				// const shuffledPosts = posts.documents;
				// setPosts(shuffledPosts);
				setPosts(posts.documents);
			}
		});
	}, []);

	if (posts.length === 0) {
		return (
			<div className="max-w-md shadow-xl rounded-xl overflow-hidden h-full">
				<Container>
					<div className="flex flex-wrap">
						<div className="p-2 w-full">
							<h1 className="text-2xl font-bold hover:text-gray-500">
								Add Your Posts.
							</h1>
						</div>
					</div>
				</Container>
			</div>
		);
	}

	return (
    <div className='w-full py-2 bg-background md:pt-10'>
        <div className='w-full max-w-8xl mx-auto px-4'>
            <div className='w-full flex flex-wrap justify-center'>
                {
                posts.map((post) => (
                    <div key={post.$id} className='p-2 hover:scale-95 transition-all duration-200 hover:bg-slate-700 hover:rounded-2xl'>
                        <PostCard post={post}/>
                    </div>
                ))}
            </div>
        </div>
    </div>
)
}

export default Home;
