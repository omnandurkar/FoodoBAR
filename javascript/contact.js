
function initMap() {
  
    const restaurantLocation = { lat: 40.7128, lng: -74.006 };
  
    const map = new google.maps.Map(document.getElementById('map'), {
      center: restaurantLocation,
      zoom: 15
    });
  
    const marker = new google.maps.Marker({
      position: restaurantLocation,
      map: map,
      title: 'Restaurant Location'
    });
  }
  
  
  document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
  });
  