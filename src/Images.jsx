import image1 from './images/image-product-1.jpg'
import image2 from './images/image-product-2.jpg'
import image3 from './images/image-product-3.jpg'
import image4 from './images/image-product-4.jpg'
import './Gallery.scss'

export default function Images({slide}) {
    if(slide === 1) {
        return (
            <>
                <img src={image1} className='mainImage' alt="" />
            </>
        )
    } else if(slide === 2) {
        return (
            <>
                <img src={image2} className='mainImage' alt="" />
            </>
        )
    } else if(slide === 3) {
        return(
            <>
                <img src={image3} className='mainImage' alt="" />
            </>
        )
    } else if(slide === 4) {
        return (
            <>
                <img src={image4} className='mainImage' alt="" />
            </>
        )
    }
}