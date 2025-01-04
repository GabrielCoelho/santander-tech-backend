const Animal = {
  species: "Canis Lupus",
  habitat: "USA forest",
  lifeExpectancy: 20,
  isMammal: true,
};

for (const key in Animal) {
  console.log(Animal[key]);
}
