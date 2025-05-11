gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.product').forEach((item) => {
  gsap.to(item, {
    scrollTrigger: {
      trigger: item,
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'power2.out'
  });
});
