import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/src/components/card";

import { TMtype } from "@/src/lib/team-members";
import { poppins, inter500 } from "@/src/ui/fonts";

export function TMCard({ teamMember }: { teamMember: TMtype }) {
	return (
		<div className="w-full min-h-[18rem] md:min-h-[20rem] rounded-2xl bg-[#FFFFFF] border border-[#E8F5FC] shadow-md overflow-hidden">
			<Card className="w-full h-[60vh] max-h-[30rem]">
				<CardContent className="flex flex-col items-center justify-start gap-3 p-4">
					<CardTitle
						className={`${poppins.className} antialiased text-xl font-semibold text-[#3B9FE5]`}>
						{teamMember.name.toUpperCase()}
					</CardTitle>
					<img
						src={teamMember.image.imageRef}
						alt={`${teamMember.name}'s card picture`}
						className="h-full max-h-[21rem] object-cover rounded-lg"
					/>
					<CardHeader
						className={`${poppins.className} antialiased text-base text-[#2C3E50]`}>
						{teamMember.position}
					</CardHeader>
					{/*<CardDescription
						className={`${inter500.className} antialiased text-sm text-[#2C3E50] max-w-[90%]`}>
						{teamMember.description}
					</CardDescription>*/}
				</CardContent>
			</Card>
		</div>
	);
}
