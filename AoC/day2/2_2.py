import sys

checksum = 0
with open('in.txt') as fp:
    for line in fp:
        row = line.split();
        for i in row:
            for j in row:
                if i != j:
                    test = int(i) % int(j)
                    if test == 0:
                        print('i: ' + i)
                        print('j: ' + j)
                        answer = int(i) / int(j)
        print(answer)
        checksum = checksum+answer

print(checksum)
