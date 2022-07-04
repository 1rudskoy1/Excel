export class DomListener{
    constructor($root){
        if(!$root){
            throw new Error(`No $root proveded for Domlistener`);
        }
        this.$root = $root;
    }
}