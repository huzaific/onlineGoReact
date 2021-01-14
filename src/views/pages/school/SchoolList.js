import React from 'react'
import ListFilter from '../../../components/customComponents/scoped/school/SchoolList/ListFilter'
import StudentBio from '../../../components/customComponents/scoped/school/SchoolList/StudentBio'
import StudentsSidenav from '../../../components/customComponents/scoped/school/SchoolList/StudentsSidenav'

export default function SchoolList() {
    return (

        <div >
            <ListFilter />


<div style={{height:"500px"}} className="d-flex w-100 mt-2">

    <div className="mr-1" style={{width:'400px'}}>
        <StudentsSidenav />
    </div>

    <div className="flex-grow-1">
        <StudentBio />

    </div>

</div>
          
       
        </div>
    )
}
