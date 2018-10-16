total = 0
score = 0

with open('in1.txt') as fp:
    for line in fp:
        i = 0
        while(i < len(line)):
            if (line[i] == '!'):
                i = i + 1
            if (line[i] == '{'):
                score = score + 1
            if (line[i] == '}'):
                total = total + score
                score = score - 1
            if (line[i] == '<'):
                i = i + 1
                while (line[i] != '>'):
                    if (line[i] == '!'):
                        i = i + 1
                    i = i + 1
            i = i + 1


print('total',total)
