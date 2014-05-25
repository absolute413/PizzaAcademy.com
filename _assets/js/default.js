---
---

$(function () {
    // Hours (today)
    $('.hours-table').parent().find('th').each(function () {
        var $this = $(this)
          , label = $this.text()
          , today = moment().format('dddd');
        if (label === today) {
            $this.append(' <small>(today)</small>');
        }
    });

    // Location Map
    $('.location-map').each(function () {
        var self = this,
            Map, Marker, InfoWindow;

        var MapBuilder = function () {
            if (Map && Marker && InfoWindow) {return;}

            Map = new google.maps.Map(self, {
                zoom: 14
              , center: new google.maps.LatLng(42.982000, -70.961426)
              , scrollwheel: false
              , disableDefaultUI: true
            });

            Marker = new google.maps.Marker({
                map: Map
              , position: new google.maps.LatLng(42.978998, -70.961426)
              , title: '{{ site.title }}'
            });

            InfoWindow = new google.maps.InfoWindow({
                map: Map
              , anchor: Marker
              , content: '{{ site.title }} &middot; {{ site.tagline }}<br>{{ site.description }}<br>159 Front St, Exeter NH, 03833'
            });
        };

        var $modal = $(this).parents('.modal');
        $modal.length ? $modal.on('shown.bs.modal', MapBuilder) : MapBuilder();
    });
});
