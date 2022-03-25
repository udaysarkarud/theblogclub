import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SingelBlogCard from '../SingelBlogCard/SingelBlogCard';
import ReactPaginate from 'react-paginate';

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