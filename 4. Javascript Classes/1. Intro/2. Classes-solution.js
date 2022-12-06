/**
 * Create a calculator class using a fluent API
 * that does something like this:
 * calc
    .add(1, 2)
    .square()
    .display();
 */
console.log("~~~~~~~~~~~~~~TASK 3~~~~~~~~~~~~~~");
class Calculator {
  total;

  constructor(start) {
    this.total = start || 0;
  }

  add() {
    this.total = this.total += number;
    return this;
  }

  square() {
    this.total = this.total * this.total;
    return this;
  }

  display() {
    console.log(this.total);
    return this.total;
  }
}
class Cacul extends Caculator {
  constructor(total) {
    super(total);
  }
}
