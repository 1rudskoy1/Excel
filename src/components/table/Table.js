import { ExcelComponent } from "../../core/ExcelComponent";
import { createTable } from "./table.template";

export class Table extends ExcelComponent{

    static className = "excel__table";

    constructor($root){
        super($root, {
            listeners: ['mousedown']
        })

    }

    toHTML(){
        return createTable(6);
    }

    onClick(){

    }
    onMousedown(event){
        if(event.target.dataset.resize){
            console.log("Start");
        }

    }
    onMousemove(){

    }
    onMouseapp(){

    }
}