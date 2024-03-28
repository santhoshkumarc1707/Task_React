import Post from "./Post";

const postsData = [
  { id: 1, title: "Post 1", content: "Content for post 1", likes: 10 },
  { id: 2, title: "Post 2", content: "Content for post 2", likes: 15 },
];

function App() {
  return (
    <div>
      <h1>Posts</h1>
      {postsData.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default App;
