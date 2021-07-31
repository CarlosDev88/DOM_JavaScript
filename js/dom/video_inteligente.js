const d = document,
  w = window;

export default function smartVideo() {
  const $video = d.querySelectorAll("video[data-smart-video]");

  function cb(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.play();
      } else {
        entry.target.pause();
      }

      w.addEventListener("visibilitychange", (e) => {
        if (d.visibilityState === "visible") {
          entry.target.play();
        } else {
          entry.target.pause();
        }
      });
    });
  }
  const observer = new IntersectionObserver(cb, {
    threshold: [0.5, 0.75],
  });

  $video.forEach((video) => {
    observer.observe(video);
  });
}
