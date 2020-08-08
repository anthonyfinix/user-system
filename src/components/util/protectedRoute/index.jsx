import React from 'react';
import { Route } from 'react-router-dom';

export default ({ component:Component,to, ...rest }) => {
    let user = false;
    console.log(Component)
    console.log(to)
    if(!user) return <Route {...rest} render={props=>{return <h1>No User</h1>}}></Route>
    return <Route {...rest} render={props=>{return <h1>Welcome User</h1>}}></Route>
}