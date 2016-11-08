var res="";
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 17
  });

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      
      var marker = new google.maps.Marker({
          position: pos,
          title:"Hello World!"
      });
      var service = new google.maps.places.PlacesService(map);
      service.nearbySearch({
          location : pos,
          radius : 10000,
          type : [ 'university' ]
      }, callback);
      // To add the marker to the map, call setMap();
      marker.setMap(map);
      map.setCenter(pos);
    });
  } else {
    alert('browser not supported!')
  }
}


function callback(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    if(results[0]['id']==='53dbe3bb0725b73d8370db85c026e744ebffe77e'){
      res=results[0]['name']
      $('#txt_nombre').text(res);
    }
  }
}

function selectUni(selected){
  if(selected=="n1"){
    $('#txt_nombre').text("Unitec");
    $('#form1').removeClass('hidden');
  }else if(selected=="n2"){
    $('#txt_nombre').text("Meow");
    $('#form1').removeClass('hidden');
  }
}

