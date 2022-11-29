import { LightningElement } from 'lwc';
//foontawesome is a css style so we use this
import {loadStyle} from 'lightning/platformResourceLoader'
import fontawesome from '@salesforce/resourceUrl/fontawesome'
export default class MemoryGameLwc extends LightningElement {
    isLibLoaded = false;
    cards=[
        {id:1, listClass:"card", type:'diamond', icon:'fa fa-diamond'},
        {id:2, listClass:"card", type:'plane', icon:'fa fa-paper-plane-o'},
        {id:3, listClass:"card", type:'anchor', icon:'fa fa-anchor'},
        {id:4, listClass:"card", type:'bolt', icon:'fa fa-bolt'},
        {id:5, listClass:"card", type:'cube', icon:'fa fa-cube'},
        {id:6, listClass:"card", type:'anchor', icon:'fa fa-anchor'},
        {id:7, listClass:"card", type:'leaf', icon:'fa fa-leaf'},
        {id:8, listClass:"card", type:'bicycle', icon:'fa fa-bicycle'},
        {id:9, listClass:"card", type:'diamond', icon:'fa fa-diamond'},
        {id:10, listClass:"card", type:'bomb', icon:'fa fa-bomb'},
        {id:11, listClass:"card", type:'leaf', icon:'fa fa-leaf'},
        {id:12, listClass:"card", type:'bomb', icon:'fa fa-bomb'},
        {id:13, listClass:"card", type:'bolt', icon:'fa fa-bolt'},
        {id:14, listClass:"card", type:'bicycle', icon:'fa fa-bicycle'},
        {id:15, listClass:"card", type:'plane', icon:'fa fa-paper-plane-o'},
        {id:16, listClass:"card", type:'cube', icon:'fa fa-cube'},
    ]
    //To flip the card on click of each grid item
    displayCard(event){
        let currCard = event.target
        currCard.classList.add("open", "show", "disabled")
    }





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