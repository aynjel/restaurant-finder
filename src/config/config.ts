import dotenv from 'dotenv';

dotenv.config();

interface Config {
  port: number;
  foursquareApiKey: string;
  geminiApiKey: string;
  requiredCode: string;
}

const config: Config = {
  port: Number(process.env.PORT) || 3000,
  foursquareApiKey: process.env.FOURSQUARE_API_KEY || '',
  geminiApiKey: process.env.GEMINI_API_KEY || '',
  requiredCode: process.env.REQUIRED_CODE || '',
};

export default config;
