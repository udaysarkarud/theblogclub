import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';



const AddNewPost = () => {
    const [loading, setLoading] = useState(false)

    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();

    const onSubmit = data => {
        setLoading(true)
        let blogThumbnail;
        let blogPostData;
        const fileInfo = data.blogImg[0];
        const formData = new FormData();
        formData.append('file', fileInfo);
        formData.append('upload_preset', 'plwdtmz7');

        axios.post('https://api.cloudinary.com/v1_1/coremailud/image/upload', formData).then(res => {
            blogThumbnail = `${res.data.url}`;
            delete data['blogImg'];
            blogPostData = { ...data, blogThumbnail }
            console.log(blogPostData)
            setLoading(false)
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
                        <div className="col-md-6">
                            <label className="form-label">Category</label>

                            <input {...register("blogCategory")} className="form-control" placeholder="Blog Tag" required />
                        </div>
                        <div className="col-md-6">
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
                                loading&&<div className="spinner-grow text-danger" style={{width: '3rem', height: '3rem'}} role="status">
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