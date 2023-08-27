const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');


const marriageDay = new Date('December 3 2023 14:30:00');

//Update Countdowntime

function updateCountdowntime() {
    const currentTime = new Date();
    const diff = marriageDay - currentTime;

    if (diff <= 0) {
        // Countdown completed, display all zeros
        days.innerHTML = '0';
        hours.innerHTML = '00';
        minutes.innerHTML = '00';
        seconds.innerHTML = '00';
        return; // Exit the function
      }
    

    const d = Math.floor(diff/ 1000 / 60 / 60 / 24);
    const h = Math.floor(diff/ 1000 / 60 / 60 ) % 24;
    const m = Math.floor(diff/ 1000 / 60 ) % 60;
    const s = Math.floor(diff/ 1000) % 60;

    console.log(s)

    days.innerHTML= d;
    hours.innerHTML =h <10 ? '0' + h : h;
    minutes.innerHTML =m <10 ? '0' + m : m;
    seconds.innerHTML =s <10 ? '0' + s : s;
}

// Set Functions


setInterval(updateCountdowntime, 1000);

