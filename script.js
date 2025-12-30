gsap.registerPlugin(ScrollTrigger);

// Animate Hero Section on Load
gsap.timeline()
  .from(".hero h1", { y: -50, opacity: 0, duration: 1 })
  .from(".hero h2", { y: -50, opacity: 0, duration: 1 }, "-=0.5")
  .from(".badge", { scale: 0, opacity: 0, duration: 0.8 }, "-=0.5")
  .from(".hero-text", { y: 50, opacity: 0, duration: 1 }, "-=0.5")
  .from(".links", { y: 50, opacity: 0, stagger: 0.2, duration: 1 }, "-=0.5");

// Animate sections when scrolling into view
gsap.utils.toArray(".section-title, .grid").forEach(el => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 80%",
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  });
});
