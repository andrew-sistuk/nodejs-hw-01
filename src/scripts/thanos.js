import fs from 'node:fs/promises';
import { v4 as uuidv4 } from 'uuid';
import { PATH_DB, API_RANODM_ORG } from '../constants/contacts.js';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.random.org/json-rpc/2';

const Gauntlet = async (number) => {
  const options = {
    jsonrpc: '2.0',
    method: 'generateIntegers',
    params: {
      apiKey: API_RANODM_ORG,
      n: number,
      min: 1,
      max: 2,
      replacement: true,
    },
    id: uuidv4(),
  };

  const result = await axios.post('/invoke', options);
  console.log(result.data.result.random.data);
  return result.data.result.random.data;
};

export const thanos = async () => {
  const data = await fs.readFile(PATH_DB);
  const tempArray = JSON.parse(data.toString());
  const lifeChances = await Gauntlet(tempArray.length);

  await fs.writeFile(
    PATH_DB,
    JSON.stringify(
      tempArray.filter((_, index) => {
        if (lifeChances[index] % 2 === 0) {
          return true;
        }
      }),
    ),
  );
};

await thanos();
