print 'x', ' '.join([str(x) for x in range(1, 13)])
for factor in range (1, 13):
    res = [x*factor for x in range(1, 13)]
    print factor, ' '.join([str(x) for x in res])