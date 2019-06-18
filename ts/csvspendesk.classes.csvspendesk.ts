import * as plugins from './csv-spendesk.plugins';

export interface ISevdeskCSVTransaction {
  date: Date;
  name: string;
  description: string;
  amount: string;
}

/**
 * a CSV Spendesk class that enables the creation of Spendesk compatible csv files
 */
export class CsvSevdesk {
  public async createCsvString(sevdeskCsvTransactionArray: ISevdeskCSVTransaction[]) {
    return plugins.smartcsv.Csv.createCsvStringFromArray(sevdeskCsvTransactionArray);
  }
}
