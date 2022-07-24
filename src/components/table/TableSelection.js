export class TableSelection {
    static className = "selected";
    constructor(){
        this.group = [];
        this.current = null;
    }

    select($el){
        this.clear();
        this.current = $el;
        this.group.push($el);
        $el.addClass("selected");
    }
    
    clear(){
        this.group.forEach($el => $el.removeClass('selected'));
        this.group = [];
    }

    selectGroup($group = []){
        this.clear();
        this.group = $group;
        this.group.forEach($el => $el.addClass(TableSelection.className));
    }

}