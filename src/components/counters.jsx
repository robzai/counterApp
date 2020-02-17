import React, { Component } from 'react';
import Counter from './counter';

class  Conters extends Component {
  render() {
    // obj destructuring, see navbar.jsx for more detail
    const {
      onReset,
      onDelete,
      onIncrement,
      counters
    } = this.props;

    return ( 
      <div>
        {/* here by using this.props.onReset we are bubbling that event to our parent */}
        <button onClick={onReset} class="btn btn-primary m-2">Reset</button>
        {/** get each counter and map it to a Counter component */}
        { this.props.counters.map(counter => 
          /** 
           * value here is for passing properties to the Counter component, then in Counter 
           * we can use this.props.value to fetch the value pass to it. see state and buttonClicked
           * in Counter component for more deteil.
           * 
           * onDelete here is passing an event handler to Counter component
           */
          <Counter 
            key={counter.id} 
            value={counter.value} 
            id={counter.id} 
            counter = {counter}
            onDelete={onDelete}
            onIncrement={onIncrement}
          >
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