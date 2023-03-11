import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    ID: process.env.ID,
    NAME: process.env.NAME,
    EMAIL: process.env.EMAIL,
    PASSWORD: process.env.PASSWORD,
    
  };
});