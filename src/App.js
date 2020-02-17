 import React, {Component} from 'react';
import './App.css';
import NavBar from './components/navbar'
import Counters from './components/counters'

// https://www.youtube.com/watch?v=Ke90Tje7VS0
class app extends Component {
  state = { 
    counters: [
      { id:0, value: 4 },
      { id:1, value: 0 },
      { id:2, value: 0 }
    ]
   }
  
  // lifecycle of mount: constructor -> render -> componentDidMount
  // lifecycle of update: render -> componentDidUpdate
  // lifecycle of unount: componentWillUnMount

  // lifecycle: this is called only once wher an instance of a class is created, 
  // so here is a great opportunity to initiate properties in instance 
  constructor(props) {
    super(props);
    // this.state = this.props.something;
  }

  // lifecycle: this is a perfect place to make Ajax call to get data
  componentDidMount() {

  }

  // this is an event handler, which will be pass to Counter componnet as props
  handleDelete = (counterID) => {
    const counters = this.state.counters.filter(counter => counter.id !== counterID);
    // set ther counters in state to the counters const we create before
    this.setState({ counters: counters });
  } 

  handleIncrement = (counter) => {
    /** ... here means make a copy, so here we are making a copy of this.state.counters*/
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({ counters: counters});
  }

  handleReset = () => {
    const counters = this.state.counters.map( counter => {
        counter.value = 0
        return counter;
      });
      this.setState({ counters: counters  });
  }
  render() { 
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(counter => counter.value > 0).length}/>
        <main className="container"> 
          <Counters
            counters={this.state.counters }
            onReset={this.handleReset} 
            onIncrement={this.handleIncrement} 
            onDelete={this.handleDelete}
          /> 
        </main>
      </React.Fragment>
    );
  }
}
 
export default app;