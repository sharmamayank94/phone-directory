import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home.js';
import Add from './Add.js';
class App extends Component {

  constructor(){
    super();
    this.state={
      route: '/',
      directory: []
    }
  }

  changeroute = (route)=>{
    this.setState({route});
  }
  
  enterinfo = (contactname, contactnumber )=>{
      if(contactname&&contactnumber){
        const newstate = this.state;
        newstate.directory.push({contactname, contactnumber});
        this.setState({directory: newstate.directory, route:'/add'});
        console.log(this.state.directory);
        this.changeroute('/');
      }
  }

  delinfo = index=>{
    let newdir = this.state.directory;
    newdir = newdir.filter((element, i)=>index!=i);
    this.setState({directory: newdir, route:'/'});
  }

    render() {
      if(this.state.route==='/'){
        return (
          <Home directory = {this.state.directory} changeroute = {this.changeroute} delinfo={this.delinfo}/>
        );
      }else{
        return(
          <Add enterinfo = {this.enterinfo}  />
        );
      }
    }
  
}


export default App;
