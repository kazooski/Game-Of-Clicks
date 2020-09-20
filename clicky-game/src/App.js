import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Header from './component/Header';

class App extends Component {

  state={
    score: 0,
    topScore: 0
  }
  
  render () {
    return(
      <div className="container">
        <Navbar
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <Header />

      </div>

    )
    
  }
}

export default App;
