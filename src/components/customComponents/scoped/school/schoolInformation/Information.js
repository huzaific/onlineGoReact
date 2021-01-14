import React from 'react'
import CheckBoxesVuexy from '../../../../@vuexy/checkbox/CheckboxesVuexy'
import * as Icon from "react-feather"

export default function Information() {
    return (
        <div class="card">
                    <div class="card-header b-b-lgrey" style={{paddingBottom: '1.5rem'}}>
                        <h4 class="card-title">Information:</h4>
                    </div>
                    <div class="card-content collapse show">
                        <div class="card-body pt-10 mt-2">
                            <div class="row">
                                <div class="col-lg-4 mb-1">
                                    <fieldset>
                                        <label className="font-medium-1" for="basicInput">Office ID</label>
                                        <input class="form-control" type="text" placeholder=""/>
                                    </fieldset>
                                </div>
                                <div class="col-lg-4 mb-1">
                                    <fieldset>
                                        <label className="font-medium-1" for="basicInput">School Name</label>
                                        <input class="form-control" type="text" placeholder=""/>
                                    </fieldset>
                                </div>
                                <div class="col-lg-4 mb-1">
                                    <fieldset>
                                        <label className="font-medium-1" for="basicInput">TSKID</label>
                                        <input class="form-control" type="text" placeholder=""/>
                                    </fieldset>
                                </div>
                                <div class="col-lg-4 mb-1">
                                    <fieldset>
                                        <label className="font-medium-1" for="basicInput">Organization Number</label>
                                        <input class="form-control" type="text" placeholder=""/>
                                    </fieldset>
                                </div>
                                <div class="col-lg-4 mb-1">
                                    <fieldset>
                                        <label className="font-medium-1" for="basicInput">School Email</label>
                                        <input class="form-control" type="text" placeholder=""/>
                                    </fieldset>
                                </div>
                                <div class="col-lg-4 mb-1">
                                    <fieldset>
                                        <label className="font-medium-1" for="basicInput">Academic Director</label>
                                        <select class="form-control" id="basicSelect">
                                            <option>Usama Sajid</option>
                                        </select>
                                    </fieldset>
                                </div>
                                <div class="col-lg-4 mb-1">
                                    <fieldset>
                                        <label className="font-medium-1" for="basicInput">Traffic Station</label>
                                        <select class="form-control" id="basicSelect">
                                            <option>Station 1</option>
                                        </select>
                                    </fieldset>
                                </div>
                                <div class="col-lg-4 mb-1">
                                    <fieldset>
                                        <label className="font-medium-1" for="basicInput">School Account Number</label>
                                        <input class="form-control" type="text" placeholder=""/>
                                    </fieldset>
                                </div>
                                <div class="col-lg-4 mb-2">
                                    <fieldset>
                                        <label className="font-medium-1" for="basicInput">The School Main User</label>
                                        <select class="form-control" id="basicSelect">
                                            <option>Usama Sajid</option>
                                        </select>
                                    </fieldset>
                                </div>
                                <div class="col-lg-12 mb-1">
                   
                                    <CheckBoxesVuexy  icon={<Icon.Check strokeWidth="3px" size={'lg'}  color='white'/>} label="Daily email to the school with the status of sent SMS remainder" defaultChecked />
        
    
                                </div>
                                <div class="col-lg-12 mb-1">
                            
                                    <CheckBoxesVuexy icon={<Icon.Check strokeWidth="3px" size={'lg'}  color='white'/>} label="Daily email to the school with the status of sent SMS remainder" defaultChecked />
        
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    )
}
