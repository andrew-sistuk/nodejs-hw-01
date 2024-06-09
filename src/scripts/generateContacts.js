import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  const tempArray = [];
  for (let index = 0; index < number; index++) {
    tempArray.push(createFakeContact());
  }
  await fs.writeFile(PATH_DB, JSON.stringify(tempArray));
};

await generateContacts(5);
