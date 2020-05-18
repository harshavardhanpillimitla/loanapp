import React,{ Component } from 'react';

import './App.css';


import "react-input-range/lib/css/index.css";









import Interest from './components/Interest'

import Display from './components/Display'




class App extends Component {
  state ={
    loanreq:[]





  }



  //add interst state

  addInterest = (state) => {
   
   
   
    
   let values =this.state.loanreq.map(el => el['principalAmount']);
    let values2 = this.state.loanreq.map(el => el['numPayments']);
    let con1=(values.includes(state.principalAmount));
    let con2 =(values2.includes(state.numPayments));
    if(!(con1&&con2))
    { 
      
      const newInterest = state;
      this.setState({loanreq : [...this.state.loanreq,newInterest]});
    }
    if(values.length>10){
      this.setState({loanreq : []});

    }
  
    
    
   
  }
 
  render() {
    
    return (
      <div className="App">
      

         
      <h1>Loan app</h1>
      <div style={ab}>
      <div>
      <table  >
      <tr>
      <th >


      <tr ><td className="lite" >principalAmount</td>
      <td className="lite">currency</td>
      <td className="lite">monthlyPaymentAmount</td>
      <td className="lite">numPayments</td>
      <td className="lite">interestRate</td></tr>
      </th>
      </tr>
      <tr >

      <Display display={this.state.loanreq}/>
      </tr >
      </table>
      </div>
      <Interest addInterest ={ this.addInterest }  display={this.state.loanreq}/>
      </div>
      
    
    
 
      

      </div>



      );


  }




}
const ab ={
  display:'flex',
  padding:"110px",

  
  justifyContent:'spacearound'
}


export default App;