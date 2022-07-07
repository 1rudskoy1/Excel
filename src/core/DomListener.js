export class DomListener{
    constructor($root, listeners = []){
        if(!$root){
            throw new Error(`No $root proveded for Domlistener`);
        }
        this.$root = $root;
        this.listeners = listeners;
    }

    initDOMListeners(){
        
    }
    removeDOMListeners(){

    }
}