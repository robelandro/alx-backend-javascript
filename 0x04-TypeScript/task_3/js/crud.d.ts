import { RowID, RowElement } from "./interface.ts";

// declare the type signatures for the crud functions
declare function insertRow(row: RowElement): RowID;
declare function deleteRow(rowId: RowID): void;
declare function updateRow(rowId: RowID, row: RowElement): RowID;
// export the crud functions
export { insertRow, deleteRow, updateRow };
