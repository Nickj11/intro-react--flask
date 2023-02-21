import React, { Component } from 'react'

import Nav from './Nav'
import Login from './Login'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Signup from './Signup'
import ToDo from './ToDo'
import ToDolist from './ToDolist'


export default class App extends Component {

  constructor() {
    super();
    this.state = {
      info: [],
      new_info: '',
      user: {}
    }
  }

  logMeIn = (user) => {
    this.setState({user: {user}})
  };
  logMeOut = () => {
    this.setState({user: {}})
  };


  addToList = (e) => {
    e.preventDefault()
    const todo = e.target.todoitem.value
    console.log(this)
    this.setState(this.state.info = [...this.state.info, { todo: todo }])
    console.log(this.state.info)
    console.log(`Added ${todo}`)
  };

  showToDo = () => {
    console.log('before showToDo')
    return this.state.info.map((c, i) => { return <ToDolist key={i} itemInfo={c} /> })
  };

  removeFromList = () => {
    this.setState({ info: [] })
  }




  render() {
    return (
        <BrowserRouter>
        <div>
          <Nav user={this.state.user} logMeOut={this.logMeOut}/>
          <Routes>
        <Route path='/todo' element={<ToDo info={this.state.info} addToList={this.addToList} showToDo={this.showToDo} removeFromList={this.removeFromList} />} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login logMeIn={this.logMeIn}/>}/>
     
       
        </Routes>
        </div>
        </BrowserRouter>
    )
  }
}
