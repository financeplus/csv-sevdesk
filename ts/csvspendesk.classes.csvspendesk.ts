import * as plugins from './csv-spendesk.plugins';

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
  public async createCsvString(simpleCsvTransactionArray: plugins.tsclass.ITransaction[]) {
    const sevdeskCsvTransactions: ISevdeskCSVTransaction[] = [];

    for (const transaction of simpleCsvTransactionArray) {
      sevdeskCsvTransactions.push({
        date: plugins.smarttime.ExtendedDate.fromDate(transaction.date).exportToEuropeanDate(),
        amount: transaction.amount.toString(),
        name: transaction.name,
        description: transaction.description,
      });
    }

    return plugins.smartcsv.Csv.createCsvStringFromArray(sevdeskCsvTransactions);
  }
}
