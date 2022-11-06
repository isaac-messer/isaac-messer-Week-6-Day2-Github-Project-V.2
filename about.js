
    $('#boxContainer').append('<div id= "row"><div class="box"></div><div class="box"></div><div class="box"></div><div class="box"></div></div>')

    $('#boxContainer').append('<div id= "row"><div class="box"></div><div class="box"></div><div class="box"></div><div class="box"></div></div>')

    $('#boxContainer').append('<div id= "row"><div class="box"></div><div class="box"></div><div class="box"></div><div class="box"></div></div>')

    $('#boxContainer').append('<div id= "row"><div class="box"></div><div class="box"></div><div class="box"></div><div class="box"></div></div>')

    $('.box').on('click',function(){
        console.log('click');
        $(this).toggleClass('boxColor')
    })