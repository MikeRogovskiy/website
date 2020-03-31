import { test_2_Images } from "../images/products/scroll-pages/Test_2_Images";

export default [...Array(3)].map((el, index) => ({
	header: (index + 1) + "-SlideTest_2_Header",
	body: (index + 1) + "-SlideTest_2_Body",
	img: {
		en: test_2_Images.en[index],
		ru: test_2_Images.ru[index]
	}
}));
