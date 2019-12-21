import React from 'react';

import './App.css';


class Button extends React.Component {
    componentDidMount(){
        setTimeout(function(){ alert("Hello"); }, 2000);
   }

   componentWillMount(){
    alert("Goodbye")
}

  

   render (){
       return (
        <button onClick={this.props.onClick}>
        {this.props.children}
        </button>
       )
   }
  
}



export default Button;