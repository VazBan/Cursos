
let User = {
    Name    : 'Rafael',
    LastName:'Vazquez',
    Age     :26       ,
    Weight  :'110 kg' ,
    Hobbies :[
        'Music',
        'Games',
        'Walk',     
        'programming',
    ],
    School  :'University Icep',
    Vehicles:{
        Motorcycles:['Italika','Honda','Suzuki','BMW',],
        Cars       :['Renaul','Ford','Nissan','Chevrolet',]
},
    Skincolor:'Dark'        
}

console.log({User});

delete User.School;
console.log(User);

User.Guitars = ['Fender','Ibanez','Schecter',];
console.log(User.Guitars);

Object.freeze(User);

User.Hair = 'Black';
console.log(User);

let property = Object.getOwnPropertyNames(User);
console.log(property);

