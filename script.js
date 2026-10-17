// Same-page navigation, respecting reduced-motion preferences.
const openContact = document.getElementById("openContact");
const closeContact = document.getElementById("closeContact");
const contactOverlay = document.getElementById("contactOverlay");
const copyEmail = document.getElementById("copyEmail");
const copyStatus = document.getElementById("copyStatus");

const portfolioEmail = "enricodavid1412@gmail.com";

function showContact() {
  contactOverlay.classList.add("active");
  contactOverlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  closeContact.focus();
}

function hideContact() {
  contactOverlay.classList.remove("active");
  contactOverlay.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  openContact.focus();
}

openContact.addEventListener("click", showContact);

closeContact.addEventListener("click", hideContact);

// Close when clicking the dark background
contactOverlay.addEventListener("click", function (event) {
  if (event.target === contactOverlay) {
    hideContact();
  }
});

// Close by pressing Escape
document.addEventListener("keydown", function (event) {
  if (
    event.key === "Escape" &&
    contactOverlay.classList.contains("active")
  ) {
    hideContact();
  }
});

// Copy email address
copyEmail.addEventListener("click", async function () {
  try {
    await navigator.clipboard.writeText(portfolioEmail);
    copyStatus.textContent = "✓ Copied!";
  } catch (error) {
    copyStatus.textContent = "Email: " + portfolioEmail;
  }
});
