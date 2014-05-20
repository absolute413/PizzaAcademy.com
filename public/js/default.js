---
---

$(function () {
    /*
     * Photo Gallery
     */
    var $photos     = $('#photos');
    if ($photos.length) {
        var ajax_photos     = $.ajax({url: 'https://graph.facebook.com/606796236030457/photos?fields=name,source,picture,updated_time&limit=100'})
          , ajax_template   = $.ajax({url: '{{ site.github.url }}/public/html/photos.html'});

        $.when(ajax_photos, ajax_template).then(function (photos, template) {
            // Success
            template = Handlebars.compile(template[0]);
            compiled = template({photos: photos[0].data});
            $photos.html(compiled);
        }, function (photos, template) {
            // Failure
        });
    }




    /*
     * Colophon
     */
    var $hours      = $('#hours')
      , $location   = $('#location');

    // Hours (today)
    $hours.parent().find('th').each(function () {
        var $this = $(this)
          , label = $this.text()
          , today = moment().format('dddd');
        if (label === today) {
            $this.append(' <small>(today)</small>');
        }
    });

    // Location
    if ($location.length) {
        var Map         = new google.maps.Map($location[0], {
                zoom            : 14
              , center          : new google.maps.LatLng(42.982000, -70.961426)
              , scrollwheel     : false
              , disableDefaultUI: true
            })
          , Marker      = new google.maps.Marker({
                map     : Map
              , position: new google.maps.LatLng(42.978998, -70.961426)
              , title   : '{{ site.title }}'
            })
          , InfoWindow  = new google.maps.InfoWindow({
                map     : Map
              , anchor  : Marker
              , content : '{{ site.title }} &middot; {{ site.tagline }}<br>{{ site.description }}<br>159 Front St, Exeter NH, 03833'
            });
    }
});
