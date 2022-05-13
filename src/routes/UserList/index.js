import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate  } from "react-router-dom";

import Pagination from "../../components/Pagination";
import './userList.css'

function UserList() {
  const navigate = useNavigate ();
  const [usersList, setUsersList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(6);
  const [totalPages, setTotalPages] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios.get(`https://reqres.in/api/users?page=${currentPage}`).then((res) => {
      console.log("Users list is...", res.data);
      setUsersList(res.data.data);
      setTotalPages(res.data.total_pages)
    });
    setLoading(false);
  }, [currentPage]);

  // Current User
  // const indexOfLastUser = currentPage * usersPerPage;
  // const indexOfFirstUser = indexOfLastUser - usersPerPage;
  // const currentUsers = usersList.slice(indexOfFirstUser, indexOfLastUser)
  
  // Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  const navigateToUserDetail = (userObj) => {
    navigate('/user_details', {state:{userObj}});
  }

  return (
    <div>
      <h1>Users List</h1>
    <div className="UserList">
      {usersList.length > 0 && (
        <div>
        <table>
            <tr>
                <th>User Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Department</th>
                <th>Age</th>
            </tr>
          {usersList.map((userObj) => (
            <tr onClick={() => navigateToUserDetail(userObj)}>
                <td>{userObj.id}</td>
                <td>{userObj.first_name}</td>
                <td>{userObj.last_name}</td>
                <td>IT</td>
                <td>22</td>
            </tr>
          ))}
        </table>
        </div>
      )}
    </div>
    <Pagination usersPerPage={usersPerPage} totalPages={totalPages} paginate={paginate} />
    </div>
  );
}

export default UserList;
