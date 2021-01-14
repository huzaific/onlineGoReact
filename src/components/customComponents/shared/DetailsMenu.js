import React from 'react'
import { NavLink } from 'react-router-dom'
import { Card } from 'reactstrap'
import PerfectScrollbar from 'react-perfect-scrollbar'
export default function DetailsMenu({detailsMenuOptions}) {
    return (

        <Card className="position-fixed p-2" style={{
                bottom:55,
                right:0,
                top:219,
                margin:'0 2.2rem 0 0',
                width:'300px',
            }}>

            <PerfectScrollbar options={{ wheelPropagation:false}}>
            {
                detailsMenuOptions.map(option => {
                    return <NavLink to={option.navLink} class="btn btn-primary mb-1 w-100 waves-effect waves-light">{option.title}</NavLink>
                })
            }
            </PerfectScrollbar>

        </Card>

        // <Card style={{
        //     bottom:55,
        //     right:0,
        //     top:219,
        //     margin:'0 2.2rem 0 0',
        //     width:'300px',
        // }} className="position-fixed  overflow-auto d-flex flex-column align-items-center p-2">

        //     {
        //         detailsMenuOptions.map(option => {
        //             return <NavLink to={option.navLink} class="btn btn-primary mb-1 w-100 waves-effect waves-light">{option.title}</NavLink>
        //         })
        //     }
    
        // </Card>
    )
}
