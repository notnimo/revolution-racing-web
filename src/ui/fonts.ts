import {
	Open_Sans,
	Inter,
	Poppins,
	Playfair_Display,
	Barlow_Condensed,
} from "next/font/google";

const open_sans = Open_Sans({ weight: "700", style: "italic" });
const opensans700 = Open_Sans({ weight: "700", style: "normal" });

const poppins = Poppins({ weight: "600", style: "normal" });
const poppins600 = Poppins({ weight: "600", style: "normal" });

const inter600 = Inter({ weight: "600", style: "normal" });
const inter500 = Inter({ weight: "500", style: "normal" });
const inter400 = Inter({ weight: "400", style: "normal" });

const playfair_display = Playfair_Display({
	weight: "600",
	style: "normal",
});

const barlowCondensed = Barlow_Condensed({
	weight: ["600", "700"],
	subsets: ["latin"],
	style: ["italic"],
});

export {
	open_sans,
	opensans700,
	poppins,
	poppins600,
	inter600,
	inter500,
	inter400,
	playfair_display,
	barlowCondensed,
};
