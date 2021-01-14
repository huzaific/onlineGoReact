import React from 'react'
import { Card, CardBody, CardHeader, CardTitle, Col, Container , Badge, ListGroup, ListGroupItem, Row } from 'reactstrap'
import Avatar from '../../../../../myAssets/images/avatar.png'
import * as Icon from "react-feather"

export default function StudentsSidenav() {
    return (
        <Card className="w-100 h-100 overflow-auto">
        <CardHeader>
            <CardTitle>Schools</CardTitle>
        </CardHeader>
        <CardBody>
        <ListGroup flush>

   <ListGroupItem tag="a" href="#">
       <div className="d-flex align-items-center justify-content-between">
           
           <div className="d-flex align-items-center">
           <div>
               <img width="50px" height="50px" className="rounded-circle" src={Avatar} />
           </div>

           <div className="d-flex flex-column pl-1">
           <h4 className="font-weight-bold mb-0">Sarah Woods</h4>
           <span>Hey there I am description</span>
           </div>
          
           </div>

           <div className="d-flex align-items-center">
           <Badge href="#" color="primary">2+</Badge>
           </div>
           
       </div>
   </ListGroupItem>

   <ListGroupItem tag="a" href="#">
       <div className="d-flex align-items-center justify-content-between">
           
           <div className="d-flex align-items-center">
           <div>
               <img width="50px" height="50px" className="rounded-circle" src={Avatar} />
           </div>

           <div className="d-flex flex-column pl-1">
           <h4 className="font-weight-bold mb-0">Sarah Woods</h4>
           <span>Hey there I am description</span>
           </div>
          
           </div>

           <div className="d-flex align-items-center">
               <Icon.Bookmark size={20} />
           </div>
           
       </div>
   </ListGroupItem>

   <ListGroupItem tag="a" href="#">
       <div className="d-flex align-items-center justify-content-between">
           
           <div className="d-flex align-items-center">
           <div>
               <img width="50px" height="50px" className="rounded-circle" src={Avatar} />
           </div>

           <div className="d-flex flex-column pl-1">
           <h4 className="font-weight-bold mb-0">Sarah Woods</h4>
           <span>Hey there I am description</span>
           </div>
          
           </div>

           <div className="d-flex align-items-center">
               <Icon.Bookmark size={20} />
           </div>
           
       </div>
   </ListGroupItem>
   

   
</ListGroup>
            
            
        </CardBody>
    </Card>
    )
}
