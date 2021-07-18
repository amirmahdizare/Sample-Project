import React, { Component } from 'react'
import { LoginPage } from '../page/index'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,Link, Redirect
  } from "react-router-dom";
const AppRoute = () =>  {
        return (
            <>
                <Router>
                    <Switch>                    
                    {/* <Route exact path="/login" > */}
                    <Route path="/home" children={"HomePage Component"}/>
                    <Route path="/login" children={<LoginPage/>}/> 
                    <Route path="/" children={<Redirect to="/login"/>}/> 

                    </Switch>
                </Router>
            </>
        )
    
}
export {AppRoute}