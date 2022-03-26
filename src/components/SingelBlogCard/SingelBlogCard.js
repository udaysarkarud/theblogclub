import React from 'react';
import { Link } from 'react-router-dom';

const SingelBlogCard = (props) => {
    const { _id, blogTitle, blogCategory, blogThumbnail, blogDescription, blogAuthor, blogPublishDate } = props.blogData
    return (
        <div className="col-lg-4 mb-5">
            <div className="card h-100 shadow border-0">
                <img className="card-img-top img-fluid" src={blogThumbnail} alt="..." />
                <div className="card-body p-4">
                    <div className="badge bg-primary bg-gradient rounded-pill mb-2">{blogCategory}</div>
                    <Link className="text-decoration-none link-dark stretched-link" to={`redingBlog/${_id}`}><h5 className="card-title mb-3">{blogTitle}</h5></Link>
                    <p className="card-text mb-0">{blogDescription.slice(0, 100)}</p>
                </div>
                <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                    <div className="d-flex justify-content-between">
                        <div className="small">
                            <i className="bi bi-calendar2-week"></i>
                            <span> {blogPublishDate}</span>
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