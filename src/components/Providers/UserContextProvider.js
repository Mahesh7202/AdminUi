import {createContext, useEffect, useState} from 'react';
import { baseApiURL } from "../../config/env";

export const UserContext = createContext()


const UserContextProvider  = (props) => {

    const [userData, setUserData] = useState([])

    useEffect(() => {

      const fetchData = async () => {
        try {
          const response = await fetch(baseApiURL);
          if (!response.ok) {
            throw new Error('Error fetching data');
          }
          const data = await response.json();
          setUserData(data);
        } catch (error) {
          throw error; 
        }
      };

      fetchData();
    },[]);

const sortedUsers = userData.sort((user1,user2)=>(user1.id < user2.id ? -1 : 1));

const filteringUsers = (search) =>{
    if (search !== "") {
        return userData.filter((o) =>
          Object.keys(o).some((k) =>
            String(o[k]).toLowerCase().includes(search.toLowerCase())
          )
        );
      }
      return userData;
}

const deleteSelectedUsers = (selectedRows) =>{
    selectedRows.map((id)=> deleteUser(id));
    const users = userData.filter(
      (user) => !selectedRows.some((id) => id === user.id)
    );
    setUserData(users);
}

const deleteUser = (id) => {
    setUserData(userData.filter(user => user.id !== id))
}

const updateUser = (id, updateduser) => {
    setUserData(userData.map((user) => user.id === id ? updateduser : user))
}

    return (
        <UserContext.Provider value={{ sortedUsers, filteringUsers, deleteSelectedUsers, deleteUser, updateUser}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;