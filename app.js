const row = document.querySelectorAll('.table-row');

for (let item of row) {
    const price = item.querySelectorAll(".price");

    for(let item of price) {

        item.addEventListener('click', function() {
            
            if (item.classList.contains('active')) {
                item.classList.remove('active');
            }else {
                price.forEach(element => {
                    element.classList.remove('active');
                });
                item.classList.add('active');
            }
        });
    }
}

const prices = document.querySelectorAll(".price");

for (let price of prices) {
 
    price.addEventListener('click', function() {
       
        let sum = 0;
        let currency = '';
        let activePrices = document.querySelectorAll('.price.active');
    
        activePrices.forEach( price => { 
           
            currency = price.innerHTML.slice(0, 1);
            price = +price.innerHTML.slice(1);
            sum += price;
        });   
        
        document.querySelector(".total-price").innerHTML = currency + sum.toFixed(2);
    });
}


// let totalPrice = document.querySelector(".total-price").innerHTML;
// console.log(totalPrice);



// Видалення класів
// for (let item of price) {

//     item.onclick = function() {

//             price.forEach(item => {
//                 item.classList.remove('active')
//             })
           
//     item.classList.add('active');
       
//     }
// }

// for (let item of row) {

//     console.log(item.childrenx);
// }

// const row = document.querySelectorAll(".table-row");

// for(let item of row) {
// item.onclick = function() {

//         item.classList.remove('active'); 
//     }
// }

// Сума всіх вибраних цін



   






// for (let item of activePrices) {
//     console.log(item)
// }



// let pricesValue = new Array;
// let results = prices.forEach(item => {
//     item.matches(".active");

// });

// for (let item of results) {
//     console.log(item);
// }


// let lengths = prices.forEach( (item) => item.innerHTML);





// console.log(sum);
// console.log(pricesValue)
// for(let item of pricesValue) {

//     console.log(item);
// }

// for(let price of prices) {
//     let sum = 0;
//     price.onclick = function() {
//         price.classList.toggle("active");
        
//         if (price.matches(".price.active")) {
//             let priceValue = +price.innerHTML.slice(1);
            
//             sum += priceValue;
//         }
//         console.log(sum);
//     }
    

// }



// price[0].onclick = function() {
//     console.log("Oh yeah!");
//     price[0].classList.toggle('active');
// };
