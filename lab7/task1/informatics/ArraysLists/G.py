n = int(input())
num = list(map(int, input().split()))

for i in range(n // 2):
    num[i], num[n - 1 - i] = num[n - 1 - i], num[i]  

print(*num)