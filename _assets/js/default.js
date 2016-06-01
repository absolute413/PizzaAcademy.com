$(function () {
  // Hours (today)
  $('.hours-table').parent().find('th').each(function () {
    var $this = $(this)
    var label = $this.text()
    var today = moment().format('dddd')

    if (label === today) {
      $this.append(' <small>(today)</small>')
    }
  })

  // Location Map
  $('.location-map').each(function () {
    var self = this
    var Map
    var Marker
    var InfoWindow

    var MapBuilder = function () {
      if (Map && Marker && InfoWindow) { return }

      Map = new google.maps.Map(self, {
        zoom: 14,
        center: new google.maps.LatLng(42.982000, -70.961426),
        scrollwheel: false,
        disableDefaultUI: true
      });

      Marker = new google.maps.Marker({
        map: Map,
        position: new google.maps.LatLng(42.978998, -70.961426),
        title: 'Pizza Academy'
      });

      InfoWindow = new google.maps.InfoWindow({
        map: Map,
        anchor: Marker,
        content: 'Pizza Academy &middot; Subs, Salads & Roast Beef<br>Open 7 days a week, and we deliver all day.<br>159 Front St, Exeter NH, 03833'
      })
    }

    var $modal = $(this).parents('.modal')
    $modal.length ? $modal.on('shown.bs.modal', MapBuilder) : MapBuilder()
  })

  // Photo Gallery
  $(function () {
    var template = _.template([
      '<div class="col-md-3 col-sm-4">',
        '<div class="panel panel-default">',
          '<div class="panel-body">',
            '<figure class="embed-responsive embed-square" style="background-image: url(<%= picture %>)">',
              '<h4><%= name %></h4>',
            '</figure>',
          '</div>',
        '</div>',
      '</div>'
    ].join(''))

    var filter = _.filter(function (image) { return image.width >= 240 })
    var sort = _.sortBy('width')
    var map = _.map(function (photo) {
      var picture = filter(sort(photo.images))[0].source
      return template({ name: (photo.name || ''), picture: picture })
    })

    $('.photo-gallery').each(function () {
      var $el = $(this)
      var album = $el.data('album')

      getPhotos(album).then(function (html) { $el.html('<div class="row">'+ html +'</div>') })
    })

    function getPhotos(album) {
      var query = { fields: 'name,images', limit: 100, access_token: '1820160931538945|lMcdsMOGR_MH0bHe4GuHlBuhrdo' }
      return $.ajax('https://graph.facebook.com/' + album + '/photos', { data: query }).then(function (json) { return map(json.data).join('') })
    }
  })
})
