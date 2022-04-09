document.querySelector('#check').addEventListener('click', function () {
    document.querySelector('.nav').classList.toggle('nav-light');
    document.querySelector('.header_container').classList.toggle('header_container-light');
    document.querySelector('.mode').classList.toggle('mode-light');
    document.querySelector('.main_container').classList.toggle('main_container-light');
    document.querySelector('.resister_box').classList.toggle('resister_box-light');
    document.querySelector('.btn_section').classList.toggle('btn_section-light');
    document.querySelector('.btn_change').classList.toggle('btn-light');
    document.querySelector('.btn_restart').classList.toggle('btn-light');
    document.querySelector('.main_box_4').classList.toggle('main-light');
    document.querySelector('.main_box_5').classList.toggle('main-light');
    document.querySelector('.main_box_6').classList.toggle('main-light');
    document.querySelectorAll('.select_color_4').classList.toggle('select-b-light');
    document.querySelectorAll('.select_color_5').classList.toggle('select-b-light');
    document.querySelectorAll('.select_color_6').classList.toggle('select-b-light');
    document.querySelector('.output_section').classList.toggle('output_section-light');
    document.getElementById('btn-calc').classList.toggle('btn-light');

})