import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Read = () => {
  const navigate = useNavigate();
  const apiUrl = process.env.REACT_APP_API_URL;

  const [users, setUsers] = useState([]);
  const [popupMessage, setPopupMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    axios.get(`${apiUrl}/users`)
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, [apiUrl]); // Ensure dependencies are correctly set

  const handleCreateClick = () => {
    navigate('/');
  };

  const handleEditClick = (userId) => {
    navigate(`/edit/${userId}`);
  };

  const handleDeleteClick = (userId) => {
    axios.delete(`${apiUrl}/users/${userId}`)
      .then(() => {
        setUsers(users.filter(user => user.id !== userId));
        setPopupMessage('User deleted successfully');
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 2000);
      })
      .catch(error => console.log(error));
  };

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const filteredUsers = users.filter(user =>
    user.username.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <>
      <h2 className="text-xl font-semibold mb-4">User List</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by username or email"
          value={searchInput}
          onChange={handleSearchInputChange}
          className="px-4 py-2 border border-gray-300 rounded-lg w-full"
        />
      </div>
      <div className="w-full border border-gray-200 rounded-xl overflow-x-auto">
        <table className="w-full divide-y divide-gray-200">
          <thead className="bg-gray-50 text-slate-800">
            <tr className="divide-x divide-gray-200">
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Username</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Password</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white text-slate-800">
            {filteredUsers.map(user => (
              <tr key={user._id} className="divide-x divide-gray-200">
                <td className="px-4 py-2">{user._id}</td>
                <td className="px-4 py-2">{user.username}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">{user.password}</td>
                <td className="px-4 py-2">
                  <button
                    className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline mr-2"
                    onClick={() => handleEditClick(user._id)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                    onClick={() => handleDeleteClick(user._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
          onClick={handleCreateClick}
        >
          Create
        </button>
      </div>
      {showPopup && (
        <div className="fixed top-4 right-4 bg-green-500 text-white p-4 rounded">
          {popupMessage}
        </div>
      )}
    </>
  );
};

export default Read;
