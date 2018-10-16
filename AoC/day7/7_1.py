class Node:
    children = []
    def __init__(self,name):
        self.name = name
        self.children = []

root = 'dgoocsw'
weights = {}
children = {}

with open('in.txt') as fp:
  for line in fp:
      tokens = line.split()
      weights[tokens[0]] = int(tokens[1][1:-1])


s = []
with open('in.txt') as fp:
  for line in fp:
      tokens = line.split()
      node = Node(tokens[0])
      if len(tokens) > 2:
          i = 3
          while (i < len(tokens)-1):
            node.children.append(tokens[i][0:-1])
            i = i + 1
          node.children.append(tokens[i])
      s.append(node)


print(len(s))
print(s[0].name,s[0].children)

with open('in.txt') as fp:
  for line in fp:
      tokens = line.split()
      temp = []
      if len(tokens) > 2:
          i = 3
          while (i < len(tokens)-1):
            temp.append(tokens[i][0:-1])
            i = i + 1
          temp.append(tokens[i])
      children[tokens[0]] = temp

# post order traversal

def postorder(node):
    if len(children[node]) == 0:
        return weights[node]
    else:
        total = 0
        values = []
        names = []
        for child in children[node]:
            current = postorder(child)
            values.append(postorder(child))
            total = total + int(current)
            names.append(child)
        value = values[0]
        i = 1
        while (i < len(values)):
            if (values[i] != value):
                print("checking node",node)
                print("something wrong with ",names[i], "with weight",values[i],i,total,"should be ",value)
            i = i + 1
        return total + weights[node]


print(postorder('marnqj'))
print(postorder('upair'))
print(postorder('mkrrlbv'))
print(postorder('vqkwlq'))
