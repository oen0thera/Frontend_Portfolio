export type ContactItemProps = {
  type: ContactItemType;
};

export enum ContactItemType {
  LINK = "link",
  CONTACT = "contact",
}
