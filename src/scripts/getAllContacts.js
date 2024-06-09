import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const getAllContacts = async () => {
  const data = await fs.readFile(PATH_DB);
  return JSON.parse(data.toString());
};

console.log(await getAllContacts());
