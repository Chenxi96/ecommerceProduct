# Frontend Mentor - E-commerce product page solution

This is a solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it

### Screenshot

![](./src/images/glittery-cannoli-e75f66.netlify.app_%20(1).png)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: (https://github.com/Chenxi96/ecommerceProduct)
- Live Site URL: (https://glittery-cannoli-e75f66.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- SASS
- Flexbox
- CSS Grid
- [React](https://reactjs.org/) - JS library


### What I learned

I implemented a slideshow which I never do, i learned how to code it into react.

To see how you can add code snippets, see below:

```scss
figure {
    position: fixed;
    margin-top: 0;
    top: 0%;
    left: 0%;
    width: 100vw;
    height: 100vh;
    background-color: hsla(0, 0%, 0%, 0.7); 
    margin-inline: auto;
}

figure > div {
    margin-inline: auto;
}

.close-wrapper {
    display: flex;
    justify-content: flex-end;
    width: 35%;
    margin-top: 6.2rem;
    margin-bottom: 20px;
}

.close-wrapper path {
    fill: white;
}

.close-wrapper path:hover {
    fill: hsl(26, 100%, 55%);
}

.next path:hover, .previous path:hover {
    stroke: hsl(26, 100%, 55%);
}

.imageGallery {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    width: 25%;
    margin-block: 20px;
}

.imageGallery > div {
    width: 25%;
    background-color: white;
    border-radius: 15px;
}

.border {
    border: 2px solid hsl(26, 100%, 55%);
}

.border > img {
    opacity: 50%;
}

.image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
}

.image:hover {
    opacity: 50%;
}

.lightBox-imageContainer {
    position: relative;
    width: 35%;
}

.lightBox-imageContainer .mainImage {
    object-fit: cover;
    width: 100%;
    border-radius: 15px;
}

.next {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 40%;
    left: -25px;
    background-color: white;
    border-radius: 100%;
    height: 50px;
    width: 50px;
}

.previous {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 40%;
    right: -25px;
    height: 50px;
    width: 50px;
    background-color: white;
    border-radius: 100%;
}
```
```js
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
```


### Continued development

I would want to get better at organization of react files and also implement some sort of architecture for the css.


### Useful resources

- [slideshow](https://www.w3schools.com/w3css/w3css_slideshow.asp) - This site help me learn how to implement a slideshow onto the project.

- [Lightbox](https://www.w3schools.com/howto/howto_js_lightbox.asp) - This help me learn how to make a light box on to my project.


## Author

- Website - [Chenxi](https://glittery-cannoli-e75f66.netlify.app/)
- Frontend Mentor - [@Chenxi96](https://www.frontendmentor.io/profile/Chenxi96)
- Twitter - [@Chenxi_Lin_](https://www.twitter.com/Chenxi_Lin_)

