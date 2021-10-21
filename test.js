// let group = [
//   { id: 1, name: "Alpha" },
//   { id: 2, name: "Beta" },
//   { id: 3, name: "Gama" },
// ];
// let property = [
//   { id: 1, name: "A", groupid: 3 },
//   { id: 2, name: "B", groupid: 2 },
//   { id: 3, name: "C", groupid: 1 },
//   { id: 4, name: "D", groupid: 3 },
//   { id: 5, name: "E", groupid: 2 },
//   { id: 6, name: "F", groupid: 1 },
//   { id: 7, name: "G", groupid: 1 },
// ];
// let value_of_property = [
//   { id: 1, value: 1000, property_id: 7 },
//   { id: 2, value: 2000, property_id: 6 },
//   { id: 3, value: 3000, property_id: 5 },
//   { id: 4, value: 4000, property_id: 4 },
//   { id: 5, value: 5000, property_id: 3 },
//   { id: 6, value: 6000, property_id: 2 },
//   { id: 7, value: 7000, property_id: 1 },
// ];

// const pro_vlue = property.map((d) => {
//   const value = value_of_property.filter((x) => x?.property_id === d?.id);
//   return {
//     name: d?.name,
//     value: value[0]?.value,
//     groupid: d?.groupid,
//   };
// });

// const group_property = group.map((d) => {
//   const prop = pro_vlue.filter((v) => v?.groupid === d?.id);
//   return {
//     id: d?.id,
//     name: d?.name,
//     property: prop,
//   };
// });

// console.log("group_property", group_property);
//==========================================================================================
// let group_value = group;
// group_value.map((i) => {
//   i.property = [];
// });

// let fakibuz1 = [];

// property.map((item1) => {
//   value_of_property.map((item2) => {
//     if (item1.id == item2.property_id) {
//       fakibuz1.push({
//         groupid: item1.groupid,
//         name: item1.name,
//         value: item2.value,
//       });
//     }
//   });
// });

// group_value.map((item1) => {
//   fakibuz1.map((item2) => {
//     if (item1.id == item2.groupid) {

//        item1.property.push({name:item2.name,value:item2.value})
//        console.log(item1);
//     }
//   });
// });

// // console.log(group_value);
// // console.log(fakibuz1);
// console.log("group value=",group_value);

//=======================================================================
// function longest_substring_without_repeating_characters(input) {
//   var chars = input.split("");
//   var curr_char;
//   var str = "";
//   var longest_string = "";
//   var hash = {};
//   for (var i = 0; i < chars.length; i++) {
//     curr_char = chars[i];
//     if (!hash[chars[i]]) {
//       str += curr_char;
//       hash[chars[i]] = { index: i };
//     } else {
//       if (longest_string.length <= str.length) {
//         longest_string = str;
//       }
//       var prev_dupeIndex = hash[curr_char].index;
//       var str_FromPrevDupe = input.substring(prev_dupeIndex + 1, i);
//       str = str_FromPrevDupe + curr_char;
//       hash = {};
//       for (var j = prev_dupeIndex + 1; j <= i; j++) {
//         hash[input.charAt(j)] = { index: j };
//       }
//     }
//   }
//   return longest_string.length > str.length ? longest_string : str;
// }
// console.log(longest_substring_without_repeating_characters("pwwkew"));

//==============================================================================
let s = [
  "S",
  "h",
  "e",
  "i",
  "k",
  "h",
  " ",
  "A",
  "r",
  "a",
  "f",
  "a",
  "t",
  " ",
  "R",
  "a",
  "h",
  "m",
  "a",
  "n",
  " ",
  "S",
  "h",
  "o",
  "v",
  "o",
];
let tem_string = "";

let fun = (ar) => {
  if (ar.length > 0) {
    tem_string = tem_string.concat(ar[0]);
    ar.shift();
    fun(ar);
  }
};
fun(s);
console.log(tem_string);
