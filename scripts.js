
// // First task

// // let bigData = {}

// // for (let id = 0; id < 10; id++) {
// //     let userName = prompt('Insert Your name please');
// //     let userAge = +prompt('Insert Your age please');

// //     bigData[id]= {
// //         Имя: userName ,
// //         Возраст: userAge
// //     };
// // }
// // console.log(bigData);

// // Second Task

// function receipt() {
//     const arrayReceipt = [{
//         'Lavash': {
//             info: 'Big Cheese',
//             price: 15000
//         }, 'Hot-dog': {
//             info: 'mini',
//             price: 8500
//         }, 'Cola': {
//             info: '1.5 L',
//             price: 9000
//         }
//     }, {
//         'Milk': {
//             info: '1 L',
//             price: 8500
//         },
//         'Sugar': {
//             info: '1 kg',
//             price: 7000
//         }
//     }, {
//         'Cola': {
//             info: '1 L',
//             price: 6500
//         },
//         'Fanta': {
//             info: '1.5 L',
//             price: 9000
//         },
//         'Lipton': {
//             info: '1.2 L',
//             price: 5000
//         }, 
//         'Nestle': {
//             info: '10 L',
//             price: 8500
//         }
//     }]
//     const count = Math.floor(Math.random() * arrayReceipt.length)
//     return arrayReceipt[count]
// }

// const order = receipt();
// let orderList = 'Вы заказали ';
// let totalPrice = 0;
// const deliveryFee = 9000;

// for (let item in order) {
//     orderList += `${item} ${order[item].info}, `;
//     totalPrice += order[item].price;
// }

// totalPrice += deliveryFee;
// orderList += `| Общая стоимость ${totalPrice} сум с доставкой (${deliveryFee}) сум`;

// console.log(orderList);