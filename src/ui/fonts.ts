import { Open_Sans, Inter, Poppins, Playfair_Display } from "next/font/google";

const open_sans = Open_Sans({ weight: "700", style: "italic" });

const poppins = Poppins({ weight: "600", style: "normal" });

const inter600 = Inter({ weight: "600", style: "normal" });
const inter500 = Inter({ weight: "500", style: "normal" });
const inter400 = Inter({ weight: "400", style: "normal" });

const playfair_display = Playfair_Display({
  weight: "600",
  style: "normal",
});

export { open_sans, poppins, inter600, inter500, inter400, playfair_display };
