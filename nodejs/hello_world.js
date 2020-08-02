var input = 0;

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log(`Hello, world!`);
readline.question("\n\nhow many iterations of fibonacci to run? ", response => {
	fibonacci(response);
	
	readline.question("\n\nhow many thousands of iterations of leibniz's pi approximation algorithm to run? ", response => {
		leibniz(response);
		
		readline.question("\n\nhow many numbers to find the prime factorization of? ", response => {
			primeFactorization(response);
			readline.close();
		})
	})
})


function fibonacci(response){
	if(isNaN(Number(response))){
		console.log("invalid input, using default (20)");
		input = 20;
	}else{
		input = Number(response);
	}
	var a = 0;
	var b = 1;
	var c = 1;
	var i;
	for (i = 0; i < input; i++){
		console.log(c);
		c = a + b;
		a = b;
		b = c;
	}	
}

function leibniz(response){
	if(isNaN(Number(response))){
		console.log("invalid input, using default (1000)");
		input = 1000;
	}else{
		input = Number(response);
	}

	var a = 1;
	var i;
	for (i = 3; i < 4000*input; i += 4){
		a += -1/i + 1/(i+2);
		if(i%400000 == 3){
			console.log((a + -1/(i+4))* 4)
		}
	}
	console.log((a + -1/(i+4))* 4)
}

function primeFactorization(response){
	if(isNaN(Number(response))){
		console.log("invalid input, using default (100000)");
		input = 100000;
	}else{
		input = Number(response);
	}
	
	var a = [];
	var output = "";
	var i;
	for(i = 0; i < input; i++){
		a.push(Math.floor(Math.random()*1000000000));
	}
	var initTime = new Date().getTime();

	for (i in a){
		output += a[i].toString() + "\n" + findPrimeFactors(a[i]).toString() + "\n\n";
		if(i%20000 == 0){
			process.stdout.clearLine();
			process.stdout.cursorTo(0);
			process.stdout.write((Math.round(i/a.length*10000)/100).toString()+"% complete");
		}
	}
	var runTime = "got prime factorization of " + input.toString() + " numbers from 1-10^9 in: " + (new Date().getTime()-initTime).toString();
	console.log("done!");
	console.log(output);
	console.log(runTime + "ms");
}

function findPrimeFactors(num){
    var factors = [];
    while(num%2 == 0){//#divide num by 2 until it's even, so we can step through just the odd numbers (reduce max number of iterations from i-1 to i/2-1)
        num /= 2;//#>> 1#bitshift down 1 place, should be faster than dividing by 2
        factors.push(2);
    }
	var i = 3//#start at 3 because 1 is useless, even numbers are already accounted for, and we need to start at the lowest odd number to account for all of the odd numbers when stepping by 2
    while(i <= num){
        if(num % i == 0){
            num = num/i;
            factors.push(i);
            i = 3;
        }else{
            i += 2;
            if(i > num/i){//#reduces the max number of iterations from i/2-1 to sqrt(i)/2-1
                factors.push(num);
                break;
			}
		}
	}
    return(factors);
}