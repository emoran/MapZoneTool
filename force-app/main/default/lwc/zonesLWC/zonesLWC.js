import { LightningElement,api,wire,track } from 'lwc';
import getZones from '@salesforce/apex/GoogleMapPolygonController.getZones';
import { NavigationMixin } from 'lightning/navigation';

import { publish,createMessageContext,releaseMessageContext } from 'lightning/messageService';
import gmapCommunication from '@salesforce/messageChannel/gmapCommunication__c';

export default class ZonesLWC extends LightningElement {


    context = createMessageContext();
    subscription = null;
    @track receivedMessage = '';
    @track columns = [
        {
            type:"button",
            fixedWidth: 150,
            typeAttributes: {
                label: 'View',
                name: 'view',
                variant: 'brand'
            }
        }, 
        {
            label: 'Name', fieldName: 'Name', type: 'text'
        },
        {
            label: 'Created Date',
            fieldName: 'CreatedDate',
            type: 'date',
            sortable: true
        },
        {
            label: 'Poolygon',
            fieldName: 'Polygon__c',
            type: 'text',
            sortable: false
        }
    ];

    
    
    @track zoneList;
    @track error;
    @api recordId;
    


    connectedCallback(){
        getZones().then(response => {
            this.zoneList = response;
        }).catch(error => {
            console.log('Error: ' +error);
        });
    }

    navigateToEditAccountPage(event,something){
        console.log('event: '+ JSON.stringify(event.detail.row));
        console.log('event: '+ JSON.stringify(event.detail.row.Id));

        const payload = { recordId: event.detail.row.Id, polygon:  event.detail.row.Polygon__c, name: event.detail.row.Name};

        publish(this.context, gmapCommunication,payload );
    }
}