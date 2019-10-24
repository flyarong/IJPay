/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "dfd0ed3ee1113b90c857987aacdd9184"
  },
  {
    "url": "assets/css/0.styles.98f35480.css",
    "revision": "d42be60f84fab4de0eefc58d29673dcb"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.f435fb1e.js",
    "revision": "041d478af7ba7bc430f52586bfdc9c52"
  },
  {
    "url": "assets/js/11.5c5022e2.js",
    "revision": "cfcc810014792dfbf65a4b1fc9b22467"
  },
  {
    "url": "assets/js/12.7669fb0a.js",
    "revision": "4b2abab00901a0ae3365531d72e1af0f"
  },
  {
    "url": "assets/js/13.b5b75db8.js",
    "revision": "f3c1894eb9bd1090e714757aa1e2d4cf"
  },
  {
    "url": "assets/js/14.8a275a10.js",
    "revision": "fa2a47bf3cb185c719a67280d6b522f1"
  },
  {
    "url": "assets/js/15.9c63d5dc.js",
    "revision": "7f269432210c59ff2f54dc5512d56b9a"
  },
  {
    "url": "assets/js/16.79a67190.js",
    "revision": "56646dd9ce97a1f7630f6173a746c0ff"
  },
  {
    "url": "assets/js/17.5d8037d6.js",
    "revision": "2619703f71795d7a45ac30230eedab70"
  },
  {
    "url": "assets/js/18.4573dd51.js",
    "revision": "00de76401ab690df83763c4af39f7dcc"
  },
  {
    "url": "assets/js/19.79f59511.js",
    "revision": "fb367694f5e1de9914f8f516a5e444cf"
  },
  {
    "url": "assets/js/20.18733892.js",
    "revision": "160c08db5486fe0541747b56b24ca747"
  },
  {
    "url": "assets/js/21.02f83360.js",
    "revision": "b2e85eba7adc97710cac44959a0783f1"
  },
  {
    "url": "assets/js/22.9a00795f.js",
    "revision": "bc75cc82d10298e1984e57c1366d18d3"
  },
  {
    "url": "assets/js/23.69a2fba9.js",
    "revision": "5f326637145708d15ccf38c8478ae717"
  },
  {
    "url": "assets/js/24.fa5cdd37.js",
    "revision": "209fa6cee0f5d854a0c8913298ad20d9"
  },
  {
    "url": "assets/js/25.94cd672d.js",
    "revision": "df8ffcece64f8255a681aa9ee5ca7ca3"
  },
  {
    "url": "assets/js/26.d9cb2501.js",
    "revision": "0efd522ce633d2ba0c280ed9886448dd"
  },
  {
    "url": "assets/js/27.8b6364fa.js",
    "revision": "3b0e462f24f56774d9aeef79bd21b4b9"
  },
  {
    "url": "assets/js/3.1277c491.js",
    "revision": "f4045b4c9a8f19a8e3b1ca75411a0384"
  },
  {
    "url": "assets/js/4.360b7ee4.js",
    "revision": "3147867522c6181727af1f19a07f1b85"
  },
  {
    "url": "assets/js/5.d228028b.js",
    "revision": "c32525b1be09af7d53d3035c54eaede3"
  },
  {
    "url": "assets/js/6.be4c4d64.js",
    "revision": "e98bfb9ca633a475a49bc2a40b1c0a2b"
  },
  {
    "url": "assets/js/7.7167e171.js",
    "revision": "3b3ddf5681d6f3e6af6b8f47a88e79b9"
  },
  {
    "url": "assets/js/8.2948fa99.js",
    "revision": "992de703f35e5e0833adad0ccfb4b6d8"
  },
  {
    "url": "assets/js/9.57d07610.js",
    "revision": "635ef17256f25ad6ab18bc8c44b7dfc8"
  },
  {
    "url": "assets/js/app.8e5727ee.js",
    "revision": "197169c45426fbedbc20841107300795"
  },
  {
    "url": "assets/js/vendors~notification.008be287.js",
    "revision": "f0f92cd3cf3c78c6de00ecd43409eb96"
  },
  {
    "url": "guide/alipay/index.html",
    "revision": "897e181bcd7c5b5f37b7605040bebcde"
  },
  {
    "url": "guide/alipay/init.html",
    "revision": "f17a7604363cb1fc96b77988afa78db2"
  },
  {
    "url": "guide/client/ios.html",
    "revision": "249d4b7f71428fd2bdd9d7a3d959a45e"
  },
  {
    "url": "guide/client/jpay.html",
    "revision": "ee6f12f91888172862ff6731ffc605d0"
  },
  {
    "url": "guide/config/alipay_config.html",
    "revision": "8b0f64e789b34bb2c6e3aa64cd25b99f"
  },
  {
    "url": "guide/config/weixinpay_config.html",
    "revision": "e2c7ee983e5fde8f42071160e3663d28"
  },
  {
    "url": "guide/donate/index.html",
    "revision": "14744f6472a30eb2716d4059f66cc0ae"
  },
  {
    "url": "guide/http.html",
    "revision": "bc9511d7cae19324172a009bb72b01c2"
  },
  {
    "url": "guide/index.html",
    "revision": "a0ad3f97c2073cf51eacf4e09c4afc4b"
  },
  {
    "url": "guide/jdpay/index.html",
    "revision": "d07c4159e0f612ae9a8c998ba0cdda81"
  },
  {
    "url": "guide/maven.html",
    "revision": "69571349f14f8e6189a70e1b9fffd52d"
  },
  {
    "url": "guide/qqpay/index.html",
    "revision": "8907f34d44717eb9ff3a991586d7f491"
  },
  {
    "url": "guide/resource.html",
    "revision": "46758863ed94b2b6d8fc92159fe749ff"
  },
  {
    "url": "guide/unionpay/index.html",
    "revision": "b2ea2f08343c4ed84f05156188337b96"
  },
  {
    "url": "guide/weixin/tnw.html",
    "revision": "b43e8e07c65bea5d72f00703455c82de"
  },
  {
    "url": "guide/weixin/weixin_guide.html",
    "revision": "94766f38b0feec7631f2fb3143ff73f2"
  },
  {
    "url": "guide/wxpay/external.html",
    "revision": "1f217e0850cfc77988ae10b58e29c395"
  },
  {
    "url": "guide/wxpay/index.html",
    "revision": "b6fa11add40f42a0d907dd662e10e78d"
  },
  {
    "url": "guide/wxpay/question.html",
    "revision": "be6b477f324d52d68a1ed2e0f7e97238"
  },
  {
    "url": "index.html",
    "revision": "ef4196be1e25ccb501387cee7c7d3e1a"
  },
  {
    "url": "wxpay.jpeg",
    "revision": "519a6443adb0110d19e3bf9f273d5f62"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
