self.addEventListener("install", (event) =>{
    console.log("[SW] Service Worker is installing... v1.2")

    event.waitUntil(
        caches.open('chatapp-v1.2')

        .then((cache) => {

            return cache.addAll([
                '/',
                '/index.html',
                '/friend-list',
                '/menu',
                '/Mangosetting',
                '/AccountSetting',
                '/FriendSetting',
                '/AdvanceSetting',
                '/NotificationSetting',
                '/GameSetting',
                '/profile',
                '/Post',
                '/Friend',
                '/Image',
                '/Video',
                '/Game',
                '/Chatbox',
                '/Profile.png',
                '/mango-64.png',
                '/mango-192.png',
                '/mango-512.png',
                '/mango.png',
                '/mango64.png',
                '/profile-250.png',
                '/back-32.png',
                '/Profile-img.png'
            ]);    
        })
    );
});


self.addEventListener('fetch', function(event) {
    event.respondWith(async function() {
       try{
         var res = await fetch(event.request);
         var cache = await caches.open('cache');
         cache.put(event.request.url, res.clone());
         return res;
       }
       catch(error){
         return caches.match(event.request);
        }
      }());
  });