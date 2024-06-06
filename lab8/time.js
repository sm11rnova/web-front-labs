function showTime() {
    let today = new Date();
    let currentTime = today.toLocaleTimeString('ru-RU');
    document.getElementById('time').innerHTML = currentTime;
}
setInterval(showTime, 1000);

function showTime() {
    let now = new Date();
    let hours = String(now.getHours()).padStart(2, '0'); // преобразует число в строку и добавляет нули слева, чтобы всегда было две цифры
    let minutes = String(now.getMinutes()).padStart(2, '0');
    let seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}`;
    document.getElementById('seconds').textContent = seconds;
}



let totalDegrees = 0;
    function showTime() {
        let now = new Date();
        let hours = String(now.getHours()).padStart(2, '0');
        let minutes = String(now.getMinutes()).padStart(2, '0');
        let seconds = String(now.getSeconds()).padStart(2, '0');
        let timeString = `${hours}:${minutes}:${seconds}`;
    
        document.getElementById('time').textContent = timeString;
        document.getElementById('seconds').textContent = seconds;
    
        let secondHand = document.getElementById('second-hand');
    
        // Вычисляем угол поворота секундной стрелки, 
        // чтобы стрелка соответствовала реальному времени
        let degrees = (seconds / 60) * 360;  // 360 градусов за 60 секунд
        secondHand.style.transform = `rotate(${degrees}deg)`;
    }