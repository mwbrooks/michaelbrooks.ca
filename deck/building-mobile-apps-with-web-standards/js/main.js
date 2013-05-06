(function($) {
    $(document).ready(function() {

        $('.rotate').on('click', function() {
            var next = $(this).next()[0] || $(this).parent().first()[0];
            console.log(next);
            $(this).toggle();
            $(next).toggle();
        });

        /*
         * Load Photo Gallery on Click
         */

        $('#refresh').on('click', function(e) {
            $.ajax({
                type: 'GET',
                url: 'api/photos.json',
                dataType: 'json',
                cache: false,
                success: function(data) {
                    var element = $('#photos');
                    data.forEach(function(photo) {
                        element.append('<img src="' + photo.url + '" />');
                    });
                }
            });
        });

    });

    function fragment(elements) {
    }

})($);
