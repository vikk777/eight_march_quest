let bombContainer = $('#bombContainer');
let blackScreen = $('#blackScreen');
let blackScreen_textContainer = blackScreen.find('#blackScreen_textContainer');
let blackScreen_btn = blackScreen.find('#blackScreen_btn');
let stopTimer;

initTimer();

bombContainer.on('click', (e) => {
    let wire = $(e.target);

    if (wire.parent().id() != 'yellow') {
        explose();
    } else {
        $('#successText').removeClass('d-none');
        stopTimer = true;
        setTimeout(() => window.location.assign('/unit/14/'), 1000);
    }
})

blackScreen_btn.on('click', (e) => {
    blackScreen.addClass('d-none');
    blackScreen_textContainer.addClass('d-none');
    initTimer();
})

function initTimer() {
    let timer = $('#timer');
    timer.text('');
    let sec = 60 * 5;
    stopTimer = false;

    let secTimer = () => {
        let min = Math.floor(sec / 60);
        timer.text(`${min < 10 ? '0' : ''}${min}:${sec % 60 < 10 ? '0' : ''}${sec % 60}`);

        if (stopTimer) {
            return;
        }

        if (sec--) {
            setTimeout(() => {
                secTimer();
            }, 1000);
        } else {
            explose();
        }
    };
    secTimer();
}

function explose() {
    blackScreen.removeClass('d-none');
    setTimeout(() => {
        blackScreen_textContainer.removeClass('d-none');
    }, 2000);
    stopTimer = true;
}