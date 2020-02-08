import React, { Component } from 'react';
import './App.css';
import MyForm from './Components/MyForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyForm onSubmit={({firstName, lastName, email}) =>{
          console.log(firstName, lastName, email);
        }}/>
      </div>
    );
  }
}

export default App;
