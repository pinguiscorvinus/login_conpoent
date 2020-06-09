import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Homeindex'

function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </>
    </Router>
  )
}

export default App
