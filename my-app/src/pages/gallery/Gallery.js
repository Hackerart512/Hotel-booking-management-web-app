import React from "react";
import './gallery.css'
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import ImageSlider from "../../components/imageSlider/ImageSlider";
import GalleryImageCard from "../../components/galleryImagecard/GalleryImageCard";
import HeadingBlock from "../../components/headingBlock/HeadingBlock";

export default (Gallery) => {
    return (
        <>
        <Navbar change="gallery"/>
        <HeadingBlock  heading="Gallery" blockL="HOME " blockR="GALLERY"/>
        <ImageSlider/>
        <GalleryImageCard/>  
        <Footer/>
        </>
    )
  
}
