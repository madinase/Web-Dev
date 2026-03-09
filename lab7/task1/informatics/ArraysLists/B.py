r = int(input())

numbers = list(map(int ,input().split()))

for i in numbers:
    if int(i) % 2 == 0:
        print(i, end=" ")

