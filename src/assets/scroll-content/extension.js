import { extensionImages } from "../images/products/scroll-pages/extensionImages";

export default [...Array(9)].map((element, index) => ({
	header: (index + 1) + "-SlideExtensionHeader",
	body: (index + 1) + "-SlideExtensionBody",
	img: {
		en: extensionImages.en[index],
		ru: extensionImages.ru[index]
	}
}));
