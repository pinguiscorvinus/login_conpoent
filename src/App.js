import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Loginpage from './pages/Homeindex'
import Homepage from './pages/Homepage'
import Prelogin from './pages/Prelogin'

function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route path="/login">
            <Loginpage />
          </Route>
          <Route path="/home">
            <Homepage />
          </Route>
          <Route path="/">
            <Prelogin />
          </Route>
        </Switch>
      </>
    </Router>
  )
}

export default App
