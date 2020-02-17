import React, { Component } from 'react';

class Counter extends Component {

  /**
   * set state to an obj(i.e. {})
   * state is a special property in React component, is an obj
   * that include any data that this component needs.
   */
  // state = {
  //   value: this.props.value ,
  //   tags: ['tag1', 'tag2', 'tag3']
  // };

  styles = {
    fontSize: '30px',
    fontWeight: 'bold'
  };

  componentDidUpdate() {

  }

  // to do clean up before deleting component, for example timers and listeners.
  componentWillUnmount() {

  }

  getBadgeClasses() {
    let classes = "badge m-2 ";
    if (this.props.counter.value === 0) {
        classes += "badge-warning";
    } else {
        classes += "badge-primary";
    }
    return classes;
  }

  /** this is a mathod */
  fromatCount() {
    // return this.state.count === 0 ? 'Zero' : this.state.count;

    /** this is called obj destructuring, here we are picking the count property of this obj 
     * and stroe it in a seprete constant called count
     */
    const { value: count } = this.props.counter;

    /**
     * <h1>Zero</h1> is a jsx expression, jsx expressions are just like normal JS obj, you can 
     * return them from a function, you can pass them to a function, use them as a value of
     * a constant or variable
     */
    // return count === 0 ? <h1>Zero</h1> : count;

    return count === 0 ? 'Zero' : count;
  }

  // renderTags() {
  //   if(this.state.tags.length === 0){
  //     return <p>There are No tags!</p>
  //   }
  //   return (
  //     <ul>
  //     {/** for each tag within tags, maps it to a jsx element */}
  //     {this.state.tags.map(tag => <li key={tag}>{ tag }</li>)}
  //     </ul>
  //   );
  // }

  /** 
   * depend on how methods are get call, 'this' in JS can reference different obj
   * 1. if function is called as part of a method in an obj, this will return a reference a the obj
   * 2. if function is called as a stand alone function, this returns a reference to the window obj; or 
   *    if strict mode is enable, this returns undefine.
   */
  // buttonClicked = () => {
  //   /** react is not aware of the state changes if we update it this way, which means UI won't get updated */
  //   // this.state.count++;

  //   /** this method, tells react we are updating the state, then react will bring the Dom sync */
  //   this.setState({ value: this.state.value + 1 });
  // }

  /** this is a metohd */
  render() { 
    // inside return() is jsx code, and jsx will compile to React element, which are
    // essentially plain JS obj.
    return (
      /** 
       * use React.Fragment to avoid creating an extra <div>
       * inside of {}, we can add any valid js expression 
       */
      <React.Fragment>
        {this.props.children}

        {/**  m-2 means margin 2, you can look at bootstrap doc for more info */}
        <span style={this.styles} className={ this.getBadgeClasses() }> {this.fromatCount()} </span>

        {/** 
         * note that we are NOT calling the method in onClick, we are simply passing a reference to it
         * this is different from handeling event in vanilla JS
         */}
        {/* <button onClick={this.buttonClicked} className='btn btn-secondary btn-sm'>Increment</button> */}
        <button onClick={() => this.props.onIncrement(this.props.counter)} className='btn btn-secondary btn-sm'>Increment</button>
        
        {/**
         * onDelete here is an event handler passing from Counters(parent) component
         * onClick here will raising an event, and it's parent will handler this event. 
         * 
         * to pass argument to onClick we need to use arrow function
         */}
        <button onClick={() => this.props.onDelete(this.props.id)} className='btn btn-danger btn-sm m-2 '>Delete</button>

        {/** render element conditionally */}
        {/* {this.renderTags()} */}
      </React.Fragment>
    );
}
}

export default Counter;