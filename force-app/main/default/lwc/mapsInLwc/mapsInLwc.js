import { LightningElement,wire } from 'lwc';
import getAccounts from '@salesforce/apex/MapController.getAccounts'

export default class MapsInLwc extends LightningElement {
    mapMarkers=[]
    markersTitle="Accounts Location"
    //To load the map we need data, and to load the data we need an apex class
    @wire(getAccounts)
    wireHandler({data, error}){
        if(data){
            console.log(data)
            this.formatResponse(data)
        }
        if(error){
            console.error(error)
        }
    }
    formatResponse(data){
        this.mapMarkers = data.map(item=>{
            return {
                location:{
                    Street:item.BillingStreet || '',
                    City:item.BillingCity || '',
                    PostalCode:item.PostalCode || '',
                    State:item.BillingState || '',
                    Country:item.BillingCountry || '',
                },
                icon:'standard:account',
                title:item.Name,
                value:item.Name,
                description:item.Description
            }
        })
        this.selectedMarker = this.mapMarkers.length && this.mapMarkers[0].value
    }
    callMarkerHandler(event){
        this.selectedMarker = event.detail.selectedMarkerValue
    }
}