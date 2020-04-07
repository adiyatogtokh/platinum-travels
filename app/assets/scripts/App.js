import "../styles/styles.css";

import MobileMenu from "./modules/mobile-menu";
import RevealOnScroll from "./modules/reveal";
import StickyHeader from "./modules/StickyHeader";

let mobileMenu = new MobileMenu();
new RevealOnScroll(document.querySelectorall(".feature-item"), 75);
new RevealOnScroll(document.querySelectorall(".testimonial"), 50);
let stickyHeader = new StickyHeader();
if (module.hot) {
  module.hot.accept();
}
