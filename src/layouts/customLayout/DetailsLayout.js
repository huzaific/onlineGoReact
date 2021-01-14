import React from 'react'
import DetailsMenu from '../../components/customComponents/shared/DetailsMenu'

// details menu options will give an array of object containing fields title and navLink

export default function DetailsLayout({children , detailsMenuOptions}) {
    return (
        <>
        <DetailsMenu detailsMenuOptions={detailsMenuOptions} />
        <div  style={{marginRight:'310px'}}>
            {
                children
            }
        </div>
        </>
    )
}
