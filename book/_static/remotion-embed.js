// _static/remotion-embed.js
(function () {
  function askHeight(iframe) {
    try {
      iframe.contentWindow?.postMessage({ type: "remotion:get-height" }, "*");
    } catch (_) {}
  }

  function sendTheme(iframe) {
    try {
      const docEl = document.documentElement;
      const theme = docEl.getAttribute("data-theme") || "light";
      const mode = (docEl.getAttribute("data-mode") || "").toLowerCase(); // some themes use data-mode
      const resolved = theme || (mode === "dark" ? "dark" : "light");
      iframe.contentWindow?.postMessage({ type: "embed:theme", theme: resolved }, "*");
    } catch (_) {}
  }

  function onMessage(e) {
    const data = e.data || {};
    if (data.type !== "remotion:height") return;

    const iframes = document.querySelectorAll('iframe.remotion-embed, iframe[data-remotion="true"]');
    for (const f of iframes) {
      if (f.contentWindow === e.source) {
        const raw = Number(data.value) || 0;
        const safeH = Math.min(20000, Math.max(0, Math.ceil(raw) + 1));
        f.style.height = safeH + "px";
        f.style.aspectRatio = "";
        break;
      }
    }
  }

  function init() {
    const iframes = document.querySelectorAll('iframe.remotion-embed, iframe[data-remotion="true"]');
    for (const f of iframes) {
      f.style.display = f.style.display || "block";
      f.style.width = f.style.width || "100%";
      f.style.border = f.style.border || "0";
      f.style.overflow = f.style.overflow || "hidden";
      f.style.background = f.style.background || "transparent";
      f.style.minHeight = f.style.minHeight || "300px";

      f.addEventListener("load", () => { askHeight(f); sendTheme(f); });
      askHeight(f);
      sendTheme(f);
    }

    // If your site toggles theme at runtime, re-broadcast on attribute changes
    const mo = new MutationObserver(() => {
      for (const f of document.querySelectorAll('iframe.remotion-embed, iframe[data-remotion="true"]')) {
        sendTheme(f);
      }
    });
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme", "data-mode"] });
  }

  window.addEventListener("message", onMessage);
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
