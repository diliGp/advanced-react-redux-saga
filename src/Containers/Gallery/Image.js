import React from 'react';

const Image = ({ alt_description, urls }) => {
    const srcSet = [urls.raw, urls.regular, urls.full, urls.small, urls.thumb].join(',');
    return (
        <figure className="Image">
            <img src={urls.regular} alt={alt_description} srcSet={srcSet} />
        </figure>
    )
}

export default Image;
