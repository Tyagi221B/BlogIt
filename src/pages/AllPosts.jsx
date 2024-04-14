import { useState, useEffect } from "react";
import { Container, PostCard } from "../components";
import appwriteService from "../appwrite/config";

function AllPosts() {
	const [posts, setPosts] = useState([]);
	useEffect(() => {}, []);
	appwriteService.getPosts([]).then((posts) => {
		if (posts) {
			setPosts(posts.documents);
		}
	});
	return (
		<div className="w-full py-8 bg-gray-900">
			<Container>
				<div className="flex flex-wrap">
					{posts.map((post) => (
						<div
							key={post.$id}
							className="p-2 w-1/4 hover:scale-105 hover:bg-slate-700 hover:rounded-2xl"
						>
							<PostCard post={post} />
						</div>
					))}
				</div>
			</Container>
		</div>
	);
}

export default AllPosts;
