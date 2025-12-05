

import 'dotenv/config'; // loads .env(.local)
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Use relative imports because Node doesn't understand Next aliases
import { connectionDB } from '../src/lib/connectDB.js';
import IntradayEquityModel from '../src/schemas/IntradayEquity.schema.js';
import IntradayEquityInitial from '../src/intialData/IntradayEquityData.js';

(async () => {
  try {
    await connectionDB();

    const count = await IntradayEquityModel.countDocuments();
    if (count > 0) {
      console.log(`IntradayEquity collection already has ${count} documents — skipping insert.`);
      process.exit(0);
    }

    const inserted = await IntradayEquityModel.insertMany(IntradayEquityInitial);
    console.log(`Inserted ${inserted.length} documents into IntradayEquity.`);
    process.exit(0);
  } catch (err) {
    console.error('Seeding failed:', err);
    process.exit(1);
  }
})();