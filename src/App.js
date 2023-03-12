import React from "react";
import './App.css';
import Navbar from "./components/Navbar/navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/dialogsContainer";
import UsersContainer from "./components/Users/usersContainer";
import ProfileContainers from "./components/Profile/profileContainer";
import HeaderContainers from "./components/Header/headerContainer";


function App() {
    return (
        <BrowserRouter>
            <div className="App" style={{height: '100vh'}}>
                <HeaderContainers/>
                <Navbar/>
                <div className="content">
                    <Routes>
                        <Route path='/profile/:id'
                               element={<ProfileContainers/>}/>
                        <Route path='/profile/'
                               element={<ProfileContainers/>}/>
                        <Route path='/dialogs/'
                               element={<DialogsContainer/>}/>
                        <Route path='/users/'
                               element={<UsersContainer/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
