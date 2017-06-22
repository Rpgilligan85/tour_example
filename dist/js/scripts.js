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
var tour = {
    data: [
        {element: "#header", 'tooltip': "This is my header. Isn't it awesome!", position: "B"},
        {element: ".container button", 'tooltip': "Click on this button to toggle between to super cute kitties!!!", position: "B"},
        {element: ".container img", 'tooltip': "Kitties!!!"},
    ],
    controlsPosition : 'RT',
    buttons: {
                    next  : { text : 'Next &rarr;', class : 'new'},
                    prev  : { text : '&larr; Previous', class: 'new' },
                    start : { text : 'Start', class: 'new' },
                    end   : { text : 'End', class: 'new' }
                },
                controlsCss: {
                    background: 'rgba(0,0,0, 0.6)',
                    color: '#fff',
                    width: 'auto',
                    'border-radius': 0
                }
}

$.aSimpleTour(tour); 