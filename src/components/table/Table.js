import { ExcelComponent } from "../../core/ExcelComponent";
import {$} from '@core/dom.js'
import { createTable } from "./table.template";
import { TableSelection } from "./TableSelection";
import {shouldResize, isCell} from "./table.functions" 

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

    prepare(){
        this.selection = new TableSelection();
    }

    init(){
        super.init();
        const $cell = this.$root.find('[data-id="0:0"]');
        this.selection.select($cell);
    }

    onMousedown(event){
        if(shouldResize(event)){
            const $resizer = $(event.target);
            const $parent = $resizer.closest('[data-type = "resizable"]');
            const coords = $parent.getCoords();
            const type = event.target.dataset.resize;
            const sideProp = type === 'col' ? "bottom" : "right"
            let value;

            $resizer.css({
                opacity: 1,
                [sideProp]: "-3000px",

            });
            document.onmousemove = e =>{
                if(type === "col"){
                    const delta = e.pageX - coords.right;
                    value = coords.width + delta;
                    $resizer.css({right: -delta + "px"});
                }else{
                    const delta = e.pageY - coords.bottom;
                    value = coords.height + delta;
                    $resizer.css({bottom: -delta + "px"});
                }
            }

            document.onmouseup = () => {
                document.onmousemove = null;
                document.onmouseup = null;
                if(type === "col"){
                    $parent.css({width : value + "px"});
                    this.$root.findAll(`[data-col = "${$parent.data.col}"]`).forEach(el => {
                        el.style.width = value + "px";
                    });
                }else{
                    $parent.css({height : value + "px"});
                }
                $resizer.css({
                    opacity: 0,
                    bottom: 0,
                    right: 0
                });

            }
        }else if(isCell(event)) {
            const $target = $(event.target);
            this.selection.select($target);
        }



    }
    onMousemove(){

    }
    onMouseapp(){

    }
}
