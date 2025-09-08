import { useState, useEffect } from "react";

import './UserList.css'

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error Fetching Users:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading Users.......</p>;
  }

  return (
    <div>
      <h2>User List</h2>
      {users.map((user) => (
        <div key={user.id} className="user-card">
          <div className="user-name">{user.name} ({user.username})</div>
          <p className="user-info">📧 {user.email}</p>
          <p className="user-info">📞 {user.phone}</p>
        </div>
      ))}
    </div>
  );
}

export default UserList;
