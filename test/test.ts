import { expect, tap } from '@pushrocks/tapbundle';
import * as csvSevdesk from '../ts/index';

let csvSevdeskInstance: csvSevdesk.CsvSevdesk;

tap.test('should create a valid instance of CsvSevdesk', async tools => {
  csvSevdeskInstance = new csvSevdesk.CsvSevdesk();
});

tap.test('should create a valid csv file', async () => {
  await csvSevdeskInstance.createCsvString([
    {
      // name: 'Amazon',
      description: 'goods',
      amount: -10.4,
      date: new Date('2019-04-23')
    }
  ]);
});

tap.start();
