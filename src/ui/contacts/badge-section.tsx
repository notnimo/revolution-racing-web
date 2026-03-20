import { type Contact, type ContactPack, matchIcon } from "@/src/lib/contacts";

function calcRowsCols(numContacts: number): [number, number] {
  const cols = Math.ceil(Math.sqrt(numContacts));
  const rows = Math.ceil(numContacts / cols);
  return [rows, cols];
}

export function BadgeSection({ contacts }: { contacts: ContactPack }) {
  const [rows, cols] = calcRowsCols(contacts.length);
  const wrapperStyle = `grid grid-cols-${cols} grid-rows-${rows} w-full`;
  return (
    <>
      <div className={wrapperStyle}>
        {contacts &&
          contacts.map((contact: Contact) => {
            const Icon = matchIcon[contact.type];
            return (
              <div
                className="flex flex-row justify-center items-center"
                key={contact.id}>
                <div className="">
                  <Icon />
                </div>
                <a
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer">
                  <div className="flex flex-col justify-between items-center gap-2">
                    <h3>{contact.title}</h3>
                    <p className="max-w-[12rem]">{contact.description}</p>
                  </div>
                </a>
              </div>
            );
          })}
      </div>
    </>
  );
}
