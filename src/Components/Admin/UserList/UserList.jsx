import React, { useState, useEffect } from 'react';
import './UserList.css'; 
import usersData from '../../../Datas/Users.json';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(usersData.usersdata); 
  }, []);

  const handleBlockUser = (userId) => {
 
    console.log('Blocking user with ID:', userId);
  };

  const handleUnblockUser = (userId) => {
    
    console.log('Unblocking user with ID:', userId);
  };

  return (
    <div className="user-list-container">
      <h2>User List</h2>
      <table className="user-list-table">
        <thead>
          <tr>
            <th>User ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Joined Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>{user.joinedDate}</td>
              <td>
                {user.isBlocked ? (
                  <button onClick={() => handleUnblockUser(user.id)}>Unblock</button>
                ) : (
                  <button onClick={() => handleBlockUser(user.id)}>Block</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
