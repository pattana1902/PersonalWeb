const clockModule = (function() {

    const timer = function() {
        const time = document.getElementById('time');
        const dateStr = document.getElementById('date');
        setInterval(() => {
            let date = new Date();
            let hours = date.getHours();
            let minutes = date.getMinutes();
            let seconds = date.getSeconds();
            minutes = (minutes < 10 ? "0" : "") + minutes;
            seconds = (seconds < 10 ? "0" : "") + seconds;
            let timeStr = `${hours}:${minutes}:${seconds}`;
            time.innerHTML = timeStr;
            dateStr.innerHTML = `Today is ${dateConvert(date)} the ${toDay(date)} of ${monthConvert(date)}`;
        }, 1000);
    }

    function toDay(date) {
        let day = date.getDate();
        switch (day) {
            case 1:
                return day + "st";
            case 2:
                return day + "nd";
            case 3:
                return day + "rd";
            default:
                return day + "th";
        }
    }

    function dateConvert(date) {
        switch (date.getDay()) {
            case 0:
                return "Sunday";
            case 1:
                return "Monday";
            case 2:
                return "Tuesday";
            case 3:
                return "Wednesday";
            case 4:
                return "Thursday";
            case 5:
                return "Friday";
            case 6:
                return "Saturday";
        }
    }

    function monthConvert(date) {
        switch (date.getMonth()) {
            case 0:
                return "January";
            case 1:
                return "February";
            case 2:
                return "March";
            case 3:
                return "April";
            case 4:
                return "May";
            case 5:
                return "June";
            case 6:
                return "Juli";
            case 7:
                return "August";
            case 8:
                return "September";
            case 9:
                return "October";
            case 10:
                return "November";
            case 11:
                return "Decemeber";
        }
    }

    return {
        init: timer
    }
})();

window.onload = function() {
    clockModule.init();
}