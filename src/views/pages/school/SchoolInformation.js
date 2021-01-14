import React, { useState } from 'react'
import {  Row, Col } from 'reactstrap'

import Information from '../../../components/customComponents/scoped/school/schoolInformation/Information'
import PostalAddress from '../../../components/customComponents/scoped/school/schoolInformation/PostalAddress'
import VisitingAddress from '../../../components/customComponents/scoped/school/schoolInformation/VisitingAddress'
import MeetingPlaces from '../../../components/customComponents/scoped/school/schoolInformation/MeetingPlaces'
import NAFBooking from '../../../components/customComponents/scoped/school/schoolInformation/NAFBooking'
import TermsOfUse from '../../../components/customComponents/shared/TermsOfUse'
import SaveSetting from '../../../components/customComponents/scoped/school/schoolInformation/SaveSetting'


export default function SchoolInformation() {


  const [informationFields , setInformationFields] = useState({
    officeId:'',
    schoolName:'',
    TSKID:'',
    organizationNumber:'',
    schoolEmail:'',
    academicDirector:'',
    trafficStation:'',
    schoolAccountNumber:'',
    schoolMainUser:''

  })

  const [PostalAddressFields , setPostalAddressFields] = useState({
    address:'',
    telephone:'',
    zipcode:'',
    place:''
  })


  const [VisitingAddressFields ,setVisitingAddressFields] = useState({
    address:'',
    zipcode:'',
    place:''

  })

    return (
        <div>

     <Information informationFields={informationFields} setInformationFields={setInformationFields}  />
     <Row>
       <Col lg={6}>
         <PostalAddress setPostalAddressFields={PostalAddressFields} setPostalAddressFields={setPostalAddressFields} />
       </Col>

       <Col lg={6}>
         <VisitingAddress VisitingAddressFields={VisitingAddressFields} setVisitingAddressFields={setVisitingAddressFields} />
       </Col>
     </Row>

     <MeetingPlaces />
     <NAFBooking />
     <TermsOfUse />
     <SaveSetting />


   </div>
    )
}
