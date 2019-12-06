//6. Есть массив объектов:
// [
//     {cpu: 'intel', info: {cores:2, сache: 3}},
//     {cpu: 'intel', info: {cores:4, сache: 4}},
//     {cpu: 'amd', info: {cores:1, сache: 1}},
//     {cpu: 'intel', info: {cores:3, сache: 2}},
//     {cpu: 'amd', info: {cores:4, сache: 2}}
// ]

// Отсортировать их по возрастающему количеству ядер (cores).
var arr = [
  { cpu: "intel", info: { cores: 2, сache: 3 } },
  { cpu: "intel", info: { cores: 4, сache: 4 } },
  { cpu: "amd", info: { cores: 1, сache: 1 } },
  { cpu: "intel", info: { cores: 3, сache: 2 } },
  { cpu: "amd", info: { cores: 4, сache: 2 } }
];

res = arr.sort(function(a, b) {
  if (a.info.cores > b.info.cores) {
    return 1;
  }
  if (a.info.cores < b.info.cores) {
    return -1;
  }
  return 0;
});
console.log(res);

//Вывод в консоль будет таким.
// 0: {…}
// cpu: "amd"
// info: Object { cores: 1, "сache": 1 }
// <prototype>: Object { … }
// 1: {…}
// cpu: "intel"
// info: Object { cores: 2, "сache": 3 }​​
// <prototype>: Object { … }
// 2: {…}
// cpu: "intel"
// info: Object { cores: 3, "сache": 2 }
// <prototype>: Object { … }
// 3: {…}
// cpu: "intel"
// info: Object { cores: 4, "сache": 4 }
// <prototype>: Object { … }
// 4: {…}
// cpu: "amd"
// info: Object { cores: 4, "сache": 2 }
// <prototype>: Object { … }
// length: 5
