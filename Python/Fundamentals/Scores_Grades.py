def randScore():
    import random
    randNum = random.randint(60,100)
    return randNum
score = randScore()
print score

def assignGrade(score):
    if score >= 60 and score <= 69:
        grade = "D"
    elif score >= 70 and score <= 79:
        grade = "C"
    elif score >= 80 and score <= 89:
        grade = "B"
    elif score >= 90 and score <= 100:
        grade = "A"
    return grade

print "Scores and Grades"
for count in range(0, 11):
    score = randScore()
    grade = assignGrade(score)
    print "Score:", score, "; Your grade is", grade
print "End of the program. Bye!"
