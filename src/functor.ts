export class Functor {
  private obj: any;

  private constructor(value: any) {
    this.obj = value;
  }

  /**
   * @param obj - Object to be transformed to a Functor
   * @returns - Returns an instance of type Functor
   */
  static of = (obj: any): Functor => {
    let functor: Functor = new Functor(obj);
    return functor;
  };

  /**
   * @param fn - Accepts a mapping function.
   *
   */
  map = fn => {
    if (this.obj instanceof Array) return new Functor(this.obj.map(fn));
    else return new Functor(fn(this.obj));
  };

  get = () => {
    return this.obj;
  };
}
