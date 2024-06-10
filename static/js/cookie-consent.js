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
    console.log(`Cookie set: ${name}=${value}; ${expires}; path=/;`);
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

  // Check if user has previously accepted cookies
  const cookieConsent = getCookie("cookieConsent");
  const hasAcceptedCookies = cookieConsent === "accepted";
  console.log(`Cookie Consent: ${cookieConsent}`);
  console.log(`Has Accepted Cookies: ${hasAcceptedCookies}`);

  // Show or hide banner based on cookie consent
  if (!hasAcceptedCookies) {
    console.log("Showing banner because cookies have not been accepted.");
    cookieConsentBanner.style.display = "block";
    if (allowCookiesButton) allowCookiesButton.style.display = "none";
    if (cancelCookiesButton) cancelCookiesButton.style.display = "none";
  } else {
    console.log("Hiding banner because cookies have been accepted.");
    cookieConsentBanner.style.display = "none";
    if (allowCookiesButton) allowCookiesButton.style.display = "none";
    if (cancelCookiesButton) cancelCookiesButton.style.display = "block";
  }

  // Event listener for accept cookies button
  acceptCookiesButton.addEventListener("click", function () {
    setCookie("cookieConsent", "accepted", 365);
    console.log("Cookies have been accepted from banner");
    cookieConsentBanner.style.display = "none";
    if (cancelCookiesButton) cancelCookiesButton.style.display = "block";
    if (allowCookiesButton) allowCookiesButton.style.display = "none";
  });

  // Event listener for reject cookies button
  rejectCookiesButton.addEventListener("click", function () {
    console.log("You have denied cookies from banner");
    cookieConsentBanner.style.display = "none";
    if (allowCookiesButton) allowCookiesButton.style.display = "block";
    if (cancelCookiesButton) cancelCookiesButton.style.display = "none";
  });

  // Event listener for cancel cookies button
  if (cancelCookiesButton) {
    cancelCookiesButton.addEventListener("click", function () {
      console.log("You have canceled the use of cookies from footer");
      // Delete the cookie consent preference
      document.cookie =
        "cookieConsent=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      if (cancelCookiesButton) cancelCookiesButton.style.display = "none";
      if (allowCookiesButton) allowCookiesButton.style.display = "block";
    });
  }

  // Event listener for allow cookies button
  if (allowCookiesButton) {
    allowCookiesButton.addEventListener("click", function () {
      setCookie("cookieConsent", "accepted", 365);
      console.log('Cookies enabled from footer');
      if (allowCookiesButton) allowCookiesButton.style.display = "none";
      if (cancelCookiesButton) cancelCookiesButton.style.display = "block";
    });
  }
});
