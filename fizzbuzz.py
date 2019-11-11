def fizzBuzz(max_value):
  for num in range(1, max_value):
    if num % 3 == 0 and num % 5 == 0:
      print ("FizzBuzz")
    elif num % 5 == 0:
      print ("Fizz")
    elif num % 3 == 0:
      print ("Buzz")
    else:
      print (num)

fizzBuzz(101)