A = [0] * 99

with open('in.txt') as fp:
    for line in fp:
        l = line.split(':')
        A[int(l[0])] = int(l[1])

#for i in range(len(A)):
#    print(i)

print(A[98])
