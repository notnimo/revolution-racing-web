import { ArrowRight } from "lucide-react";

import { Contact } from "@/src/lib/contacts";

import { BadgeSection } from "@/src/ui/contacts/badge-section";
import { open_sans } from "@/src/ui/fonts";

export function Contacts({ contacts }: { contacts: Contact[] }) {
	return (
		<section className="w-screen bg-opacity-10 flex flex-col items-center justify-center py-8 md:py-12 gap-6 bg-white p-4 md:p-10">
			<hr className="w-[95%] border-t border-blue-200" />
			<div className="flex flex-col md:flex-row items-center w-full text-left justify-between border border-[#E8F5FC] rounded-2xl p-4 md:p-6 gap-3 bg-[#E8F5FC]">
				<div>
					<h1 className="text-3xl md:text-4xl font-bold text-[#3B9FE5]">
						Contacts
					</h1>
					<h2 className="text-[#2C3E50]">
						Connect with us on social media and stay updated with our latest
						news
					</h2>
				</div>
				<a
					href="https://linktr.ee/_revolutionracing_"
					target="_blank"
					className="inline-flex items-center gap-2 rounded-lg bg-[#1FBEB6] px-3 py-2 text-white font-semibold hover:bg-[#7EC8E3] transition-colors">
					<ArrowRight />
					<span className={open_sans.className}>MORE CONTACTS</span>
				</a>
			</div>
			<BadgeSection contacts={contacts} />
			<hr className="w-[95%] border-t border-blue-200" />
		</section>
	);
}
