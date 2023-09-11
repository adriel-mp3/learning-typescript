export interface CountList {
  [key: string]: number;
}

export default function countBy(arr: (string | number)[]) {
  return arr.reduce((acc: CountList, item) => {
    if (!acc[item]) {
      acc[item] = 1;
    }
    acc[item] += 1;
    return acc;
  }, {});
}


// export default function countBy(arr) {
//   const countMap = new Map();
  
//   for (const item of arr) {
//       if (!countMap.has(item)) {
//           countMap.set(item, 1);
//       } else {
//           countMap.set(item, countMap.get(item) + 1);
//       }
//   }
  
//   return Object.fromEntries(countMap);
// }