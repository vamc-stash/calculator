function Evaluate(op1, op2, oper){

	console.log(op1, op2, oper)
	switch(oper){
		case '/': if(op2 === '0'){
					return 'inf';
				  }
				  return parseFloat(op1) / parseFloat(op2);
		case '*': return parseFloat(op1) * parseFloat(op2);
		case '+': return parseFloat(op1) + parseFloat(op2);
		case '-': return parseFloat(op1) - parseFloat(op2);
		case '%': return parseFloat(op1) % parseFloat(op2);

		default:
	}
}

export default Evaluate;