from random import random
from random import seed
import math
from datetime import datetime




print("Hello, World!")




try:
    count = int(input("\n\nhow many iterations of fibonacci to run?"))
except:
    print("invalid input, using default (20)")
    count = 20
print()

a, b, c = 0, 1, 1
for i in range(0, count):
    print(c)
    c, a, b = a+b, b, c



try: 
    count = int(input("\n\nhow many thousands of iterations of leibniz's pi approximation algorithm to run?"))
except:
    print("invalid input, using default (20)")
print()

a = 1
for i in range(3, 4000*count, 4):
    a += -1/i + 1/(i+2) #kinda proud of how compact this is. didn't know you could step by different numbers in foor loops before. this was written as the following before:
#   a -= 1/(4*i)
#   a += 1/(4*i+2)
    if i%4000 == 3:
        print((a + -1/(i+4))* 4)





try:
    count = int(input("\n\nhow many numbers to find the prime factorization of?"))
except:
    print("invalid input, using default (10000)")
    count = 10000
print("(note: as this uses a carriage return, this progress indicator will look strange if ran from within idle)")

print()
def findPrimeFactors(num):
    factors = []
    while num%2 == 0:#divide num by 2 until it's even, so we can step through just the odd numbers (reduce max number of iterations from i-1 to i/2-1)
        num /= 2#>> 1#bitshift down 1 place, should be faster than dividing by 2
        factors.append(2)
    i = 3#start at 3 because 1 is useless, even numbers are already accounted for, and we need to start at the lowest odd number to account for all of the odd numbers when stepping by 2
    while i <= num:
        if num % i == 0:
            num = num/i
            factors.append(i)
            i = 3
        else:
            i += 2
            if i > num/i:#reduces the max number of iterations from i/2-1 to sqrt(i)/2-1
                factors.append(int(num))
                break
    return(factors)

a = []
output = ""
for i in range(0, count):
    a.append(math.floor(random()*1000000000))
initTime = datetime.now()

for i, v in enumerate(a):    
    output += str(v) + "\n" + str(findPrimeFactors(v)) + "\n\n"
    if i%1000 == 0:
        print("\r" + str(round(i/len(a)*100, 2))+"% complete    ", end='\r')

runTime = "got prime factorization of " + str(count) + " numbers from 1-10^9 in: " + str(datetime.now()-initTime)
print("done!")
print(output)
print(runTime)
input("Finished. Press enter to exit.")
exit()
