# TypeScript এ OOP-এর চারটি Pillar — বড় প্রজেক্টে Logic ও Complexity কিভাবে কমায়

Large-scale software development এ কোড যত বড় হয়, তত বেশি complex হয়ে যায়। এই complexity manage করার জন্য Object-Oriented Programming (OOP) চারটি মূল pillar ব্যবহার করে:

- Inheritance
- Polymorphism
- Abstraction
- Encapsulation

এই চারটি ধারণা TypeScript-এ খুব শক্তভাবে কাজ করে এবং বড় প্রজেক্টকে maintainable, scalable এবং readable করে তোলে।

---

# 1. Encapsulation — Data Protection ও Control

Encapsulation মানে হলো:
> ডেটা এবং মেথডকে একসাথে রাখা এবং বাইরের access থেকে লুকিয়ে রাখা।

## কেন দরকার?
- Direct data manipulation বন্ধ করা
- Bug কমানো
- Control রাখা

## TypeScript Example:
```ts
class BankAccount {
  private balance: number = 0;

  deposit(amount: number) {
    this.balance += amount;
  }

  getBalance() {
    return this.balance;
  }
}
```

## কী হলো এখানে?
- `balance` বাইরে থেকে direct change করা যাবে না
- শুধুমাত্র method দিয়ে access করা যাবে

Result: নিরাপদ এবং controlled logic

---

# 2. Abstraction — Complexity Hide করা

Abstraction মানে:
> শুধু প্রয়োজনীয় তথ্য দেখানো, ভিতরের implementation hide করা।

## কেন দরকার?
- User কে complex logic থেকে মুক্ত রাখা
- Code simplify করা

## TypeScript Example:
```ts
abstract class Vehicle {
  abstract start(): void;
}

class Car extends Vehicle {
  start() {
    console.log("Car is starting...");
  }
}
```

## কী হলো এখানে?
- User শুধু `start()` জানে
- ভিতরে engine কিভাবে কাজ করে তা জানে না

👉 Result: Clean interface + less complexity

---

# 3. Inheritance — Code Reuse

Inheritance মানে:
> একটি class আরেকটি class থেকে properties এবং methods inherit করা।

## কেন দরকার?
- Code duplication কমানো
- Reusability বাড়ানো

## TypeScript Example:
```ts
class Animal {
  eat() {
    console.log("Eating");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Barking");
  }
}
```

## কী হলো এখানে?
- `Dog` class `Animal` এর code reuse করছে

Result: Less code, more reuse

---

# 4. Polymorphism — One Interface, Multiple Forms

Polymorphism মানে:
> একই method বিভিন্ন class এ বিভিন্নভাবে কাজ করে।

## কেন দরকার?
- Flexible design
- Scalable architecture

## ✔️ TypeScript Example:
```ts
class Animal {
  sound() {
    console.log("Some sound");
  }
}

class Dog extends Animal {
  sound() {
    console.log("Bark");
  }
}

class Cat extends Animal {
  sound() {
    console.log("Meow");
  }
}
```

## কী হলো এখানে?
- একই method `sound()`
- Different behavior depending on class

Result: Flexible and extendable system

---

# কীভাবে এই 4 Pillars Complexity কমায়?

## Encapsulation
→ Data hide করে bug কমায়

## Abstraction
→ complex logic hide করে simplicity আনে

## Inheritance
→ code duplication কমায়

## Polymorphism
→ flexible architecture তৈরি করে

---

# Real-world Example (Large Project)

ধরো তুমি একটা E-commerce system বানাচ্ছো:

- Encapsulation → Payment data secure
- Abstraction → Payment gateway simple interface
- Inheritance → Different user types reuse base user class
- Polymorphism → Multiple payment methods (card, bKash, PayPal)

এইভাবে system clean, scalable এবং maintainable হয়

---

# Final Summary

OOP-এর 4 pillar একসাথে কাজ করে:

- Complexity কমায়
- Code reuse বাড়ায়
- System scalable করে
- Large project maintain করা সহজ করে

---

মনে রাখতে হবে:
> বড় সফটওয়্যার মানে শুধু code লেখা না — বরং code কে manage করা। OOP এই management সহজ করে।

