import React, { useState } from "react"
import Images from './Images.jsx'
import image1 from './images/image-product-1.jpg'
import image1Thumbnail from './images/image-product-1-thumbnail.jpg'
import image2Thumbnail from './images/image-product-2-thumbnail.jpg'
import image3Thumbnail from './images/image-product-3-thumbnail.jpg'
import image4Thumbnail from './images/image-product-4-thumbnail.jpg'
import './Gallery.scss'

export default function Gallery({popup, setPopup, openPopup}) {
    let [slide, setSlide] = useState(1)
    let [selected, setSelected] = useState(1)

    function previousSlide() {
        if(slide >= 4) {
            setSlide(1)
            setSelected(1)
        } else {
            setSlide(slide + 1)
            setSelected(slide + 1)
        }
    }

    function nextSlide() {
        if(slide <= 1) {
            setSlide(4)
            setSelected(4)
        } else {
            setSlide(slide - 1)
            setSelected(slide -1)
        }
    }

    function border(n) {
        setSlide(n)
        setSelected(n)
    }

    return (
        <>
            <figure>
                    <div className="close-wrapper">
                        <svg onClick={openPopup} width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#69707D" fill-rule="evenodd"/></svg>
                    </div>
                    <div className="lightBox-imageContainer">
                        <div onClick={nextSlide} className="next">
                            <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
                        </div>
                        <Images slide={slide} />
                        <div onClick={previousSlide} className='previous'>
                            <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
                        </div>
                    </div>
                    <div className='imageGallery'>
                        <div onClick={() => border(1)} className={selected === 1 ? 'border' : null} >
                        <img className="image" src={image1Thumbnail} alt="" />
                        </div>
                        <div onClick={() => border(2)} className={selected === 2 ? 'border' : null}>
                        <img className="image" src={image2Thumbnail} alt="" />
                        </div>
                        <div onClick={() => border(3)} className={selected === 3 ? 'border' : null}>
                        <img className="image" src={image3Thumbnail} alt="" />
                        </div>
                        <div onClick={() => border(4)} className={selected === 4 ? 'border' : null}>
                        <img className="image" src={image4Thumbnail} alt="" />
                        </div>
                    </div>
            </figure>
        </>
    )
}