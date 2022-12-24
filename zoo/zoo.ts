interface Type {
    nameOfType: string;
    biome: string;
    reservoir: boolean;
    area: number;
    food: string;
    IsPredator:boolean;
  }
interface Animal extends Type{
    name:string;
    age:number;
    foodAmount:number;
   }
interface Settlement{
    animals:Animal[];
    biome:string;
    reservior:boolean;
    capacity:number;
    IsForPredator:boolean;
  
   }
let horse:Animal={
    name: 'Greg',
    age: 3,
    foodAmount: 7,
    nameOfType: 'horse',
    biome: 'forest',
    reservoir: true,
    area: 40,
    food: 'carrot',
    IsPredator: false
  
  }
  let horse2:Animal={
    name: 'Grag',
    age: 3,
    foodAmount: 9,
    nameOfType: 'horse',
    biome: 'forest',
    reservoir: true,
    area: 40,
    food: 'carrot',
    IsPredator: false
  
  }
  let cat:Animal={
    name: 'Bubble',
    age: 2,
    foodAmount: 4,
    nameOfType: 'cat',
    biome: 'home',
    reservoir: false,
    area: 10,
    food: 'meat',
    IsPredator: true
  
  }
  let CageForHorse:Settlement={
    animals:[],
    biome:'forest',
    reservior:true,
    capacity:3,
    IsForPredator:false
  }
  
  function CheckCage(animal:Animal,cage:Settlement) {
       let count:number=0;
      if (animal.reservoir==cage.reservior&&animal.biome==cage.biome&&animal.IsPredator==cage.IsForPredator) {  
              for (let j = 0; j < cage.animals.length; j++) {
                 count=count+1;  
              }
          if (cage.capacity>count) {
              cage.animals.push(animal);
            
  
          }
          else{
              console.log("there are not enough space in this cage");  
          }
      }
      else{
          console.log(`This cage is not avilable for  -${animal.name}-  animal`);
      }
  }
  function ShowAllNamesInCage(cage:Settlement) {
      for (let i = 0; i < cage.animals.length; i++) {
                console.log(cage.animals[i].name); 
             } 
  }
  
  CheckCage(horse,CageForHorse);
  CheckCage(horse2,CageForHorse);
  ShowAllNamesInCage(CageForHorse) ;