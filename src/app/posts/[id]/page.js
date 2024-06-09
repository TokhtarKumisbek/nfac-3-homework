import axios from 'axios';

const PostPage = async ({ params }) => {
  const { id } = params;
  const response = await axios.get(`https://dummyjson.com/posts/${id}`);
  const post = response.data;

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-700 mb-4">{post.body}</p>
        <a href="/" className="text-blue-500 hover:text-blue-700">
          Go back
        </a>
      </div>
    </div>
  );
};

export default PostPage;
