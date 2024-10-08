// all images imported from images directory
import product_01_image_01 from "../images/product_01.jpg";
import product_01_image_02 from "../images/product_01.1.jpg";
import product_01_image_03 from "../images/product_01.3.jpg";

import product_02_image_01 from "../images/product_2.1.jpg";
import product_02_image_02 from "../images/product_2.2.jpg";
import product_02_image_03 from "../images/product_2.3.jpg";

import product_03_image_01 from "../images/product_3.1.jpg";
import product_03_image_02 from "../images/product_3.2.jpg";
import product_03_image_03 from "../images/product_3.3.jpg";

import product_04_image_01 from "../images/product_4.1.jpg";
import product_04_image_02 from "../images/product_4.2.jpg";
import product_04_image_03 from "../images/product_4.3.png";

import product_05_image_01 from "../images/product_04.jpg";
import product_05_image_02 from "../images/product_08.jpg";
import product_05_image_03 from "../images/product_09.jpg";

import product_06_image_01 from "../images/bread(1).png";
import product_06_image_02 from "../images/bread(2).png";
import product_06_image_03 from "../images/bread(3).png";

const products = [
  {
    id: "01",
    title: "Chicken Burger",
    price: 199.0,
    image01: product_01_image_01,
    image02: product_01_image_02,
    image03: product_01_image_03,
    category: "Burger",

    desc: "The Chicken Burger is a mouthwatering, flavor-packed delight that satisfies cravings with every bite. Made with a juicy, tender chicken patty, seasoned to perfection, it’s grilled or fried to achieve the perfect balance of crispy and succulent. Nestled in a soft, freshly toasted bun, this burger is complemented by layers of fresh lettuce, ripe tomatoes, crunchy pickles, and a creamy mayo or tangy sauce that adds just the right kick. Whether you like it spicy or classic, the Chicken Burger is a go-to comfort food that delivers on taste, texture, and satisfaction—perfect for any meal of the day. ",
  },

  {
    id: "02",
    title: "Vegetarian Pizza",
    price: 300.0,
    image01: product_02_image_01,
    image02: product_02_image_02,
    image03: product_02_image_03,
    category: "Pizza",

    desc: "Vegetarian Pizza is a vibrant and delicious option that celebrates the flavors of fresh, wholesome ingredients. Topped with a colorful array of seasonal vegetables like bell peppers, mushrooms, onions, and spinach, this pizza is a feast for the eyes and the palate. The base starts with a perfectly baked crust, whether it's thin and crispy or thick and chewy, and is generously layered with rich tomato sauce and gooey mozzarella cheese, melting beautifully as it bakes.For added flavor, many variations include herbs like basil or oregano, as well as a drizzle of olive oil or balsamic glaze to enhance the taste. Vegetarian Pizza is not just a meal; it's a delightful way to enjoy the bounty of vegetables while satisfying your pizza cravings. Perfect for sharing or savoring all to yourself, this pizza proves that you don’t need meat to create a fulfilling and delicious dining experience!",
  },

  {
    id: "03",
    title: "Double Cheese Margherita",
    price: 510.0,
    image01: product_03_image_01,
    image02: product_03_image_02,
    image03: product_03_image_03,
    category: "Pizza",

    desc: "Double Cheese Margherita Pizza is a cheesy lover's dream, elevating the classic Margherita to new heights of deliciousness. This pizza features a perfectly baked thin crust that is both crispy and soft, providing the ideal base for its generous toppings. The rich, tangy tomato sauce, made from ripe tomatoes and fragrant basil, creates a flavorful foundation that complements the star of the show: the double layer of ooey-gooey mozzarella cheese.As the pizza bakes, the cheese melts and bubbles, creating a golden, deliciously gooey topping that stretches with every slice. Fresh basil leaves are added post-baking, imparting a burst of aroma and a touch of color that enhances both the flavor and presentation. The Double Cheese Margherita is perfect for those who crave extra cheese while still enjoying the classic flavors of a traditional Margherita. Whether shared with friends or savored alone, this pizza delivers a mouthwatering experience that is simply unforgettable!",
  },

  {
    id: "04",
    title: "Maxican Green Wave",
    price: 210.0,
    image01: product_04_image_01,
    image02: product_04_image_02,
    image03: product_04_image_03,
    category: "Pizza",

    desc: "**Mexican Green Wave Pizza** is a bold and vibrant culinary creation that brings the flavors of Mexico to your plate in a deliciously unique way. This pizza features a crispy crust as its foundation, topped with a zesty salsa verde that adds a fresh and tangy kick, setting the stage for a wave of flavors.The highlight of the **Mexican Green Wave** is its colorful array of toppings, which typically includes roasted peppers, jalapeños for a spicy kick, black olives, and sweet corn, all layered generously atop a bed of melted cheese. Fresh cilantro and slices of avocado are often added for a creamy texture and a burst of freshness, enhancing the pizza’s overall appeal. Each bite offers a delightful combination of heat, freshness, and savory goodness, making it a perfect choice for those who enjoy adventurous flavors. Whether you’re hosting a party or looking to treat yourself, the **Mexican Green Wave Pizza** promises a delightful experience that celebrates the vibrant and bold tastes of Mexican cuisine!",
  },

  {
    id: "05",
    title: "Cheese Burger",
    price: 200.0,
    image01: product_05_image_01,
    image02: product_05_image_02,
    image03: product_05_image_03,
    category: "Burger",

    desc: "The Cheese Burger is an all-time classic that never fails to hit the spot. It starts with a perfectly seasoned beef patty, grilled to juicy perfection, then topped with a slice of melted cheese that oozes with every bite. Nestled in a soft, toasted bun, it’s layered with fresh, crisp lettuce, ripe tomatoes, and crunchy onions. A dollop of ketchup, mustard, or a special sauce brings all the flavors together. Whether you're craving a simple, classic taste or a loaded, gourmet experience, the Cheese Burger is the ultimate comfort food, satisfying hunger and leaving you craving more!",
  },
  {
    id: "06",
    title: "Royal Cheese Burger",
    price: 240.0,
    image01: product_01_image_01,
    image02: product_01_image_02,
    image03: product_01_image_03,
    category: "Burger",

    desc: "The Royal Cheese Burger is an all-time classic that never fails to hit the spot. It starts with a perfectly seasoned beef patty, grilled to juicy perfection, then topped with a slice of melted cheese that oozes with every bite. Nestled in a soft, toasted bun, it’s layered with fresh, crisp lettuce, ripe tomatoes, and crunchy onions. A dollop of ketchup, mustard, or a special sauce brings all the flavors together. Whether you're craving a simple, classic taste or a loaded, gourmet experience, the Cheese Burger is the ultimate comfort food, satisfying hunger and leaving you craving more!",
  },

  {
    id: "07",
    title: "Seafood Pizza",
    price: 345.0,
    image01: product_02_image_02,
    image02: product_02_image_01,
    image03: product_02_image_03,
    category: "Pizza",

    desc: "Seafood Pizza is a delightful and gourmet twist on the traditional pizza, perfect for seafood lovers seeking something unique and flavorful. This culinary masterpiece features a perfectly baked crust that can be either thin and crispy or thick and chewy, providing a sturdy base for the delightful toppings.The star of the show includes an array of fresh seafood, such as succulent shrimp, tender calamari, and flaky white fish, often combined with clams or mussels for an ocean-inspired experience. These toppings are typically paired with a rich and savory tomato sauce or a creamy garlic white sauce, which enhances the natural flavors of the seafood.To elevate the dish further, it is often topped with a generous sprinkle of mozzarella and sometimes a blend of other cheeses, which melts beautifully to create a luscious, gooey layer over the seafood. Fresh herbs like parsley or dill add a burst of color and freshness, complementing the rich flavors.Whether enjoyed with a glass of white wine or a refreshing beverage, **Seafood Pizza** is a perfect choice for those looking to indulge in a delightful combination of textures and tastes that transport you straight to the coast with every delicious bite!",
  },

  {
    id: "08",
    title: "Thin Cheese Pizza",
    price: 220.0,
    image01: product_03_image_02,
    image02: product_03_image_01,
    image03: product_03_image_03,
    category: "Pizza",

    desc: "Thin Cheese Pizza is a delightful and minimalist take on the classic pizza, focusing on simplicity and flavor. This pizza features a beautifully thin and crispy crust that serves as the perfect canvas for its toppings. Baked to a golden-brown perfection, the crust is light and airy, allowing for a satisfying crunch with every bite.Generously layered with rich, melted mozzarella cheese, this pizza is all about that gooey, cheesy goodness. The cheese bubbles and stretches as it cooks, creating a delightful texture that cheese lovers crave. For added flavor, a touch of tomato sauce can be spread lightly over the crust, providing a subtle tang that complements the richness of the cheese without overpowering it.To enhance the experience, many enjoy sprinkling fresh basil, oregano, or a drizzle of olive oil on top, adding a burst of aroma and a hint of herbal freshness. The Thin Cheese Pizza is perfect for those who appreciate the classic flavors of pizza in a lighter form, making it an ideal choice for a quick snack, a casual meal, or a perfect base for adding your favorite toppings. Enjoyed alone or paired with a fresh salad, this pizza is a timeless favorite that never goes out of style!",
  },

  {
    id: "09",
    title: "Pizza With Mushroom",
    price: 310.0,
    image01: product_04_image_02,
    image02: product_04_image_01,
    image03: product_04_image_03,
    category: "Pizza",

    desc: "Pizza with Mushroom is a delightful and earthy variation of the classic pizza that showcases the rich flavors and textures of fresh mushrooms. This pizza typically starts with a perfectly baked crust—whether thin and crispy or thick and chewy—serving as the ideal base for a medley of toppings.Generously layered with a tangy tomato sauce, this pizza features an abundance of sliced mushrooms, which can include varieties like button, portobello, shiitake, or even truffle for a gourmet touch. The mushrooms are not only delicious but also provide a savory umami flavor that complements the cheese beautifully.Melted mozzarella cheese is the star of this dish, creating a gooey, comforting layer that enhances the overall experience. For added depth, some versions of mushroom pizza may incorporate other toppings, such as fresh herbs like basil or thyme, caramelized onions, or even spinach, creating a delightful blend of flavors.Whether enjoyed on its own or paired with a light salad, Pizza with Mushroom is perfect for those who appreciate the natural, earthy taste of mushrooms. It's a versatile dish that appeals to vegetarians and meat lovers alike, making it a wonderful choice for any pizza night!",
  },

  {
    id: "10",
    title: "Classic Hamburger",
    price: 214.0,
    image01: product_05_image_02,
    image02: product_05_image_01,
    image03: product_05_image_03,
    category: "Burger",

    desc: "The Classic Hamburger is a timeless favorite that embodies simplicity and flavor in every bite. Featuring a juicy, seasoned beef patty grilled to perfection, it’s served on a soft, lightly toasted bun that adds just the right amount of warmth and texture. With fresh, crunchy lettuce, ripe tomatoes, pickles, and onions, this burger celebrates the natural, hearty flavors of quality ingredients. Add a touch of ketchup, mustard, or mayo to enhance the taste without overpowering the delicious, savory meat. The Classic Hamburger is a satisfying go-to for anyone who loves the pure, uncomplicated joy of a traditional burger",
  },

  {
    id: "11",
    title: "Crunchy Bread ",
    price: 145.0,
    image01: product_06_image_01,
    image02: product_06_image_02,
    image03: product_06_image_03,
    category: "Bread",

    desc: "LCrunchy Bread is a delightful staple that brings texture and flavor to any meal. With its perfectly baked crust, this bread offers a satisfying crunch with every bite, making it an ideal companion for soups, salads, or as the base for delicious sandwiches. The interior is soft and airy, providing a lovely contrast to the crispy exterior. Whether made with whole grains, herbs, or seeds, Crunchy Bread enhances the dining experience with its robust flavor and versatility. Toast it for breakfast, use it for hearty sandwiches, or enjoy it with a spread of butter or olive oil. This bread is not just food; it’s an experience that adds a delightful crunch to every bite!",
  },

  {
    id: "12",
    title: "Delicious Bread ",
    price: 195.0,
    image01: product_06_image_02,
    image02: product_06_image_01,
    image03: product_06_image_03,
    category: "Bread",

    desc: "Delicious Bread is a timeless staple that serves as the foundation of countless meals, elevating the dining experience with its comforting texture and flavor. Whether freshly baked or toasted to perfection, delicious bread comes in various forms, each with its own unique appeal.From crusty artisan loaves to soft, pillowy rolls, each type of delicious bread is crafted to tantalize your taste buds. Sourdough, with its tangy flavor and chewy crust, offers a delightful contrast to the soft interior, while fluffy brioche, rich with butter, is perfect for indulgent breakfasts or sweet treats.Delicious bread can be enjoyed in countless ways—sliced and slathered with creamy butter, transformed into mouthwatering sandwiches, or served alongside soups and salads to soak up every last drop. It’s also the perfect base for bruschetta or crostini, topped with fresh ingredients for a delightful appetizer.No matter the occasion, delicious bread brings warmth and satisfaction to every meal. Its versatility makes it a beloved choice for sharing with family and friends, ensuring that every bite is not just food but a comforting experience that brings people together.",
  },

  {
    id: "13",
    title: "Loaf Bread ",
    price: 135.0,
    image01: product_06_image_03,
    image02: product_06_image_02,
    image03: product_06_image_03,
    category: "Bread",

    desc: "Loaf Bread is a versatile and comforting staple that graces tables around the world. Characterized by its rectangular shape, this bread is typically baked in a loaf pan, resulting in a soft, fluffy interior and a beautifully golden crust. The classic white loaf, made from refined wheat flour, is light and airy, perfect for sandwiches, toast, or simply enjoyed with butter and jam. Whole grain and multigrain loaf breads are packed with nutrients and fiber, offering a heartier option that’s great for those seeking a healthier choice. Sourdough loaf bread, with its tangy flavor and chewy texture, adds a gourmet touch to any meal, making it a favorite for artisanal sandwich creations or served alongside soups and salads. Meanwhile, enriched breads like brioche or challah provide a rich, buttery experience, ideal for sweet treats or indulgent French toast.Whether you’re crafting a classic grilled cheese sandwich, savoring a slice with your morning coffee, or enjoying it fresh out of the oven, loaf bread is a delightful companion that enhances meals and creates cherished moments around the table. Its adaptability makes it a beloved choice for every occasion, from casual breakfasts to elegant dinners!",
  },
];

export default products;
