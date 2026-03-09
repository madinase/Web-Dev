n = int(input())

numbers = list(map(int, input().split()))

sp = 0

for i in numbers:
    if i > 0:
        sp += 1

print(sp)