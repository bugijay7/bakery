// Cakes
import chocolateFudgeCake from './assets/cakes/chocolate-fudge-cake.jpg';
import vanillaSpongeCake from './assets/cakes/vanilla-sponge-cake.jpg';
import redVelvetCake from './assets/cakes/red-velvet-cake.jpg';
import lemonDrizzleCake from './assets/cakes/lemon-drizzle-cake.jpg';
import carrotCake from './assets/cakes/carrot-cake.jpg';
import cheesecake from './assets/cakes/cheesecake.jpg';
import blackForestCake from './assets/cakes/black-forest-cake.jpg';
import coffeeCake from './assets/cakes/coffee-cake.jpg';
import pineappleUpsideDownCake from './assets/cakes/pineapple-upside-down-cake.jpg';
import strawberryShortcake from './assets/cakes/strawberry-shortcake.jpg';

// Pastries
import croissant from './assets/pastries/croissant.jpg';
import painAuChocolat from './assets/pastries/pain-au-chocolat.jpg';
import danishPastry from './assets/pastries/danish-pastry.jpg';
import appleTurnover from './assets/pastries/apple-turnover.jpg';
import cinnamonRoll from './assets/pastries/cinnamon-roll.jpg';
import eclair from './assets/pastries/eclair.jpg';
import fruitTart from './assets/pastries/fruit-tart.jpg';
import napoleon from './assets/pastries/napoleon.jpg';
import palmier from './assets/pastries/palmier.jpg';
import bearClaw from './assets/pastries/bear-claw.jpg';

// Breads
import sourdoughBread from './assets/breads/sourdough-bread.jpg';
import baguette from './assets/breads/baguette.jpg';
import ciabatta from './assets/breads/ciabatta.jpg';
import focaccia from './assets/breads/focaccia.jpg';
import ryeBread from './assets/breads/rye-bread.jpg';
import wholeWheatBread from './assets/breads/whole-wheat-bread.jpg';
import brioche from './assets/breads/brioche.jpg';
import pitaBread from './assets/breads/pita-bread.jpg';
import naan from './assets/breads/naan.jpg';
import challah from './assets/breads/challah.jpg';

// Cookies
import chocolateChipCookie from './assets/cookies/chocolate-chip-cookie.jpg';
import oatmealRaisinCookie from './assets/cookies/oatmeal-raisin-cookie.jpg';
import peanutButterCookie from './assets/cookies/peanut-butter-cookie.jpg';
import snickerdoodle from './assets/cookies/snickerdoodle.jpg';
import sugarCookie from './assets/cookies/sugar-cookie.jpg';
import macaron from './assets/cookies/macaron.jpg';
import gingerbreadCookie from './assets/cookies/gingerbread.jpg';
import shortbreadCookie from './assets/cookies/shortbread-cookie.jpg';
import doubleChocolateCookie from './assets/cookies/double-chocolate-cookie.jpg';
import molassesCookie from './assets/cookies/molasses-cookie.jpg';



const products = [
  // Cakes
  {
    id: 1,
    name: "Chocolate Fudge Cake",
    description: "Rich chocolate cake with layers of fudge and cream.",
    price: 15.99,
    image: chocolateFudgeCake,
    category: "Cakes"
  },
  {
    id: 2,
    name: "Vanilla Sponge Cake",
    description: "Classic vanilla sponge with buttercream frosting.",
    price: 12.99,
    image: vanillaSpongeCake,
    category: "Cakes"
  },
  {
    id: 3,
    name: "Red Velvet Cake",
    description: "Moist red velvet with cream cheese frosting.",
    price: 18.99,
    image: redVelvetCake,
    category: "Cakes"
  },
  {
    id: 4,
    name: "Lemon Drizzle Cake",
    description: "Zesty lemon cake with a sweet drizzle.",
    price: 14.99,
    image: lemonDrizzleCake,
    category: "Cakes"
  },
  {
    id: 5,
    name: "Carrot Cake",
    description: "Spiced carrot cake with cream cheese frosting.",
    price: 16.99,
    image: carrotCake,
    category: "Cakes"
  },
  {
    id: 6,
    name: "Cheesecake",
    description: "Creamy cheesecake with a graham cracker crust.",
    price: 19.99,
    image: cheesecake,
    category: "Cakes"
  },
  {
    id: 7,
    name: "Black Forest Cake",
    description: "Chocolate cake with cherries and whipped cream.",
    price: 17.99,
    image: blackForestCake,
    category: "Cakes"
  },
  {
    id: 8,
    name: "Coffee Cake",
    description: "Moist coffee-flavored cake with a coffee buttercream.",
    price: 13.99,
    image: coffeeCake,
    category: "Cakes"
  },
  {
    id: 9,
    name: "Pineapple Upside Down Cake",
    description: "Moist cake with caramelized pineapples.",
    price: 16.49,
    image: pineappleUpsideDownCake,
    category: "Cakes"
  },
  {
    id: 10,
    name: "Strawberry Shortcake",
    description: "Fluffy shortcake layered with fresh strawberries and cream.",
    price: 15.49,
    image: strawberryShortcake,
    category: "Cakes"
  },

  // Pastries
  {
    id: 11,
    name: "Croissant",
    description: "Flaky, buttery croissant.",
    price: 3.99,
    image: croissant,
    category: "Pastries"
  },
  {
    id: 12,
    name: "Pain au Chocolat",
    description: "Flaky pastry filled with chocolate.",
    price: 4.49,
    image: painAuChocolat,
    category: "Pastries"
  },
  {
    id: 13,
    name: "Danish Pastry",
    description: "Sweet pastry filled with fruit or cream cheese.",
    price: 4.99,
    image: danishPastry,
    category: "Pastries"
  },
  {
    id: 14,
    name: "Apple Turnover",
    description: "Flaky pastry filled with sweet apples.",
    price: 5.49,
    image: appleTurnover,
    category: "Pastries"
  },
  {
    id: 15,
    name: "Cinnamon Roll",
    description: "Soft roll with cinnamon sugar and icing.",
    price: 5.99,
    image: cinnamonRoll,
    category: "Pastries"
  },
  {
    id: 16,
    name: "Eclair",
    description: "Choux pastry filled with cream and topped with chocolate.",
    price: 4.99,
    image: eclair,
    category: "Pastries"
  },
  {
    id: 17,
    name: "Fruit Tart",
    description: "Shortcrust pastry filled with custard and fresh fruit.",
    price: 6.49,
    image: fruitTart,
    category: "Pastries"
  },
  {
    id: 18,
    name: "Napoleon",
    description: "Layered puff pastry with cream and icing.",
    price: 6.99,
    image: napoleon,
    category: "Pastries"
  },
  {
    id: 19,
    name: "Palmier",
    description: "Crispy, buttery pastry shaped like a palm leaf.",
    price: 3.49,
    image: palmier,
    category: "Pastries"
  },
  {
    id: 20,
    name: "Bear Claw",
    description: "Flaky pastry with an almond filling.",
    price: 5.99,
    image: bearClaw,
    category: "Pastries"
  },

  // Breads
  {
    id: 21,
    name: "Sourdough Bread",
    description: "Crusty, tangy sourdough loaf.",
    price: 6.49,
    image: sourdoughBread,
    category: "Breads"
  },
  {
    id: 22,
    name: "Whole Wheat Bread",
    description: "Nutty, wholesome whole wheat loaf.",
    price: 5.99,
    image: wholeWheatBread,
    category: "Breads"
  },
  {
    id: 23,
    name: "Rye Bread",
    description: "Dense rye bread with a distinct flavor.",
    price: 7.49,
    image: ryeBread,
    category: "Breads"
  },
  {
    id: 24,
    name: "Focaccia",
    description: "Italian flatbread topped with herbs and olive oil.",
    price: 4.99,
    image: focaccia,
    category: "Breads"
  },
  {
    id: 25,
    name: "Baguette",
    description: "Crispy French bread with a soft interior.",
    price: 2.99,
    image: baguette,
    category: "Breads"
  },
  {
    id: 26,
    name: "Ciabatta",
    description: "Rustic Italian bread with a chewy texture.",
    price: 3.99,
    image: ciabatta,
    category: "Breads"
  },
  {
    id: 27,
    name: "Brioche",
    description: "Soft and buttery brioche bread.",
    price: 4.49,
    image: brioche, // Update this with the correct image for Brioche if needed
    category: "Breads"
}
,
{
  id: 29,
  name: "Naan Bread",
  description: "Soft and fluffy naan bread, perfect for dipping.",
  price: 5.99,
  image: naan, // Update this with the correct image for Naan Bread if needed
  category: "Breads"
}
,
  {
    id: 28,
    name: "Pita Bread",
    description: "Soft, round bread perfect for dipping.",
    price: 3.49,
    image: pitaBread,
    category: "Breads"
  },
  {
    id: 30,
    name: "Challah Bread",
    description: "Rich and sweet braided bread, perfect for any occasion.",
    price: 4.99,
    image: challah, // Update this with the correct image for Challah Bread if needed
    category: "Breads"
}
,

 // Cookies
{
  id: 31,
  name: "Chocolate Chip Cookie",
  description: "Classic cookie loaded with chocolate chips.",
  price: 2.99,
  image: chocolateChipCookie,
  category: "Cookies"
},
{
  id: 32,
  name: "Oatmeal Raisin Cookie",
  description: "Chewy oatmeal cookie with plump raisins.",
  price: 2.49,
  image: oatmealRaisinCookie,
  category: "Cookies"
},
{
  id: 33,
  name: "Peanut Butter Cookie",
  description: "Rich peanut butter cookie with a crisscross pattern.",
  price: 2.99,
  image: peanutButterCookie,
  category: "Cookies"
},
{
  id: 34,
  name: "Snickerdoodle",
  description: "Cinnamon-sugar coated cookie with a soft center.",
  price: 2.49,
  image: snickerdoodle,
  category: "Cookies"
},
{
  id: 35,
  name: "Sugar Cookie",
  description: "Sweet and buttery cookie, perfect for decorating.",
  price: 2.29,
  image: sugarCookie,
  category: "Cookies"
},
{
  id: 36,
  name: "Macaron",
  description: "Delicate French cookie with a creamy filling.",
  price: 1.99,
  image: macaron,
  category: "Cookies"
},
{
  id: 37,
  name: "Gingerbread Cookie",
  description: "Spiced cookie shaped like a gingerbread man.",
  price: 2.49,
  image: gingerbreadCookie,
  category: "Cookies"
},
{
  id: 38,
  name: "Shortbread Cookie",
  description: "Rich and crumbly cookie, perfect with tea.",
  price: 2.49,
  image: shortbreadCookie,
  category: "Cookies"
},
{
  id: 39,
  name: "Double Chocolate Cookie",
  description: "Decadent cookie made with rich cocoa and chocolate chips.",
  price: 2.99,
  image: doubleChocolateCookie,
  category: "Cookies"
},
{
  id: 40,
  name: "Molasses Cookie",
  description: "Soft and chewy cookie with a warm spice flavor.",
  price: 2.49,
  image: molassesCookie,
  category: "Cookies"
}

];

  
  export default products;
  