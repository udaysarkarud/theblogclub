import React from 'react';
import SingelBlogCard from '../SingelBlogCard/SingelBlogCard';

const BlogSection = () => {
    return (
        <section className="container section-divider">
            <div className="row">
                <div className="col-xl-8 offset-xl-2">
                    <div className="text-center ">
                        <h1>Our Journals for You</h1>
                        <p>We have more than 1k authors. They provide nice and well researched contents for your. Our stories that move you and move with you</p>
                    </div>
                    
                    <div className="input-group my-5">
                        <input type="text" className="form-control" placeholder="Search using blog title" aria-label="Recipient's username" aria-describedby="button-addon2" />
                        <button className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <SingelBlogCard />
                <SingelBlogCard />
                <SingelBlogCard />
                <SingelBlogCard />
                <SingelBlogCard />
                <SingelBlogCard />
                <SingelBlogCard />
                <SingelBlogCard />
                <SingelBlogCard />
                <SingelBlogCard />
                <SingelBlogCard />
                <SingelBlogCard />
                <SingelBlogCard />
                <SingelBlogCard />
                <SingelBlogCard />
                <SingelBlogCard />
                <SingelBlogCard />
                <SingelBlogCard />
                <SingelBlogCard />
                <SingelBlogCard />
                <SingelBlogCard />
            </div>
        </section>
    );
};

export default BlogSection;