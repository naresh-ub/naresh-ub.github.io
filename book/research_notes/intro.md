# Intro to Research Notes

<div class="nav-links">
  <a href="../intro.html">About Me</a>
  <a href="../publications.html">Publications</a>
  <a href="../intro.html#my-teaching">My Teaching</a>
  <a href="../research_notes/intro.html">Research Notes</a>
</div>

---

Notes coming very soon!

<div id="trig-embed" style="max-width:900px;margin:0 auto;overflow:hidden;">
  <iframe
    id="trig-frame"
    src="../_static/remotion/trig.html"
    title="Trig Interactive"
    allow="fullscreen; autoplay"
    loading="lazy"
    style="
      display:block;
      width:100%;
      border:0;
      /* placeholder so layout is stable before measurement arrives */
      aspect-ratio: 16 / 9;
      height:auto;
      overflow:hidden; /* belt and suspenders */
    "
  ></iframe>
</div>

<script>
(function () {
  const frame = document.getElementById("trig-frame");

  function onMessage(e) {
    if (!frame.contentWindow || e.source !== frame.contentWindow) return;
    const d = e.data || {};
    if (d.type !== "remotion:height") return;
    const h = Math.max(0, Math.min(20000, Number(d.value) || 0));
    if (h) {
      frame.style.height = h + "px";   // exact pixel height -> no inner scroll
      frame.style.aspectRatio = "";    // drop placeholder
    }
  }

  window.addEventListener("message", onMessage);
  frame.addEventListener("load", () => {
    // ask child to measure immediately
    frame.contentWindow?.postMessage({ type: "remotion:get-height" }, "*");
  });
})();
</script>
