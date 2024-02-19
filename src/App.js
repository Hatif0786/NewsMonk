import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
   api = process.env.REACT_APP_API_KEY
    constructor(){
      super()
      this.state = {
        progress: 0
      }
    }
  


  setProgress = (p) => {
    this.setState({progress : p})
  }

  render() {
    return (
      <div>
        <Router>
          <NavBar/>
          <LoadingBar
            color='#f11946'
            height={3}
            progress={this.state.progress}   
          />
          <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.api} key="general" pageSize={100}/>}/>
            <Route exact path="/business" element={<News setProgress={this.setProgress} apiKey={this.api} key="business" pageSize={100} category={'business'}/>}/>
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.api} key="entertainment" pageSize={100} category={'entertainment'}/>}/>
            <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey={this.api} key="health" pageSize={100} category={'health'}/>}/>
            <Route exact path="/science" element={<News setProgress={this.setProgress} apiKey={this.api} key="science" pageSize={100} category={'science'}/>}/>
            <Route exact path="/sports" element={<News setProgress={this.setProgress} apiKey={this.api} key="sports" pageSize={100} category={'sports'}/>} />
            <Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey={this.api} key="technology" pageSize={100} category={'technology'}/>} />
          </Routes>
        </Router>
       
       
      </div>
    )
  }
}
