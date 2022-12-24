var horse = {
    name: 'Greg',
    age: 3,
    foodAmount: 7,
    nameOfType: 'horse',
    biome: 'forest',
    reservoir: true,
    area: 40,
    food: 'carrot',
    IsPredator: false
};
var horse2 = {
    name: 'Grag',
    age: 3,
    foodAmount: 9,
    nameOfType: 'horse',
    biome: 'forest',
    reservoir: true,
    area: 40,
    food: 'carrot',
    IsPredator: false
};
var cat = {
    name: 'Bubble',
    age: 2,
    foodAmount: 4,
    nameOfType: 'cat',
    biome: 'home',
    reservoir: false,
    area: 10,
    food: 'meat',
    IsPredator: true
};
var CageForHorse = {
    animals: [],
    biome: 'forest',
    reservior: true,
    capacity: 3,
    IsForPredator: false
};
function CheckCage(animal, cage) {
    var count = 0;
    if (animal.reservoir == cage.reservior && animal.biome == cage.biome && animal.IsPredator == cage.IsForPredator) {
        for (var j = 0; j < cage.animals.length; j++) {
            count = count + 1;
        }
        if (cage.capacity > count) {
            cage.animals.push(animal);
        }
        else {
            console.log("there are not enough space in this cage");
        }
    }
    else {
        console.log("This cage is not avilable for  -".concat(animal.name, "-  animal"));
    }
}
function ShowAllNamesInCage(cage) {
    for (var i = 0; i < cage.animals.length; i++) {
        console.log(cage.animals[i].name);
    }
}
CheckCage(horse, CageForHorse);
CheckCage(horse2, CageForHorse);
ShowAllNamesInCage(CageForHorse);