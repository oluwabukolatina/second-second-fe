import React from 'react';

const Nav = () => {
    return (
        <nav>
            <div className="col-lg-12 d-flex">
                <div className="d-flex mr-auto">
                    <h6>Getting Started <span className="fa fa-envelope mx-2"></span></h6>
                    <p>Join Group</p>
                </div>

                <div className="d-flex profile">
                    <img src="https://images.unsplash.com/photo-1523761415282-2106778cfb5a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmluZSUyMGdpcmx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="" />
                    <p className="name">Victoria de Vries <span className="fa fa-angle-down"></span></p>
                </div>
            </div>
        </nav>
    );
};

export default Nav;