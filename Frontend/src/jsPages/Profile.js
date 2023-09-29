import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Profile = () => {
  const [user, setUser] = useState(null);

  const baseURL = "http://localhost:8080";

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(`${baseURL}/user/details`);
        setUser(response.data);
      } catch (error) {
        console.log(error);
        // Handle error, display error message, etc.
      }
    };

    fetchUserDetails();
  }, []);

  return (
    <>
      <div className="user-details-container">
        <h1 className="user-details-title">User Details</h1>
        {user ? (
          <div className="user-card">
            <h3>Username: {user.username}</h3>
            <p>Email: {user.email}</p>
            {/* Additional user details */}
          </div>
        ) : (
          <p className="no-user-message">No user details found</p>
        )}
      </div>
    </>
  );
};

export default Profile;
