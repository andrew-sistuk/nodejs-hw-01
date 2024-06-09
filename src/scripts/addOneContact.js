import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  const data = await fs.readFile(PATH_DB);
  const tempArray = JSON.parse(data.toString());
  tempArray.push(createFakeContact());
  await fs.writeFile(PATH_DB, JSON.stringify(tempArray));
};

await addOneContact();
