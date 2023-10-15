export class Carousel
{
    constructor(eleId, images) {
        this.imageArray = [];
        this.carousel;
        this.imgIndex = 0;
        this.timeInterval;
        this.startRotation();
        return this.buildCarousel(eleId, images);
    }

    createButton = (type, i) => { 
        const btn = document.createElement('button');

        switch (type) {
            case 'prev': 
                btn.innerText = '<'
                btn.addEventListener('click', () => { 
                    this.imgIndex--;
                    this.displayImages(this.carousel, this.getDisplayImages(this.imageArray));
                    clearInterval(this.timeInterval);
                })
                break;
            case 'next':
                btn.innerText = '>'
                btn.addEventListener('click', () => { 
                    this.imgIndex++;
                    this.displayImages(this.carousel, this.getDisplayImages(this.imageArray))
                    clearInterval(this.timeInterval);
                })
                break;
            case 'pip':
                btn.innerText = ''
                btn.addEventListener('click', () => { 
                    this.imgIndex = i;
                    this.displayImages(this.carousel, this.getDisplayImages(this.imageArray));
                    clearInterval(this.timeInterval);
                })
        }
        return btn;
    }

    createNav = () => { 
        const navSection = document.createElement('div');
        navSection.setAttribute('class', 'carousel-nav');
        const prevButton = this.createButton('prev', 0) ;
        navSection.appendChild(prevButton);
        this.imageArray.forEach((img, i) => { 
            const pip = this.createButton('pip', i);
            navSection.appendChild(pip);
        })
        const nextButton = this.createButton('next', 0);
        navSection.appendChild(nextButton);
        return navSection;
    }

    rotateImages = () => { 
        this.imgIndex++;
        const displayImages = this.getDisplayImages(this.imageArray);
        this.displayImages(this.carousel, displayImages);
    }

    startRotation = () => { 
        this.timeInterval = setInterval(this.rotateImages, 5000)
    }

    displayImages = (container, images) => { 
        container.innerHTML = '';
        images.forEach(image => { 
            container.appendChild(image);
        })
        return container;
    }

    getDisplayImages = (imageArray) => {
        let displayImages = [];
        if (this.imgIndex === 0 )
        {
            displayImages.push(imageArray[imageArray.length - 1]);
            displayImages.push(imageArray[this.imgIndex]);
            displayImages.push(imageArray[this.imgIndex + 1]);
        }
        else if (this.imgIndex === (imageArray.length - 1))
        {
            displayImages.push(imageArray[ this.imgIndex - 1 ]);
            displayImages.push(imageArray[ this.imgIndex ]);
            displayImages.push(imageArray[ 0 ]);
            this.imgIndex = 0;
        }
        else 
        {
            displayImages = imageArray.slice(this.imgIndex - 1, this.imgIndex + 2);
        }
        return displayImages;
    }

    createContainer = (eleId) => { 
    const cntnr = document.createElement('div');
    cntnr.setAttribute('class', 'carousel-container');
    cntnr.setAttribute('id', eleId);

    return cntnr;
}

    createCarousel = (eleId, images) => { 
    const carousel = document.createElement('div');
    carousel.setAttribute('class', 'carousel');
    carousel.setAttribute('id', `${eleId}-carousel`);
    images.forEach((img, i) => { 
        const imageContainer = document.createElement('div');
        imageContainer.setAttribute('class', 'carousel-image-container');
        const image = document.createElement('img');
        image.setAttribute('class', 'carousel-image');
        image.setAttribute('src', img.src);
        imageContainer.appendChild(image);
        this.imageArray.push(imageContainer);
    });
    const imagesToDisplay = this.getDisplayImages(this.imageArray);
    this.displayImages(carousel, imagesToDisplay);
    return carousel;
}

    buildCarousel = 
(
    eleId,
    images,

) => { 
    const mainContainer = this.createContainer(eleId);

    this.carousel = this.createCarousel(eleId, images);

    const navSection = this.createNav();

    mainContainer.appendChild(this.carousel);

    mainContainer.appendChild(navSection);

    return mainContainer;
    }
}