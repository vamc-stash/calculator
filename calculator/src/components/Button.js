import React, {Component} from 'react'
import '../stylings/Button.css'

class Button extends Component{

	handleButtonClick = () => {
		this.props.clickHandler(this.props.value);
	}
	render(){
		const cname = ['button', this.props.orange ? "Orange":"", this.props.wide ? "Wide":""]

		return(
			<div className={cname.join("").trim()}>
				 <button onClick={this.handleButtonClick}>{this.props.value}</button>
			</div>
		)
	}
}

export default Button;