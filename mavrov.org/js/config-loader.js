// Define the function to apply configuration
function applyConfiguration() {
  // Set site title
  document.title = window.siteConfig.siteName;
  document.getElementById("site-name").textContent = window.siteConfig.siteName;
  document.getElementById("footer-site-name").textContent =
    window.siteConfig.siteName;

  // Set audio properties
  document.getElementById("audio-title").textContent =
    window.siteConfig.audioTitle;
  document.getElementById("audio-source").src = window.siteConfig.audioFile;
  document.getElementById("audio-player").load(); // Important to reload after changing source

  // Set background
  document.documentElement.style.setProperty(
    "--background-image",
    `url('${window.siteConfig.backgroundImage}')`,
  );
  document.documentElement.style.setProperty(
    "--background-blur",
    window.siteConfig.backgroundBlur,
  );
  document.documentElement.style.setProperty(
    "--background-brightness",
    window.siteConfig.backgroundBrightness,
  );
}

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Get site parameter from URL (e.g., ?site=jazz)
  const urlParams = new URLSearchParams(window.location.search);
  const site = urlParams.get("site") || "Kap1";

  // Determine which config file to load
  const configFile = `../configs/${site}.json`;

  fetch(configFile)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Configuration not found: ${configFile}`);
      }
      return response.json();
    })
    .then((data) => {
      window.siteConfig = data;
      applyConfiguration();
    })
    .catch((error) => {
      console.error("Error loading configuration:", error);
      // Fallback to default configuration
      window.siteConfig = {
        siteName: "Default Audio Site",
        audioFile: "audio/lofi-mixtape.mp3",
        audioTitle: "Default Audio Track",
        backgroundImage:
          "https://images.unsplash.com/photo-1470225620780-dba8ba36b745",
        backgroundBlur: "8px",
        backgroundBrightness: "0.4",
      };
      applyConfiguration();
    });
});
