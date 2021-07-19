//display date/day
let todayDate = moment().format('dddd, MMM Do YYYY');
document.querySelector('#currentDay').innerHTML = todayDate;

$(document).ready(function () {
    //savebtn click listener    
    $('.saveBtn').on('click', function() {
        //nearby values
        let text = $(this).siblings('.description').val();
        let time = $(this).parent().attr('id');

        //local save
        localStorage.setItem(time, text);
    })

    function timeTracker() {
        //get current hours
        let timeNow = moment().hour();

        // loop for time
        $('.time-block').each(function() {
            let blockTime = parseInt($(this).attr('id').split('hour')[1]);

            if (blockTime < timeNow) {
                $(this).removeClass('future');
                $(this).removeClass('present');
                $(this).addClass('past');
            } else if (blockTime === timeNow){
                $(this).removeClass('past');
                $(this).removeClass('future');
                $(this).addClass('present');
            } else {
                $(this).removeClass('past');
                $(this).removeClass('present');
                $(this).addClass('future');
            }
        })
    }


    $('#hour8 .description').val(localStorage.getItem('hour8'));
    $('#hour9 .description').val(localStorage.getItem('hour9'));
    $('#hour10 .description').val(localStorage.getItem('hour10'));
    $('#hour11 .description').val(localStorage.getItem('hour11'));
    $('#hour12 .description').val(localStorage.getItem('hour12'));
    $('#hour13 .description').val(localStorage.getItem('hour13'));
    $('#hour14 .description').val(localStorage.getItem('hour14'));
    $('#hour15 .description').val(localStorage.getItem('hour15'));
    $('#hour16 .description').val(localStorage.getItem('hour16'));
    $('#hour17 .description').val(localStorage.getItem('hour17'));

    timeTracker();
})