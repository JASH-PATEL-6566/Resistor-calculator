const band_6_color_1 = new Map([
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
const band_6_color_2 = new Map([
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
const band_6_color_3 = new Map([
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
const band_6_color_4 = new Map([
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
    [-2, 'silver']
]);
const band_6_color_5 = new Map([
    [1, 'brown'],
    [2, 'red'],
    [3, 'orange'],
    [4, 'yellow'],
    [0.5, 'green'],
    [0.25, 'blue'],
    [0.1, 'violet'],
    [0.05, 'grey'],
    [5, 'gold'],
    [10, 'silver'],
]);

const band_6_color_6 = new Map([
    [100, 'brown'],
    [50, 'red'],
    [15, 'orange'],
    [25, 'yellow'],
    [10, 'blue'],
    [5, 'violet'],
]);

// Element
let b_6_c_1 = document.querySelector('#band_6_color_1');
let b_6_c_2 = document.querySelector('#band_6_color_2');
let b_6_c_3 = document.querySelector('#band_6_color_3');
let b_6_c_4 = document.querySelector('#band_6_color_4');
let b_6_c_5 = document.querySelector('#band_6_color_5');
let b_6_c_6 = document.querySelector('#band_6_color_6');
let calculat_6 = document.querySelector('.btn_calulate_6');

var color1_value_6;
var color2_value_6;
var color3_value_6;
var color4_value_6;
var color5_value_6;
var color6_value_6;
var final_ans_6;

// for color 1
let color1_6 = function () {
    color1_value_6 = Number(b_6_c_1.value);

    // console.log(color1_value);

    b_6_c_1.style.setProperty("background-color", band_6_color_1.get(color1_value_6), "important");

};
b_6_c_1.addEventListener('click', color1_6);
//////////////////////////////////////////////////

// for color 2
let color2_6 = function () {
    color2_value_6 = Number(b_6_c_2.value);

    // console.log(color2_value);

    b_6_c_2.style.setProperty("background-color", band_6_color_2.get(color2_value_6), "important");

};
b_6_c_2.addEventListener('click', color2_6);
/////////////////////////////////////////////////////////////

// for color 3
let color3_6 = function () {
    color3_value_6 = Number(b_6_c_3.value);

    // console.log(color2_value);

    b_6_c_3.style.setProperty("background-color", band_6_color_3.get(color3_value_6), "important");

};
b_6_c_3.addEventListener('click', color3_6);
////////////////////////////////////////////////////////////

// for color 4
let color4_6 = function () {
    color4_value_6 = Number(b_6_c_4.value);
    b_6_c_4.style.setProperty("background-color", band_6_color_4.get(color4_value_6), "important");

};
b_6_c_4.addEventListener('click', color4_6);
///////////////////////////////////////////////////////

// for color 5
let color5_6 = function () {
    color5_value_6 = Number(b_6_c_5.value);
    b_6_c_5.style.setProperty("background-color", band_6_color_5.get(color5_value_6), "important");

};
b_6_c_5.addEventListener('click', color5_6);
///////////////////////////////////////////////////////

let color6_6 = function () {
    color6_value_6 = Number(b_6_c_6.value);
    b_6_c_6.style.setProperty("background-color", band_6_color_6.get(color6_value_6), "important");

};
b_6_c_6.addEventListener('click', color6_6);
///////////////////////////////////////////////////////


// calculat

let ans_6 = function () {
    final_ans_6 = ((color1_value_6 + '') + (color2_value_6 + '') + (color3_value_6 + '')) + '×' + ((Math.pow(10, color4_value_6)) + '') + '  ±' + ((color5_value_6 + '') + '%') + ' ' + (color6_value_6 + '' + ' TC ') + 'Ω';

    output.value = final_ans_6;
}

calculat_6.addEventListener('click', ans_6);
