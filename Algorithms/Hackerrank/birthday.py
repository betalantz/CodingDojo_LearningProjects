def birthdayCakeCandles(age, candles):
    # Complete this function
    highest = 0
    counter = 0
    for v in candles:
        if v > highest:
            highest = v
            counter = 1
        elif v == highest:
            counter += 1
    return counter

print(birthdayCakeCandles(5, [1,2,2,2,6]))