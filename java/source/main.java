package main;
import java.util.*;


public class main {
	
	public static ArrayList<Integer> findPrimeFactors(int num)
	{
		ArrayList<Integer> factors = new ArrayList<Integer>();
		while(num%2 == 0) {//divide num by 2 until it's even, so we can step through just the odd numbers (reduce max number of iterations from i-1 to i/2-1)
			num /= 2;//#>> 1#bitshift down 1 place, should be faster than dividing by 2
			factors.add(2);
		}
		
		int i = 3;//#start at 3 because 1 is useless, even numbers are already accounted for, and we need to start at the lowest odd number to account for all of the odd numbers when stepping by 2
		while(i <= num) {
			if((double)num % (double)i == 0) {
				num = num/i;
				factors.add(i);
				i = 3;
			}else{
				i += 2;
				if(i > num/i) {//#reduces the max number of iterations from i/2-1 to sqrt(i)/2-1
					factors.add(num);
					break;
				}
			}
		}
		return(factors);
	
	}
	
	public static void main(String[] args) {
		//fuck java
		Scanner sc= new Scanner(System.in);	//System.in is a standard input stream  
		
		
		
		System.out.println("Hello, World!");
		System.out.println("how many iterations of fibonacci to run?");  
		int count= sc.nextInt();
		float a = 0;//floats instead of ints because I reuse A in pi.
		float b = 1;
		float c = 1;
		
		
		for (int i = 0; i < count; i++) {
			System.out.println((int)c);
			c = a+b;
			a = b;
			b = c;
		}
		
		
		
		System.out.println("how many thousands of iterations of leibniz's pi approximation algorithm to run?");
		count= sc.nextInt();
		
		a = 1;   	
		
		
		for (float i = 3; i< 4000*count; i+=4) {
			a += -1/i + 1/(i+2); //kinda proud of how compact this is. didn't know you could step by different numbers in foor loops before. this was written as the following before:
			//a -= 1/(4*i);
			//a += 1/(4*i+2);
			if (i%4000 == 3){
				System.out.println((a + -1/(i+4))* 4);
			}
		}
		System.out.println(a * 4);
		
	 	System.out.println("how many numbers to find the prime factorization of?");
		count= sc.nextInt();
		
		int[] d = new int[count];
		String output = "";
		
		for (int i = 0; i < count; i++) {
			d[i] = ((int)Math.floor(Math.random()*1000000000));
		}

		for (int i = 0; i < d.length; i++) {
			output += Integer.toString(d[i]) + "\n" + Arrays.toString(findPrimeFactors(d[i]).toArray()) + "\n\n";
			if(i%1000 == 0) {
				System.out.println("\r" + Integer.toString((int)(i/d.length*100))+"% complete	\r");
			}
		}
		
		
		System.out.println(output);
		
		sc.close();
		System.exit(0);//"any key to exit" will be handled by batch
	}
}

