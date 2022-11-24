import { LightningElement } from 'lwc';
//foontawesome is a css style so we use this
import {loadStyle} from 'lightning/platformResourceLoader'
import fontawesome from '@salesforce/resourceUrl/fontawesome'
export default class MemoryGameLwc extends LightningElement {
    isLibLoaded = false;
    //Whenever we load a third party library we always use a renderedcallbacl\k
    renderedCallback(){
        if(this.isLibLoaded){
            return
        }else{
            loadStyle(this, fontawesome+'/fontawesome/css/font-awesome.min.css')
            .then(()=>{
                console.log("Loaded Sucessfully")
            }).catch(error =>{
                console.error("error")
            })
            this.isLibLoaded = true
        }
    }
}