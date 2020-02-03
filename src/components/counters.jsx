import React, { Component } from 'react';
import Counter from './counter';

class  Conters extends Component {
  state = { 
    counters: [
      { id:0, value: 4 },
      { id:1, value: 0 },
      { id:2, value: 0 }
    ]
   }

  // this is an event handler, which will be pass to Counter componnet as props
  handleDelete = (counterID) => {
    const counters = this.state.counters.filter(counter => counter.id !== counterID);
    // set ther counters in state to the counters const we create before
    this.setState({ counters: counters });
  } 

  render() { 
    return ( <div>
      {/** get each counter and map it to a Counter component */}
      { this.state.counters.map(counter => 
        /** 
         * value here is for passing properties to the Counter component, then in Counter 
         * we can use this.props.value to fetch the value pass to it. see state and buttonClicked
         * in Counter component for more deteil.
         * 
         * onDelete here is passing an event handler to Counter component
         */
        <Counter key={counter.id} value={counter.value} id={counter.id} onDelete={this.handleDelete}>
          {/** 
           * complex element can pass to a componennt like this, to fetch h4 use this.props.children
           * in Counter component
           */}
          <h4>Counter #{counter.id}</h4>
        </Counter>
      ) }
    </div> );
  }
}
 
export default  Conters;