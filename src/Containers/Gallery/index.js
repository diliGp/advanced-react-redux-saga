import React from 'react';
import { connect } from 'react-redux';
import Image from './Image';
import './Gallery.scss';

const Gallery = ({ images }) => {
    return (
        <section className="Gallery">
            <h1>Gallery Section</h1>
            <div className="Grid">
                {images && images.length > 0 && images.map((image, i) => <Image key={i} {...image} />)}
            </div>
        </section>
    )
}

const mapStoreToProps = (store) => ({
    images: store.gallery.images
});

export default connect(mapStoreToProps)(Gallery);
