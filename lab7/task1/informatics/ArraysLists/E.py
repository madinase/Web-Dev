n = int(input())

numbers = list(map(int, input().split()))
found = False
for num in range(1, n):
    if ((numbers[num] < 0) and (numbers[num - 1] < 0 )) or ((numbers[num] > 0) and (numbers[num - 1] > 0 )) :
        found = True
        break
if found:
    print("YES")
else:
    print("NO")
