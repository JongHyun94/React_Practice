const car = {
    company: "현대",
    model: "그랜저",
    price: 50000000
}

console.log(car);

const mycar = {
    ...car,
    //model: "포르쉐"
};

console.log(mycar);

console.log(car === mycar);