let fruits = [];

const gyumolcsSzallitmany = (fruitsArray) => {
  for (let i = 0; i < fruitsArray.length; i++) {
    fruits.push(fruitsArray[i]);
  }
};

gyumolcsSzallitmany(['alma', 'körte']);

const printFruitList = () => {
  console.log(fruits);
};

printFruitList();
