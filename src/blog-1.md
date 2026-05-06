# TypeScript এ `any`, `unknown` এবং Type Narrowing — সহজ ব্যাখ্যা

TypeScript শিখতে গেলে সবচেয়ে গুরুত্বপূর্ণ বিষয়গুলোর একটি হলো type safety। অনেকেই `any` ব্যবহার করে দ্রুত কাজ শেষ করে ফেলে, কিন্তু এটি আসলে TypeScript-এর শক্তিশালী টাইপ সিস্টেমকে দুর্বল করে দেয়। অন্যদিকে `unknown` ব্যবহার করলে কোড আরও নিরাপদ হয়। এই আর্টিকেলে আমরা বুঝবো কেন `any` কে “type safety hole” বলা হয়, কেন `unknown` বেশি নিরাপদ, এবং **type narrowing** কীভাবে কাজ করে।


---

##  কেন `any` কে “Type Safety Hole” বলা হয়?

`any` মানে হলো TypeScript কে বলা: *“এই ভেরিয়েবল নিয়ে তুমি আর কিছু যাচাই করো না”*।

এর ফলে TypeScript-এর সব safety check বন্ধ হয়ে যায়।


### সমস্যা উদাহরণ:
```ts
let data: any;

data = "Hello";

// TypeScript এখানে কোনো error দিবে না
console.log(data.toUpperCase());

// কিন্তু যদি ভুল হয়?
data = 123;
console.log(data.toUpperCase()); // runtime error!
```


### সমস্যা কী?
- TypeScript কোনো error ধরতে পারে না
- ভুল টাইপ runtime এ গিয়ে crash করতে পারে

তাই `any` কে বলা হয় **Type Safety Hole** — কারণ এটি টাইপ সিস্টেমকে ভেঙে দেয়।


---

## কেন `unknown` বেশি নিরাপদ?

`unknown` মানে হলো: *“আমি জানি না এই ডেটার টাইপ কী, তাই তুমি আগে যাচাই করো”*

### উদাহরণ:
```ts
let data: unknown;

data = "Hello";

// সরাসরি ব্যবহার করা যাবে না
// console.log(data.toUpperCase()); ❌ ERROR
```

### সঠিক ব্যবহার (Type Checking দরকার):
```ts
let data: unknown;

data = "Hello";

if (typeof data === "string") {
  console.log(data.toUpperCase()); // safe
}
```

### কেন এটি ভালো?
- Compile-time error দেয় 
- ভুল আগে ধরতে পারে
- Developer কে বাধ্য করে check করতে

তাই `unknown` = **safe by default**

---

## Type Narrowing কী?

**Type Narrowing** হলো এমন একটি প্রক্রিয়া যেখানে TypeScript কোনো ভেরিয়েবলের টাইপকে ধীরে ধীরে **specific (নির্দিষ্ট)** করে ফেলে runtime check এর মাধ্যমে।

সহজভাবে:
> আগে টাইপ বড় ছিল → পরে condition দিয়ে ছোট/নির্দিষ্ট টাইপে নামানো হয়

---

## Type Narrowing কীভাবে কাজ করে?

### 1️⃣ typeof ব্যবহার করে
```ts
function print(value: unknown) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  }
}
```

এখানে `unknown → string` এ narrow হয়েছে

---

### 2️⃣ instanceof ব্যবহার করে
```ts
class Dog {
  bark() {
    console.log("Woof!");
  }
}

function check(animal: unknown) {
  if (animal instanceof Dog) {
    animal.bark();
  }
}
```

---

### 3️⃣ in operator ব্যবহার করে
```ts
type User = { name: string };

type Admin = { name: string; role: string };

function show(user: User | Admin) {
  if ("role" in user) {
    console.log(user.role);
  }
}
```

---

### 4️⃣ Equality check (===)
```ts
function example(x: string | number) {
  if (x === "hello") {
    console.log("String confirmed");
  }
}
```

---

## `any` vs `unknown` — সহজ তুলনা

| Feature | any | unknown |
|--------|-----|---------|
| Type checking | নেই | আছে |
| Safety | unsafe | safe |
| Runtime error risk | high | low |
| Use case | avoid | recommended |

---
