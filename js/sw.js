self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('assets-store').then(function(cache) {
     return cache.addAll([
       './index.html',
       './js/main.js',
       './js/aos.js',
       './js/bootstrap.min.js',
       './js/jquery.animateNumber.min.js',
       './js/jquery.easing.1.3.js',
       './js/jquery.magnific-popup.min.js',
       './js/jquery.min.js',
       './js/jquery.stellar.min.js',
       './js/jquery.waypoints.min.js',
       './js/jquery-migrate-3.0.1.min.js',
       './js/owl.carousel.min.js',
       './js/popper.min.js',
       './js/scrollax.min.js',
      // css
       './css/style.css',
       './css/style_override.css',
       './css/ionicons.min.css',
       './css/magnific-popup.css',
       './css/animate.css',
       './css/aos.css',
       './css/flaticon.css',
       './css/icomoon.css',
       './css/open-iconic-bootstrap.min.css',
       './css/owl.carousel.min.css',
       './css/owl.theme.default.min.css',
       //images
       './images/skills/ai.jpeg',
       './images/skills/amazon_alexa.png',
       './images/skills/angular.png',
       './images/skills/apple_ios.png',
       './images/projects/doxhub.png',
       './images/skills/drupal_logo.png',
       './images/projects/ElJokerPos.png',
       './images/projects/e-store.png',
       './images/skills/firebase.png',
       './images/skills/google_analytics.jpeg',
       './images/projects/home_vendre.png',
       './images/skills/ionic.jpeg',
       './images/skills/laravel_logo.png',
       './images/projects/se3ro.png',
       './images/skills/photoshop.png',

       //font
       './fonts/flaticon/Flaticon.eot',
       './fonts/flaticon/Flaticon.svg',
       './fonts/flaticon/Flaticon.ttf',
       './fonts/flaticon/Flaticon.woff',
       './fonts/flaticon/Flaticon.woff2',
       './fonts/icomoon/icomoon.ttf',
       './fonts/icomoon/icomoon.woff',
       './fonts/ionicons/fonts/ionicons.ttf',
       './fonts/ionicons/fonts/ionicons.woff',
       './fonts/ionicons/fonts/ionicons.woff2',
       './fonts/open-iconic/ionicons.otf',
       './fonts/open-iconic/ionicons.ttf',
       './fonts/open-iconic/ionicons.woff',
       //online font
      //  https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900
     ]).catch((error)=>{
       console.log(error);
     });
   })
 );
});

self.addEventListener('fetch', function(e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
