import { expect, tap } from '@pushrocks/tapbundle';
import * as csvSpendesk from '../ts/index';

tap.test('first test', async (tools) => {
  console.log(csvSpendesk.standardExport);
});

tap.start();
