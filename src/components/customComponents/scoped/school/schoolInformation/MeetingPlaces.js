import React from 'react'
import CheckBoxesVuexy from '../../../../@vuexy/checkbox/CheckboxesVuexy'
import * as Icon from "react-feather"

export default function MeetingPlaces() {
    return (
        <div class="card">
                    <div class="card-header b-b-lgrey" style={{paddingBottom:'1.5rem'}}>
                        <h4 class="card-title">Meeting Places:</h4>
                    </div>
                    <div class="card-content collapse show">
                        <div class="card-body pt-10 mt-2">
                           <div class="row">
                               <div class="col-lg-12">
                                   <table class="w-100 table">
                                       <thead>
                                           <tr>
                                               <th>Name</th>
                                               <th>Address</th>
                                               <th>Zip Code</th>
                                               <th>City</th>
                                               <th>Active</th>
                                           </tr>
                                       </thead>
                                       <tbody>
                                           <tr>
                                               <td>Usama Sajid</td>
                                               <td>ABVD, Block 8, Karachi </td>
                                               <td>4250</td>
                                               <td>Karachi</td>
                                               <td>
                                               <CheckBoxesVuexy icon={<Icon.Check strokeWidth="3px" size={20}  color='white'/>} defaultChecked />
        
                                               </td>
                                           </tr>
                                           <tr>
                                               <td>
                                                    <input class="form-control" type="text" placeholder="Name"/>
                                               </td>
                                               <td>
                                                    <input class="form-control" type="text" placeholder="Address"/>
                                               </td>
                                               <td>
                                                    <input class="form-control" type="text" placeholder="Zip Code"/>
                                               </td>
                                               <td>
                                                    <input class="form-control" type="text" placeholder="City"/>
                                               </td>
                                               <td>
                                                   <button class="btn btn-primary waves-effect waves-light"><i class="fa fa-plus"></i> Add</button>
                                               </td>
                                           </tr>
                                       </tbody>
                                   </table>
                               </div>
                           </div>
                        </div>
                    </div>
                </div>
    )
}
