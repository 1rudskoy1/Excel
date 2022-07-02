import { ExcelComponent } from "../../core/ExcelComponent";

export class Table extends ExcelComponent{
    toHTML(){
        return `<h1>Таблица</h1>`
    }
}