(function(){
    $('form').submit(function(e){
        e.preventDefault();
        let data = {
            urlLink: $('#url').val(),
        };
        $.post('/shorturl', data, function(res, status){
            res.status ? alert(`short link: http://localhost:3000/shorturl/${res.res.urlKey}`) : alert('not a valid url');
        });
    });
})();