import { type Contact, type ContactPack } from "@/src/lib/contacts";

export function BadgeSection({ contacts }: { contacts: ContactPack }) {
  const temp = <></>;

  const contactArray: Contact[] = Object.values(contacts) as Contact[];
  for (const contact of contactArray) {
    // handle each contact (render badges here)
  }
  return temp;
}
