import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar/>
          <Routes>
            <Route exact path="/" element={<News key="general" pageSize={100}/>}/>
            <Route exact path="/business" element={<News key="business" pageSize={100} category={'business'}/>}/>
            <Route exact path="/entertainment" element={<News key="entertainment" pageSize={100} category={'entertainment'}/>}/>
            <Route exact path="/health" element={<News key="health" pageSize={100} category={'health'}/>}/>
            <Route exact path="/science" element={<News key="science" pageSize={100} category={'science'}/>}/>
            <Route exact path="/sports" element={<News key="sports" pageSize={100} category={'sports'}/>} />
            <Route exact path="/technology" element={<News key="technology" pageSize={100} category={'technology'}/>} />
          </Routes>
        </Router>
       
       
      </div>
    )
  }
}
