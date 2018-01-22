//классы

class SimpleDate {
  constructor(year, month, day) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  toString() {
    return `${this.day}/${this.month}/${this.year}`;
  }
}

const today = new SimpleDate(2017, 1, 28);

//console.log(today.toString());

//наследование
class OtherDate extends SimpleDate {
  constructor(year, month, day) {
    super(year, month, day); //обращение к родительскому классу
  }

  static hello() {
    //console.log('hello OtherDate');
  }

  toString() {
    return `${this.day}.${this.month}.${this.year}`;
  }
}

const tomorrow = new OtherDate(2017, 1, 29);
//console.log(tomorrow.toString());

OtherDate.hello();

//класс не вызывается как функция