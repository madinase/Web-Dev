lst = []
n = int(input())

for _ in range(n):
    command_line = input().split()
    cmd = command_line[0]  
    args = command_line[1:]  
    
    args = list(map(int, args)) if args else []

    if cmd == "insert":
        lst.insert(args[0], args[1])
    elif cmd == "print":
        print(lst)
    elif cmd == "remove":
        lst.remove(args[0])
    elif cmd == "append":
        lst.append(args[0])
    elif cmd == "sort":
        lst.sort()
    elif cmd == "pop":
        lst.pop()
    elif cmd == "reverse":
        lst.reverse()