$(function(){
    $('.search-q').click(function(){
        history.back();
    });



   $('.history-cancel').click(function(){
      $('.confirm').show();
   });

    $('.btn-r').click(function(){
        $('.confirm').hide();
    });
    $('.btn-l').click(function(){
        $('.rongqi').hide();
        $('.confirm').hide();

    });


    $('#su').focus(function() {
        $('#su').val('');
       if($('#su').val().length>=1){
          alert($('#su').val().length);
       }
    });
    $('#su').blur(function() {
        var str = $(this).val();
        str = $.trim(str);
        if(str == '')
            $('#su').val('搜索视频');
    });


    $('.search-k-x').click(function(){
        $('#su').val('');
    })


    $('.search-k-s').click(function(){
        var conv=$('#su').val();
        if(conv==""){
            alert("标题不能为空");
            return;
        }else {
            alert(1)
            $('.lishi').append($('<div class="record">'+conv+'</div>'));
        }
        // location.href="../html/search.html";

    });







});

