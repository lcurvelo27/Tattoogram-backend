import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import Edit from './Components/Edit/Edit'
import Apply from './Components/Apply/Apply'


    export default(
        <Switch>
            <Route path='/' component={Home} exact/>
            <Route path='/edit' component={Edit} />
            <Route path='/apply' component={Apply} />
        </Switch>
    )