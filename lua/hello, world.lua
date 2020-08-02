print("Hello, world")



io.write("\n\nhow many iterations of fibonacci to run? ")
count = tonumber (io.read())
if not count then
    print("invalid input, using default (20)")
    count = 20
end
print()
a, b, c = 0, 1, 1

for i = 0, count do
    print(c)
    c = a+b
    a, b = b, c
end



io.write("\n\nhow many thousands of iterations of leibniz's pi approximation algorithm to run? ")
count = tonumber (io.read())
if not count then
    print("invalid input, using default (20)")
    count = 20
end
print()

a = 1
for i = 3, 4000*count, 4 do
    a = a - 1/i + 1/(i+2)
    if i%4000 == 3 then
        print((a + -1/(i+4))* 4)
    end
end



io.write("\n\nhow many numbers to find the prime factorization of? ")
count = tonumber (io.read())
if not count then
    print("invalid input, using default (10000)")
    count = 10000
end
print()

function findPrimeFactors(num)
    factors = {}
    while num%2 == 0 do
        num = num/2
        factors[#factors] = 2
        Output = Output .. 2 .. ", "
    end
    i = 3
    while i <= num do
        if num % i == 0 then
            num = num/i
            factors[#factors] = i
            Output = Output .. i .. ", "
            i = 3
        else
            i = i + 2
            if i > num/i then
                Output = Output .. num .. ", "
                factors[#factors] = num
                break
            end
        end
    end
    return(factors)
end

a = {}
Output = ""
for i = 0, count do 
    a[i] = math.floor(math.random()*1000000000)
end
initTime = os.time()

for i = 0, #a do
    Output = Output .. tostring(a[i]) .. "\n"
    findPrimeFactors(a[i])
    Output = Output:sub(1, -3) .. "\n\n"
    if i%1000 == 0 then
        print("\r" .. tostring(math.floor(i/#a*10000+0.5)/100) .. "% complete    ")
    end
end

runTime = "got prime factorization of " .. tostring(count) .. " numbers from 1-10^9 in " .. tostring(os.difftime (os.time(), initTime)) .. " seconds"
print("done!")
print(Output)
print(runTime)
io.write("Finished. Press enter to exit.")
count = io.read()

os.exit()
