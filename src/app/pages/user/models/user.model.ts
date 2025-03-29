export interface User {
  name: string;
  language: string;
  id: string;
  bio: string;
  version: number;
  isEditing?: boolean; // Optional property to track editing state
}
