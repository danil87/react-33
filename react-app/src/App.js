import React from 'react';
import Form from './components/Form';
import './App.css';
import List from './components/List';

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
        <List />
      </div>
    );
  }
}

export default App;
