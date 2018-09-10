$(function(){

    //播放
    $('#videoShow .thumbnail a').on('click',function(){
        $('#new-show').find('video').attr('src','')
        var videoSrc = $(this).attr('data-video');
        var newSrc = 'http://www.chinagjsd.com/images/videos/'+videoSrc+'.mp4';
        $('#new-show').find('video').attr('src',newSrc);
        // console.log(newSrc)
        // console.log($('#new-show').find('embed').eq(0))
        // console.log(videoSrc)
        var mobileWidth = $(window).width();
        if(mobileWidth <415){
            $('#mask').find('#new-show').css('width','350px');
            $('#mask').find('#new-show').css('height','200px');
            $('#mask').find('embed').attr('width','350px');
            $('#mask').find('embed').attr('height','200px');
        }
        $('#mask').show()

    })
    //视频关闭
    $('#new-show .closeBtn').on('click',function(){
        // alert()
        var videoModel = document.getElementById("videoModel");
        videoModel.pause();
        $('#mask').hide()
        // $('#mask').find('embed').attr('src','')
    })

    //证明图片
    $('.img_id_show').on('click',function(){
        var newSrc = './images/img_index_alert.jpg';
        $('#new-show01').find('img').attr('src',newSrc);
        // console.log(newSrc)
        // console.log($('#new-show').find('embed').eq(0))
        // console.log(videoSrc)
        var mobileWidth = $(window).width();
        if(mobileWidth <415){
            $('#mask').find('#new-show').css('width','350px');
            $('#mask').find('#new-show').css('height','200px');
            $('#mask').find('embed').attr('width','350px');
            $('#mask').find('embed').attr('height','200px');
        }
        $('#mask01').show()

    })

    $('#new-show01 .closeBtn01').on('click',function(){
        // alert()
        // var videoModel = document.getElementById("imgModel01");
        // videoModel.pause();
        $('#mask01').hide()
        // $('#mask').find('embed').attr('src','')
    })
})
