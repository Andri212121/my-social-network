import React from "react";
import './App.css';
import Header from "./components/Header/header";
import Navbar from "./components/Navbar/navbar";
import Profile from "./components/Profile/profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/dialogsContainer";
import UsersContainer from "./components/Users/usersContainer";


function App() {

    const windowInnerHeight = document.documentElement.clientHeight

    return (
        <BrowserRouter>
            <div className="App" style={{height: windowInnerHeight}}>
                <Header/>
                <Navbar/>
                <div className="content">
                    <Routes>
                        <Route path='/profile'
                               element={<Profile/>}/>
                        <Route path='/dialogs'
                               element={<DialogsContainer/>}/>
                        <Route path='/users'
                               element={<UsersContainer/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
