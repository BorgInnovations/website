const staticAuthor = "Author"
const assets = [
  "/",
  "/01.html",
  '/01_author.html',
  '/01_c0rt3x.html',
  '/img/icons/BorgRetroFuturism_4.svg',
  '/img/icons/BI_1.svg',
  '/img/icons/BI_2.svg',
  '/img/icons/author.svg',
  '/img/icons/projectluminary.svg',
  '/img/icons/notanaicompany_banner.svg',
  '/img/CortexOI_full_t.svg',
  '/authordev/app.js',
  '/luminary.css',
  '/01_luminary.html',
  '/01search.html',
  '/source/search.js',
  '/source/disableselect.js',
  '/menu.js'

]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticAuthor).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })
