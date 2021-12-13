import mongoose from 'mongoose';
import { app } from './app';
import { Events, fetchEvents } from './services';
import { logger } from './middlewares';

const start = async () => {
  if (!process.env.MONGO_URI) {
    throw new Error('MONGO_URI must be defined');
  }

  if (!process.env.WEB3_PROVIDER) {
    throw new Error('WEB3_PROVIDER must be defined');
  }

  if (!process.env.ADDRESS) {
    throw new Error('ADDRESS must be defined');
  }

  try {
    await mongoose.connect(process.env.MONGO_URI);
    logger.log({ level: 'info', message: 'Connected to Mongo Database' });

    Events.start();
    logger.log({ level: 'info', message: 'Listening for Ethereum Events' });

    //Calling Fetch Events
    fetchEvents();
  } catch (err: any) {
    logger.log({ level: 'error', message: err.message });
  }
};

app.listen(5000, () => {
  logger.log({ level: 'info', message: 'Server Running on Port 5000' });
});

start();
