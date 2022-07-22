export class TableSelection {
    constructor(){
        this.group = [];
    }

    select($el){
        this.clear();
        this.group.push($el);
        $el.addClass("selected");
    }
    
    clear(){
        this.group.forEach($el => $el.removeClass('selected'));
        this.group = [];
    }

    selectGroup(){

    }

}