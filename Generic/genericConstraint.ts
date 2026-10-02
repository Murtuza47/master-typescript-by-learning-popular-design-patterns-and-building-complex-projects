class House {
  print() {
    console.log("This is a house.");
  }
}

class Car {
  print() {
    console.log("This is a car.")
  }
}

interface Printable {
  print(): void
}

function printHouseOrCar<T extends Printable>(array: T[]) {
  for(const element of array) {
    element.print()
  }
}

printHouseOrCar([new House(), new Car()])