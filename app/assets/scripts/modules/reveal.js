class RevealOnScroll {
  constructor() {
    this.itemsToReveal = document.querySelectorall(".feature-item");
    this.hidenInitially();
  }

  hidenInitially() {
    this.itemsToReveal.forEach((el) => el.classList.add("reveal-item"));
  }
}
export default RevealOnScroll;
