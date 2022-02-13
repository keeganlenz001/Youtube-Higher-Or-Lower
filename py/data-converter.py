data_arr = []

with open('data.txt', encoding="utf8") as data:
    dataLines = data.readlines()
    for line in dataLines:
        data_arr.append(line.split(','))
        

for i in range(len(data_arr)):  
    data_arr[i].pop()
    print(str(data_arr[i]) + ",")
