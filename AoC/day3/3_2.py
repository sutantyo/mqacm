import math
import sys


n = 347991
size = 28
h = int(math.floor(math.sqrt(size)))
print("h",h)
centre = int((h-1)/2)
x = centre
y = centre

matrix = [[ 0 for x in range(size)] for y in range(size)]

print(x)
print(y)

matrix[centre][centre] = 1
count = 5

print("origin",x,y)
for i in range(1,h):
    steps = i * 2
    print("steps",steps)
    x = x+1
    y = y+1
    for j in range(0,steps):
        count = count+1
        y = y - 1
        matrix[x][y] = matrix[x-1][y-1] + matrix[x-1][y] + matrix[x-1][y+1]
        matrix[x][y] = matrix[x][y] + matrix[x][y-1] + matrix[x][y+1]
        matrix[x][y] = matrix[x][y] + matrix[x+1][y-1] + matrix[x+1][y] + matrix[x+1][y+1];
        print(x-centre,y-centre,':',matrix[x][y])
        if matrix[x][y] > n:
            print(matrix[x][y])
            sys.exit()
    for j in range(1,steps+1):
        count = count+1
        x = x - 1
        matrix[x][y] = matrix[x-1][y-1] + matrix[x-1][y] + matrix[x-1][y+1]
        matrix[x][y] = matrix[x][y] + matrix[x][y-1] + matrix[x][y+1]
        matrix[x][y] = matrix[x][y] + matrix[x+1][y-1] + matrix[x+1][y] + matrix[x+1][y+1];
        print(x-centre,y-centre,':',matrix[x][y])
        if matrix[x][y] > n:
            print(matrix[x][y])
            sys.exit()
    for j in range(1,steps+1):
        count = count+1
        y = y + 1
        matrix[x][y] = matrix[x-1][y-1] + matrix[x-1][y] + matrix[x-1][y+1]
        matrix[x][y] = matrix[x][y] + matrix[x][y-1] + matrix[x][y+1]
        matrix[x][y] = matrix[x][y] + matrix[x+1][y-1] + matrix[x+1][y] + matrix[x+1][y+1];
        print(x-centre,y-centre,':',matrix[x][y])
        if matrix[x][y] > n:
            print(matrix[x][y])
            sys.exit()
    for j in range(1,steps+1):
        count = count+1
        x = x + 1
        matrix[x][y] = matrix[x-1][y-1] + matrix[x-1][y] + matrix[x-1][y+1]
        matrix[x][y] = matrix[x][y] + matrix[x][y-1] + matrix[x][y+1]
        matrix[x][y] = matrix[x][y] + matrix[x+1][y-1] + matrix[x+1][y] + matrix[x+1][y+1];
        print(x-centre,y-centre,':',matrix[x][y])
        if matrix[x][y] > n:
            print(matrix[x][y])
            sys.exit()
