import axios from 'axios';
import React, { useState } from 'react';
import Swal from 'sweetalert2'
import { useForm } from 'react-hook-form';



const AddNewPost = () => {
    const [loading, setLoading] = useState(false)

    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();

    const onSubmit = data => {
        //Set Loading on UI
        setLoading(true)

        //Genaret Publish date, Blog Thumbnail and New Posting Data
        const blogPublishDate = new Date().toLocaleDateString()
        let blogThumbnail;
        let blogPostData;

        //Make FormData
        const fileInfo = data.blogImg[0];
        const formData = new FormData();
        formData.append('file', fileInfo);
        formData.append('upload_preset', 'plwdtmz7');

        //Upload Image on cloudinary
        axios.post('https://api.cloudinary.com/v1_1/coremailud/image/upload', formData).then(res => {

            //Get cloudinary image url and set on blogThumbnail
            blogThumbnail = `${res.data.url}`;

            //Delete img formData
            delete data['blogImg'];

            //Make new object with necessary properties
            blogPostData = { ...data, blogThumbnail, blogPublishDate }

            //Calling api for insert blogpost data on mongodb
            axios.post('http://localhost:5000/addnewpost', blogPostData)
                .then(res => {
                    if (res.data.acknowledged === true) {
                        setLoading(false)
                        Swal.fire(
                            'Good job!',
                            'You have added new post!',
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
        })
    };
    return (
        <section className="container section-divider">
            <div className="row gx-4 gx-lg-5">
                <div className="col">
                    <div>

                        <h1>Add New Blog Post</h1>


                        <p>Add new usefull content to help people to choose the right show and how they'll maintain the product. </p>
                    </div>

                    <form className="row g-3" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                        <div className="col-12">
                            <label className="form-label">Blog Title</label>

                            <input {...register("blogTitle")} className="form-control" placeholder="Blog Title" required />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Author</label>

                            <input {...register("blogAuthor")} className="form-control" placeholder="Author Name" required />
                        </div>

                        <div className="col-md-4">
                            <label className="form-label">Category</label>

                            <input {...register("blogCategory")} className="form-control" placeholder="Category" required />
                        </div>

                        <div className="col-md-4">
                            <label className="form-label">Blog Thumbnail</label>

                            <input type="file" {...register("blogImg")}
                                accept="image/png, image/gif, image/jpeg"
                                className="form-control" placeholder="Image URL" required />
                        </div>

                        <div className="col-12">
                            <textarea {...register("blogDescription")} className="form-control" placeholder="Description" rows="6" required />
                        </div>




                        <div className="col-10">
                            <button type="submit" className="btn btn-primary">Add New Blog</button>

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
        </section >
    );
};

export default AddNewPost;