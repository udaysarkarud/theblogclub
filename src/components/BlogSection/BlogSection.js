import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SingelBlogCard from '../SingelBlogCard/SingelBlogCard';
import ReactPaginate from 'react-paginate';
import { useForm } from 'react-hook-form';

const BlogSection = () => {
    //Blog Post Data
    const [blogPosts, setBlogPosts] = useState([]);

    // Pagination
    const [page, setPage] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const size = 5;

     // Hook Form
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();

    // calling api to get blogs data
    useEffect(() => {
        axios.get(`http://localhost:5000/blogposts?page=${page}&&size=${size}`)
            .then(res => {
                setBlogPosts(res.data.allPosts);
                const count = res.data.count;
                const pageNumber = Math.ceil(count / size);
                setPageCount(pageNumber);
            })
    }, [page])

   // blogs data based on shearch
    const onSubmit = data => {
        if (data.search) {
            axios.get(`http://localhost:5000/blogposts?page=${page}&&size=${size}&&search=${data.search}`)
                .then(res => {
                    setBlogPosts(res.data.allPosts);
                    const count = res.data.count;
                    const pageNumber = Math.ceil(count / size);
                    setPageCount(pageNumber);
                    reset()
                })
        } else {
            setPage(undefined);
        }
    };

       // blogs data based on catagory
    const handelCategory = (getCategory) => {
        if (getCategory !== "all") {
            axios.get(`http://localhost:5000/blogposts?page=${page}&&size=${size}&&category=${getCategory}`)
                .then(res => {
                    setBlogPosts(res.data.allPosts);
                    const count = res.data.count;
                    const pageNumber = Math.ceil(count / size);
                    setPageCount(pageNumber);
                    reset()
                })
        } else {
            setPage(undefined);
        }
    }

    const handelPagination = (data) => {
        setPage(data.selected);
    }


    return (
        <section className="container section-divider">
            <div className="row">
                <div className="col-12">
                    <div className="text-center">
                        <h1>Our Journals for You</h1>
                        <p>We have more than 1k authors. They provide nice and well researched contents for your. Our stories that move you and move with you</p>

                        <div className='category'>
                            <div className="badge bg-primary text-wrap fs-6 m-2" onClick={() => handelCategory('all')}>
                                <i className="bi bi-ui-checks"></i>
                                <span> All</span>
                            </div>

                            <div className="badge bg-primary text-wrap fs-6 m-2" onClick={() => handelCategory('cold call')}>
                                <i className="bi bi-telephone"></i>
                                <span> Cold Call</span>
                            </div>

                            <div className="badge bg-primary text-wrap fs-6 m-2" onClick={() => handelCategory('cold email')}>
                                <i className="bi bi-envelope"></i>
                                <span> Cold Email</span>
                            </div>

                            <div className="badge bg-primary text-wrap fs-6 m-2" onClick={() => handelCategory('crm')}>
                                <i className="bi bi-people"></i>
                                <span> CRM</span>
                            </div>

                            <div className="badge bg-primary text-wrap fs-6 m-2" onClick={() => handelCategory('lead generation')}>
                                <i className="bi bi-person-check"></i>
                                <span> Lead Generation</span>
                            </div>

                            <div className="badge bg-primary text-wrap fs-6 m-2" onClick={() => handelCategory('linkedIn outreach')}>
                                <i className="bi bi-linkedin"></i>
                                <span> LinkedIn Outreach</span>
                            </div>

                            <div className="badge bg-primary text-wrap fs-6 m-2" onClick={() => handelCategory('sales')}>
                                <i className="bi bi-cash-coin"></i>
                                <span> Sales</span>
                            </div>

                            <div className="badge bg-primary text-wrap fs-6 m-2" onClick={() => handelCategory('sales tips')}>
                                <i className="bi bi-receipt"></i>
                                <span> Sales Tips</span>
                            </div>
                        </div>
                    </div>



                    <form className="row" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                        <div className="input-group my-5">
                            <input type="text" className="form-control" placeholder="Search using blog title" {...register("search")} />
                            <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Search</button>
                        </div>
                    </form>

                </div>
            </div>
            <div className="row">
                {
                    blogPosts?.map(singelpost => <SingelBlogCard key={singelpost._id} blogData={singelpost} />)
                }

                <div className="my-4 justify-content-center">
                    <ReactPaginate
                        previousLabel={' Previous'}
                        nextLabel={' Next'}
                        breakLabel={'...'}

                        pageCount={pageCount}

                        onPageChange={handelPagination}

                        containerClassName={'pagination justify-content-center'}
                        pageClassName={'page-item'}
                        pageLinkClassName={'page-link'}

                        previousClassName={'page-item'}
                        previousLinkClassName={'page-link'}
                        breakClassName={'page-item'}
                        breakLinkClassName={'page-link'}
                        nextClassName={'page-item'}
                        nextLinkClassName={'page-link'}
                        activeClassName={'active'}
                        activeLinkClassName={'page-link'}
                    />
                </div>
            </div>
        </section>
    );
};

export default BlogSection;