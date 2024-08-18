import dotenv from 'dotenv';
import { connectDB } from './db';
import { app } from './app';
dotenv.config({ path: './.env' });

(async () => {
  await connectDB();

  const port = process.env.PORT || 8000;

  app.listen(port, () => {
    console.log(`🚝 Server is running on port ${port}`);
  });
})();
