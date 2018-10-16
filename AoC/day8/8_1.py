dict = {};
max = 0;

with open('in.txt') as fp:
    for line in fp:
        tokens = line.split()
        dict[tokens[0]] = 0;

with open('in.txt') as fp:
    for line in fp:
        tokens = line.split()
        if (tokens[5] == '<'):
            if (dict[tokens[4]] < int(tokens[6])):
                if (tokens[1] == 'dec'):
                    dict[tokens[0]] = dict[tokens[0]] - int(tokens[2])
                if (tokens[1] == 'inc'):
                    dict[tokens[0]] = dict[tokens[0]] + int(tokens[2])
                if (dict[tokens[0]] > max):
                    max = dict[tokens[0]]
        if (tokens[5] == '>'):
            if (dict[tokens[4]] > int(tokens[6])):
                if (tokens[1] == 'dec'):
                    dict[tokens[0]] = dict[tokens[0]] - int(tokens[2])
                if (tokens[1] == 'inc'):
                    dict[tokens[0]] = dict[tokens[0]] + int(tokens[2])
                if (dict[tokens[0]] > max):
                    max = dict[tokens[0]]
        if (tokens[5] == '<='):
            if (dict[tokens[4]] <= int(tokens[6])):
                if (tokens[1] == 'dec'):
                    dict[tokens[0]] = dict[tokens[0]] - int(tokens[2])
                if (tokens[1] == 'inc'):
                    dict[tokens[0]] = dict[tokens[0]] + int(tokens[2])
                if (dict[tokens[0]] > max):
                    max = dict[tokens[0]]
        if (tokens[5] == '>='):
            if (dict[tokens[4]] >= int(tokens[6])):
                if (tokens[1] == 'dec'):
                    dict[tokens[0]] = dict[tokens[0]] - int(tokens[2])
                if (tokens[1] == 'inc'):
                    dict[tokens[0]] = dict[tokens[0]] + int(tokens[2])
                if (dict[tokens[0]] > max):
                    max = dict[tokens[0]]
        if (tokens[5] == '=='):
            if (dict[tokens[4]] == int(tokens[6])):
                if (tokens[1] == 'dec'):
                    dict[tokens[0]] = dict[tokens[0]] - int(tokens[2])
                if (tokens[1] == 'inc'):
                    dict[tokens[0]] = dict[tokens[0]] + int(tokens[2])
                if (dict[tokens[0]] > max):
                    max = dict[tokens[0]]
        if (tokens[5] == '!='):
            if (dict[tokens[4]] != int(tokens[6])):
                if (tokens[1] == 'dec'):
                    dict[tokens[0]] = dict[tokens[0]] - int(tokens[2])
                if (tokens[1] == 'inc'):
                    dict[tokens[0]] = dict[tokens[0]] + int(tokens[2])
                if (dict[tokens[0]] > max):
                    max = dict[tokens[0]]

print(dict)
print(max)
