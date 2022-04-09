const band_5_color_1 = new Map([
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
const band_5_color_2 = new Map([
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
const band_5_color_3 = new Map([
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
const band_5_color_4 = new Map([
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
]);
const band_5_color_5 = new Map([
    [1, 'brown'],
    [0.5, 'green'],
    [0.25, 'blue'],
    [0.1, 'violet'],
]);

// Element
let b_5_c_1 = document.querySelector('#band_5_color_1');
let b_5_c_2 = document.querySelector('#band_5_color_2');
let b_5_c_3 = document.querySelector('#band_5_color_3');
let b_5_c_4 = document.querySelector('#band_5_color_4');
let b_5_c_5 = document.querySelector('#band_5_color_5');
let calculat_5 = document.querySelector('.btn_calulate_5');
var color1_value_5;
var color2_value_5;
var color3_value_5;
var color4_value_5;
var color5_value_5;
var final_ans_5;

// for color 1
let color1_5 = function () {
    color1_value_5 = Number(b_5_c_1.value);

    // console.log(color1_value);

    b_5_c_1.style.setProperty("background-color", band_5_color_1.get(color1_value_5), "important");

};
b_5_c_1.addEventListener('click', color1_5);
//////////////////////////////////////////////////

// for color 2
let color2_5 = function () {
    color2_value_5 = Number(b_5_c_2.value);

    // console.log(color2_value);

    b_5_c_2.style.setProperty("background-color", band_5_color_2.get(color2_value_5), "important");

};
b_5_c_2.addEventListener('click', color2_5);
/////////////////////////////////////////////////////////////

// for color 3
let color3_5 = function () {
    color3_value_5 = Number(b_5_c_3.value);

    // console.log(color2_value);

    b_5_c_3.style.setProperty("background-color", band_5_color_3.get(color3_value_5), "important");

};
b_5_c_3.addEventListener('click', color3_5);
////////////////////////////////////////////////////////////

// for color 4
let color4_5 = function () {
    color4_value_5 = Number(b_5_c_4.value);
    b_5_c_4.style.setProperty("background-color", band_5_color_4.get(color4_value_5), "important");

};
b_5_c_4.addEventListener('click', color4_5);
///////////////////////////////////////////////////////

// for color 5
let color5_5 = function () {
    color5_value_5 = Number(b_5_c_5.value);
    b_5_c_5.style.setProperty("background-color", band_5_color_5.get(color5_value_5), "important");

};
b_5_c_5.addEventListener('click', color5_5);
///////////////////////////////////////////////////////


// calculat

let ans_5 = function () {
    final_ans_5 = ((color1_value_5 + '') + (color2_value_5 + '') + (color3_value_5 + '')) + '×' + ((Math.pow(10, color4_value_5)) + '') + ' ± ' + ((color5_value_5 + '')) + 'Ω';

    output.value = final_ans_5;
}

calculat_5.addEventListener('click', ans_5);
