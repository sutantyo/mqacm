import sys

checksum = 0
with open('in.txt') as fp:
    for line in fp:
        max = -sys.maxsize - 1
        min = sys.maxsize
        row = line.split();
        for i in row:
            if int(i) < min:
                min = int(i)
            if int(i) > max:
                max = int(i)
        row_cs = max-min
        checksum = checksum+row_cs

print(checksum)
