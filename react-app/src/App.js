import React from 'react';
import Form from './components/Form';
import { useState } from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowForm: true
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.isShowForm &&
          <Form
            person={{ name: 'maxim', age: '12' }}
            deleteForm={() => { this.setState({ ...this.state, isShowForm: false }) }} />
        }
      </div>
    );
  }
}

export default App;
