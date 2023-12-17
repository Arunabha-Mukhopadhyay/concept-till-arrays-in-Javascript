let items = [250,645,300,900,50];
// let i=0;
// for (let val of items) {
//   console.log(`value of items at ind ${i} is ${val}`);
//   let offer=val/10;
//   items[i]=items[i]-offer;
//   console.log(`value of items after offer of ${i} is ${items[i]}`);
//   i++;
// }

for (let i=0;i<items.length;i++) {
  let offer= items[i]/10;
  items[i] -= offer;
}
console.log(items);