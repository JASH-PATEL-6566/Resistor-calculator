// const btn = document.querySelector('.btn_apply');
const select_band = document.querySelector('#numberOfBands');

document.querySelector('.btn_change').addEventListener('click', function () {
    // value_number = select_band.value;
    console.log(select_band.value);
    if (select_band.value === '4') {
        document.querySelector('#main_box_4').classList.remove("display_none");
        document.querySelector('#main_box_5').classList.add("display_none");
        document.querySelector('#main_box_6').classList.add("display_none");
        document.querySelector('.btn_calulate_4').classList.remove("display_none");
        document.querySelector('.btn_calulate_5').classList.add("display_none");
        document.querySelector('.btn_calulate_6').classList.add("display_none");
        document.querySelector('.output_section').classList.remove("display_none");
    }
    else if (select_band.value === '5') {
        document.querySelector('#main_box_4').classList.add("display_none");
        document.querySelector('#main_box_5').classList.remove("display_none");
        document.querySelector('#main_box_6').classList.add("display_none");
        document.querySelector('.btn_calulate_4').classList.add("display_none");
        document.querySelector('.btn_calulate_5').classList.remove("display_none");
        document.querySelector('.btn_calulate_6').classList.add("display_none");
        document.querySelector('.output_section').classList.remove("display_none");
    }
    else if (select_band.value === '6') {
        document.querySelector('#main_box_4').classList.add("display_none");
        document.querySelector('#main_box_5').classList.add("display_none");
        document.querySelector('#main_box_6').classList.remove("display_none");
        document.querySelector('.btn_calulate_4').classList.add("display_none");
        document.querySelector('.btn_calulate_5').classList.add("display_none");
        document.querySelector('.btn_calulate_6').classList.remove("display_none");
        document.querySelector('.output_section').classList.remove("display_none");
    }
});
