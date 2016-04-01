$(function(){
    $('.sc-fd').click(function(){
        location.href="../html/sousuokuang.html"
    });

$('.cnv3').click(function(){
        $('.cnv').css({'color': '#9c9c9c','background':'none','border-radius': 'none'});
        $(this).css({'color': '#4e4e4e','background':'#ececec','border-radius': '20px'})
    });

    $('.cnv').click(function(){
        $('.cnv').css({'color': '#9c9c9c','background':'none','border-radius': 'none'});
        $('.cnv3').css({'color': '#9c9c9c','background':'none','border-radius': 'none'});
        $(this).css({'color': '#4e4e4e','background':'#ececec','border-radius': '20px'})
    });

    $('.cnv2').click(function(){
        $('.cnv1').css({'color': '#9c9c9c','background':'none','border-radius': 'none'});
        $(this).css({'color': '#4e4e4e','background':'#ececec','border-radius': '20px'})
    });

    $('.cnv1').click(function(){
        $('.cnv1').css({'color': '#9c9c9c','background':'none','border-radius': 'none'});
        $('.cnv2').css({'color': '#9c9c9c','background':'none','border-radius': 'none'});
        $(this).css({'color': '#4e4e4e','background':'#ececec','border-radius': '20px'})
    });



})
