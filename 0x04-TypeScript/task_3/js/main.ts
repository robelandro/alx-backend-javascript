import { RowID, RowElement } from "./interface";
import * as CRUD from "./crud";

const row: RowElement = {
	firstName:"Guillaume",
	lastName:"Salva",
}

const newRowID: RowID = CRUD.insertRow(row);
console.log(newRowID);
const updatedRowID: RowID = CRUD.updateRow(newRowID, row);
console.log(updatedRowID);
CRUD.deleteRow(updatedRowID);
