$('.rowWrapper').on('click', function () {
    var empty = $(this).find('.dataID');
    if(empty.html()) {
        empty.parent().children().each(function () {
            $(this).html('');
            $('.active').removeClass('active');
        })
    }
});
