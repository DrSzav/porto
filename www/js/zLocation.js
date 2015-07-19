// onSuccess Callback
// This method accepts a Position object, which contains the
// current GPS coordinates
//
var zLocator = {
 self:this,
 onSuccess : function(position) {
    alert('Latitude: '          + position.coords.latitude          + '\n' +
          'Longitude: '         + position.coords.longitude         + '\n' +
          'Altitude: '          + position.coords.altitude          + '\n' +
          'Accuracy: '          + position.coords.accuracy          + '\n' +
          'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
          'Heading: '           + position.coords.heading           + '\n' +
          'Speed: '             + position.coords.speed             + '\n' +
          'Timestamp: '         + position.timestamp                + '\n');
},

// onError Callback receives a PositionError object
//
onError: function(error) {
  //  alert('code: '    + error.code    + '\n' +
//          'message: ' + error.message + '\n');
},
initialize: function(){
  navigator.geolocation.getCurrentPosition(self.onSuccess, self.onError);
}
}
