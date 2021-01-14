import React from 'react'
import { Card } from 'reactstrap'
import DetailsLayout from '../../../layouts/customLayout/DetailsLayout'

export default function SchoolDetails() {

    const menuOption = [
        {title:'School Information' , navLink:'/SchoolInformation'},
        {title:'Generally' , navLink:'/generally'},
        {title:'Invoicing' , navLink:'/generally'},
        {title:'SMS / Email' , navLink:'/generally'},
        {title:'Automatic Jobs' , navLink:'/generally'},
        {title:'SMS Reminder' , navLink:'/generally'},
        {title:'Student and Web' , navLink:'/generally'},
        {title:'Classes' , navLink:'/generally'},
     
    ]
    return (
        <DetailsLayout detailsMenuOptions={menuOption}>
            <Card className="p-1">
               
                 
            </Card>
          

        </DetailsLayout>
    )
}
