import React, { Component } from 'react'
import { LoginPage ,HomePage} from '../page/index'
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
                    <Route path="/home" children={<HomePage/>}/>
                    <Route path="/login" children={<LoginPage/>}/> 
                    <Route path="/" children={<Redirect to="/login"/>}/> 
                    </Switch>
                </Router>
            </>
        )
    
}
export {AppRoute}