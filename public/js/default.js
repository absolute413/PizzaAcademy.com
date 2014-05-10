---
---

$(function () {
    // Location
    var Map         = new google.maps.Map($('#location')[0], {
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
});
