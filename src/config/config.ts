import dotenv from 'dotenv';

dotenv.config();

interface Config {
  port: number;
  foursquareApiKey: string;
  openaiApiKey: string;
  requiredCode: string;
}

const config: Config = {
  port: Number(process.env.PORT) || 3000,
  foursquareApiKey: process.env.FOURSQUARE_API_KEY || '',
  openaiApiKey: process.env.OPENAI_API_KEY || '',
  requiredCode: process.env.REQUIRED_CODE || 'pioneerdevai',
};

export default config;
