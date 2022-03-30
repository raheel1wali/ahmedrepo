import React from 'react'

import { Routes, Route} from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Customers from '../pages/Customers'

const App = () => {
    return (
        <Routes>
            <Route path='/' exact component={Dashboard}/>
            <Route path='/customers' component={Customers}/>
        </Routes>
    )
}

export default App
