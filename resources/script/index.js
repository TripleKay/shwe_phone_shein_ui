/* -------------------------------Start Product Title slider-------------------------------------   */
const productSectionTitle1 = document.querySelector(".product_section_title1");
const productSectionTitle2 = document.querySelector(".product_section_title2");
const productSectionTitle3 = document.querySelector(".product_section_title3");
const productPrevBtn = document.querySelector('.prevBtn');
const productNextBtn = document.querySelector('.nextBtn');

let titles = [productSectionTitle1, productSectionTitle2, productSectionTitle3];
let currentIndex = -1;

loadPage(0);

function loadPage(i) {
    //Check if index is valid
    if (titles[i]) {
        console.log(titles[i]);
        titles[i].classList.add('active');
    } else {
        return;
    }  
    //Hide previous slide
    if (titles[currentIndex]) {
        titles[currentIndex].classList.remove('active');
    }
    
    currentIndex = i;
    }
const productSectionTitle = document.querySelector(".product_section_title");
const productSectionTitleContainer = document.querySelector(".product_title_container");


productPrevBtn.addEventListener("click",() => {
    //remove current active
    loadPage(currentIndex - 1);
    const slideWidth = productSectionTitle.clientWidth;
    productSectionTitleContainer.scrollLeft -= slideWidth;
});

productNextBtn.addEventListener("click",() => {
    //remove current active
    loadPage(currentIndex + 1);
    const slideWidth = productSectionTitle.clientWidth;
    productSectionTitleContainer.scrollLeft += slideWidth;
    });

/* -------------------------------End Product Title slider-------------------------------------   */
/* -------------------------------category slider-------------------------------------   */
$('.category-slider').owlCarousel({
    margin:10,
    nav:true,
    // dots: true,
    // loop: true,
    responsive:{
        0:{
            items:2
        },
        900:{
            items:3
        },
        1000:{
            items:4,
        },
        1200:{
            items:6
        }
    }

})
/* -------------------------------end category slider-------------------------------------   */
