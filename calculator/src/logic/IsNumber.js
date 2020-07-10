function IsNumber(buttonValue){
	const digit = /[0-9]+/;
	return digit.test(buttonValue)
}

export default IsNumber;
