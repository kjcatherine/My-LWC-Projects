import { LightningElement, wire } from 'lwc';
import getCars from '@salesforce/apex/CarController.getCars'

//Lightning Message Service and a message channel
import {subscribe, MessageContext} from 'lightning/messageService'
import CARS_FILTERED_MESSAGE from '@salesforce/messageChannel/carsFiltered__c'
export default class CarTileList extends LightningElement {
    cars
    error
    filters = {};
    carFilterSubscription
    @wire(getCars, {filters: '$filters'})
    carsHandler({data, error}){
        if(data){
            this.cars = data
            console.log(data)
        }
        if(error){
            this.error = error
            console.error(error)
        }
    }

    //Load context for LMS
    @wire(MessageContext)
    messageContext

    connectedCallback(){
        this.subscibeHandler()
    }
    subscibeHandler(){
        this.carFilterSubscription = subscribe(this.messageContext, CARS_FILTERED_MESSAGE, (message)=>this.handleFilterChanges(message))
    }
    handleFilterChanges(message){
        console.log(message.filters)
        this.filters = {...message.filters}
    }
}