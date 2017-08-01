def draw_stars(list):
    for x in list:
        line_str = ""
        if isinstance(x, int):
            for i in range(0,x):
                line_str += "*"
            print line_str
        elif isinstance(x, str):
            # string = list[x]
            initial = x[0].lower()
            for p in range(len(x)):
                line_str += initial
            print line_str

# z = [4, 6, 1, 3, 5, 7, 25]
z =[4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]
draw_stars(z)
