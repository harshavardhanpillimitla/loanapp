import React,{ Component } from 'react';


import History from './History';
import PropTypes from 'prop-types';



class Display extends Component {




  render() {
  
    
    return this.props.display.map((disp) => (
      <span>
      
      <History disp={disp} />

      
     </span>



      ));

  }




}
Display.propTypes={
  display:PropTypes.array.isRequired
}



export default Display;



     