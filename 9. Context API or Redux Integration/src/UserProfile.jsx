import  { useContext, useState } from 'react';
import { UserContext } from './UseContext';

function UserProfile() {
  const { user, setUser } = useContext(UserContext);
  const [newName, setNewName] = useState('');
  const [NewAge,setNewAge] =useState('');

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };
  const handleageChange = (e) => {
    setNewAge(e.target.value);
  };


  const updateUserName = () => {
    setUser({ ...user, name: newName });
  };
  const updateUserage = () => {
    setUser({ ...user, age: NewAge});
  };
  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <input
        type="text"
        value={newName}
        onChange={handleNameChange}
        placeholder="New name"
      />
      <button onClick={updateUserName}>Update Name</button>
      <input
        type="number"
        value={NewAge}
        onChange={handleageChange}
        placeholder="New age"
      />
      <button onClick={updateUserage}>Update Age</button>
    </div>
  );
}

export default UserProfile;
