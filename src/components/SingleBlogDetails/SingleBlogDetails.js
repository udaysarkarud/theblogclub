import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import SingelCmt from '../SingelCmt/SingelCmt';

const SingleBlogDetails = () => {
    //get blog id 
    const { bgid } = useParams();
    const [loading, setLoading] = useState(false)
    const [postDetails, setPostDetails] = useState({})
    const { _id, blogTitle, blogCategory, blogThumbnail, blogDescription, blogAuthor, blogPublishDate } = postDetails

    const [postCmts, setPostCmts] = useState([])

    //Load blog details data based on id
    useEffect(() => {
        axios.get(`https://rocky-beyond-63969.herokuapp.com/singlepostdetails?bgid=${bgid}`)
            .then(res => {
                setPostDetails(res.data);
            })
    }, [])

    //Load blog comment data based on id
    useEffect(() => {
        axios.get(`https://rocky-beyond-63969.herokuapp.com/blogcmts/${bgid}`)
            .then(res => {
                setPostCmts(res.data);
            })
    }, [loading])

    //Hook Form
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();

    //Post Comment and reload comment api
    const onSubmit = data => {
        setLoading(true)
        const cmtingDate = new Date().toLocaleDateString()
        const cmtData = { ...data, bgid: _id, cmtingDate }
        axios.post('https://rocky-beyond-63969.herokuapp.com/addnewcmt', cmtData)
            .then(res => {
                if (res.data.acknowledged === true) {
                    setLoading(false)
                    Swal.fire(
                        'Good job!',
                        'You have added new comment!',
                        'success'
                    )
                    reset()
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                    })
                }


            })
    };
    return (
        <section className="container section-divider">
            <div className="row mb-5">
                <div className="col">
                    <div className="text-center ">
                        <h1 className="display-5 fw-bolder">{blogTitle}</h1>

                        <div className='category'>
                            <div className="badge bg-secondary text-wrap fs-6 m-2">
                                <i className="bi bi-person-circle"></i>
                                <span> {blogAuthor}</span>
                            </div>

                            <div className="badge bg-secondary text-wrap fs-6 m-2">
                                <i className="bi bi-card-list"></i>
                                <span> {blogCategory}</span>
                            </div>

                            <div className="badge bg-secondary text-wrap fs-6 m-2">
                                <i className="bi bi-calendar3"></i>
                                <span> {blogPublishDate}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-9">
                    <img className="img-fluid" src={blogThumbnail} alt="..." />
                    <hr />
                    <p>{blogDescription}</p>
                    <hr />

                    <div className="container mt-5">
                        {
                            postCmts?.map(postCmt => <SingelCmt key={postCmt._id} cmtData={postCmt} />)
                        }
                    </div>

                    <div>
                        <form className="row g-3" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>

                            <div className="col-md-4">
                                <label className="form-label">Name</label>

                                <input {...register("cmtName")} className="form-control" placeholder="Your Name" required />
                            </div>

                            <div className="col-md-4">
                                <label className="form-label">Email</label>

                                <input {...register("cmtEmail")} type="email" className="form-control" placeholder="Your Email" required />
                            </div>


                            <div className="col-md-4">
                                <label className="form-label">Phone</label>

                                <input {...register("cmtPhone")} type="tel" className="form-control" placeholder="Your Phone" required />
                            </div>


                            <div className="col-12">
                                <textarea {...register("cmtDescription")} className="form-control" placeholder="Your Comment" rows="2" required />
                            </div>




                            <div className="col-10">
                                <button type="submit" className="btn btn-primary">Add Your Comment</button>

                                <button className="btn btn-dark btn-lg btn-block ms-2" type="reset">Clear fields</button>
                            </div>
                            <div className="col-2">
                                {
                                    loading && <div className="spinner-grow text-danger" style={{ width: '3rem', height: '3rem' }} role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                }

                            </div>


                        </form>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="col mb-3">
                        <img className='img-fluid' src="https://us.123rf.com/450wm/vectorknight/vectorknight1709/vectorknight170900050/87169958-digital-advertising-ads-social-media-online-marketing-vector-illustration-concept-.jpg" />
                    </div>

                    <div className="col mb-3">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

                            </div>
                        </div>
                    </div>




                </div>
            </div>
        </section >
    );
};

export default SingleBlogDetails;