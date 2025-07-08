// analytics.js

// Load Google Analytics script asynchronously
(function() {
  var script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-DWB6KNHLQP';
  document.head.appendChild(script);
})();

// Initialize dataLayer and gtag function
window.dataLayer = window.dataLayer || [];
function gtag() {
  window.dataLayer.push(arguments);
}

// Initialize Google Analytics with your Measurement ID
gtag('js', new Date());
gtag('config', 'G-DWB6KNHLQP');