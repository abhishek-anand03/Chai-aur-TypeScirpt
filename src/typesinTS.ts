// Examples of Type Inferencing.
let drink = "chai"
let cups = Math.random() > 0.5 ? 10 : "5";

// Examples of Type Errors.
let channelName = "ChaiaurCode";
channelName = 12221;

// Examples of Type Annotation.
let chaiFlavour:string = "masala chai";
chaiFlavour = "Ginger tea"; // Can update as well.

// Examples of Union Types.
let subs: number | string = "1M";
subs = 1000000;

// Examples of creating own union data types.
let apiRequestStatus: "pending" | "success" | "middle" = "pending";
apiRequestStatus = "middle";
// apiRequestStatus = "floor"; // Only pre-assigned types should be re-declared.


// Examples of any.
const orders = ["12", "20", "28", "42"];
let currentOrder: string | undefined;

for (let order of orders) {
  if(order === "28") {
    currentOrder = order;
    break;
  }
  currentOrder = "11";
}
console.log(currentOrder);

// const orders = ["12", "20", "28", "42"];
// let currentOrder: string;

// for (let order of orders) {
//   if(order === "28") {
//     currentOrder = order;
//     break;
//   }
//   currentOrder = "11";
// }
// console.log(currentOrder);

// const orders = ["12", "20", "28", "42"];
// let currentOrder: string;

// for (let order of orders) {
//   if(order === "28") {
//     currentOrder = order;
//     break;
//   }
// }
// console.log(currentOrder);

// const orders = ["12", "20", "28", "42"];
// let currentOrder;

// for (let order of orders) {
//   if(order === "28") {
//     currentOrder = order;
//     break;
//   }
// }
// console.log(currentOrder);