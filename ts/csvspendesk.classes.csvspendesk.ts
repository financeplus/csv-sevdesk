import * as plugins from './csv-spendesk.plugins';

export interface ISimpleCSVTransaction {
  date: Date;
  name: string;
  description: string;
  amount: string;
}

export interface ISevdeskCSVTransaction {
  date: string;
  name: string;
  description: string;
  amount: string;
}

/**
 * a CSV Spendesk class that enables the creation of Spendesk compatible csv files
 */
export class CsvSevdesk {

  public async createCsvString(simpleCsvTransactionArray: ISimpleCSVTransaction[]) {
    const sevdeskCsvTransactions: ISevdeskCSVTransaction[] = [];

    for (const transaction of simpleCsvTransactionArray) {
      sevdeskCsvTransactions.push({
        date: (plugins.smarttime.ExtendedDate.fromDate(transaction.date)).exportToEuropeanDate(),
        description: transaction.description,
        amount: transaction.amount,
        name: transaction.name
      });
    }

    return plugins.smartcsv.Csv.createCsvStringFromArray(simpleCsvTransactionArray);
  }
}
