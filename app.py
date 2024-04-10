# n = 1;
# while n <=10:
#     print('Hello' * n)
#     n +=1;

# def hello():
#     for i in range(10):
#         print(i)


# hello()

# class Person:
#     def __init__(self, name):
#         self.name = name


# class Teacher(Person):
#     def __init__(self, name, degree):
#         super(Teacher, self).__init__(name)
#         self.degree = degree


# per = Person('Nahid')
# tea = Teacher('Idris', 'BSS')

# print(per.name)
# print(tea.name)
# print(tea.degree)

# class Flight:
#     def __init__(self, capacity):
#         self.capacity = capacity
#         self.passenger = []

#     def add_passenger(self, name):
#         if not self.seat():
#             return False
#         self.passenger.append(name)
#         return True

#     def seat(self):
#         return self.capacity - len(self.passenger)


# flight = Flight(4)
# people = ['nahid', 'shiren', 'keya', 'Ifty', 'rayhan']
# for person in people:
#     success = flight.add_passenger(person)
#     if success:
#         print(f'Added {person} to the flight successfully.')
#     else:
#         print(f'No available seat for {person}')


for i in range(10):
    if i % 2 == 0:
        continue
    print(i)
