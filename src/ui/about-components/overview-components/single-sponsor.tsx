import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
	CardFooter,
} from "@/src/components/card";

import { poppins, inter500 } from "@/src/ui/fonts";

import { Sponsor, PrimarySponsor } from "@/src/lib/home/sponsor";
import { matchIcon } from "@/src/lib/contacts";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/src/components/carousel";

function Platinum({
	sponsor,
	wrapperStyle,
}: {
	sponsor: PrimarySponsor;
	wrapperStyle: string;
}) {
	return (
		<Card className={`w-full h-full rounded-2xl ${wrapperStyle}`}>
			<CardContent className="flex flex-col items-center justify-around gap-4 p-2 md:p-3">
				<CardTitle
					className={`${poppins.className} antialiased text-lg font-semibold text-[#1B5C70]`}>
					<h1>{sponsor.sponsorName.toUpperCase()}</h1>
				</CardTitle>

				<div className="flex flex-col md:grid md:grid-cols-3 md:grid-rows-1 items-center justify-between gap-3">
					<img
						src={sponsor.image.imageRef}
						alt={`${sponsor.sponsorName}'s card picture`}
						className="rounded-lg w-full h-[20vw] max-h-[12rem] md:h-[16vw] md:max-h-[14rem] object-contain"
					/>

					<CardDescription
						className={`${inter500.className} antialiased text-center text-[0.675rem] md:text-sm text-[#2C3E50] whitespace-pre-wrap`}>
						{sponsor.description}
					</CardDescription>

					<Carousel
						opts={{ align: "start" }}
						className="w-full h-full rounded-xl relative p-4">
						<CarouselContent>
							{sponsor.carouselImages &&
								sponsor.carouselImages.map((image, index) => (
									<CarouselItem
										key={index}
										className="max-h-[14rem] max-w-[20rem] flex items-center justify-center">
										<div className="p-1 w-full h-full max-w-full max-h-full">
											<Card className="h-full">
												<CardContent className="h-full flex items-center justify-center p-0">
													<img
														src={image.imageRef}
														alt={image.altText}
														className="max-w-full max-h-full object-contain rounded-lg"
													/>
												</CardContent>
											</Card>
										</div>
									</CarouselItem>
								))}
						</CarouselContent>
						<CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-1 z-10" />
						<CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-1 z-10" />
					</Carousel>
				</div>

				<CardFooter className="mt-2">
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
									<Icon size={24} />
								</a>
							);
						})}
					</div>
				</CardFooter>
			</CardContent>
		</Card>
	);
}

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

	if (level === "platinum") {
		return <Platinum sponsor={sponsor} wrapperStyle={levelStyles} />;
	}

	return (
		<Card className={`w-full h-full rounded-2xl ${levelStyles}`}>
			<CardContent className="flex flex-col items-center justify-around gap-3 p-4 md:p-6">
				<CardTitle
					className={`${poppins.className} antialiased text-center text-lg font-semibold text-[#1B5C70]`}>
					<h1>{sponsor.sponsorName.toUpperCase()}</h1>
				</CardTitle>

				<img
					src={sponsor.image.imageRef}
					alt={`${sponsor.sponsorName}'s card picture`}
					className="rounded-lg w-full h-[20vw] max-h-[12rem] md:h-[16vw] md:max-h-[14rem] object-contain"
				/>

				{(level === "gold" || level === "tier3") && (
					<CardHeader
						className={`${poppins.className} antialiased text-sm md:text-base text-center text-[#2C3E50]`}>
						{sponsor.header}
					</CardHeader>
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
