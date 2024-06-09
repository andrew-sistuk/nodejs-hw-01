import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const countContacts = async () => {
    const data = await fs.readFile(PATH_DB);
    return JSON.parse(data.toString()).length;
};

console.log(await countContacts());
