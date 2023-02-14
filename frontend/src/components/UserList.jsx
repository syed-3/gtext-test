import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const UserList = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get('http://localhost:5000/users');
    setUser(response.data);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  return (

    <div className="columns mt-5">
      <div className="column is-half">
        <div class="mainb">

          <div class="table">
            <table className="table is-striped is-fullwidth mt-2">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Contact Number</th>
                  <th>Address</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user._id}>
                    <td>{user.name}</td>
                    <td>{user.number}</td>
                    <td>{user.address}</td>
                    <td>
                      <Link
                        to={`edit/${user._id}`}
                        className="edit"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => deleteUser(user._id)}
                        className="delete"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Link to="add" className="button is-success">
            Add New
          </Link>
        </div>


      </div>
    </div>
  );
};

export default UserList;
