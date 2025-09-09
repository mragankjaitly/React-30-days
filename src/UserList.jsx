import { useState, useEffect } from "react";
import "./UserList.css";

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

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

      {/* ✅ Search input inside return */}
      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "8px", marginBottom: "15px", width: "100%" }}
      />

      {/* ✅ Filter condition added */}
      {users
        .filter(
          (user) =>
            user.name.toLowerCase().includes(search.toLowerCase()) ||
            user.username.toLowerCase().includes(search.toLowerCase()) ||
            user.email.toLowerCase().includes(search.toLowerCase())
        )
        .map((user) => (
          <div key={user.id} className="user-card">
            <div className="user-name">
              {user.name} ({user.username})
            </div>
            <p className="user-info">📧 {user.email}</p>
            <p className="user-info">📞 {user.phone}</p>
          </div>
        ))}
    </div>
  );
}

export default UserList;
