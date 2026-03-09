n = int(input())

num = list(map(int, input().split()))

count = 0
for i in range(1, n - 1):
    if num[i] > num[i - 1 ] and num[i] > num[i + 1]:
        count += 1

print(count)