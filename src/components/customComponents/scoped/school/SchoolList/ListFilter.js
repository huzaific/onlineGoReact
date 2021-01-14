import React from 'react'

export default function ListFilter() {
    return (
        <div class="card container-fluid m-0">
        <div class="card-content">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-3">
                        <div class="chat-fixed-search">
                            <div class="d-flex align-items-center">
                                <fieldset class="form-group position-relative has-icon-left mx-1 my-0 w-100">
                                    <input type="text" class="form-control round" id="chat-search" placeholder="Search"/>
                                    <div class="form-control-position">
                                        <i class="feather icon-search"></i>
                                    </div>
                                </fieldset>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <select class="form-control">
                            <option>Select Class</option>
                            <option>All Classes</option>
                        </select>
                    </div>
                    <div class="col-md-2">
                        <select class="form-control">
                            <option>Select Status</option>
                            <option>Active</option>
                            <option>InActive</option>
                        </select>
                    </div>
                    <div class="col-md-3 d-flex align-items-center">
                        <label className="font-medium-1">Number in the list: 0</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
