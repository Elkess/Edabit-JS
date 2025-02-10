// https://edabit.com/challenge/nuXdWHAoHv9y38sn7


let drinks = [
  {name: "lemonade", price: 50},
  {name: "coca", price: 9.5},
  {name: "lime", price: 10},
  {name: "lemonade", price: 90},
  {name: "coca", price: 30},
  {name: "lime", price: 1}
]


function sortDrinkByPrice(drinks) {
    return drinks.sort((a, b) => a.price - b.price);
}
console.log(sortDrinkByPrice(drinks));