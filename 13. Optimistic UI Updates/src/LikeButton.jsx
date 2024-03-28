import  { useState } from 'react';

const LikeButton = ({ postId, initialLikes, onLike }) => {
  const [likes, setLikes] = useState(initialLikes);
  const [isLiking, setIsLiking] = useState(false);

  const handleLike = async () => {
    setIsLiking(true); // Optimistically update UI
    try {
      // Send request to server
      await onLike(postId);
      setLikes(likes + 1); // Update UI with server response (if successful)
    } catch (error) {
      console.error('Error while liking post:', error);
      // Revert UI state if server request fails
      setIsLiking(false);
    }
  };

  return (
    <button onClick={handleLike} disabled={isLiking}>
      {isLiking ? 'Liking...' : `Like (${likes})`}
    </button>
  );
};

export default LikeButton;
