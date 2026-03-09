def intmin(a , b, c , d):
    return min(a, b , c, d)

a , b , c , d = list(map(int, input().split()))
print(intmin(a, b , c , d))