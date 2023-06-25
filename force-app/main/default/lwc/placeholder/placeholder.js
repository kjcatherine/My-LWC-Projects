import { LightningElement, api } from 'lwc';
import CAR_HUB_PLACEHOLDER from '@salesforce/resourceUrl/placeholder'
export default class Placeholder extends LightningElement {
    @api message

    placeholderUrl = CAR_HUB_PLACEHOLDER
}