import Sample from "../images/sample.png";
import Thumbcorrecta from "../images/thumb_correcta.png";
import Thumbearth from "../images/thumb_earth.png";
import Thumbcocon from "../images/thumb_cocon.png";
import Thumbportfolio from "../images/thumb_portfolio.png";
import Thumbtodoapp from "../images/thumb_todoapp.png";
import Thumbqrgenerator from "../images/thumb_qrgenerator.png";

export const Work = [
	{
		id: 1,
		name: "Correcta",
		description: "文章校正ツールLPのデモサイトです。KVにGSAPを使用しています。",
		tags: ["HTML", "SCSS", "JS", "gsap"],
		demo: "https://correcta.pages.dev",
		github: "",
		img: `${Thumbcorrecta}`,
	},
	{
		id: 2,
		name: "Earth Jewelry",
		description:
			"ジュエリーブランドのデモサイトです。GSAPとCSSで多くのアニメーションを取り入れています。",
		tags: ["HTML", "SCSS", "gsap"],

		demo: "https://earth-jewelry.pages.dev",
		github: "",
		img: `${Thumbearth}`,
	},
	{
		id: 3,
		name: "Cocon",
		description:
			"ホテルのデモサイトです。計5ページ作成しており、KVにはスライドショーを入れています。",
		tags: ["HTML", "SCSS", "JS"],

		demo: "https://cocon.pages.dev/",
		github: "",
		img: `${Thumbcocon}`,
	},
	{
		id: 4,
		name: "This Portfolio",
		description:
			"このポートフォリオです。Reactを用いて制作しており、Framer motionとGSAPでアニメーションを追加しています。",
		tags: ["React", "Framer Motion", "GSAP"],

		demo: "https://cocon.pages.dev/",
		github: "",
		img: `${Thumbportfolio}`,
	},
	{
		id: 5,
		name: "Todo App",
		description:
			"TailwindCSSを用いたTodoアプリです。ローカルストレージに保存する仕組みをとっております。",
		tags: ["HTML", "SCSS", "JS", "tailwind"],
		demo: "https://en-todoapp.pages.dev/",
		img: `${Thumbtodoapp}`,
	},
	{
		id: 6,
		name: "QR Code Generator",
		description:
			"QRコード生成サイトです。テキストやURLを入力するとそのQRコードを生成します。QR code APIを用いて作成しました。",
		tags: ["HTML", "SCSS", "JS"],
		demo: "https://qrcode-generator.pages.dev/",
		img: `${Thumbqrgenerator}`,
	},
];
