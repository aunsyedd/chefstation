export type MenuCategory =
  | "BBQ"
  | "Handi"
  | "Main Course"
  | "Rolls"
  | "Sandwiches"
  | "Pasta"
  | "Fish Delight"
  | "Tandoori Corner"
  | "Drinks"
  | "Coladas"
  | "Smoothies"
  | "Coffee"
  | "Chilled"
  | "Shakes"
  | "Chillers"
  | "Desserts";

/** Category anchors for the menu page navbar (kept with menu data). */
export const menuCategoryNav: { slug: string; category: MenuCategory }[] = [
  { slug: "bbq", category: "BBQ" },
  { slug: "handi", category: "Handi" },
  { slug: "main-course", category: "Main Course" },
  { slug: "rolls", category: "Rolls" },
  { slug: "sandwiches", category: "Sandwiches" },
  { slug: "pasta", category: "Pasta" },
  // { slug: "fish-delight", category: "Fish Delight" },
  // { slug: "tandoori-corner", category: "Tandoori Corner" },
  // { slug: "drinks", category: "Drinks" },
  // { slug: "coladas", category: "Coladas" },
  // { slug: "smoothies", category: "Smoothies" },
  // { slug: "coffee", category: "Coffee" },
  // { slug: "chilled", category: "Chilled" },
  // { slug: "shakes", category: "Shakes" },
  // { slug: "chillers", category: "Chillers" },
  // { slug: "desserts", category: "Desserts" },
];

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  image: string;
  featured?: boolean;
};

export const menuItems: MenuItem[] = [
  // BBQ
  {
    id: "bbq-1",
    name: "Chicken Tikka",
   description: "At Chef Station, our Chicken Tikka features tender, juicy chicken marinated in a rich blend of yogurt, spices, and herbs, then flame-grilled to perfection for a smoky, bold flavor in every bite.",
    price: 12,
    category: "BBQ",
    image: "/chicken tikka.jpg",
    featured: true,
  },
  {
    id: "bbq-2",
    name: "Chicken Tikka Boti ",
    description: "At Chef Station, our Chicken Tikka Boti is made with succulent boneless chicken cubes, marinated in a flavorful blend of yogurt and traditional spices, then grilled over open flames for a perfectly smoky and juicy bite.",
    price: 28,
    category: "BBQ",
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=800&q=80",
  },
  {
    id: "bbq-3",
    name: "Chicken Reshmi Kabab",
    description: "At Chef Station, our Chicken Reshmi Kabab is crafted with finely minced chicken blended with cream, cheese, and mild spices, then grilled to perfection for an irresistibly soft, juicy, and silky-smooth bite.",
    price: 28,
    category: "BBQ",
    image: "/reshmi KABAB.jpg",
  },
  {
    id: "bbq-4",
    name: "Fish Tikka",
    description: "At Chef Station, our Fish Tikka features tender fish fillets marinated in a zesty blend of spices and herbs, then grilled to perfection for a light, smoky flavor with a juicy, flaky texture.",
    price: 28,
    category: "BBQ",
    image: "/Fish tikka.jpg",
  },
  {
    id: "bbq-5",
    name: "Chicken Haryali Boti",
    description: "At Chef Station, our Chicken Haryali Boti features tender chicken cubes marinated in a vibrant blend of fresh herbs, green chilies, yogurt, and spices, then grilled to perfection for a juicy, aromatic bite with a refreshing, herby flavor.",
    price: 28,
    category: "BBQ",
    image: "/Chicken Haryali Boti.jpg",
  },
  {
    id: "bbq-6",
    name: "Chicken Malai Boti",
description: "At Chef Station, our Chicken Malai Boti is made with tender chicken cubes marinated in a rich blend of cream, yogurt, and mild spices, then grilled to perfection for a soft, juicy texture and a delicately creamy flavor in every bite.",
    price: 28,
    category: "BBQ",
    image: "/Chicken malai boti.jpg",
  },

  // Handi
  {
    id: "handi-1",
    name: "Chicken Angara Handi",
description: "At Chef Station, our Chicken Angara Handi is a rich and spicy delight made with tender chicken cooked in a smoky, fiery blend of traditional spices, tomatoes, and creamy gravy, slow-cooked in a handi for deep, bold flavor and an irresistible angara aroma.",
    price: 25,
    category: "Handi",
    image: "/chicken angara handi.jpg",
    featured: true,
  },
  {
    id: "handi-2",
    name: "Chicken Spalish Handi",
description: "At Chef Station, our Chicken Special Handi is a signature dish made with tender chicken pieces slow-cooked in a rich, creamy gravy infused with traditional spices, tomatoes, and aromatic herbs, delivering a perfectly balanced, flavorful, and comforting taste in every bite.",
    price: 25,
    category: "Handi",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&q=80",
  },
{
  id: "handi-3",
  name: "Chicken Jalfrezi",
  description: "At Chef Station our Chicken Jalfrezi is a bold and spicy stir-fried dish made with tender chicken fresh onions capsicum and tomatoes tossed in traditional spices for a tangy slightly dry and flavorful taste with a perfect desi kick.",
  price: 25,
  category: "Handi",
  image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800&q=80",
},
{
  id: "handi-4",
  name: "Chicken White Handi",
 description: "At Chef Station our Chicken White Handi is a rich and creamy delight made with tender chicken slow-cooked in a smooth blend of yogurt cream and mild spices delivering a delicate velvety texture and a comforting flavorful taste.",
  price: 25,
  category: "Handi",
  image: "/white handi.jpg",
},
{
  id: "handi-5",
  name: "Butter Chicken",
description: "At Chef Station our Butter Chicken features juicy chicken pieces simmered in a rich buttery tomato cream sauce blended with aromatic spices to create a smooth mildly spiced and irresistibly indulgent flavor.",
  price: 25,
  category: "Handi",
  image: "/butter-chicken-.jpg",
},
{
  id: "handi-6",
  name: "Fish Handi",
description: "At Chef Station our Fish Handi is a rich and flavorful dish made with tender fish pieces slow-cooked in a spiced tomato and creamy gravy blend infused with traditional herbs and aromatic spices delivering a smooth and comforting taste with a delicious desi touch.",
  price: 28,
  category: "Handi",
  image: "/Fish-Curry-Recipe.jpg",
},
  // Main Course
  {
    id: "mc-1",
    name: "Mutton Karahi",
description: "At Chef Station our Mutton Karahi is a classic desi delight made with tender mutton pieces cooked in a rich blend of tomatoes green chilies ginger garlic and traditional spices prepared in a wok style karahi for a bold spicy and deeply flavorful taste.",
    price: 35,
    category: "Main Course",
    image: "/mutton karahi.jpg",
    featured: true,
  },
  {
    id: "mc-2",
    name: "Mutton Sulamani Karahi",
description: "At Chef Station our Mutton Sulamani Karahi is a premium and rich specialty made with tender mutton slow-cooked in a luxurious blend of yogurt cream and traditional spices infused with aromatic herbs delivering a deep flavorful and silky smooth taste with a royal desi touch.",
    price: 35,
    category: "Main Course",
    image: "/sulemani-karahi.jpg",
    featured: true,
  },
  {
    id: "mc-3",
    name: "Chicken Karahi",
description: "At Chef Station our Chicken Karahi is a traditional favorite made with tender chicken cooked in a rich blend of tomatoes green chilies ginger garlic and aromatic spices prepared in a wok style karahi for a bold spicy and authentic desi flavor.",
    price: 28,
    category: "Main Course",
    image: "/chicken karahi.jpg",
    featured: true,
  },
  {
    id: "mc-4",
    name: "Mutton Qorma",
description: "At Chef Station our Mutton Qorma is a royal and aromatic dish made with tender mutton slow-cooked in a rich blend of yogurt fried onions and traditional spices delivering a deep flavorful and velvety gravy with a classic Mughlai taste.",
    price: 25,
    category: "Main Course",
    image: "/mutton qorma.jpg",
    featured: true,
  },
  {
    id: "mc-5",
    name: "Chicken White Karahi",
description: "At Chef Station our Chicken White Karahi is a rich and creamy specialty made with tender chicken cooked in a smooth blend of yogurt cream and mild spices infused with ginger garlic and aromatic herbs delivering a delicate flavorful and silky desi taste.",
    price: 20,
    category: "Main Course",
    image: "/Chicken White Karahi.jpg",
    featured: true,
  },
  {
    id: "mc-6",
    name: "Chicken Shinwari Karahi",
description: "At Chef Station our Chicken Shinwari Karahi is a traditional Pashtun style dish made with tender chicken cooked in its own natural juices with fresh tomatoes green chilies ginger garlic and simple aromatic spices delivering a bold authentic and deeply flavorful desi taste.",    price: 28,
    category: "Main Course",
    image: "/chicken shinwari.jpg",
    featured: true,
  },

  // Rolls
  {
    id: "roll-1",
    name: "Chicken Tikka Roll",
description: "At Chef Station our Chicken Tikka Roll is a delicious wrap made with juicy chicken tikka pieces marinated in traditional spices grilled to perfection and wrapped in soft bread with fresh salad and creamy sauces delivering a smoky spicy and satisfying flavor in every bite.",   
 price: 12,
    category: "Rolls",
    image: "/chicken tikka roll.jpg",
  },
  {
    id: "roll-2",
    name: "Malai Boti Roll",
description: "At Chef Station our Malai Boti Roll is a soft and creamy delight made with tender chicken malai boti grilled to perfection and wrapped in fresh naan with crisp salad and rich creamy sauces delivering a smooth juicy and mildly spiced flavorful taste in every bite.",
    price: 12,
    category: "Rolls",
    image: "/malai boti roll.jpg",
  },
  {
    id: "roll-3",
    name: "Crispy Chicken Roll",
description: "At Chef Station our Crispy Chicken Roll is a crunchy and flavorful wrap made with golden fried crispy chicken strips combined with fresh salad and signature sauces wrapped in soft bread delivering a perfect balance of crunch spice and juicy taste in every bite.",
    price: 12,
    category: "Rolls",
    image: "/crispy roll.jpg",
  },
  // Sandwiches
  {
    id: "sand-1",
    name: "CS Special Club Sandwich",
description: "At Chef Station our CS Special Club Sandwich is a hearty and satisfying delight made with layers of grilled chicken fried egg fresh lettuce tomatoes cheese and signature sauces stacked between toasted bread slices delivering a rich crispy and flavorful taste in every bite.",
    price: 13,
    category: "Sandwiches",
    image: "/CS Special Club Sandwich.jpg",
  },
  {
    id: "sand-2",
    name: "Grilled Chicken Cheese Sandwhich",
description: "At Chef Station our Grilled Chicken Cheese Sandwich is a warm and cheesy delight made with tender grilled chicken melted cheese fresh vegetables and signature sauces toasted between soft bread slices delivering a rich creamy and smoky flavorful taste in every bite.",
    price: 12,
    category: "Sandwiches",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800&q=80",
  },
  {
    id: "sand-3",
    name: "Grilled Chicken Sandwich",
description: "At Chef Station our Grilled Chicken Sandwich is a simple and delicious classic made with tender grilled chicken fresh lettuce tomatoes and signature sauces toasted between soft bread slices delivering a light smoky and satisfying flavorful taste in every bite.",
    price: 11,
    category: "Sandwiches",
    image: "/Grilled Chicken Sandwich.jpg",
  },
  // Pasta
  {
    id: "pas-1",
    name: "Spaghetti Bolognese",
description: "At Chef Station our Spaghetti Bolognese is a classic Italian inspired dish made with perfectly cooked spaghetti tossed in a rich and hearty meat tomato sauce slow simmered with herbs garlic and spices delivering a warm savory and deeply comforting flavor in every bite.",
    price: 15,
    category: "Pasta",
    image: "/Spaghetti Bolognese.jpg",
    featured: true,
  },
  {
    id: "pas-2",
    name: "Fettuccine Alfredo",
description: "At Chef Station our Fettuccine Alfredo is a creamy Italian inspired pasta made with tender fettuccine noodles tossed in a rich buttery parmesan cheese sauce blended with cream and aromatic herbs delivering a smooth indulgent and comforting flavor in every bite."   ,
 price: 15,
    category: "Pasta",
    image: "/Fettuccine Alfredo.jpg",
  },
  {
    id: "pas-3",
    name: "Alfredo Chicken",
description: "At Chef Station our Chicken Alfredo is a creamy and indulgent pasta dish made with tender grilled chicken tossed in a rich buttery parmesan cheese sauce with fettuccine noodles and aromatic herbs delivering a smooth comforting and flavorful taste in every bite.",
    price: 15,
    category: "Pasta",
    image: "/Alfredo Chicken.jpg",
  },
  // Fish Delight
//   {
//     id: "fish-1",
//     name: "Grilled Atlantic Salmon",
//     description: "Citrus beurre blanc, asparagus, dill oil, caper berries.",
//     price: 29,
//     category: "Fish Delight",
//     image: "https://images.unsplash.com/photo-1467007589275-0f8ea2db6a8b?w=800&q=80",
//     featured: true,
//   },
//   {
//     id: "fish-2",
//     name: "Crispy Fish Tacos",
//     description: "Beer-battered cod, cabbage slaw, chipotle crema, flour tortillas (3).",
//     price: 16,
//     category: "Fish Delight",
//     image: "https://images.unsplash.com/photo-1565299585323-38174c0b5e3a?w=800&q=80",
//   },
//   {
//     id: "fish-3",
//     name: "Garlic Butter Prawns",
//     description: "Tiger prawns, white wine, parsley, toasted ciabatta.",
//     price: 26,
//     category: "Fish Delight",
//     image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80",
//   },
//   // Tandoori Corner
//   {
//     id: "tan-1",
//     name: "Tandoori Chicken (Half)",
//     description: "Classic marinade, charred in clay oven, onion rings, chutney.",
//     price: 17,
//     category: "Tandoori Corner",
//     image: "https://images.unsplash.com/photo-1596797168530-971a9acbeb5e?w=800&q=80",
//   },
//   {
//     id: "tan-2",
//     name: "Malai Tikka",
//     description: "Cream-cheese hung curd marinade, cardamom smoke, lemon wedges.",
//     price: 18,
//     category: "Tandoori Corner",
//     image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&q=80",
//   },
//   {
//     id: "tan-3",
//     name: "Tandoori Platter",
//     description: "Assorted kebabs, naan basket, dal makhani dip, pickles.",
//     price: 32,
//     category: "Tandoori Corner",
//     image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=800&q=80",
//   },
//   // Drinks
//   {
//     id: "drk-1",
//     name: "House Lemonade",
//     description: "Fresh lemons, mint, sparkling or still.",
//     price: 5,
//     category: "Drinks",
//     image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800&q=80",
//   },
//   {
//     id: "drk-2",
//     name: "Basil Cucumber G&T",
//     description: "London dry gin, tonic, basil, cucumber ribbons.",
//     price: 14,
//     category: "Drinks",
//     image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=800&q=80",
//   },
//   {
//     id: "drk-3",
//     name: "Smoked Old Fashioned",
//     description: "Bourbon, demerara, Angostura, orange peel, tableside smoke.",
//     price: 16,
//     category: "Drinks",
//     image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80",
//   },
//   // Coladas
//   {
//     id: "col-1",
//     name: "Classic Piña Colada",
//     description: "Rum, coconut cream, pineapple, nutmeg dust.",
//     price: 12,
//     category: "Coladas",
//     image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=800&q=80",
//   },
//   {
//     id: "col-2",
//     name: "Strawberry Colada",
//     description: "White rum, strawberry purée, coconut, lime squeeze.",
//     price: 12,
//     category: "Coladas",
//     image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&q=80",
//   },
//   // Smoothies
//   {
//     id: "smo-1",
//     name: "Tropical Green",
//     description: "Spinach, mango, pineapple, coconut water, chia.",
//     price: 8,
//     category: "Smoothies",
//     image: "https://images.unsplash.com/photo-1610970881699-44a5588cabec?w=800&q=80",
//   },
//   {
//     id: "smo-2",
//     name: "Berry Blast",
//     description: "Mixed berries, banana, oat milk, honey.",
//     price: 8,
//     category: "Smoothies",
//     image: "https://images.unsplash.com/photo-1553530666-be6d8ee7be60?w=800&q=80",
//   },
//   {
//     id: "smo-3",
//     name: "Peanut Butter Power",
//     description: "Banana, peanut butter, cocoa, protein blend.",
//     price: 9,
//     category: "Smoothies",
//     image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800&q=80",
//   },
//   // Coffee
//   {
//     id: "cof-1",
//     name: "ChefStation Espresso",
//     description: "Double shot, seasonal single-origin beans.",
//     price: 4,
//     category: "Coffee",
//     image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=800&q=80",
//   },
//   {
//     id: "cof-2",
//     name: "Vanilla Bean Latte",
//     description: "House vanilla, microfoam, double espresso.",
//     price: 6,
//     category: "Coffee",
//     image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=80",
//   },
//   {
//     id: "cof-3",
//     name: "Iced Spanish Latte",
//     description: "Condensed milk, cold brew, cinnamon dust.",
//     price: 6,
//     category: "Coffee",
//     image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=800&q=80",
//   },
//   // Chilled
//   {
//     id: "chi-1",
//     name: "Iced Peach Tea",
//     description: "Black tea, peach syrup, lemon wheel.",
//     price: 5,
//     category: "Chilled",
//     image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&q=80",
//   },
//   {
//     id: "chi-2",
//     name: "Cucumber Mint Cooler",
//     description: "Sparkling water, cucumber, mint, lime.",
//     price: 5,
//     category: "Chilled",
//     image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800&q=80",
//   },
//   // Shakes
//   {
//     id: "shk-1",
//     name: "Classic Chocolate Shake",
//     description: "Dutch cocoa, vanilla ice cream, whipped cream.",
//     price: 7,
//     category: "Shakes",
//     image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800&q=80",
//   },
//   {
//     id: "shk-2",
//     name: "Salted Caramel Shake",
//     description: "Caramel ribbon, sea salt, malted milk.",
//     price: 8,
//     category: "Shakes",
//     image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&q=80",
//   },
//   {
//     id: "shk-3",
//     name: "Oreo Cookie Shake",
//     description: "Cookie crumble, vanilla bean, chocolate drizzle.",
//     price: 8,
//     category: "Shakes",
//     image: "https://images.unsplash.com/photo-1553787499-6f4f19214a70?w=800&q=80",
//   },
//   // Chillers
//   {
//     id: "chl-1",
//     name: "Frozen Mango Chiller",
//     description: "Mango sorbet whip, lime zest, soda top.",
//     price: 7,
//     category: "Chillers",
//     image: "https://images.unsplash.com/photo-1534670007418-fa7f7c00b59e?w=800&q=80",
//   },
//   {
//     id: "chl-2",
//     name: "Berry Freeze",
//     description: "Mixed berry ice blend, lemonade splash.",
//     price: 7,
//     category: "Chillers",
//     image: "https://images.unsplash.com/photo-1505252585461-04cf1f1ccd50?w=800&q=80",
//   },
//   // Desserts
//   {
//     id: "des-1",
//     name: "Dark Chocolate Fondant",
//     description: "Molten center, vanilla bean ice cream, berry compote.",
//     price: 11,
//     category: "Desserts",
//     image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&q=80",
//     featured: true,
//   },
//   {
//     id: "des-2",
//     name: "New York Cheesecake",
//     description: "Baked style, sour cream top, graham crust.",
//     price: 9,
//     category: "Desserts",
//     image: "https://images.unsplash.com/photo-1533134242443-ea2a4c5e96e7?w=800&q=80",
//   },
//   {
//     id: "des-3",
//     name: "Kulfi Trio",
//     description: "Pistachio, rose, mango Indian ice cream, crushed pistachios.",
//     price: 8,
//     category: "Desserts",
//     image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=80",
//   },
];

export const featuredItems = menuItems.filter((item) => item.featured);
