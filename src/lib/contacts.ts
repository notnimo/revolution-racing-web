import {
	Facebook,
	Globe,
	Mail,
	Youtube,
	Linkedin,
	Instagram,
} from "lucide-react";
import { FaTiktok } from "react-icons/fa";

import { default as rawContacts } from "@/src/lib/data/contact-sq.json" with { type: "json" };

const typeOpts = [
	"instagram",
	"facebook",
	"linkedin",
	"youtube",
	"email",
	"tiktok",
	"website",
] as const;
type typeOptions = (typeof typeOpts)[number];

type Contact = {
	id: number;
	type: typeOptions;
	href: string;
	title?: string;
	description?: string;
};

const matchIcon = {
	tiktok: FaTiktok,
	instagram: Instagram,
	facebook: Facebook,
	linkedin: Linkedin,
	youtube: Youtube,
	email: Mail,
	website: Globe,
};

let contactsSq: Contact[] = [];
Object.values(rawContacts).forEach((contact) =>
	contactsSq.push(contact as Contact),
);

export { type Contact, matchIcon, contactsSq };
