document.addEventListener("DOMContentLoaded", function () {
  const cookieConsentBanner = document.getElementById("cookie-consent-banner");
  const acceptCookiesButton = document.getElementById("accept-cookies");
  const rejectCookiesButton = document.getElementById("reject-cookies");
  const cancelCookiesButton = document.getElementById("cancel-cookies");
  const allowCookiesButton = document.getElementById("allow-cookies");

  // Function to set a cookie
  function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/; SameSite=Lax`;
  }

  // Function to get the value of a cookie
  function getCookie(name) {
    const cookieName = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(";");

    for (let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i].trim();
      if (cookie.indexOf(cookieName) === 0) {
        return cookie.substring(cookieName.length, cookie.length);
      }
    }
    return "";
  }

  // Check if user has previously accepted or rejected cookies
  const cookieConsent = getCookie("cookieConsent");
  const hasAcceptedCookies = cookieConsent === "accepted";
  const hasRejectedCookies = cookieConsent === "rejected";

  // Show banner if user hasn't accepted or rejected cookies before
  if (!hasAcceptedCookies && !hasRejectedCookies) {
    cookieConsentBanner.style.display = "block";
  }

  // Event listener for accept cookies button
  acceptCookiesButton.addEventListener("click", function () {
    setCookie("cookieConsent", "accepted", 365);
    const trackingScript = `
      console.log("Cookies have been accepted from banner");
    `;
    eval(trackingScript);
    cookieConsentBanner.style.display = "none";
    cancelCookiesButton.style.display = "block";
    allowCookiesButton.style.display = "none";
  });

  // Event listener for reject cookies button
  rejectCookiesButton.addEventListener("click", function () {
    setCookie("cookieConsent", "rejected", 365);
    console.log("You have denied cookies from banner");
    cookieConsentBanner.style.display = "none";
    allowCookiesButton.style.display = "block";
    cancelCookiesButton.style.display = "none";
  });

  // Event listener for cancel cookies button
  cancelCookiesButton.addEventListener("click", function () {
    console.log("You have canceled the use of cookies from footer");
    // Delete the cookie consent preference
    document.cookie = "cookieConsent=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    cancelCookiesButton.style.display = "none";
    allowCookiesButton.style.display = "block";
  });

  // Event listener for allow cookies button
  allowCookiesButton.addEventListener("click", function () {
    setCookie("cookieConsent", "accepted", 365);
    console.log('Cookies enabled from footer');
    allowCookiesButton.style.display = "none";
    cancelCookiesButton.style.display = "block";
  });
});
