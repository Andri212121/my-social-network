import React from "react";
import './App.css';
import Header from "./components/Header/header";
import Navbar from "./components/Navbar/navbar";
import Profile from "./components/Profile/profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dialogs from "./components/Dialogs/dialogs";

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
                               element={<Profile profilePage={props.state.profilePage} dispatch={props.dispatch}/>}/>
                        <Route path='/dialogs' element={<Dialogs dialogsPage={props.state.dialogsPage} dispatch={props.dispatch}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
