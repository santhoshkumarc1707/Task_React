import LikeButton from "./LikeButton";

const Post = ({ post }) => {
  const handleLikePost = async (postId) => {
    // Simulated server request (replace with actual server request)
    await fetch(`/api/posts/${postId}/like`, { method: "POST" });
  };

  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <LikeButton
        postId={post.id}
        initialLikes={post.likes}
        onLike={handleLikePost}
      />
    </div>
  );
};

export default Post;
