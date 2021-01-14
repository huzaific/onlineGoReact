import React from 'react'

export default function TopOptions() {
    return (
        <div class="col-12 text-right">
                        <div class="card">
                            <div class="card-body">
                                <div class="btn-group" role="group" aria-label="Basic example">
                                    <button type="button" class="btn btn-primary waves-effect waves-light"><i class="fa fa-print mr-1"></i>Right</button>
                                    <div class="dropdown">
                                        <button class="btn btn-primary dropdown-toggle mr-1 waves-effect waves-light" type="button" id="dropdownMenuButton3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="fa fa-print mr-1"></i>Info
                                        </button>
                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton3" x-placement="bottom-start" style={{position: 'absolute' , willChange: 'transform' , top: '0px' , left: '0px' , transform: "translate3d('0px', '39px', '0px')"}}>
                                            <a class="dropdown-item" href="#">Option 1</a>
                                            <a class="dropdown-item" href="#">Option 2</a>
                                            <a class="dropdown-item" href="#">Option 3</a>
                                        </div>
                                    </div>
                                </div>
                                <button type="button" class="btn btn-info mr-1 waves-effect waves-light">Left</button>
                                <div class="btn-group" role="group" aria-label="Basic example">
                                    <button type="button" class="btn btn-primary waves-effect waves-light"> Left</button>
                                    <button type="button" class="btn btn-primary waves-effect waves-light"><i class="fa fa-plus-circle mr-1"></i>Middle</button>
                                    <button type="button" class="btn btn-primary waves-effect waves-light"><i class="fa fa-plus-circle mr-1"></i>Right</button>
                                    <button type="button" class="btn btn-primary waves-effect waves-light"><i class="fa fa-plus-circle mr-1"></i>Left</button>
                                    <button type="button" class="btn btn-primary waves-effect waves-light"><i class="fa fa-plus-circle mr-1"></i>Middle</button>
                                    <button type="button" class="btn btn-primary waves-effect waves-light"><i class="fa fa-plus-circle mr-1"></i>Right</button>
                                </div>
                            </div>
                        </div>
                    </div>
    )
}
