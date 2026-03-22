import { Contact } from "@/src/lib/contacts";

import { BadgeSection } from "@/src/ui/contacts/badge-section";

export function Contacts({ contacts }: { contacts: Contact[] }) {
	return (
		<section className="w-screen bg-[#3B9FE5] bg-opacity-10 flex flex-col items-center justify-center py-8 md:py-12 gap-6">
			<hr className="w-[95%] border-t border-blue-200" />
			<h1 className="text-3xl md:text-4xl font-bold text-[#3B9FE5]">
				Contacts
			</h1>
			<BadgeSection contacts={contacts} />
			<hr className="w-[95%] border-t border-blue-200" />
		</section>
	);
}
