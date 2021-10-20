import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getusers } from "../../js/actions";
import AddEditForm from "../AddEditForm";
import UserCard from "../UserCard";

const UsersList = () => {
 const {users,loading} = useSelector(state => state);
const dispatch = useDispatch();
const GetAllUsers= ()=>dispatch(getusers())
useEffect(() => {
  GetAllUsers()
}, [])
if (loading) {
 return <h1>Loading.......</h1>
} 
  return (
    <div>
      <AddEditForm/>
      <div className="users-container">
       {users.map((user,i)=> <UserCard key={user._id}user={user}/>)}
      </div>
    </div>
  );
};

export default UsersList;
