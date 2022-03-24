import React from 'react';
import { useForm } from 'react-hook-form';

const AddNewPost = () => {
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();

    const onSubmit = data => {
        console.log(data)
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

                            <input type="file" {...register("blogThumbnail")}
                                accept="image/png, image/gif, image/jpeg"
                                className="form-control" placeholder="Image URL" required />
                        </div>

                        <div className="col-12">
                            <textarea {...register("blogDescription")} className="form-control" placeholder="Description" rows="6" required />
                        </div>

                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">Add New Blog</button>
                            
                            <button className="btn btn-dark btn-lg btn-block ms-2" type="reset">Clear fields</button>
                        </div>

                    </form>
                </div>

            </div>
        </section >
    );
};

export default AddNewPost;