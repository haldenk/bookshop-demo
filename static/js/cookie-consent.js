document.addEventListener("DOMContentLoaded", function () {
  const cookieConsentBanner = document.getElementById("cookie-consent-banner");
  const acceptCookiesButton = document.getElementById("accept-cookies");
  const rejectCookiesButton = document.getElementById("reject-cookies");

  // Check if user has previously accepted cookies
  const cookieConsent = getCookie("cookieConsent");
  const hasAcceptedCookies = cookieConsent === "accepted";

  // Show banner if user hasn't accepted cookies before
  if (!hasAcceptedCookies) {
    cookieConsentBanner.style.display = "block";
  }

  // Event listener for accept cookies button
  acceptCookiesButton.addEventListener("click", function () {
    setCookie("cookieConsent", "accepted", 365);
    const trackingScript = `
        console.log("You have accepted cookies");
      `;
    eval(trackingScript);
    cookieConsentBanner.style.display = "none";
  });

  // Event listener for reject cookies button (no action)
  rejectCookiesButton.addEventListener("click", function () {
    console.log("You have denied cookies");
    cookieConsentBanner.style.display = "none";
  });

  // Function to set a cookie
  function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  }

  // Function to get the value of a cookie
  function getCookie(name) {
    const cookieName = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(";");
    for (let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i];
      while (cookie.charAt(0) === " ") {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(cookieName) === 0) {
        return cookie.substring(cookieName.length, cookie.length);
      }
    }
    return "";
  }
});
