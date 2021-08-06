import React from 'react';
import Nav from './Nav'
import Logo from '../assets/imgs/logo1.png';
import CS from '../assets/imgs/logo2.png';
import Box from './Box';

const Home = () => {
    return (
        <div className="container-fluid">
            <Nav/>
            <div className="famelab d-flex pt-4">
                <div className="start col-lg-4 pl-0">
                    <p>Start supporting your companies</p>
                    <div>
                        <input type="text" className="form-control shadow" placeholder="Find a company"/>
                        <span className="fa fa-search"></span>
                    </div>

                    <div className="box d-flex">
                        <div className="logo col-lg-4">
                            <img src={Logo} alt=""  className="fl_logo"/>
                        </div>

                        <div className="logo_details col">
                            <div>
                                <div className="d-flex">
                                    <h6>Famelab</h6>
                                    <div className="spans">
                                        <p className="fa fa-user-plus mr-3"></p>
                                        {''}
                                        <p className="fa fa-sign-out"></p>
                                    </div>
                                </div>
                                <pre>
                                    31 supporters<br/>
                                    840 likes given last month<br/>
                                    102.302 view realised
                                </pre>
                            </div>
                        </div>
                    </div>

                    <div className="box cs d-flex">
                        <div className="logo col-lg-4">
                            <img src={CS} alt="" />
                        </div>

                        <div className="logo_details col">
                            <div>
                                <div className="d-flex">
                                    <h6>Second Company</h6>
                                </div>
                                <pre>
                                    0 supporters
                                </pre>

                                <p>Invite supporters</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="famelab_support col p-0">
                    <h6 className="mb-0">Famelab Supporters</h6>
                    <p>Supporting someone means you give them likes on posts when the person asks for it. This will increase the amount of views a person can generate.</p>
                    <div className="d-flex">
                        <input type="checkbox" className="form-control mt-1 mr-3" checked={true}/>
                        <span>I support Famelab</span>
                    </div>
                    <div className="supporter_boxes">
                        <div className="support_box_content d-flex flex-wrap justify-content-between">
                            <Box />

                            <Box />

                            <Box />

                            <Box />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;