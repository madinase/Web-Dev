m = int(input())
a = set(map(int, input().split()))
n = int(input())
b = set(map(int, input().split()))

diff = a.symmetric_difference(b)  

for num in sorted(diff):
    print(num)