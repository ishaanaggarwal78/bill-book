
// ================================ GRAPH ============================================ //

var options = {
    series: [{
        name: "Desktops",
        data: [10, 41, 40, 40, 40, 41, 60]
    }],
    chart: {
        height: 200,
        type: 'line',
        zoom: {
            enabled: false
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'straight'
    },
    title: {
        // text: 'Product Trends by Month',
        align: 'left'
    },
    grid: {
        row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
        },
    },
    xaxis: {
        categories: ['Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu'],
    }
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();


// ===========================ACTIVE-LINKS(MAIN-LINKS)=============================

let mainLinks = document.querySelectorAll('.main_link');

mainLinks.forEach(mainLink => {
    mainLink.addEventListener('click', function () {
        document.querySelector('.active')?.classList.remove('active');
        mainLink.classList.add('active');
    });
});

let activePage = window.location.pathname;
let asideLinks = document.querySelectorAll('.main_link');

asideLinks.forEach(link => {
    if (link.href.includes(`${activePage}`)) {
        link.classList.add('active');
    };
});

// ===========================ACTIVE-LINKS(HEAD-LINKS)=============================


let activeLinks = document.querySelectorAll('.link');

activeLinks.forEach(headLink => {
    headLink.addEventListener('click', function () {
        document.querySelector('.active')?.classList.remove('active');
        headLink.classList.add('active');
    });
});

let headLinks = document.querySelectorAll('.head_links a');

headLinks.forEach(link => {
    if (link.href.includes(`${activePage}`)) {
        link.classList.add('active');
    };
});

// =================================== DATE AND TME =================================== //

// let date = new Date();
// let year = date.getFullYear();
// let month = date.getMonth() + 1;
// let todaydate = String(date.getDate()).padStart(2, '0');
// let datepattern = year + '-' + month + '-' + todaydate;
// document.getElementById("nowdate").value = datepattern;
// document.write(datepattern);



let rec = document.querySelector('.received');
let total = document.querySelector('.total');
let data = document.querySelector('.data');
let btn = document.getElementById('details_btn');

btn.addEventListener('click', () => {
    let a = rec.value;
    let b = total.value;
    let balance = 50000 - a;
});

let totalval = total.value

$(document).on('keyup', '.received', function () {
    let balanceval = $(this).val()
    let totalval = $('.total').val()
    let finalval = totalval - balanceval
    $('.balance').val(finalval)
});

// =================================== SAME AS BILLING ADDRESS =================================== //

$(document).ready(function () {
    $("#checkbox").click(function () {
        var inputValue = $(".input1").val();
        $(".input2").val(inputValue);
    });
});



// ============================ CHECKBOX =================================== //

// $(document).on('click', '.select_all', function(){
//     $(`input[type="checkbox"]`).prop('checked', true);
// });

let checkboxes = document.querySelectorAll('input[type="checkbox"]');

function checkAll(myCheckbox) {
    if (myCheckbox.checked == true) {
        checkboxes.forEach(function (checkbox) {
            checkbox.checked = true;
        });
    } else {
        checkboxes.forEach(function (checkbox) {
            checkbox.checked = false;
        });
    }
}

// ======================= SIDEBAR DROPDOWN ============================= //

$(document).on('click', '.accordion_items', function () {
    $('.dropdown_items').slideToggle().addClass('aside_dropdown');
});

$(document).on('click', '.accordion_items', function () {
    $('.icon_transform').addClass('icon_change');
});
// $(document).on('click', '.accordion_items', function () {
//     $(this).removeClass('icon_change');
// });


$(document).on('click', '.accordion_items', function () {
    $(this).addClass('acc_new');
});

$(document).on('click', '.accordion_items', function () {
    $(this).removeClass('acc_new');
});


