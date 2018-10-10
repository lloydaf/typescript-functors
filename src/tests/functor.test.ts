import { Functor } from "../index";

test("Map an Array", () => {
  let arr = [1, 2, 3, 4, 5];
  expect(
    Functor.of(arr)
      .map(obj => obj + 5)
      .get()
  ).toEqual([6, 7, 8, 9, 10]);
});

test("Map en empty array", () => {
  let arr = [];
  expect(
    Functor.of(arr)
      .map(x => x + 5)
      .get()
  ).toEqual([]);
});

test("Map a string", () => {
  let str: String = "Hello";
  expect(
    Functor.of(str)
      .map(str => str + " world!")
      .get()
  ).toEqual("Hello world!");
});

test("Map a number", () => {
  let num: number = 5;
  expect(
    Functor.of(num)
      .map(num => num + 5)
      .get()
  ).toEqual(10);
});

test("Map an array of objects", () => {
  let lannisters = [
    {
      name: "Tywin",
      status: "Deceased"
    },
    {
      name: "Tyrion",
      status: "Alive"
    },
    {
      name: "Cersei",
      status: "Alive"
    },
    {
      name: "Jamie",
      status: "Alive"
    }
  ];
  expect(Functor.of(lannisters).map(lannister => lannister.name).get()).toEqual([
    "Tywin",
    "Tyrion",
    "Cersei",
    "Jamie"
  ]);
});
