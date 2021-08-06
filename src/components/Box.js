import React from 'react';

const Box = () => {
    return (
        <div className="boxes">
            <div className="d-flex nav_part">
                <div className="d-flex mr-auto">
                    <input type="checkbox" className="form-control mt-1 mr-3" checked={true}/>
                    <span>I support Famelab</span>
                </div>
                <div>
                    <span>&#9814;</span>
                </div>
            </div>

            <div className="img_section text-center">
                <img src="https://images.unsplash.com/photo-1523761415282-2106778cfb5a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmluZSUyMGdpcmx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="" />
                <h5 className="pple_name mt-3 mb-0">Jefferson Boulevard</h5>
                <p className="position">CFO at Famelab</p>
            </div>

            <div className="no_of_likes d-flex justify-content-between">
                <div>
                    <h5>540</h5>
                    <p>Likes given</p>
                </div>

                <div>
                    <h5>240</h5>
                    <p>Likes given</p>
                </div>
            </div>
        </div>
    );
};

export default Box;