import { type Contact, type ContactPack, matchIcon } from "@/src/lib/contacts";

export function BadgeSection({ contacts }: { contacts: ContactPack }) {
  return (
    <>
      <div className="flex flex-row justify-around items-center w-full">
        {contacts.map((contact: Contact) => {
          const Icon = matchIcon[contact.type];
          return (
            <div
              className="w-[33vh] flex flex-col justify-start items-center"
              key={contact.id}>
              <a href={contact.href} target="_blank" rel="noopener noreferrer">
                <div className="flex flex-row justify-between items-center gap-2">
                  <Icon />
                  <h3>{contact.title}</h3>
                </div>
              </a>
              <div>
                <p>{contact.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
