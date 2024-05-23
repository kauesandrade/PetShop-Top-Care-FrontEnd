export interface Filter {
  title: string;
  types: Array<{
    type: string;
    isChecked: boolean;
  }>;
}
