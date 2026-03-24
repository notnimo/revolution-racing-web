import { type Contact, matchIcon } from "@/src/lib/contacts";

function calcRowsCols(numContacts: number): [number, number] {
	const cols = Math.ceil(Math.sqrt(numContacts));
	const rows = Math.ceil(numContacts / cols);
	return [rows, cols];
}

export function BadgeSection({ contacts }: { contacts: Contact[] }) {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full px-4 md:px-8">
			{contacts.map((contact: Contact) => {
				const Icon = matchIcon[contact.type];
				return (
					<a
						key={contact.id}
						href={contact.href}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-3 p-3 rounded-xl border border-[#E8F5FC] bg-[#E8F5FC] hover:bg-blue-100 transition-all">
						<Icon className="text-[#1FBEB6]" />
						<div className="flex flex-col">
							<h3 className="text-lg font-semibold text-[#2C3E50]">
								{contact.title}
							</h3>
							<p className="text-sm text-[#2C3E50] max-w-[16rem]">
								{contact.description}
							</p>
						</div>
					</a>
				);
			})}
		</div>
	);
}
