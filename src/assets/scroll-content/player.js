import { playerImages } from "../images/products/scroll-pages/playerImages";

export default [...Array(9)].map((element, index) => ({
  header: (index + 1) + "-SlidePlayerHeader",
  body: (index + 1) + "-SlidePlayerBody",
  img: {
    en: playerImages.en[index],
    ru: playerImages.ru[index]
  }
}));