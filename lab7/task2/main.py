from models import Clicker,Shambler, Bloater

def main():

    Infected_types = [Clicker(), Shambler(), Bloater()]

    for infected in Infected_types:
        print(f"Элли сталкивается с {infected}ом!")
        print(infected.make_sound())

        if isinstance(infected, Clicker):
            print(infected.echolocation())
        if isinstance(infected, Shambler):
            print(infected.gas_release())
        if isinstance(infected, Bloater):
            print(infected.armor())
            
        print(infected.attack())
        print(infected.kill_elly())
        print(infected.killed())
        print("\n")


if __name__ == "__main__":
    main()