import React from 'react';
import { Link } from 'react-router-dom';

const SingelBlogCard = () => {
    return (
        <div className="col-lg-4 mb-5">
            <div className="card h-100 shadow border-0">
                <img className="card-img-top img-fluid" src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1237,c_limit/acf8681d-1668-407a-94f2-37837fe7b174/8-healthy-eating-tips-for-runners.jpg" alt="..." />
                <div className="card-body p-4">
                    <div className="badge bg-primary bg-gradient rounded-pill mb-2">Coaching</div>
                    <Link className="text-decoration-none link-dark stretched-link" to="redingBlog/1"><h5 className="card-title mb-3">8 Easy Eating Tips for Runners</h5></Link>

                    <p className="card-text mb-0">Running nutrition doesn’t have to be complicated. Read that again. To run farther and faster, you do</p>
                </div>
                <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                    <div className="d-flex justify-content-between">
                        <div className="small">
                            <i className="bi bi-calendar2-week"></i>
                            <span> 11/25/2021</span>
                        </div>

                        <div className="small">
                            <span>Start Reading </span>
                            <i className="bi bi-justify-right"></i>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingelBlogCard;