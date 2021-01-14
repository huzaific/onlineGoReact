import React from 'react'

export default function VisitingAddress() {
    return (
        <div class="card">
        <div class="card-header b-b-lgrey" style={{paddingBottom:'1.5rem'}}>
            <h4 class="card-title">Visiting Address:</h4>
            <h4 class="card-title fw-400">Visible on TABSweb</h4>
        </div>
        <div class="card-content collapse show">
            <div class="card-body pt-10 mt-2">
                <div class="row">
                    <div class="col-lg-12 mb-1">
                        <fieldset>
                            <label className="font-medium-2" for="basicInput">Address</label>
                            <input class="form-control" type="text" placeholder=""/>
                        </fieldset>
                    </div>
                    <div class="col-lg-3 mb-1">
                        <fieldset>
                            <label className="font-medium-2" for="basicInput">Zip Code</label>
                            <input class="form-control" type="text" placeholder=""/>
                        </fieldset>
                    </div>
                    <div class="col-lg-9 mb-1">
                        <fieldset>
                            <label className="font-medium-2" for="basicInput">Place</label>
                            <input class="form-control" type="text" placeholder=""/>
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
