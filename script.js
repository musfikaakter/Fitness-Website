gsap.from(".hero__description", {
  x: -1200,
  opacity: 0,
  duration: 2,
  stagger: 1,
});

gsap.from(".hero__image", {
  x: 1200,
  opacity: 0,
  duration: 2,
});

gsap.from(".habit__item-image", {
  scale: 0.5,
  opacity: 0.3,
  duration: 1.3,
  scrollTrigger: {
    trigger: ".habit__item-image",
    scroller: "body",
    start: "top 90%",
    end: "top 30%",
    scrub: 1,
  },
});

gsap.from(".team__image, .team__image-hidden", {
  scale: 0.5,
  opacity: 0,
  duration: 1.3,
  scrollTrigger: {
    trigger: ".team__image",
    scroller: "body",
    start: "top 90%",
    end: "top 30%",
    scrub: 1,
  },
});
