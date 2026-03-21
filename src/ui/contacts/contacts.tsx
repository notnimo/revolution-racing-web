import { Contact } from "@/src/lib/contacts";

import { BadgeSection } from "@/src/ui/contacts/badge-section";

export function Contacts({ contacts }: { contacts: Contact[] }) {
  return (
    <div className="w-screen bg-rr-dark-blue flex flex-col items-center justify-around">
      <hr />
      <h1>Contacts</h1>
      <BadgeSection contacts={contacts} />
    </div>
  );
}
