import math

n = 347991
size = 1
distance = 1

while size < n:
    prev = size
    size = size + math.sqrt(size) * 4 + 4
    distance = distance + 1
    difference = size-prev
    print(size)

print("difference: " + str(difference))
print(distance)
print(prev)
print(prev+difference/4)
print(prev+2*difference/4)
print(prev+3*difference/4)
print(prev+4*difference/4)

print("change in ")

print(size)
