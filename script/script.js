daily_btn = document.getElementById("daily_btn")
weekly_btn = document.getElementById("weekly_btn")
monthly_btn = document.getElementById("monthly_btn")

standart_type = document.querySelectorAll(".type_hour")
standart_type_time = document.querySelectorAll(".type_time")

function reset_transition() {
    for (var i = 0; i < standart_type.length; i++) {

        standart_type[i].style.transition = 'none';
        standart_type_time[i].style.transition = 'none';


        standart_type[i].style.opacity = '0';
        standart_type_time[i].style.opacity = '0';

        void standart_type[i].offsetWidth; // Essa linha é um truque que força o navegador a refazer o layout do elemento, reiniciando a transição. Ao ler a propriedade offsetWidth, que é uma propriedade de layout, ela faz com que o navegador recalcule as propriedades CSS, garantindo que a transição seja aplicada novamente.
        void standart_type_time[i].offsetWidth;

        standart_type[i].style.transition = '';
        standart_type_time[i].style.transition = '';

    }
}

function daily() {

    var daily_values = ['5', '1', '0', '1', '1', '0']
    var daily_time_values = ['7', '2', '1', '1', '3', '1']

    reset_transition()

    for (var i = 0; i < standart_type.length; i++) {

        if (daily_values[i] > 1 || daily_time_values[i] > 1) {
            standart_type[i].textContent = (`${daily_values[i]}hrs`);
            standart_type_time[i].textContent = (`Previous - ${daily_time_values[i]}hrs`);
        }

        else {
            standart_type[i].textContent = (`${daily_values[i]}hr`)
            standart_type_time[i].textContent = (`Previous - ${daily_time_values[i]}hr`);
        }

        standart_type[i].style.opacity = '1';
        standart_type_time[i].style.opacity = '1';

    }

}


function weekly() {

    var weekly_values = ['32', '10', '4', '4', '5', '2']
    var weekly_time_values = ['36', '8', '7', '5', '10', '2']

    reset_transition()

    for (var i = 0; i < standart_type.length; i++) {

        standart_type[i].textContent = (`${weekly_values[i]}hrs`);
        standart_type_time[i].textContent = (`Previous - ${weekly_time_values[i]}hrs`);

        standart_type[i].style.opacity = '1'
        standart_type_time[i].style.opacity = '1'
    }
}

function monthly() {

    var monthly_values = ['103', '23', '13', '11', '21', '7']
    var monthly_time_values = ['128', '29', '19', '18', '23', '11']

    reset_transition()

    for (var i = 0; i < standart_type.length; i++) {

        standart_type[i].textContent = (`${monthly_values[i]}hrs`);
        standart_type_time[i].textContent = (`Previous - ${monthly_time_values[i]}hrs`);


        standart_type[i].style.opacity = '1'
        standart_type_time[i].style.opacity = '1'
    }
}


