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
  expect(Functor.of(arr).map(x => x + 5).get()).toEqual([]);
});
