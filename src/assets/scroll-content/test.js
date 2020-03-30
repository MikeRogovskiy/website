import { testImages } from "../images/products/scroll-pages/TestImages";

export default [...Array(3)].map((el, index) => ({
	header: (index + 1) + "-SlideTestHeader",
	body: (index + 1) + "-SlideTestBody",
	img: {
		en: testImages.en[index],
		ru: testImages.ru[index]
	}
}));
