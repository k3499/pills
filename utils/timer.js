function formatTime(time) {
    // Наибольшее целое число меньше или равно результату деления времени на 60.
    const minutes = Math.floor(time / 60);
    
    // Секунды – это остаток деления времени на 60 (оператор модуля)
    let seconds = time % 60;
    
    // Если значение секунд меньше 10, тогда отображаем его с 0 впереди 
    if (seconds < 10) {
        seconds = `0${seconds}`;
    }

    // Вывод в формате MM:SS
    return `${minutes}:${seconds}`;
}
   // Начинаем с исходного значения в 20 секунд
   const TIME_LIMIT = 1800;

let timePassed = 0;
let timeLeft = TIME_LIMIT;
document.getElementById("time").innerHTML = ` ${formatTime(timeLeft)}`;
let timerInterval = null;

function startTimer() {
timerInterval = setInterval(() => {
    
    // Количество времени, которое прошло, увеличивается на  1
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    
    // Обновляем метку оставшегося времени
    document.getElementById("time").innerHTML = formatTime(timeLeft);
}, 1000);
}
document.getElementById("time").innerHTML = `...`
startTimer();