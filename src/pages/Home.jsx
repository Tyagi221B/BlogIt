import { useEffect, useState } from 'react';
import appwriteService from '../appwrite/config';
import { Container, PostCard } from '../components';

// Function to shuffle array elements (Fisher-Yates shuffle algorithm)
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        // Shuffle the posts array
        const shuffledPosts = shuffleArray(posts.documents);
        setPosts(shuffledPosts);
        setPosts(posts.documents);
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center">
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
    <div className="w-full py-8 bg-gray-900 flex justify-center">
      
        <div className="flex flex-wrap justify-center border-2 border-black w-1/2 bg-gray-900 shadow-blue-900 shadow-md rounded-2xl ">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-full flex flex-wrap justify-center transition-all hover:scale-150 hover:mb-10 hover:mt-20">
              <PostCard {...post} />
            </div>
          ))}
        </div>
    </div>
  );
}

export default Home;
