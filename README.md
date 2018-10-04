# typescript-functors

This is a very small libary for transforming objects into functors

# Installation:

```
    npm install --save typescript-functors
```

# Usage

```typescript
import {Functor} from 'typescript-functors';\
...

//To transform any object to a functor, just wrap it using Functor.of() and retrieve data using .get()

let obj = {...};
let functorObj = Functor.of(obj).get();

//You can map Arrays as usual
let arr: Array = [1,2,3];
let mapped: Array = Functor.of(arr).map(num=>num*2).get();
console.log(mapped); //[2,4,6]

//You can map Objects as well
let person = {
    name: "Cersei",
    family: "Lannister"
};

let name = Functor.of(person).map(obj=>obj.name).get();
console.log(name);// Cersei

//Or Arrays of Objects
let starks = [
    {
        name: "Eddard",
        status: "Dead"
    },
    {
        name: "Catelyn",
        status: "Dead"
    },
    {
        name: "Arya",
        status: "Alive"
    }
];
let names = Functor.of(starks).map(stark=>stark.name).get();
console.log(names);//["Eddard","Catelyn","Arya"]
```
