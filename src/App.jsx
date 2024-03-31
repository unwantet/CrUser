import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import UserList from "./components/userlist/UserLIst";
import NewUserForm from "./components/newuser/NewUser"
import { useState } from "react";
import "./App.css";



function App() {
  const [showModal, setShowModal] = useState(false)
  const [users, setUsers] = useState([]) 


  const deleteUser = (id) => {
    const newUsers = users.filter(user => user.id !== id);
    setUsers(newUsers);
  }

  const addUser = (user) => {
    setUsers((prev) => {
      return [...prev, user]
    })
    setShowModal(false)
  }

  const closeModal = (e) => {
    if (e.target.classList.value === 'overlay') setShowModal(false)
    if (e.key === "Escape") setShowModal(false)
 }
  return (
    <div className="App" onClick={closeModal}>
      <Navbar usersLength={users.length}/>

      <div className="container">
       <main>
        <UserList users={users} deleteUser={deleteUser}/>
        {showModal && <NewUserForm addUser={addUser}/>}
         <div onClick={() => setShowModal(true)} className="cardAdder">
          <img className="add-icon" src="../public/free-icon-post-7263985.png" alt="add-icon" />
          <h2>Add a new card</h2>
         </div>
         
       </main>
      </div>
       <Footer/>
    </div>
  );
}

export default App;