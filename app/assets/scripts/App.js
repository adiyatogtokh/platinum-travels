import "../styles/styles.css";
import RevealOnScroll from "./modules/reveal";
import MobileMenu from "./modules/mobile-menu";

let mobileMenu = new MobileMenu();
let revealOnScroll = new RevealOnScroll();
if (module.hot) {
  module.hot.accept();
}
