import mongoose from 'mongoose';

async function connectDB() {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}`
    );
    console.info(
      '🌏 Mongodb Connecting successfully host : ' +
        connectionInstance.connection.host
    );
  } catch (error) {
    console.error('MongoDB conection error : ' + error);
    process.exit(1);
  }
}

export { connectDB };
