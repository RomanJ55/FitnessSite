function toggleNavbar(collapseID) {
  document.getElementById(collapseID).classList.toggle("hidden");
  document.getElementById(collapseID).classList.toggle("block");
}

const mb = document.getElementById("mainButton");
mb.onclick = () => {
  window.scrollBy({ top: 2400, left: 0, behavior: "smooth" });
};

const bb = document.getElementById("bottomButton");
bb.onclick = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};

AOS.init({
  delay: 200,
  duration: 1200,
  once: false,
});
