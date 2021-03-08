import { v4 as uuidv4 } from "uuid";

export default function createContact({ name, number }) {
  return {
    id: uuidv4(),
    name,
    number,
  };
}
