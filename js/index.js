$(function(){

    function res (){
        var lims=1,num=8;
        $.ajax({
            url:'http://api.mygmz.com/bigbrother/internet/search?projectName=&limitPage='+lims+'&limitNum='+num+'',
            type: 'get',
            dataType: 'jsonp',
            beforeSend: function(resp) {
                resp.setRequestHeader("clientVersion", "VERSION_2_1");
            },
            jsonp:'gmzjsonp',
            success: function(resp){
                if(resp.success==1){
                    var data=resp.result;
                    if(data.length>0){
                        $.each(data,function(i,index){
                            var cid=index.Id;
                            var as='<div class="hot-list"><a href="javascript:;" class="js-tu2" data-id="'+cid+'"><div class="hot-pic"><img src='+index.cover+'></div><h3>'+index.name+'</h3><h4>'+index.school+'</h4></a></div>';
                            var aa=$('.ul-hot1');
                            $('<li></li>').html(as).appendTo(aa);
                            $('.js-tu2').click(function(){
                                var id=$(this).attr("data-id");
                                $('.tishi').hide();
                                $('.more').hide();
                                $('.liebiao1').hide();
                                $('.return').hide();
                                $('.return1').show();
                                $('.shows').show();
                                $('.sc-find').hide();
                                $.ajax({
                                    url:'http://api.mygmz.com/bigbrother/internet/info?projectId='+id,
                                    type: 'get',
                                    dataType: 'jsonp',
                                    beforeSend: function(resp) {
                                        resp.setRequestHeader("clientVersion", "VERSION_2_1");
                                    },
                                    jsonp:'gmzjsonp',
                                    success: function(resp){
                                        if(resp.success==1){
                                            var data=resp.result;
                                            if(data.length>0){
                                                $.each(data,function(i,index){
                                                    var csrc=index.cover;
                                                    var chw=index.school;
                                                    var uptime=index.lastupdatetime;
                                                    uptime = uptime.substring(0,10);
                                                    var name=index.name;
                                                    var description=index.description;

                                                    $('.banner img').attr("src",csrc);
                                                    $('.tit').html(name);
                                                    $('.school-name').html(chw);
                                                    $('.time-name').html(uptime);
                                                    $('.article p').html(description);
                                                });

                                            }else{
                                                return;
                                            }
                                        }else if(resp.errorCode==0){
                                            alert("加载出错");
                                        }
                                    },
                                    error: function(resp){
                                        var result = resp.result;
                                        alert(result);
                                    }
                                });
                                $('.return1').click(function(){
                                    $('.liebiao1').show();
                                    $('.return').hide();
                                    $('.more').show();
                                    $('.shows').hide();
                                    $('.search').hide();
                                    $('.sc-find').show();
                                });
                            });

                        });
                        $('.ul-hot1:last-child').append('<div class="clear"></div>');
                    }else{
                        return;
                    }
                }else if(resp.errorCode==0){
                    alert("加载出错");
                }
            },
            error: function(resp){
                var result = resp.result;
                alert(result);
            }
        });
        $('.more').show();
        $('.more').click(function(){
            lims++;
            $.ajax({
                url:'http://api.mygmz.com/bigbrother/internet/search?projectName=&limitPage='+lims+'&limitNum='+num+'',
                type: 'get',
                dataType: 'jsonp',
                beforeSend: function(resp) {
                    resp.setRequestHeader("clientVersion", "VERSION_2_1");
                },
                jsonp:'gmzjsonp',
                success: function(resp){
                    if(resp.success==1){
                        var data=resp.result;
                        if(data.length>0){
                            $.each(data,function(i,index){
                                var cid=index.Id;
                                var as='<div class="hot-list"><a href="javascript:;" class="js-tu2" data-id="'+cid+'"><div class="hot-pic"><img src='+index.cover+'></div><h3>'+index.name+'</h3><h4>'+index.school+'</h4></a></div>';
                                var aa=$('.ul-hot1');
                                $('<li></li>').html(as).appendTo(aa);
                                $('.js-tu2').click(function(){
                                    $('.tishi').hide();
                                    $('.liebiao1').hide();
                                    $('.return').hide();
                                    $('.sc-find').hide();
                                    $('.return1').show();
                                    $('.more').hide();
                                    $('.shows').show();
                                    var id=$(this).attr("data-id");
                                    $.ajax({
                                        url:'http://api.mygmz.com/bigbrother/internet/info?projectId='+id,
                                        type: 'get',
                                        dataType: 'jsonp',
                                        beforeSend: function(resp) {
                                            resp.setRequestHeader("clientVersion", "VERSION_2_1");
                                        },
                                        jsonp:'gmzjsonp',
                                        success: function(resp){
                                            if(resp.success==1){
                                                var data=resp.result;
                                                if(data.length>0){
                                                    $.each(data,function(i,index){
                                                        var csrc=index.cover;
                                                        var chw=index.school;
                                                        var uptime=index.lastupdatetime;
                                                        uptime = uptime.substring(0,10);
                                                        var name=index.name;
                                                        var description=index.description;

                                                        $('.banner img').attr("src",csrc);
                                                        $('.tit').html(name);
                                                        $('.school-name').html(chw);
                                                        $('.time-name').html(uptime);
                                                        $('.article p').html(description);
                                                    });

                                                }else{
                                                    return;
                                                }
                                            }else if(resp.errorCode==0){
                                                alert("加载出错");
                                            }
                                        },
                                        error: function(resp){
                                            var result = resp.result;
                                            alert(result);
                                        }
                                    });
                                    $('.return1').click(function(){
                                        $('.liebiao1').show();
                                        $('.return1').show();
                                        $('.return').hide();
                                        $('.more').show();
                                        $('.shows').hide();
                                        $('.search').hide();
                                        $('.sc-find').show();
                                    });
                                });

                            });
                            $('.ul-hot1:last-child').append('<div class="clear"></div>');
                        }else{
                            $('.more').hide();
                            $('.tishi').show();
                        }
                    }else if(resp.errorCode==0){
                        alert("加载出错");
                    }
                },
                error: function(resp){
                    var result = resp.result;
                    alert(result);
                }
            });
        });
    };
    res();

    $('.sc-fd').click(function(){
        $('.sc-find').hide();
        $('.search').show();
        $('.clear-q').show();
        $('.liebiao').hide();
        $('.liebiao1').hide();
        $('.empty').hide();
        $('.sbg').hide();
        $('.more').hide();
    });

    flg=true;
    $('.screen-con').click(function(){
        if(flg){
            $('.sbg').show();
            flg=false;
        }else if(!flg){
            $('.sbg').hide();
            flg=true;
        }
    });


    $('.screen-kb').click(function(){
       $('.sbg').hide();
   })

    var textsd=$('.textbox-text');
    textsd.eq(0).focus(function(){
        var sValue = $(this).val();
        (sValue == '请输入省份/地区中文名称') && $(this).val('');
    });
    textsd.eq(0).blur(function(){
        var sValue = $(this).val();
        !sValue && $(this).val('请输入省份/地区中文名称');
    });
    textsd.eq(1).focus(function(){
        var sValue = $(this).val();
        (sValue == '请输入学校中文名称') && $(this).val('');
    });
    textsd.eq(1).blur(function(){
        var sValue = $(this).val();
        !sValue && $(this).val('请输入学校中文名称');
    });

    $('.btn').click(function(){
        flg=true;
        var lims= 1,nums=8;
        $('.more').hide();
        $('.tishi').hide();
        $('.more-hot').hide();
        $('.sbg').hide();
        $('.liebiao1').hide();
        var region=$('.textbox-text').val();
        var schools=$('.textbox-text').eq(1).val();
        region = region === '请输入省份/地区中文名称' ? '' : region;
        schools = schools === '请输入学校中文名称' ? '' : schools;
        $.ajax({
            url:'http://api.mygmz.com/bigbrother/internet/search/filter?provinceName='+region+'&schoolName='+schools+'&limitPage='+lims+'&limitNum='+nums+'',
            type: 'get',
            dataType: 'jsonp',
            beforeSend: function(resp){
                resp.setRequestHeader("clientVersion", "VERSION_2_1");
            },
            jsonp:'gmzjsonp',
            success: function(resp){
                if(resp.success==1){
                    var data=resp.result;
                    if(data.length>0){
                        $('.ul-hot').children('li').remove();
                        $('.liebiao').show();
                        $('.clear-q').hide();
                        $('.empty').hide();
                        $('.shows').hide();
                        $.each(data,function(i,index){
                            var cid=index.Id;
                            var as='<div class="hot-list"><a href="javascript:;" class="js-tu" data-id="'+cid+'"><div class="hot-pic"><img src='+index.cover+'></div><h3>'+index.name+'</h3><h4>'+index.school+'</h4></a></div>';
                            var aa=$('.ul-hot');
                            $('<li></li>').html(as).appendTo(aa);
                            $('.js-tu').click(function(){
                                $('.more').hide();
                                $('.more-hot').hide();
                                $('.more-school').hide();
                                $('.tishi').hide();
                                $('.shows').show();
                                $('.return1').hide();
                                $('.return').show();
                                $('.sc-find').hide();
                                $('.liebiao').hide();
                                var id=$(this).attr("data-id");
                                $.ajax({
                                    url:'http://api.mygmz.com/bigbrother/internet/info?projectId='+id,
                                    type: 'get',
                                    dataType: 'jsonp',
                                    beforeSend: function(resp) {
                                        resp.setRequestHeader("clientVersion", "VERSION_2_1");
                                    },
                                    jsonp:'gmzjsonp',
                                    success: function(resp){
                                        if(resp.success==1){
                                            var data=resp.result;
                                            if(data.length>0){
                                                $.each(data,function(i,index){
                                                    var csrc=index.cover;
                                                    var chw=index.school;
                                                    var uptime=index.lastupdatetime;
                                                    uptime = uptime.substring(0,10);
                                                    var name=index.name;
                                                    var description=index.description;

                                                    $('.banner img').attr("src",csrc);
                                                    $('.tit').html(name);
                                                    $('.school-name').html(chw);
                                                    $('.time-name').html(uptime);
                                                    $('.article p').html(description);
                                                });

                                            }else{
                                                return;
                                            }
                                        }else if(resp.errorCode==0){
                                            alert("加载出错");
                                        }
                                    },
                                    error: function(resp){
                                        var result = resp.result;
                                        alert(result);
                                    }
                                });
                                $('.return').click(function(){
                                    $('.liebiao1').hide();
                                    $('.liebiao').show();
                                    $('.sc-find').show();
                                    $('.shows').hide();
                                    $('.search').hide();
                                });
                            });
                        });
                        $('.ul-hot:last-child').append('<div class="clear"></div>');
                    }else{
                        $('.empty').show();
                        $('.liebiao').hide();
                        $('.more').hide();
                        $('.tishi').hide();
                        $('.more-school').hide();
                    }
                    if(data.length>=8){
                        $('.more-school').show();
                    }else{
                        $('.more-school').hide();
                    }
                }else if(resp.success==0){
                    if(region == ''){
                        if(schools == ''){
                            $('.empty').show();
                            $('.liebiao').hide();
                        }else{
                            alert("加载出错");
                        }
                    }else{
                        alert("加载出错");
                    }
                }
            },
            error: function(resp){
                var result = resp.result;
                alert(result);
            }
        });
        $('.more-school').click(function(){
            lims++;
            $.ajax({
                url:'http://api.mygmz.com/bigbrother/internet/search/filter?provinceName='+region+'&schoolName='+schools+'&limitPage='+lims+'&limitNum='+nums+'',
                type: 'get',
                dataType: 'jsonp',
                beforeSend: function(resp){
                    resp.setRequestHeader("clientVersion", "VERSION_2_1");
                },
                jsonp:'gmzjsonp',
                success: function(resp){
                    if(resp.success==1){
                        var data=resp.result;
                        if(data.length>0){
                            $('.liebiao').show();
                            $('.clear-q').hide();
                            $('.empty').hide();
                            $('.shows').hide();
                            $.each(data,function(i,index){
                                var cid=index.Id;
                                var as='<div class="hot-list"><a href="javascript:;" class="js-tu" data-id="'+cid+'"><div class="hot-pic"><img src='+index.cover+'></div><h3>'+index.name+'</h3><h4>'+index.school+'</h4></a></div>';
                                var aa=$('.ul-hot');
                                $('<li></li>').html(as).appendTo(aa);
                                $('.js-tu').click(function(){
                                    $('.more-school').hide();
                                    $('.tishi').hide();
                                    $('.shows').show();
                                    $('.return').show();
                                    $('.sc-find').hide();
                                    $('.liebiao').hide();
                                    var id=$(this).attr("data-id");
                                    $.ajax({
                                        url:'http://api.mygmz.com/bigbrother/internet/info?projectId='+id,
                                        type: 'get',
                                        dataType: 'jsonp',
                                        beforeSend: function(resp) {
                                            resp.setRequestHeader("clientVersion", "VERSION_2_1");
                                        },
                                        jsonp:'gmzjsonp',
                                        success: function(resp){
                                            if(resp.success==1){
                                                var data=resp.result;
                                                if(data.length>0){
                                                    $.each(data,function(i,index){
                                                        var csrc=index.cover;
                                                        var chw=index.school;
                                                        var uptime=index.lastupdatetime;
                                                        uptime = uptime.substring(0,10);
                                                        var name=index.name;
                                                        var description=index.description;

                                                        $('.banner img').attr("src",csrc);
                                                        $('.tit').html(name);
                                                        $('.school-name').html(chw);
                                                        $('.time-name').html(uptime);
                                                        $('.article p').html(description);
                                                    });

                                                }else{
                                                    return;
                                                }
                                            }else if(resp.errorCode==0){
                                                alert("加载出错");
                                            }
                                        },
                                        error: function(resp){
                                            var result = resp.result;
                                            alert(result);
                                        }
                                    });
                                    $('.return').click(function(){
                                        $('.tishi').hide();
                                        $('.liebiao').show();
                                        $('.sc-find').show();
                                        $('.shows').hide();
                                        $('.search').hide();
                                    });
                                });
                            });
                        }else{
                            $('.empty').hide();
                            $('.liebiao').hide();
                            $('.more').hide();
                            $('.tishi').show();
                        }
                        if(data.length>=8){
                            $('.more-school').show();
                        }else{
                            $('.more-school').hide();
                        }
                    }else if(resp.success==0){
                        if(region == ''){
                            if(schools == ''){
                                $('.empty').show();
                                $('.liebiao').hide();
                            }else{
                                alert("加载出错");
                            }
                        }else{
                            alert("加载出错");
                        }
                    }
                },
                error: function(resp){
                    var result = resp.result;
                    alert(result);
                }
            });
        });
    });


    var text=$('#su');
    text.focus(function(){
        $('#su').val('');
        $('.search-q-j').hide();
        $('.search-q-k').show();
        text.keyup(function(){
            var va=$(this).val();
            va = $.trim(va);
            if(va.length>0){
                $('.search-k-x').show();
            }else{
                $('.search-k-x').hide();
            }
        })
    });
    text.blur(function() {
        var str = $(this).val();
        str = $.trim(str);
        if(str == ''){
            $('#su').val('搜索项目');
            $('.search-q-j').show();
            $('.search-q-k').hide();
        }
    });
    $('.search-k-x').click(function(){
        $('#su').val('');
        $('.search-k-x').hide();
        $('.search-q-j').show();
        $('.search-q-k').hide();
    });

    $('.search-q-j a').click(function(){
        $('.ul-hot').children('li').remove();
        $('.sc-find').show();
        $('.liebiao1').show();
        $('.liebiao').hide();
        $('.tishi').hide();
        $('.search').hide();
        $('.clear-q').hide();
        $('.empty').hide();
        $('.more').show();
        $('.more-hot').hide();
        $('.more-school').hide();
        $('.more-search').hide();
        $('.shows').hide();
        $('.return').hide();
        $('.return1').show();
    });

    $('.search-q-k a').click(function(){
        $('.tishi').hide();
        $('.more-hot').hide();
        sousuo();
    });
    var sousuo=function(){
        var lims= 1,num=8;
        $('.ul-hot').children('li').remove();
        $('.empty').hide();
        var val=$('#su').val();
        $.ajax({
            url:'http://api.mygmz.com/bigbrother/internet/search?projectName='+val+'&limitPage='+lims+'&limitNum='+num+'',
            type: 'get',
            dataType: 'jsonp',
            beforeSend: function(resp){
                resp.setRequestHeader("clientVersion", "VERSION_2_1");
            },
            jsonp:'gmzjsonp',
            success: function(resp){
                if(resp.success==1){
                    var data=resp.result;
                    if(data.length>=8){
                        $('.more-search').show();
                    };
                    if(data.length>0){
                        $('.liebiao').show();
                        $('.clear-q').hide();
                        $('.shows').hide();
                        $.each(data,function(i,index){
                            var cid=index.Id;
                            var as='<div class="hot-list"><a href="javascript:;" class="js-tu" data-id="'+cid+'"><div class="hot-pic"><img src='+index.cover+'></div><h3>'+index.name+'</h3><h4>'+index.school+'</h4></a></div>';
                            var aa=$('.ul-hot');
                            $('<li></li>').html(as).appendTo(aa);
                            $('.js-tu').click(function(){
                                var id=$(this).attr("data-id");
                                $('.tishi').hide();
                                $('.clear-q').hide();
                                $('.liebiao').hide();
                                $('.shows').show();
                                $('.search').hide();
                                $('.more-search').hide();
                                $('.more-hot').hide();
                                $('.more').hide();
                                $('.return1').hide();
                                $('.return').show();
                                $.ajax({
                                    url:'http://api.mygmz.com/bigbrother/internet/info?projectId='+id,
                                    type: 'get',
                                    dataType: 'jsonp',
                                    beforeSend: function(resp) {
                                        resp.setRequestHeader("clientVersion", "VERSION_2_1");
                                    },
                                    jsonp:'gmzjsonp',
                                    success: function(resp){
                                        if(resp.success==1){
                                            var data=resp.result;
                                            if(data.length>0){
                                                $.each(data,function(i,index){
                                                    var csrc=index.cover;
                                                    var chw=index.school;
                                                    var uptime=index.lastupdatetime;
                                                    uptime = uptime.substring(0,10);
                                                    var name=index.name;
                                                    var description=index.description;

                                                    $('.banner img').attr("src",csrc);
                                                    $('.tit').html(name);
                                                    $('.school-name').html(chw);
                                                    $('.time-name').html(uptime);
                                                    $('.article p').html(description);
                                                });
                                            }else{
                                                return;
                                            }
                                        }else if(resp.errorCode==0){
                                            alert("加载出错");
                                        }
                                    },
                                    error: function(resp){
                                        var result = resp.result;
                                        alert(result);
                                    }
                                });
                                $('.return').click(function(){
                                    $('.liebiao').show();
                                    $('.shows').hide();
                                    $('.search').show();
                                    $('.sc-find').hide();
                                });
                            });
                        });
                        $('.ul-hot:last-child').append('<div class="clear"></div>');
                    }else{
                        $('.clear-q').hide();
                        $('.search-q-j').show();
                        $('.search-q-k').hide();
                        $('.empty').show();
                    }
                }else if(resp.errorCode==0){
                    alert("加载出错");
                }
            },
            error: function(resp){
                var result = resp.result;
                alert(result);
            }
        });
        $('.more-search').click(function(){
            lims++;
            $.ajax({
                url:'http://api.mygmz.com/bigbrother/internet/search?projectName='+val+'&limitPage='+lims+'&limitNum='+num+'',
                type: 'get',
                dataType: 'jsonp',
                beforeSend: function(resp){
                    resp.setRequestHeader("clientVersion", "VERSION_2_1");
                },
                jsonp:'gmzjsonp',
                success: function(resp){
                    if(resp.success==1){
                        var data=resp.result;
                        if(data.length>=8){
                            $('.more-search').show();
                        }
                        if(data.length>0){
                            $('.liebiao').show();
                            $('.clear-q').hide();
                            $('.shows').hide();
                            $.each(data,function(i,index){
                                var cid=index.Id;
                                var as='<div class="hot-list"><a href="javascript:;" class="js-tu" data-id="'+cid+'"><div class="hot-pic"><img src='+index.cover+'></div><h3>'+index.name+'</h3><h4>'+index.school+'</h4></a></div>';
                                var aa=$('.ul-hot');
                                $('<li></li>').html(as).appendTo(aa);
                                $('.js-tu').click(function(){
                                    var id=$(this).attr("data-id");
                                    $('.tishi').hide();
                                    $('.clear-q').hide();
                                    $('.liebiao').hide();
                                    $('.shows').show();
                                    $('.search').hide();
                                    $('.more-search').hide();
                                    $('.return').show();
                                    $.ajax({
                                        url:'http://api.mygmz.com/bigbrother/internet/info?projectId='+id,
                                        type: 'get',
                                        dataType: 'jsonp',
                                        beforeSend: function(resp) {
                                            resp.setRequestHeader("clientVersion", "VERSION_2_1");
                                        },
                                        jsonp:'gmzjsonp',
                                        success: function(resp){
                                            if(resp.success==1){
                                                var data=resp.result;
                                                if(data.length>0){
                                                    $.each(data,function(i,index){
                                                        var csrc=index.cover;
                                                        var chw=index.school;
                                                        var uptime=index.lastupdatetime;
                                                        uptime = uptime.substring(0,10);
                                                        var name=index.name;
                                                        var description=index.description;

                                                        $('.banner img').attr("src",csrc);
                                                        $('.tit').html(name);
                                                        $('.school-name').html(chw);
                                                        $('.time-name').html(uptime);
                                                        $('.article p').html(description);
                                                    });
                                                }else{
                                                    return;
                                                }
                                            }else if(resp.errorCode==0){
                                                alert("加载出错");
                                            }
                                        },
                                        error: function(resp){
                                            var result = resp.result;
                                            alert(result);
                                        }
                                    });

                                    $('.return').click(function(){
                                        $('.liebiao').show();
                                        $('.shows').hide();
                                        $('.search').show();
                                        $('.sc-find').hide();
                                    });
                                });

                            });
                            $('.ul-hot:last-child').append('<div class="clear"></div>');
                        }else{
                            $('.clear-q').hide();
                            $('.search-q-j').show();
                            $('.search-q-k').hide();
                            $('.empty').hide();
                            $('.tishi').show();
                            $('.more-search').hide();
                        }
                    }else if(resp.errorCode==0){
                        alert("加载出错");
                    }
                },
                error: function(resp){
                    var result = resp.result;
                    alert(result);
                }
            });
        })
    };

    $('.record').click(function(){
        var lims= 1,num=8;
        $('.more').hide();
        $('.more-school').hide();
        $('.more-search').hide();
        $('.tishi').hide();
        $('.clear-q').hide();
        $('.liebiao1').hide();
        $('.liebiao').show();
        $('.ul-hot').children('li').remove();
        $('.empty').hide();
        var histery=$(this).html();

        $.ajax({
                url:'http://api.mygmz.com/bigbrother/internet/search?projectName='+histery+'&limitPage='+lims+'&limitNum='+num+'',
                type: 'get',
                dataType: 'jsonp',
                beforeSend: function(resp){
                    resp.setRequestHeader("clientVersion", "VERSION_2_1");
                },
                jsonp:'gmzjsonp',
                success: function(resp){
                    if(resp.success==1){
                        var data=resp.result;
                        if(data.length>0){
                            $('.liebiao1').hide();
                            $('.liebiao').show();
                            $('.clear-q').hide();
                            $('.shows').hide();
                            $.each(data,function(i,index){
                                var cid=index.Id;
                                var as='<div class="hot-list"><a href="javascript:;" class="js-tu" data-id="'+cid+'"><div class="hot-pic"><img src='+index.cover+'></div><h3>'+index.name+'</h3><h4>'+index.school+'</h4></a></div>';
                                var aa=$('.ul-hot');
                                $('<li></li>').html(as).appendTo(aa);
                                $('.js-tu').click(function(){
                                    var id=$(this).attr("data-id");
                                    $('.more').hide();
                                    $('.more-hot').hide();
                                    $('.more-school').hide();
                                    $('.more-search').hide();
                                    $('.tishi').hide();
                                    $('.liebiao1').hide();
                                    $('.liebiao').hide();
                                    $('.return').show();
                                    $('.return1').hide();
                                    $('.shows').show();
                                    $('.search').hide();
                                    $.ajax({
                                        url:'http://api.mygmz.com/bigbrother/internet/info?projectId='+id,
                                        type: 'get',
                                        dataType: 'jsonp',
                                        beforeSend: function(resp) {
                                            resp.setRequestHeader("clientVersion", "VERSION_2_1");
                                        },
                                        jsonp:'gmzjsonp',
                                        success: function(resp){
                                            if(resp.success==1){
                                                var data=resp.result;
                                                if(data.length>=8){
                                                    $('.more-hot').show();
                                                }else{
                                                    $('.more-hot').hide();
                                                }
                                                if(data.length>0){
                                                    $.each(data,function(i,index){
                                                        var csrc=index.cover;
                                                        var chw=index.school;
                                                        var uptime=index.lastupdatetime;
                                                        uptime = uptime.substring(0,10);
                                                        var name=index.name;
                                                        var description=index.description;

                                                        $('.banner img').attr("src",csrc);
                                                        $('.tit').html(name);
                                                        $('.school-name').html(chw);
                                                        $('.time-name').html(uptime);
                                                        $('.article p').html(description);
                                                    });
                                                }else{
                                                    return;
                                                }
                                            }else if(resp.success==0){
                                                alert("加载出错");
                                            }
                                        },
                                        error: function(resp){
                                            var result = resp.result;
                                            alert(result);
                                        }
                                    });
                                    $('.return').click(function(){
                                        $('.liebiao1').hide();
                                        $('.liebiao').show();
                                        $('.shows').hide();
                                        $('.search').show();
                                        $('.sc-find').hide();
                                        $('.more').hide();
                                        $('.more-hot').show();
                                    });
                                });

                            });
                            $('.ul-hot:last-child').append('<div class="clear"></div>');
                        }else{
                            $('.tishi').hide();
                            $('.clear-q').hide();
                            $('.empty').show();
                        }
                        if(data.length>=8){
                            $('.more-hot').show();
                        }else{
                            $('.more-hot').hide();
                        };
                    }else if(resp.errorCode==0){
                        alert("加载出错");
                    }
                },
                error: function(resp){
                    var result = resp.result;
                    alert(result);
                }
            });
        $('.more-hot').show();
        $('.more-hot').click(function(){
            lims++;
            $.ajax({
                url:'http://api.mygmz.com/bigbrother/internet/search?projectName='+histery+'&limitPage='+lims+'&limitNum='+num+'',
                type: 'get',
                dataType: 'jsonp',
                beforeSend: function(resp){
                    resp.setRequestHeader("clientVersion", "VERSION_2_1");
                },
                jsonp:'gmzjsonp',
                success: function(resp){
                    if(resp.success==1){
                        var data=resp.result;
                        if(data.length>=8){
                            $('.more-hot').show();
                        }
                        if(data.length>0){
                            $('.ul-hot').children('.clear').remove();
                            $('.liebiao').show();
                            $('.clear-q').hide();
                            $('.shows').hide();
                            $.each(data,function(i,index){
                                var cid=index.Id;
                                var as='<div class="hot-list"><a href="javascript:;" class="js-tu" data-id="'+cid+'"><div class="hot-pic"><img src='+index.cover+'></div><h3>'+index.name+'</h3><h4>'+index.school+'</h4></a></div>';
                                var aa=$('.ul-hot');
                                $('<li></li>').html(as).appendTo(aa);
                                $('.js-tu').click(function(){
                                    var id=$(this).attr("data-id");
                                    $('.more').hide();
                                    $('.more-hot').hide();
                                    $('.tishi').hide();
                                    $('.liebiao').hide();
                                    $('.shows').show();
                                    $('.return').show();
                                    $('.return1').hide();
                                    $('.search').hide();
                                    $.ajax({
                                        url:'http://api.mygmz.com/bigbrother/internet/info?projectId='+id,
                                        type: 'get',
                                        dataType: 'jsonp',
                                        beforeSend: function(resp) {
                                            resp.setRequestHeader("clientVersion", "VERSION_2_1");
                                        },
                                        jsonp:'gmzjsonp',
                                        success: function(resp){
                                            if(resp.success==1){
                                                var data=resp.result;
                                                if(data.length>0){
                                                    $.each(data,function(i,index){
                                                        var csrc=index.cover;
                                                        var chw=index.school;
                                                        var uptime=index.lastupdatetime;
                                                        uptime = uptime.substring(0,10);
                                                        var name=index.name;
                                                        var description=index.description;

                                                        $('.banner img').attr("src",csrc);
                                                        $('.tit').html(name);
                                                        $('.school-name').html(chw);
                                                        $('.time-name').html(uptime);
                                                        $('.article p').html(description);
                                                    });
                                                }else{
                                                    return;
                                                }
                                            }else if(resp.success==0){
                                                alert("加载出错");
                                            }
                                        },
                                        error: function(resp){
                                            var result = resp.result;
                                            alert(result);
                                        }
                                    });
                                    $('.return').click(function(){
                                        $('.liebiao').show();
                                        $('.shows').hide();
                                        $('.search').show();
                                        $('.sc-find').hide();

                                    });
                                });
                            });
                            $('.ul-hot:last-child').append('<div class="clear"></div>');
                        }else{
                            $('.clear-q').hide();
                            $('.more-hot').hide();
                            $('.tishi').show();
                        }
                    }else if(resp.errorCode==0){
                        alert("加载出错");
                    }
                },
                error: function(resp){
                    var result = resp.result;
                    alert(result);
                }
            });
        })
    });


});
