"use strict";

(function () {
  if (!window.gsap) return;

  var mm = gsap.matchMedia();

  mm.add("(prefers-reduced-motion: no-preference)", function () {
    if (window.ScrollTrigger) gsap.registerPlugin(ScrollTrigger);

    var title = document.querySelector(".hero h1");
    if (title) {
      gsap.from(title, { opacity: 0, duration: 0.8, ease: "power2.out" });

      if (window.ScrollTrigger) {
        gsap.to(title, {
          yPercent: -18,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: 0.6
          }
        });
      }
    }

    var rows = gsap.utils.toArray(".index-list__row");
    if (rows.length && window.ScrollTrigger) {
      gsap.from(rows, {
        opacity: 0,
        y: 28,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.06,
        scrollTrigger: {
          trigger: ".index-list",
          start: "top 85%",
          once: true
        }
      });
    }
  });

  mm.add("(min-width: 861px) and (prefers-reduced-motion: no-preference)", function () {
    if (!window.ScrollTrigger) return;
    gsap.registerPlugin(ScrollTrigger);

    var reel = document.querySelector(".reel");
    var track = document.querySelector(".reel__track");
    if (!reel || !track) return;

    reel.classList.add("is-pinned");
    document.documentElement.style.scrollBehavior = "auto";

    var distance = function () {
      return Math.max(track.scrollWidth - window.innerWidth, 0);
    };

    gsap.to(track, {
      x: function () {
        return -distance();
      },
      ease: "none",
      scrollTrigger: {
        trigger: reel,
        pin: true,
        scrub: 0.6,
        start: "top top",
        end: function () {
          return "+=" + Math.max(distance(), window.innerHeight * 0.5);
        },
        invalidateOnRefresh: true
      }
    });

    var refresh = function () {
      ScrollTrigger.refresh();
    };
    window.addEventListener("load", refresh);
    if (document.readyState === "complete") refresh();

    return function () {
      reel.classList.remove("is-pinned");
      document.documentElement.style.scrollBehavior = "";
      window.removeEventListener("load", refresh);
    };
  });
})();
