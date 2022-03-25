import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SingelBlogCard from '../SingelBlogCard/SingelBlogCard';
import ReactPaginate from 'react-paginate';
import { useForm } from 'react-hook-form';

const BlogSection = () => {
    const [blogPosts, setBlogPosts] = useState([]);

    const [page, setPage] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const size = 5;

    useEffect(() => {
        axios.get(`http://localhost:5000/blogposts?page=${page}&&size=${size}`)
            .then(res => {
                setBlogPosts(res.data.allPosts);
                const count = res.data.count;
                const pageNumber = Math.ceil(count / size);
                setPageCount(pageNumber);
            })
    }, [page])

    const handelPagination = (data) => {
        setPage(data.selected);
    }

    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();

    const onSubmit = data => {
        console.log(data.search)
        if (data.search) {
            axios.get(`http://localhost:5000/blogposts?page=${page}&&size=${size}&&search=${data.search}`)
            .then(res => {
                setBlogPosts(res.data.allPosts);
                const count = res.data.count;
                const pageNumber = Math.ceil(count / size);
                setPageCount(pageNumber);
            })
        }
    };

    return (
        <section className="container section-divider">
            <div className="row">
                <div className="col-xl-8 offset-xl-2">
                    <div className="text-center ">
                        <h1>Our Journals for You</h1>
                        <p>We have more than 1k authors. They provide nice and well researched contents for your. Our stories that move you and move with you</p>
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