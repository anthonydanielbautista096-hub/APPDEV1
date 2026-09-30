let favoriteFoods = ["Sisig", "Sinigang", "Adobo"];
favoriteFoods.push("Halo-halo"); // ["Sisig", "Sinigang", "Adobo", "Halo-halo"]
favoriteFoods.shift();           // ["Sinigang", "Adobo", "Halo-halo"]

for (const food of favoriteFoods) {
  console.log(food);
}

const liked = favoriteFoods.map(food => "I like " + food);
console.log(liked);
