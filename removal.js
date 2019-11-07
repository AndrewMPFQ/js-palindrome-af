function removal() {
  let cars = ["Nissan", "Toyota", "Trueno", "Honda"];
  let removed = cars.slice(1, -1);
  return removed;
}

console.log(removal());
