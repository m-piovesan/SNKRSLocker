var clock;
		
$(document).ready(function() {
    var clock;

    clock = $('.countdown').FlipClock({
        clockFace: 'DailyCounter',
        autoStart: false,
        callbacks: {
            stop: function() {
                $('.message').html('A BLACK FRIDAY JÁ COMEÇOU')
            }
        }
    });
            
    clock.setTime(604800);
    clock.setCountdown(true);
    clock.start();

});

$('.message a').click(function(){
    $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});


// FOI AQUI PRA BAIXO QUE EU TENTEI |
//                                  V

function screenSize(){
    var windowWidth = window.innerWidth;

    document.querySelector('.window-size').innerHTML = windowWidth + 'x' + windowHeight;

};

// screenSize();

// window.addEventListener('resize', function(){
// 	screenSize();
// });
