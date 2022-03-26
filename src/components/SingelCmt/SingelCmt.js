import React from 'react';

const SingelCmt = (props) => {
    const { _id, cmtName, cmtEmail, cmtPhone, cmtDescription,cmtingDate} = props.cmtData
    return (
        <div className='bg-light m-3 p-3'>
            <div className="d-flex flex-column justify-content-start ml-2">
                <span className="fs-5 fw-bold">{cmtName}</span>
                <span className="text-muted">Email: {cmtEmail} - Date: {cmtingDate}</span>
            </div>

            <div className="mt-2">
                <p>{cmtDescription}</p>
            </div>
        </div>
    );
};

export default SingelCmt;