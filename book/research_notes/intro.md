# Intro to Research Notes

<div class="nav-links">
  <a href="../intro.html">About Me</a>
  <a href="../publications.html">Publications</a>
  <a href="../intro.html#my-teaching">My Teaching</a>
  <a href="../research_notes/intro.html">Research Notes</a>
</div>

---

First animation with zoom and interactive ability

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

Jigsaw puzzle animation to explain encoding and decoding!

<div id="jigsaw-embed" style="max-width:300px;margin:0 auto;overflow:hidden;">
  <iframe
    id="jigsaw-frame"
    src="../_static/remotion/jigsaw.html"
    title="jigsaw Interactive"
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
  const frame = document.getElementById("jigsaw-frame");

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


Forward Diffusion with controls! Always wanted to do this!

<div id="diffusion-embed" style="max-width:900px;margin:0 auto;overflow:hidden;">
  <iframe
    id="diffusion-frame"
    class="remotion-safe-embed" 
    src="../_static/remotion/diffusion.html?v=2"
    title="diffusion Interactive"
    allow="fullscreen; autoplay"
    loading="lazy"
    style="
      display:block;
      width:100%;
      border:0;
      aspect-ratio:16/9;
      height:auto;
      overflow:hidden;
      background:transparent;
    "
  ></iframe>
</div>


<script>
(function () {
  const frame = document.getElementById("diffusion-frame");

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

Reverse Diffusion by storing forward noise values.

<div id="diffusion-embed" style="max-width:900px;margin:0 auto;overflow:hidden;">
  <iframe
    id="diffusion-frame-reverse"
    class="remotion-safe-embed" 
    src="../_static/remotion/diffusion-reverse.html"
    title="diffusion Interactive"
    allow="fullscreen; autoplay"
    loading="lazy"
    style="
      display:block;
      width:100%;
      border:0;
      aspect-ratio:16/9;
      height:auto;
      overflow:hidden;
      background:transparent;
    "
  ></iframe>
</div>


<script>
(function () {
  const frame = document.getElementById("diffusion-frame-reverse");

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

Forward Diffusion on Images!

<div id="diffusion-embed" style="max-width:900px;margin:0 auto;overflow:hidden;">
  <iframe
    id="diffusion-frame-image"
    class="remotion-safe-embed" 
    src="../_static/remotion/diffusion-forward-image.html"
    title="diffusion Interactive"
    allow="fullscreen; autoplay"
    loading="lazy"
    style="
      display:block;
      width:100%;
      border:0;
      aspect-ratio:16/9;
      height:auto;
      overflow:hidden;
      background:transparent;
    "
  ></iframe>
</div>


<script>
(function () {
  const frame = document.getElementById("diffusion-frame-image");

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