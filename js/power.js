$('#replace').click(function(){
    if ($('#mainImg img').attr('src') == 'http://cdn.wallpapersafari.com/20/23/UtHfpS.jpg') {
        $('#mainImg img').attr('src','http://i.imgur.com/xkKw5r8.jpg')
    } else {
        $('#mainImg img').attr('src','http://cdn.wallpapersafari.com/20/23/UtHfpS.jpg')
    }
});

$('#startTour').click(function(){
    $('#tourControls').css('display','block');
})