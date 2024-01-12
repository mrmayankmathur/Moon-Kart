const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem")

const products = [
    {
      id: 1,
      title: "iPhone 15 Pro Max",
      price: '₹159900',
      description: "The iPhone 15 Pro Max features a robust titanium design, combining aerospace-grade strength with a Ceramic Shield front and matte-glass back for durability and resistance to splash, water, and dust. Its 6.7” Super Retina XDR display with ProMotion offers a vivid experience with a 120Hz refresh rate and an Always-On feature for easy Lock Screen access. Powered by the A17 Pro chip, it delivers immersive gaming, efficiency, and an extended battery life. The Pro Camera System, equipped with 7 lenses, ensures high-resolution photos and sharp close-ups. The customizable Action Button provides quick access to preferred features, activated with a press and hold.",
      colors: [
        {
          code: "Blue Titanium",
          img: "./img/iPhone15 pro.png",
        },
        {
          code: "Black Titanium",
          img: "./img/iPhone 15 pm.png",
        },
        {
          code: "Natural Titanium",
          img: "./img/iPhone 15 pm natural.png",
        },
        {
          code: "White Titanium",
          img: "./img/iPhone 15 pm white.png",
        },
      ],
    },
    {
      id: 2,
      title: "Macbook Pro M3 Pro",
      price: '₹199900',
      description: "Empowered by the M3 Pro or M3 Max chip, the MacBook Pro delivers outstanding performance with up to a 12-core CPU and 18-core GPU for intricate tasks like panorama manipulation or extensive code compilation. The M3 Max, featuring up to a 16-core CPU and 40-core GPU, excels in demanding workflows like 3D content rendering and developing models with vast parameters. Enjoy up to 18 hours of battery life, a responsive unified memory (up to 36GB or 128GB) coupled with superfast SSD storage (up to 4TB or 8TB). The 35.97 cm Liquid Retina XDR display offers exceptional brightness and HDR content, while pro apps, advanced camera and audio, Magic Keyboard with Touch ID, robust security, and seamless integration with Apple devices enhance your overall MacBook Pro experience. The versatile connectivity includes MagSafe charging, Thunderbolt 4 ports, SDXC card slot, HDMI port, and Wi-Fi 6E. Elevate your work and play with this advanced and compatible MacBook Pro.",
      colors: [
        {
          code: "Space Black",
          img: "./img/Apple-MacBook-Pro-Space-Black-PNG.png",
        },
        {
          code: "Silver",
          img: "./img/Apple-MacBook-Pro-Silver-PNG.png",
        },
      ],
    },
    {
      id: 3,
      title: "Ipad Pro M2",
      price: '₹96900',
      description: "The iPad Pro M2 boasts an impressive 11-inch Liquid Retina display with ProMotion, True Tone, and P3 wide color, delivering vibrant visuals. Powered by the M2 chip with an 8-core CPU and 10-core GPU, it ensures swift performance. The device features a 12MP Wide camera, 10MP Ultra Wide back camera, and a LiDAR Scanner for immersive AR experiences. The front camera is a 12MP Ultra Wide with Center Stage functionality. Enjoy superfast connectivity with Wi-Fi 6E and 5G cellular capabilities, enhancing your overall iPad experience.",
      colors: [
        {
          code: "Space Gray",
          img: "./img/iPad pro space grey.png",
        },
        {
          code: "Silver",
          img: "./img/iPad pro silver.png",
        },
      ],
    },
    {
      id: 4,
      title: "Apple Watch Series 9",
      price: '₹41900',
      description: "Elevate your lifestyle with the Apple Watch Series 9, a robust companion for a healthy life. Powered by the S9 chip, it features a super-bright display and innovative touch-free interaction. With advanced health, safety, and activity features, gain powerful insights and quick assistance when needed. The watch is carbon neutral when paired with an aluminum case and the latest Sport Loop. Enjoy cellular connectivity for texts, calls, and music streaming without your iPhone nearby. Benefit from advanced health features, including blood oxygen monitoring, ECG, heart rhythm notifications, sleep tracking, temperature sensing, and emotional awareness tools. The Workout app provides diverse training options and detailed metrics for a comprehensive fitness experience. Experience a new level of power and functionality with the Apple Watch Series 9.",
      colors: [
        {
          code: "Stainless Steel",
          img: "./img/Watch series 9 steel.png",
        },
        {
          code: "ALuminium",
          img: "./img/Watch series 9 aluminium.png",
        },
      ],
    },
    {
      id: 5,
      title: "Airpods Pro 2nd Generation",
      price: '₹24900',
      description: "Introducing the AirPods Pro (2nd generation) with MagSafe Charging Case (USB-C) — a complete audio upgrade. Experience up to 2x more Active Noise Cancellation, powered by the upgraded H2 chip, offering superior audio quality with Adaptive EQ for a personalized and immersive sound experience. The intelligent sound features include Transparency mode, Conversation Awareness, and Adaptive Audio, adapting to your environment in real time. Personalized listening is enhanced by flexible silicone ear tips, Personalised Volume, Conversation Awareness, and Spatial Audio. Enjoy up to 6 hours of listening time on a single charge, extendable to 30 hours with the MagSafe Charging Case. The case, equipped with Precision Finding and a lanyard loop, is IP54 dust, sweat, and water-resistant. Touch control, Announce Notifications, Audio Sharing, and seamless connectivity with Apple devices make these AirPods Pro more magical than ever.",
      colors: [
        {
          code: "White",
          img: "./img/airpods_pro.png",
        },
      ],
    },
];

let chosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductDescription = document.querySelector(".productDescription");
const currentProductColors = document.querySelectorAll(".colour");
const currentColorImage = document.querySelectorAll(".colourImage");
const currentColourText = document.querySelectorAll(".colourText");

// wrapper.style.transform = "translateX(-102.5vw)"
menuItems.forEach((item, index)=>{
    item.addEventListener("click", () => {
        //change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        //change the chosen product
        chosenProduct = products[index]

        //change texts of current products
        currentProductTitle.textContent = chosenProduct.title
        currentProductPrice.textContent = chosenProduct.price
        currentProductImg.src = chosenProduct.colors[0].img
        currentProductDescription.textContent = chosenProduct.description

        // Update the color options for the chosen product
        updateColorOptions(chosenProduct.colors);

        // Add an event listener to each color container
        function addColorEventListeners() {
            currentProductColors.forEach((colorContainer, index) => {
                colorContainer.addEventListener("click", () => {
                    // Update the current product image when a color is selected
                    currentProductImg.src = chosenProduct.colors[index].img;
        
                    // Remove the "selected" class from all color containers
                    currentProductColors.forEach((container) => container.classList.remove("selected"));
        
                    // Add the "selected" class to the clicked color container
                    colorContainer.classList.add("selected");
                });
            });
        }
        
        // Initialize color event listeners
        addColorEventListeners();
        
        // Update color options when a menu item is clicked
        menuItems.forEach((item, index) => {
            item.addEventListener("click", () => {
                // Change the current slide
                wrapper.style.transform = `translateX(${-102 * index}vw)`;
        
                // Change the chosen product
                chosenProduct = products[index];
        
                // Change texts of current products
                currentProductTitle.textContent = chosenProduct.title;
                currentProductPrice.textContent = chosenProduct.price;
        
                // Update the color options for the chosen product
                updateColorOptions(chosenProduct.colors);
            });
        });
    });
});

function updateColorOptions(colors) {
    // Hide all color options containers initially
    currentProductColors.forEach((container) => container.classList.add("hidden"));

    // Show only the necessary color options for the chosen product
    colors.forEach((color, index) => {
        // Show the corresponding color option container
        currentProductColors[index].classList.remove("hidden");

        // Show the corresponding color option
        currentColorImage[index].src = color.img;
        currentColorImage[index].classList.remove("hidden");

        // Show the corresponding color text
        currentColourText[index].textContent = color.code;
        currentColourText[index].classList.remove("hidden");
    });

    // Hide excess color options for the chosen product
    for (let i = colors.length; i < currentColorImage.length; i++) {
        currentColorImage[i].src = ''; // Clear image source
        currentColorImage[i].classList.add("hidden");
        currentColourText[i].textContent = ''; // Clear text content
        currentColourText[i].classList.add("hidden");
    }
}

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click",()=>{
    payment.style.display = "flex";
})

close.addEventListener("click",()=>{
    payment.style.display = "none";
})