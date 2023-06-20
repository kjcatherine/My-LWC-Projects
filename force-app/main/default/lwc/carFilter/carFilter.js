import { LightningElement, wire } from 'lwc';
import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import CAR_OBJECT from '@salesforce/schema/Car__c'
import CATEGORY_FIELD from '@salesforce/schema/Car__c.Category__c'
import MAKE_FIELD from '@salesforce/schema/Car__c.Make__c'
//Constants
const CATEGORY_ERROR = 'Error loading categories'
const MAKE_ERROR = 'Error loading Make types'
//Lightning Message Service and a message channel
import {publish, MessageContext} from 'lightning/messageService'
import CARS_FILTERED_MESSAGE from '@salesforce/messageChannel/carsFiltered__c'
export default class CarFilter extends LightningElement {
    filters={
        searchKey:'',
        maxPrice:999999
    }
    categoryError = CATEGORY_ERROR
    makeError = MAKE_ERROR

    //Load context for LMS
    @wire(MessageContext)
    messageContext

    //Fetching Category picklist
    @wire(getObjectInfo, {objectApiName:CAR_OBJECT})
    carObjectInfo

    @wire(getPicklistValues, {
        recordTypeId:'$carObjectInfo.data.defaultRecordTypeId',
        fieldApiName:CATEGORY_FIELD
    })categories

    //Fetching Make picklist
    @wire(getPicklistValues, {
        recordTypeId:'$carObjectInfo.data.defaultRecordTypeId',
        fieldApiName:MAKE_FIELD
    })makeType

    /********** Search Key Handler*********** */
    handleSearchKeyChange(event){
        console.log(event.target.value)
        //this.filters = event.target.value //Don't update objects directly //other option is track
        this.filters = {...this.filters, "searchKey":event.target.value}
        this.sendDataToCarList()
    }
    /********** Price Range (slider) Handler*********** */
    handleMaxPriceChange(event){
        console.log(event.target.value)
        this.filters = {...this.filters, "maxPrice":event.target.value}
        this.sendDataToCarList()
    }
    handleCheckbox(event){
        const {name, value} = event.target.dataset
        console.log("name", name)
        console.log("value", value)
        this.sendDataToCarList()
    }

    sendDataToCarList(){
        publish(this.messageContext, CARS_FILTERED_MESSAGE, {
            filters:this.filters
        })
    }
}