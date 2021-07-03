// const number = prompt('Please enter you number :' );

// let squareRoot = Math.sqrt(number);


// document.getElementById('sqr').innerHTML = squareRoot
// console.log(squareRoot);


// function squareRoot(number) {
//     const result = Math.sqrt(number); 
//     return result
// }

// console.log(squareRoot(30)); 





// var side1 = 5;
// var side2 = 6;
// var side3 = 7;

// var x = (side1 + side2 + side3)/2;
// var area = Math.sqrt(x*((x-side1)*(x-side2)*(x-side3)));

// console.log(area);


// const base = prompt('Enter the Base Triangle');
// const height = prompt('Enter the Height Triangle');

// let area = 1/2 * base * height ;


// document.getElementById('triangle').innerHTML = area;
// // console.log(area)



const naira = document.getElementById('naira');

naira.addEventListener('input', nairaConverter);

function nairaConverter(r){
    let nairaC= r.target.value;
    document.getElementById('dollars').value = nairaC / 493;
    document.getElementById('pounds').value = nairaC / 710;
    document.getElementById('euro').value = nairaC / 595;

}
