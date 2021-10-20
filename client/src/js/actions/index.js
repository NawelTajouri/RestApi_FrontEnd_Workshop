import { GET_USERS, ADD_USER } from "../actionTypes";
import axios from "axios";

//ADD Users
//PATH : /users/add_user
// response : newuser
/********** */

//Get All Users
// PATH : /users/GetAllUsers
// response : Array of all users
/********** */

//DELETE USER BY ID
//PATH : /DeleteUser/:userID
/********** */

//UPDATE USER BY ID
//PATH : /EditUser/:userID
/********** */

export const getusers= () => async(dispatch)=> {
 try {
     let response = await axios.get("/users/GetAllUsers");
     console.log(response);
     dispatch({
         type: GET_USERS,
         payload: response.data
     })
 } catch (error) {
     console.log(error);
     
 }
}


export const removeusers= (id) => async(dispatch)=> {
    try {
        let response = await axios.delete(`/users/DeleteUser/${id}`);
        console.log(response);
        dispatch(getusers())
    } catch (error) {
        alert (`Cannot find user with id = ${id}`)
        
    }
   }

   export const adduser= (newuser) => async(dispatch)=> {
    try {
        let response = await axios.post("/users/add_user",newuser);
        console.log(response);
        dispatch({
            type:ADD_USER,
            payload: response.data
        })
    } catch (error) {
        alert (error)
        
    }
   }

   export const edituser= (id,formdata) => async(dispatch)=> {
    try {
        let response = await axios.put(`/users/EditUser/${id}`,formdata);
        console.log(response);
        dispatch(
            getusers()
        )
    } catch (error) {
        alert (error)
        
    }
   }