# Python OOP Project: The Last of Us Infected Classes

## Description
This project demonstrates object-oriented programming (OOP) concepts in Python.  
It implements a class hierarchy for infected characters from *The Last of Us Part II*:  

- Base class: `Infected`  
- Child classes: `Clicker`, `Shambler`, `Bloater`  

Each class has unique methods and overrides base class methods to show inheritance and polymorphism.


---

## Files

### `models.py`
Defines the base class `Infected` and child classes `Clicker`, `Shambler`, `Bloater`.  
- `__init__` with attributes: `stage_name`, `hp`, `isAlive`  
- Methods: `attack()`, `make_sound()`, `killed()`, `kill_elly()`  
- Unique methods for child classes: `echolocation()`, `gas_release()`, `armor()`  
- Method overriding to demonstrate polymorphism

### `main.py`
- Imports classes from `models.py`  
- Creates objects of each class and stores them in a list  
- Iterates through the list and calls methods to demonstrate inheritance, polymorphism, and unique abilities

---

## How to Run
1. Navigate to the `task2/` folder  
2. Run the following command in the terminal:

```bash
python main.py