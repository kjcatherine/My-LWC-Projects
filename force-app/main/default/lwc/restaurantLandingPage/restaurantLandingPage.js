import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent'
import RED_LENTIL_SOUP from '@salesforce/resourceUrl/red_lentil_soup'
import TOMATO_SOUP from '@salesforce/resourceUrl/tomato_soup'
import SHRIMP_FRIED_RICE from '@salesforce/resourceUrl/shrimp_fried_rice'
import RESTAURANT_LOGO from '@salesforce/resourceUrl/res_logo'

import RESERVATION_OBJECT from '@salesforce/schema/Reservation__c'
import NAME_FIELD from '@salesforce/schema/Reservation__c.Name'
import GUEST_FIELD from '@salesforce/schema/Reservation__c.Number_of_Guests__c'
import DATE_FIELD from '@salesforce/schema/Reservation__c.Date__c'
import TIME_FIELD from '@salesforce/schema/Reservation__c.Time__c'
import EMAIL_FIELD from '@salesforce/schema/Reservation__c.Email__c'

export default class RestaurantLandingPage extends LightningElement {
    restaurantLogo = RESTAURANT_LOGO
    featuredMenuItems=[
        {
            src:RED_LENTIL_SOUP,
            header:"Red Lentil Soup",
            description:"A delicate crab cake served on a toasted roll with lettuce and tartar sauce",
            price: "$7.95"
        },
        {
            src:TOMATO_SOUP,
            header:"Tomato Soup",
            description:"Sliced turkey on a toasted roll with bacon, lettuce and tomatoes and avocado-ranch dressing",
            price: "$9.95"
        },
        {
            src:SHRIMP_FRIED_RICE,
            header:"Shrimp Fried Rice",
            description:"Pulled Pork - Our slow roasted pork simmered in tangy BBQ sauce and served on a toasted roll with cheddar cheese",
            price: "$9.95"
        },
    ]

    objectName = RESERVATION_OBJECT

    fields={
        nameField:NAME_FIELD,
        guestField:GUEST_FIELD,
        dateField:DATE_FIELD,
        timeField:TIME_FIELD,
        emailField:EMAIL_FIELD
    }

    sucessHandler(){
        const toastEvent = new ShowToastEvent({
             title:"Reservation created",
             message:"Thank you for making your reservation!",
             variant:"success"
         })
         this.dispatchEvent(toastEvent)

        const inputFields = this.template.querySelectorAll('lightning-input-field')
        if(inputFields){
            Array.from(inputFields).forEach(field =>{
                field.reset()
            })
        }
     }
    //  //To handle server Error
    //  handleError(event){
    //      const toastEvent = new ShowToastEvent({
    //          title:"Error creating a Reservation",
    //          message:event.detail.message,
    //          variant:"error"
    //      })
    //      this.dispatchEvent(toastEvent)
    //  } 
}