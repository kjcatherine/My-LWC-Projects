import { LightningElement, api } from 'lwc';

export default class CarTile extends LightningElement {
    @api car = {}

    handleClick(){
        this.dispatchEvent(new CustomEvent('selected', {
            detail:this.car.Id
        }))
    }
}