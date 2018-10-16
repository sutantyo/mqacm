m = {};

ud = 0.0;
lr = 0;
m["nw"]=0;
m["n"]=0;
m["ne"]=0;
m["se"]=0;
m["s"]=0;
m["sw"]=0;
m["\n"]=0;

with open('in.txt') as fp:
    for line in fp:
        l = line.replace(","," ")
        tokens = l.split()

for token in tokens:
    m[token] = m[token] + 1


for token in tokens:
    if (token == "nw"):
        ud = ud + 0.5;
        lr = lr - 1;
    if (token == "n"):
        ud = ud + 1.0;
    if (token == "ne"):
        ud = ud + 0.5;
        lr = lr + 1;
    if (token == "se"):
        ud = ud - 0.5;
        lr = lr + 1;
    if (token == "s"):
        ud = ud - 1;
    if (token == "sw"):
        ud = ud - 0.5;
        lr = lr - 1;

print("ud:",ud)
print("lr:",lr)

x = 0;
y = 0;
max_dist = 0
distance = 0
for token in tokens:
    if (token == "nw"):
        x = x - 1
        y = y + 1
    if (token == "n"):
        y = y + 1
    if (token == "ne"):
        x = x + 1
    if (token == "se"):
        x = x + 1
        y = y - 1
    if (token == "s"):
        y = y - 1
    if (token == "sw"):
        x = x - 1
    distance = abs(x) + abs(y)
    if (distance > max_dist):
        max_dist = distance

print('x',x)
print('y',y)
print(max_dist)
