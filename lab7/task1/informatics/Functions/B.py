def double_power(a , n):
    return a ** n

a , n = list(map(float, input().split()))

print(double_power(a, n))