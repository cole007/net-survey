$(document).ready(function() {
    // $('.command p').text(400);
    
    var usd = $('.process').attr('data-usd');
    var gbp = $('.process').attr('data-gbp');
    var eur = $('.process').attr('data-eur');
    $('.process').find('select').customSelect().on('change',function() {
        // alert($(this).val());
        var base = 1;
        $('.process').find('select').each(function() {
            var val = $(this).val();
            if (val > 0) {
                base *= val;
            }
        });
        $('.command p.usd').find('span.val').text((usd * base).toFixed(2));
        $('.command p.gbp').find('span.val').text((gbp * base).toFixed(2));
        $('.command p.eur').find('span.val').text((eur * base).toFixed(2));
    });
});