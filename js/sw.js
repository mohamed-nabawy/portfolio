self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('assets-store').then(function(cache) {
     return cache.addAll([
       '/portfolio/index.html',
       //js
       '/portfolio/js/main.js',
       '/portfolio/js/aos.js',
       '/portfolio/js/bootstrap.min.js',
       '/portfolio/js/jquery.animateNumber.min.js',
       '/portfolio/js/jquery.easing.1.3.js',
       '/portfolio/js/jquery.magnific-popup.min.js',
       '/portfolio/js/jquery.min.js',
       '/portfolio/js/jquery.stellar.min.js',
       '/portfolio/js/jquery.waypoints.min.js',
       '/portfolio/js/jquery-migrate-3.0.1.min.js',
       '/portfolio/js/owl.carousel.min.js',
       '/portfolio/js/popper.min.js',
       '/portfolio/js/scrollax.min.js',
      // css
       '/portfolio/css/style.css',
       '/portfolio/css/style_override.css',
       '/portfolio/css/ionicons.min.css',
       '/portfolio/css/magnific-popup.css',
       '/portfolio/css/animate.css',
       '/portfolio/css/aos.css',
       '/portfolio/css/flaticon.css',
       '/portfolio/css/icomoon.css',
       '/portfolio/css/open-iconic-bootstrap.min.css',
       '/portfolio/css/owl.carousel.min.css',
       '/portfolio/css/owl.theme.default.min.css',
       //images
       '/portfolio/images/skills/ai.jpeg',
       '/portfolio/images/skills/amazon_alexa.png',
       '/portfolio/images/skills/angular.png',
       '/portfolio/images/skills/apple_ios.png',
       '/portfolio/images/projects/doxhub.png',
       '/portfolio/images/skills/drupal_logo.png',
       '/portfolio/images/projects/ElJokerPos.png',
       '/portfolio/images/projects/e-store.png',
       '/portfolio/images/skills/firebase.png',
       '/portfolio/images/skills/google_analytics.jpeg',
       '/portfolio/images/projects/home_vendre.png',
       '/portfolio/images/skills/ionic.jpeg',
       '/portfolio/images/skills/laravel_logo.png',
       '/portfolio/images/projects/se3ro.png',
       '/portfolio/images/skills/photoshop.png',

       //font
       '/portfolio/fonts/flaticon/Flaticon.eot',
       '/portfolio/fonts/flaticon/Flaticon.svg',
       '/portfolio/fonts/flaticon/Flaticon.ttf',
       '/portfolio/fonts/flaticon/Flaticon.woff',
       '/portfolio/fonts/flaticon/Flaticon.woff2',
       '/portfolio/fonts/icomoon/icomoon.ttf',
       '/portfolio/fonts/icomoon/icomoon.woff',
       '/portfolio/fonts/ionicons/fonts/ionicons.ttf',
       '/portfolio/fonts/ionicons/fonts/ionicons.woff',
       '/portfolio/fonts/ionicons/fonts/ionicons.woff2',
       '/portfolio/fonts/open-iconic/ionicons.otf',
       '/portfolio/fonts/open-iconic/ionicons.ttf',
       '/portfolio/fonts/open-iconic/ionicons.woff',
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
