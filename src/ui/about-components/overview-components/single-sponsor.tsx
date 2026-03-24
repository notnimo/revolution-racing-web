import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
	CardFooter,
} from "@/src/components/card";

import { poppins, inter500 } from "@/src/ui/fonts";

import { Sponsor } from "@/src/lib/sponsor";
import { matchIcon } from "@/src/lib/contacts";

function SingleSponsor({
	sponsor,
	level,
}: {
	sponsor: Sponsor;
	level: string;
}) {
	const levelStyles =
		level === "platinum"
			? "bg-white border-2 border-[#3B9FE5] shadow-lg"
			: level === "gold"
				? "bg-white border-2 border-[#7EC8E3] shadow-md"
				: "bg-white border border-slate-200 shadow-sm";

	return (
		<Card className={`w-full h-full rounded-2xl ${levelStyles}`}>
			<CardContent className="flex flex-col items-center justify-around gap-3 p-4 md:p-6">
				<CardTitle
					className={`${poppins.className} antialiased text-lg font-semibold text-[#1B5C70]`}>
					{sponsor.sponsorName.toUpperCase()}
				</CardTitle>

				<img
					src={sponsor.image.imageRef}
					alt={`${sponsor.sponsorName}'s card picture`}
					className="rounded-lg w-full h-[20vw] max-h-[12rem] md:h-[16vw] md:max-h-[14rem] object-contain"
				/>

				{(level === "platinum" || level === "gold" || level === "tier3") && (
					<CardHeader
						className={`${poppins.className} antialiased text-sm md:text-base text-[#2C3E50]`}>
						{sponsor.header}
					</CardHeader>
				)}

				{level === "platinum" && (
					<CardDescription
						className={`${inter500.className} antialiased text-sm text-[#2C3E50]`}>
						{sponsor.description}
					</CardDescription>
				)}

				<CardFooter>
					<div className="flex flex-row items-center justify-center gap-3">
						{Object.values(sponsor.contactSocials).map((contact) => {
							const Icon = matchIcon[contact.type];
							return (
								<a
									key={contact.href}
									href={contact.href}
									target="_blank"
									rel="noopener noreferrer"
									className="text-[#1FBEB6] hover:text-[#3B9FE5] transition-colors">
									<Icon size={18} />
								</a>
							);
						})}
					</div>
				</CardFooter>
			</CardContent>
		</Card>
	);
}
export { SingleSponsor };
