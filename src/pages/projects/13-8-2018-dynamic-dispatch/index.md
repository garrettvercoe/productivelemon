---
path: "/dynamic-dispatch1"
date: "2018-10-08T17:12:33.962Z"
title: "Dynamic dispatch at an assembly level2"
cover: "./test.jpg"
---
*written by Garrett Vercoe, grv9ff, Lab Section 2*



## What is dynamic dispatch?
Dispatch is how the compiler knows which routine to execute at compilation time. However, sometimes the compiler won't know at compilation which routine to execute. In this case, virtual functions are needed. A virtual function is a member function of the base class that is overridden by a derived class. 

## How does it work?

To start, we'll begin with a simple base class, "Vehicle":

```c
    #include <iostream>
    //this is a comment
    using namespace std;
    class Vehicle
    {
    public:
    virtual void loadCapacity();
    virtual void applyBrakes();
    virtual void fuelUp();
    };
    void Vehicle::loadCapacity() {
    cout << “Vehicle is loaded to capacity.” << endl;}

    void Vehicle::applyBrakes() {
    cout << “Vehicle is braking.” << endl;}

    void Vehicle::fuelUp() {
    cout << “Vehicle is fueling up.” << endl;}
```

This base class implements 3 virtual functions, which can then be overridden by subclasses of Vehicle:
```c
    class Car : public Vehicle
    {
    public:
    	void applyBrakes();
    	void fuelUp();
    };
    
    void Car::applyBrakes() {
    cout << “Car is braking.” << endl;}
    
    void Car::fuelUp() {
    cout << “Car is fueling up with gas.” << endl;}
```
    

Now the subclass Car, which inherits from Vehicle, has its own implementation of the virtual methods (except for `loadCapacity()`). Now say at run-time in the main method, this line is called:
```c
    Vehicle *v = new Car();
    v->fuelUp();
```
with output: 
```c
    Car is fueling up with gas.
```
How are the function calls resolved for our object v? How does it know to call cars fuelUp() function correctly rather than vehicle's? 

## Virtual Tables



For both Vehicle and Car classes, a virtual table at the assembly level is created that contains pointers to each definition of the virtual methods, whether it be inherited from a base class or declared within the class. Here are the vtables for our two classes below:

-*compiled with x86 gcc assembly*
```assembly
    vtable for Vehicle:
      .quad 0
      .quad typeinfo for Vehicle
      .quad Vehicle::loadCapacity()
      .quad Vehicle::applyBrakes()
      .quad Vehicle::fuelUp()

    vtable for Car:
      .quad 0
      .quad typeinfo for Car
      .quad Vehicle::loadCapacity()
      .quad Car::applyBrakes()
      .quad Car::fuelUp()
```
You can see that because Car doesn't declare a `loadCapacity()` in its own class, it's vtable contains a pointer to Vehicle's declaration of `loadCapacity()`. You can see that in addition to the function declarations, .quad 0 is created which makes space for the v-pointer to the table, and also typeinfo is created for each class ( which ends up equating to "7Vehicle" and "3Car" for each as unique identifiers). 

When `Vehicle *v = new Car();` is called, 

1. Vehicle's constructor is called 
2. The virtual table for Vehicle is created (quad directives above)
3. v is set to point to the v-pointer of the Vehicle virtual table (`v->_vptr.Vehicle;`)
4. Student's constructor is called, updating the object
5. Virtual table for Car is created
6. The vpointer is updated (`v->_vptr.Car)`

 

Here is the assembly for `Vehicle *v = new Car();` where you can see these calls

    	mov edi, 8
      call operator new(unsigned long)
      mov rbx, rax
      mov QWORD PTR [rbx], 0
      mov rdi, rbx
      call Car::Car() [complete object constructor]
      mov QWORD PTR [rbp-24], rbx

And here is the Car constructor which shows the creation of the vtable and an internal Vehicle construction call:
```assembly
    Car::Car() [base object constructor]:
      push rbp
      mov rbp, rsp
      sub rsp, 16
      mov QWORD PTR [rbp-8], rdi
      mov rax, QWORD PTR [rbp-8]
      mov rdi, rax
      call Vehicle::Vehicle() [base object constructor]
      mov edx, OFFSET FLAT:vtable for Car+16
      mov rax, QWORD PTR [rbp-8]
      mov QWORD PTR [rax], rdx
      nop
      leave
      ret
```
Thus, when `v->fuelUp();` is called, v points to the v-pointer of the car virtual table (a memory address), a number is added to that address to access the function pointer (16 bytes below as each function pointer is 8 bytes and fuelUp is car's second function declaration), which then is followed to call Car's fuelUp() routine (by calling the address in rax below).

`v->fuelUp();`
```assembly
    	mov rax, QWORD PTR [rbp-24]
      mov rax, QWORD PTR [rax]
      add rax, 16
      mov rax, QWORD PTR [rax]
      mov rdx, QWORD PTR [rbp-24]
      mov rdi, rdx
      call rax
```