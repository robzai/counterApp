import React, { Component } from 'react';

// const NavBar = (props) => {
// we don't want to repeat props every, so we use obj destructuring here(i.e. {})
const NavBar = ({ totalCounters }) => {
  return (  
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
        <span className="badge badge-pill badge-secondy">
          {/* {props.totalCounters} */}
          {totalCounters}
        </span>
      </a>
    </nav> 
    );
}


// class NavBar extends Component {
//   render() { 
//     return (  
//       <nav className="navbar navbar-light bg-light">
//         <a className="navbar-brand" href="#">
//           Navbar
//           <span className="badge badge-pill badge-secondy">
//             {this.props.totalCounters}
//           </span>
//         </a>
//       </nav> 
//      );
//   }
// }
 
export default NavBar;