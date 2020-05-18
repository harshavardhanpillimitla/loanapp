import React,{ Component } from 'react';



import PropTypes from 'prop-types';


class History extends Component {




  render() {
  
    
    return  (
      <div style={h}>
      

      <td>{ this.props.disp.principalAmount }</td>
      <td>{ this.props.disp.currency }</td>
      <td>{ this.props.disp.monthlyPaymentAmount }</td>
      <td>{ this.props.disp.numPayments }</td>
      <td>{ this.props.disp.interestRate }</td>
      
      </div>



      );

  }




}
const h ={
  
  
  display:'flex',
  justifyContent:'space-around'



}
History.propTypes={
  disp:PropTypes.object.isRequired
}

export default History;