/**
 * Global Settings
 */
import { Enumify } from 'enumify';

export interface GlobalSettings {
}

export class DataSourceType extends Enumify {
  static TOONG_DATASOURCE = new DataSourceType('toong-datasource');

  static _ = DataSourceType.closeEnum();

  readonly label: string;

  constructor(label: string) {
    super();
    this.label = label;
  }
}

export interface ExampleAppSettings {
  customText?: string;
  customCheckbox?: boolean;
}
