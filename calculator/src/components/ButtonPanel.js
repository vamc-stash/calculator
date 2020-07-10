import React, {Component} from 'react'
import Button from './Button';
import '../stylings/ButtonPanel.css'

class ButtonPanel extends Component{

	buttonHandler = (buttonValue) => {
		this.props.pickButton(buttonValue)
	}

	render(){
		return(
			<div className="button-panel">
				<div className="row">
					<Button value="AC" clickHandler={this.buttonHandler} wide/>
					<Button value="+/-" clickHandler={this.buttonHandler}/>
					<Button value="/" clickHandler={this.buttonHandler} orange/>
				</div>
				<div className="row">
					<Button value="7" clickHandler={this.buttonHandler}/>
					<Button value="8" clickHandler={this.buttonHandler}/>
					<Button value="9" clickHandler={this.buttonHandler}/>
					<Button value="*" clickHandler={this.buttonHandler} orange/>
				</div>
				<div className="row">
					<Button value="4" clickHandler={this.buttonHandler}/>
					<Button value="5" clickHandler={this.buttonHandler}/>
					<Button value="6" clickHandler={this.buttonHandler}/>
					<Button value="+" clickHandler={this.buttonHandler} orange/>
				</div>
				<div className="row">
					<Button value="1" clickHandler={this.buttonHandler}/>
					<Button value="2" clickHandler={this.buttonHandler}/>
					<Button value="3" clickHandler={this.buttonHandler}/>
					<Button value="-" clickHandler={this.buttonHandler} orange/>
				</div>
				<div className="row">
					<Button value="0" clickHandler={this.buttonHandler}/>
					<Button value="." clickHandler={this.buttonHandler}/>
					<Button value="=" clickHandler={this.buttonHandler}/>
					<Button value="%" clickHandler={this.buttonHandler} orange/>
				</div>
			</div>
		)
	}
}

export default ButtonPanel;

