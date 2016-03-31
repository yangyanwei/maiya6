$(function(){

    var index = 0;
    var lunbo  =  function(){
        $('.banner img').hide();
        var el = $('.banner img')[index];
        $(el).show();
        $('.title h3').hide();
        var els=$('.title h3')[index];
        $(els).show();

        $('.dians').removeClass('dians-s');
        $($('.dians')[index]).addClass('dians-s');

        index += 1;
        if( index === $('.dians').length ){
            index = 0;
        }
    };
    $('.dians').each(function(i){
        $(this).data('index',i);
    });

    $('.dians').hover(function(){
        clearInterval(timerId);
        $('.dians').removeClass('dians-s');
        $(this).addClass('dians-s');
        var i = $(this).data('index');
        $('.banner img').hide();
        $('.title h3').hide();

        $( $('.banner img')[i] ).show();
        $($('.title h3')[i]).show();
        index = i;
    },function(){
        clearInterval(timerId);
        timerId = setInterval(lunbo,2000);
    });
    var timerId = setInterval(lunbo,2000);


    $('.sc-fd').click(function(){
        location.href="./html/sousuokuang.html"
    });



});