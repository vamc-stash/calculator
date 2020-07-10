import IsNumber from './IsNumber';
import Evaluate from './Evaluate';

function Calculate(currState, btnValue){
	
	if(btnValue === 'AC'){
		return {
			cache: null,
			operation: null,
			total: null
		}
	}

	if(btnValue === '+/-'){
		if(currState.cache){
			return {
				cache: (-1*parseFloat(currState.cache)).toString()
			}
		}
		if(currState.total){
			return {
				total: (-1*parseFloat(currState.total)).toString()
			}
		}
		return {}
	}

	if(btnValue === '.'){
		if(currState.cache && !currState.cache.includes(".")){
			return {
				cache: currState.cache + "."
			}
		}
		return {cache: "0."}
	}

	if(IsNumber(btnValue)){
		if(btnValue === "0" && currState.cache === "0"){
			return {}
		}
		if(currState.cache){
			return {cache: currState.cache+btnValue}
		}
		return {cache: btnValue}
	}

	if(btnValue === '/' || btnValue === '*' || btnValue === '+' || btnValue === '-' || btnValue === '%'){

		if(currState.cache && currState.operation && currState.total){
			return {
				cache: null,
				operation: btnValue,
				total: Evaluate(currState.total, currState.cache, currState.operation).toString()
			}
		}
		return {
			cache: null,
			operation: btnValue,
			total: currState.cache
		}
	}

	if(btnValue === '='){

		if(!currState.cache || !currState.operation || !currState.total){
			return {}
		}
		return {
			cache: null,
			operation: null,
			total: Evaluate(currState.total, currState.cache, currState.operation).toString()
		}
	}
}

export default Calculate;