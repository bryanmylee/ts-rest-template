import { config } from 'dotenv';

config();

export const env = {
  port: process.env.PORT,
}

const FG_GREEN = '\x1b[32m';
const FG_RESET = '\x1b[0m';
const validateEnv = (e: typeof env) => {
  const undefinedKeys = Object.entries(e)
    .filter(([, value]) => value === undefined || value === '')
    .map(([key]) => key);

  if (undefinedKeys.length > 0) {
    const message =
      '.env missing the following properties:\n' +
      undefinedKeys.map((key) => '- ' + key).join('\n');
    throw new Error(message);
  }

  console.log(`${FG_GREEN}.env configured${FG_RESET}`);
};

validateEnv(env);

