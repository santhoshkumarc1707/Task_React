import  { useState, useEffect } from 'react';


const UserProfile = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://dummyjson.com/users/${userId}`);
        if (!response.ok) {
          throw new Error('User not found');
        }
        const userData = await response.json();
        setUser(userData);
        setError(null); // Clear any previous errors
      } catch (err) {
        setError(err.message);
        setUser(null); // Clear any previous user data
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();

    // Optional cleanup mechanism
    return () => {
      // This function is executed when the component unmounts or before the component updates.
      // Use it to clear timeouts, cancel API calls, etc.
      // For this example, there's nothing to clean up, but it's here as a demonstration.
    };
  }, [userId]); // This effect depends on userId, it re-runs when userId changes.

  if (loading) {
    return <div>Loading user data...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!user) {
    return <div>No user data found.</div>;
  }

  return (
    <div>
      <h1>User Profile: {user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Username: {user.username}</p>
      {/* Display more user details here */}
    </div>
  );
};

export default UserProfile;
