import Events from './web3';
import { Contract } from '../models/contract';
import { logger } from '../middlewares';

interface Event {
  name: string;
  contract: string;
  timestamp: number;
  blockHash: string;
  blockNumber: number;
  transactionHash: string;
  transactionIndex: number;
  from: string;
  to: string;
  logIndex: number;
  values: {
    _from: string;
    createdString: string;
  };
}

const fetchEvents = async () => {
  Events.on(
    'block.unconfirmed',
    (blockNumber: number, events: Event[], done: any) => {
      if (events.length) {
        logger.log({
          level: 'info',
          message: `Unconfirmed Block Event Received from Block ${blockNumber} - String: ${events[0].values.createdString}`,
        });
      }
      done();
    }
  );

  Events.on(
    'block.confirmed',
    async (blockNumber: any, events: Event[], done: any) => {
      if (events.length) {
        logger.log({
          level: 'info',
          message: `Confirmed Block Event Received from Block ${blockNumber} - String: ${events[0].values.createdString}`,
        });
        const contractData = Contract.build({
          fromAddress: events[0].values._from,
          createdString: events[0].values.createdString.toUpperCase(),
        });
        await contractData.save();
        logger.log({
          level: 'info',
          message: 'Contract Data Saved to Database',
        });
      }
      done();
    }
  );

  Events.on('error', (err: any) => {
    logger.log({ level: 'error', message: err.message });
  });
};

export default fetchEvents;
