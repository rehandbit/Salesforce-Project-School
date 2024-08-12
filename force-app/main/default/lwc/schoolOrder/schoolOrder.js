import {  api, LightningElement, track } from 'lwc';
import { OmniscriptBaseMixin } from 'omnistudio/omniscriptBaseMixin'

export default class SchoolOrder extends OmniscriptBaseMixin(LightningElement) {
    @track productdata=[];
    @api productname;
    
    
    idQuantityMap= [];

    connectedCallback(){ 
        
        this.productdata = this.productname;
    }

    renderedCallback(){
         
        console.log('productname --->', this.productname); 
    }

    handleInputChange(event){
        console.log('productId ---->', event.target.name);
        console.log('value --------->',event.target.value);
        const prod = {
            Id: event.target.name,
            Quantity: event.target.value
        }
        this.idQuantityMap.push(prod);
        console.log('@@@@@@@',this.idQuantityMap);
    }
 
    saveButton(){
        this.omniUpdateDataJson({'productsSelected': this.idQuantityMap});
        this.omniNextStep();
    }
}