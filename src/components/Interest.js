import React,{ Component } from 'react'
import PropTypes from 'prop-types';
import axios from 'axios'
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";


export class Interest extends Component {
	state = {
		interestRate:0,
		monthlyPaymentAmount:0,
		monthlyPaymentCurrency:"USD",
		numPayments:6,
		principalAmount:500,
		currency:"USD"

	}




	componentDidMount() {
		axios
			.get(
				`https://ftl-frontend-test.herokuapp.com/interest?amount=${
					this.state.principalAmount
				}&numMonths=${this.state.numPayments}`
			)
			.then(res => {
				this.setState({
		       	interestRate:res.data.interestRate,
		       	monthlyPaymentAmount:res.data.monthlyPayment.amount,
		       	monthlyPaymentCurrency:"USD" ,
		       	numPayments: res.data.numPayments,
		       	principalAmount: res.data.principal.amount,
		       	currency:"USD"
				});
		this.props.addInterest(this.state);
			})
			.catch(e => console.log(e));
		
	}


	componentDidUpdate(prevProps, prevState) {
		if (
			this.state.principalAmount !== prevState.principalAmount ||
			this.state.numPayments !== prevState.numPayments
		) {

			axios
				.get(
					`https://ftl-frontend-test.herokuapp.com/interest?amount=${
						this.state.principalAmount
					}&numMonths=${this.state.numPayments}`
				)
				.then(res => {
					
					if (res.data.status && res.data.status === "error") {
						console.log("Error occurred");
					} else {
						this.setState({
							interestRate: res.data.interestRate,
							monthlyPaymentAmount: res.data.monthlyPayment.amount,
						
						});
					}
				})
				.catch(e => console.log(e));
		

			
		  }
	}









    onClick = (numPayment,principalAmoun) => {
    	this.setState({principalAmount:principalAmoun,numPayments:numPayment});
    	axios
				.get(
					`https://ftl-frontend-test.herokuapp.com/interest?amount=${
						this.state.principalAmount
					}&numMonths=${this.state.numPayments}`
				)
				.then(res => {
					
					if (res.data.status && res.data.status === "error") {
						console.log("Error occurred");
					} else {
						this.setState({
							interestRate: res.data.interestRate,
							monthlyPaymentAmount: res.data.monthlyPayment.amount,
							
						});
					}
				})
				.catch(e => console.log(e));
				this.props.addInterest(this.state);


    	
    	
    	
    	
		


	}






















	
	formatAmountLabel = val => {
		return `$${val}`;
	};

	

	render() {
		const   principalAmoun=this.state.principalAmount;
		const   numPayment=this.state.numPayments;

        
		

		return(
			<div style={abc}>

			<form >
						<div className="form" style={fo}>
							<label >Loan Amount</label>
							<div style={labels}>
							<InputRange
								maxValue={5000}
								minValue={500}
								value={this.state.principalAmount}
								onChange={principalAmount => this.setState({ principalAmount })}
								formatLabel={this.formatAmountLabel}
							/>
							
							</div>
						</div>
						<div className="form-group"  style={fo}>
							<label >Loan Duration (in months)</label>
							<div style={labels}>
							<InputRange
								maxValue={24}
								minValue={6}
								value={this.state.numPayments}
								onChange={numPayments => this.setState({ numPayments })}
							/>
							</div>

						</div>

						<p style={submit} onClick={this.onClick.bind(this,numPayment,principalAmoun)}>submit</p>
						
					</form>


				<div  style={f}>
						<h2>Interest Details: </h2>
						<p>
							<span className="interest-label">Interest Rate: </span>
							<span className="interest-display data-display">
								${this.state.interestRate}
							</span>
						</p>
						<p >
							<span className="interest-label">Monthly Payment:</span>{" "}
							<span className="payment-display data-display">
								${this.state.monthlyPaymentAmount}
							</span>
						</p>
						<p >
							<span className="interest-label">Number of Payments:</span>{" "}
							<span className="number-display data-display">
								{this.state.numPayments}
							</span>
						</p>
					</div>
				</div>



			)
	}




}
const abc ={
	display:'grid',
	marginLeft:'10em',
	flex:'3',

	
	justifyContent:'spacearound'
}
const fo ={
	

	marginTop:'2em'



}
const f ={
	

	marginTop:'0em'



}
const submit={
	border:'2px solid black',
	marginTop:'30px',
	padding:'10px'

}
const labels={
	marginTop:'20px'

}
Interest.propTypes={
	
	addInterest:PropTypes.func.isRequired,
}


export default Interest;