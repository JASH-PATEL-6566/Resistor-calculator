const band_4_color_1 = new Map([
    [0, 'black'],
    [1, 'brown'],
    [2, 'red'],
    [3, 'orange'],
    [4, 'yellow'],
    [5, 'green'],
    [6, 'blue'],
    [7, 'violet'],
    [8, 'grey'],
    [9, 'white'],
]);
const band_4_color_2 = new Map([
    [0, 'black'],
    [1, 'brown'],
    [2, 'red'],
    [3, 'orange'],
    [4, 'yellow'],
    [5, 'green'],
    [6, 'blue'],
    [7, 'violet'],
    [8, 'grey'],
    [9, 'white'],
]);
const band_4_color_3 = new Map([
    [0, 'black'],
    [1, 'brown'],
    [2, 'red'],
    [3, 'orange'],
    [4, 'yellow'],
    [5, 'green'],
    [6, 'blue'],
    [7, 'violet'],
    [8, 'grey'],
    [9, 'white'],
    [-1, 'gold'],
    [-2, 'silver'],
]);
const band_4_color_4 = new Map([
    [1, 'brown'],
    [2, 'red'],
    [0.5, 'green'],
    [0.25, 'blue'],
    [0.1, 'violet'],
    [0.05, 'grey'],
    [5, 'gold'],
    [10, 'silver'],
]);

// Element
let b_4_c_1 = document.querySelector('#band_4_color_1');
let b_4_c_2 = document.querySelector('#band_4_color_2');
let b_4_c_3 = document.querySelector('#band_4_color_3');
let b_4_c_4 = document.querySelector('#band_4_color_4');
let calculat_4 = document.querySelector('.btn_calulate_4');
let output = document.querySelector('.output_section');



// var color1_value_4;
// var color2_value_4;
// var color3_value_4;
// var color4_value_4;
// var final_ans_4;

// // for color 1
// let color1 = function () {
//     color1_value_4 = Number(b_4_c_1.value);

//     // console.log(color1_valuvar

//     b_4_c_1.style.setProperty("background-color", band_4_color_1.get(color1_value_4), "important");

// };
// b_4_c_1.addEventListener('click', color1);
// //////////////////////////////////////////////////

// // for color 2
// let color2 = function () {
//     color2_value_4 = Number(b_4_c_2.value);

//     // console.log(color2_value);

//     b_4_c_2.style.setProperty("background-color", band_4_color_2.get(color2_value_4), "important");

// };
// b_4_c_2.addEventListener('click', color2);
// /////////////////////////////////////////////////////////////

// // for color 3
// let color3 = function () {
//     color3_value_4 = Number(b_4_c_3.value);

//     // console.log(color3_value);

//     b_4_c_3.style.setProperty("background-color", band_4_color_3.get(color3_value_4), "important");

// };
// b_4_c_3.addEventListener('click', color3);
// ////////////////////////////////////////////////////////////

// // for color 4
// let color4 = function () {
//     color4_value_4 = Number(b_4_c_4.value);
//     // console.log(color4_value);
//     b_4_c_4.style.setProperty("background-color", band_4_color_4.get(color4_value_4), "important");

// };
// b_4_c_4.addEventListener('click', color4);
// ///////////////////////////////////////////////////////


// // calculat

// // let ans = function () {
// //     // console.log(color1_value, color2_value, color3_value, color4_value);
// //     // final_ans = ((color1_value + '') + (color2_value + '')) + '×' + ((Math.pow(10, color3_value)) + '') + ' ± ' + ((color4_value + '')) + 'Ω';
// //     final_ans = ((color1_value + '') + (color2_value + ''))

// //     output.value = final_ans;
// // }

// // calculat_4.addEventListener('click', ans);

// let ans_4 = function () {
//     final_ans_4 = ((color1_value_4 + '') + (color2_value_4 + '') + (color3_value_4 + '')) + '×' + ((Math.pow(10, color4_value_4)) + '') + '  ±' + ((color1_value_4 + '') + '%') + ' ' + (color1_value_4 + '' + ' TC ') + 'Ω';

//     output.value = final_ans_4;
// }

// calculat_4.addEventListener('click', ans_4);

var color1_value_4;
var color2_value_4;
var color3_value_4;
var color4_value_4;
// var color5_value_4;
// var color6_value_4;
var final_ans_4;

// for color 1
let color1_4 = function () {
    color1_value_4 = Number(b_4_c_1.value);

    // console.log(color1_value);

    b_4_c_1.style.setProperty("background-color", band_4_color_1.get(color1_value_4), "important");

};
b_4_c_1.addEventListener('click', color1_4);
//////////////////////////////////////////////////

// for color 2
let color2_4 = function () {
    color2_value_4 = Number(b_4_c_2.value);

    // console.log(color2_value);

    b_4_c_2.style.setProperty("background-color", band_4_color_2.get(color2_value_4), "important");

};
b_4_c_2.addEventListener('click', color2_4);
/////////////////////////////////////////////////////////////

// for color 3
let color3_4 = function () {
    color3_value_4 = Number(b_4_c_3.value);

    // console.log(color2_value);

    b_4_c_3.style.setProperty("background-color", band_4_color_3.get(color3_value_4), "important");

};
b_4_c_3.addEventListener('click', color3_4);
////////////////////////////////////////////////////////////

// for color 4
let color4_4 = function () {
    color4_value_4 = Number(b_4_c_4.value);
    b_4_c_4.style.setProperty("background-color", band_4_color_4.get(color4_value_4), "important");

};
b_4_c_4.addEventListener('click', color4_4);
///////////////////////////////////////////////////////

// for color 5
// let color5_6 = function () {
//     color5_value_6 = Number(b_6_c_5.value);
//     b_6_c_5.style.setProperty("background-color", band_6_color_5.get(color5_value_6), "important");

// };
// b_4_c_5.addEventListener('click', color5_4);
// ///////////////////////////////////////////////////////

// let color6_6 = function () {
//     color6_value_4 = Number(b_4_c_6.value);
//     b_6_c_6.style.setProperty("background-color", band_6_color_6.get(color6_value_6), "important");

// };
// b_6_c_6.addEventListener('click', color6_6);
// ///////////////////////////////////////////////////////


// calculat

let ans_4 = function () {
    final_ans_4 = ((color1_value_4 + '') + (color2_value_4 + '')) + '×' + ((Math.pow(10, color3_value_4)) + '') + '  ±' + ((color4_value_4 + '') + '%');
    // final_ans_4 = color1_value_4 + color2_value_4 + color3_value_4 + color4_value_4;
    output.value = final_ans_4;
}

calculat_4.addEventListener('click', ans_4);

        //     final_ans_4 = ((color1_value_4 + '') + (color2_value_4 + '') + (color3_value_4 + '')) + '×' + ((Math.pow(10, color4_value_4)) + '') + '  ±' + ((color1_value_4 + '') + '%') + ' ' + (color1_value_4 + '' + ' TC ') + 'Ω';