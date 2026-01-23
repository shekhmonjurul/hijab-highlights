const deep_navy_div = document.getElementById("deep-navy"); //images div
const light_brown_div = document.getElementById("light-brown"); //images div
const plum_pink_div = document.getElementById("plum-pink"); //images div
const sea_geern_div = document.getElementById("sea-green"); //images div
const whatsapp_link = document.getElementById("whatsapp"); // select a tag
const product_color = document.getElementById("product-color"); //select select tag

const images = {
    light_brown: [
        {
            id: 1,
            category_name: "light_brown",
            image_src: "/images/ligth_brown/ligth_brown_1.jpg"
        },
        {
            id: 2,
            category_name: "light_brown",
            image_src: "/images/ligth_brown/ligth_brown_2.jpg"
        },
        {
            id: 3,
            category_name: "light_brown",
            image_src: "/images/ligth_brown/ligth_brown_3.jpg"
        },
        {
            id: 4,
            category_name: "light_brown",
            image_src: "/images/ligth_brown/ligth_brown_4.jpg"
        }
    ],
    deep_navy: [
        {
            id: 1,
            category_name: "deep_navy",
            image_src: "/images/deep_navy/deep_navy_1.jpg"
        },
        {
            id: 2,
            category_name: "deep_navy",
            image_src: "/images/deep_navy/deep_navy_2.jpg"
        },
        {
            id: 3,
            category_name: "deep_navy",
            image_src: "/images/deep_navy/deep_navy_3.jpg"
        },
        {
            id: 4,
            category_name: "deep_navy",
            image_src: "/images/deep_navy/deep_navy_4.jpg"
        },
    ],
    plum_pink: [
        {
            id: 1,
            category_name: "plum_pink",
            image_src: "/images/plum_pink/plum_pink_1.jpg"
        },
        {
            id: 2,
            category_name: "plum_pink",
            image_src: "/images/plum_pink/plum_pink_2.jpg"
        },
        {
            id: 3,
            category_name: "plum_pink",
            image_src: "/images/plum_pink/plum_pink_3.jpg"
        },
    ],
    sea_geern: [
        {
            id: 1,
            category_name: "sea_green",
            image_src: "/images/sea_green/sea_green_1.jpg"
        },
        {
            id: 2,
            category_name: "sea_green",
            image_src: "/images/sea_green/sea_green_2.jpg"
        },
        {
            id: 3,
            category_name: "sea_green",
            image_src: "/images/sea_green/sea_green_3.jpg"
        },
        {
            id: 4,
            category_name: "sea_green",
            image_src: "/images/sea_green/sea_green_4.jpg"
        },
        {
            id: 5,
            category_name: "sea_green",
            image_src: "/images/sea_green/sea_green_5.jpg"
        },
        {
            id: 6,
            category_name: "sea_green",
            image_src: "/images/sea_green/sea_green_6.jpg"
        },

        {
            id: 7,
            category_name: "sea_green",
            image_src: "/images/sea_green/sea_green_7.jpg"
        },
        {
            id: 8,
            category_name: "sea_green",
            image_src: "/images/sea_green/sea_green_8.jpg"
        },
    ]
}

const { deep_navy, light_brown, plum_pink, sea_geern } = images;

// Render images
RenderProductList(deep_navy, deep_navy_div);
RenderProductList(light_brown, light_brown_div);
RenderProductList(plum_pink, plum_pink_div);
RenderProductList(sea_geern, sea_geern_div);




// create a new image function
function ImageFunc(src, alt, appendNode) {
    const img = document.createElement('img');
    img.setAttribute("src", src);
    img.setAttribute("alt", alt);
    img.classList.add("rounded-2xl", "shadow", "h-[200px]",);
    appendNode.appendChild(img)
}


// rendering image list 
function RenderProductList(items, appendChild) {
    for (const item of items) {
        ImageFunc(item.image_src, item.category_name, appendChild);
    }

}
