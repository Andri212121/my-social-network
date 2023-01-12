import React from "react";
import './App.css';
import Header from "./components/Header/header";
import Navbar from "./components/Navbar/navbar";
import Profile from "./components/Profile/profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/dialogsContainer";

function App(props) {

    const windowInnerHeight = document.documentElement.clientHeight

    return (
        <BrowserRouter>
            <div className="App" style={{height: windowInnerHeight}}>
                <Header/>
                <Navbar/>
                <div className="content">
                    <Routes>
                        <Route path='/profile'
                               element={<Profile store={props.store}/>}/>
                        <Route path='/dialogs'
                               element={<DialogsContainer store={props.store}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
