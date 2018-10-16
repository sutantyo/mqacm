s = set()
valid = 0
count = 0
with open('in1.txt') as fp:
    for line in fp:
        row = line.split();
        count = 0
        s = set()
        for i in row:
            count = count+1
            s.add(''.join(sorted(i)));
        if (count == len(s)):
            valid = valid + 1

print(valid)
