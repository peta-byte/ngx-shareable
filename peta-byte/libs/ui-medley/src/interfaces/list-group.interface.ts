export interface ListItem {
  id?: string;
  name: string;
  url?: string;
  children?: ListItem[];
}
