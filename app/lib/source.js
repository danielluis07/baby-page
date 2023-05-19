!(function (f, b, e, v, n, t, s) {
  if (f.fbq) return;
  n = f.fbq = function () {
    n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
  };
  if (!f._fbq) f._fbq = n;
  n.push = n;
  n.loaded = !0;
  n.version = "2.0";
  n.queue = [];
  t = b.createElement(e);
  t.async = !0;
  t.src = v;
  s = b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t, s);
})(
  window,
  document,
  "script",
  "https://connect.facebook.net/en_US/fbevents.js"
);
fbq("init", "1437872983710349");
fbq("track", "PageView");
<noscript>
  <img
    height="1"
    width="1"
    style="display:none"
    src="https://www.facebook.com/tr?id=1437872983710349&ev=PageView&noscript=1"
  />
</noscript>;

!(function (e) {
  if (!window.pintrk) {
    window.pintrk = function () {
      window.pintrk.queue.push(Array.prototype.slice.call(arguments));
    };
    var n = window.pintrk;
    (n.queue = []), (n.version = "3.0");
    var t = document.createElement("script");
    (t.async = !0), (t.src = e);
    var r = document.getElementsByTagName("script")[0];
    r.parentNode.insertBefore(t, r);
  }
})("https://s.pinimg.com/ct/core.js");
pintrk("load", "2613661290541", { em: "<user_email_address>" });
pintrk("page");

<noscript>
  <img
    height="1"
    width="1"
    style="display:none;"
    alt=""
    src="https://ct.pinterest.com/v3/?event=init&tid=2613661290541&pd[em]=<hashed_email_address>&noscript=1"
  />
</noscript>;
