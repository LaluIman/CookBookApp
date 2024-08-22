const recipes = [
  // Original 10 recipes...
  {
    id: 1,
    image: 'https://cdn1-production-images-kly.akamaized.net/uBuE5OD3B9pUTVNJd81cB819z7Y=/0x194:5616x3359/800x450/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3048436/original/030475400_1581499756-shutterstock_413580649.jpg',
    name: 'Spaghetti Carbonara',
    ingredients: ['🍝 Spaghetti', '🥚 Eggs', '🥓 Pancetta', '🧀 Parmesan cheese', '🌶️ Pepper'],
    timeToCook: '30 mins',
    type: 'Dinner',
    instructions: [
      'Boil a large pot of salted water and cook the spaghetti according to the package instructions until al dente.',
      'While the spaghetti is cooking, fry the pancetta in a pan over medium heat until crispy, then set aside.',
      'In a bowl, whisk together the eggs and grated Parmesan cheese until well combined.',
      'Once the spaghetti is cooked, drain it and immediately toss it with the pancetta in the pan.',
      'Remove the pan from the heat and quickly mix in the egg and cheese mixture, stirring constantly to avoid scrambling the eggs.',
      'Season with freshly ground black pepper and serve immediately.'
    ],
  },
  {
    id: 2,
    image: 'https://www.inspiredtaste.net/wp-content/uploads/2024/03/Easy-Fluffy-Pancakes-Recipe-Video.jpg',
    name: 'Pancakes',
    ingredients: ['🥞 Flour', '🥛 Milk', '🥚 Eggs', '🍬 Sugar', '🧁 Baking powder'],
    timeToCook: '20 mins',
    type: 'Breakfast',
    instructions: [
      'In a large bowl, whisk together the flour, sugar, and baking powder.',
      'In a separate bowl, beat the eggs and then add the milk, stirring until combined.',
      'Pour the wet ingredients into the dry ingredients and mix until just combined. Do not overmix; some lumps are fine.',
      'Heat a griddle or frying pan over medium heat and lightly grease it.',
      'Pour batter onto the griddle, using about 1/4 cup for each pancake.',
      'Cook until bubbles form on the surface, then flip and cook until golden brown on the other side.',
      'Serve the pancakes warm with your choice of syrup or toppings.'
    ],
  },
  {
    id: 3,
    image: 'https://o-cdn-cas.sirclocdn.com/parenting/original_images/Resep_salad_sayur_ala_Mesiko.jpg',
    name: 'Chicken Salad',
    ingredients: ['🍗 Chicken breast', '🥬 Lettuce', '🍅 Tomatoes', '🥒 Cucumber', '🫒 Olive oil', '🍋 Lemon juice'],
    timeToCook: '25 mins',
    type: 'Lunch',
    instructions: [
      'Season the chicken breast with salt and pepper, then grill it over medium heat until fully cooked.',
      'While the chicken is grilling, wash and chop the lettuce, tomatoes, and cucumber into bite-sized pieces.',
      'In a large bowl, combine the chopped vegetables with olive oil and lemon juice. Toss to coat evenly.',
      'Once the chicken is cooked, let it rest for a few minutes, then slice it into strips.',
      'Add the chicken to the salad, toss everything together, and serve immediately.'
    ],
  },
  {
    id: 4,
    image: 'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2023/09/Beef-Stew-main.jpg',
    name: 'Beef Stew',
    ingredients: ['🥩 Beef', '🥔 Potatoes', '🥕 Carrots', '🧅 Onions', '🧄 Garlic', '🍅 Tomato paste', '🥣 Beef broth'],
    timeToCook: '2 hours',
    type: 'Dinner',
    instructions: [
      'Cut the beef into bite-sized cubes and season with salt and pepper.',
      'In a large pot, brown the beef on all sides over medium-high heat, then set it aside.',
      'Chop the potatoes, carrots, onions, and garlic, and add them to the pot. Cook until the onions are translucent.',
      'Stir in the tomato paste and cook for a few minutes to enhance the flavor.',
      'Return the beef to the pot and pour in enough beef broth to cover the ingredients.',
      'Bring to a boil, then reduce the heat to low and simmer for about 2 hours, or until the beef is tender.',
      'Serve hot with crusty bread or over mashed potatoes.'
    ],
  },
  {
    id: 5,
    image: 'https://www.mccormick.com/-/media/project/oneweb/mccormick-us/mccormick/recipe-images/quick_and_easy_french_toast_new_800x800.webp?rev=ee6ad2bb4e784ae3b47792fe1567e606&vd=20240606T181333Z&extension=webp&hash=239069BA7916AD55FF124E6E65F4C335',
    name: 'French Toast',
    ingredients: ['🍞 Bread', '🥚 Eggs', '🥛 Milk', '🍂 Cinnamon', '🍨 Vanilla extract', '🧈 Butter'],
    timeToCook: '15 mins',
    type: 'Breakfast',
    instructions: [
      'In a shallow bowl, whisk together the eggs, milk, cinnamon, and vanilla extract until well combined.',
      'Dip each slice of bread into the egg mixture, ensuring both sides are fully coated.',
      'Heat a pan over medium heat and melt a small amount of butter in it.',
      'Place the coated bread slices into the pan and cook until golden brown on both sides.',
      'Serve the French toast warm, topped with syrup, fruit, or powdered sugar.'
    ],
  },
  {
    id: 6,
    image: 'https://www.onceuponachef.com/images/2023/08/Beef-Tacos.jpg',
    name: 'Tacos',
    ingredients: ['🌮 Tortillas', '🥩 Ground beef', '🧅 Onions', '🍅 Tomatoes', '🥬 Lettuce', '🧀 Cheese', '🌶️ Salsa'],
    timeToCook: '20 mins',
    type: 'Lunch',
    instructions: [
      'Heat a pan over medium heat and cook the ground beef until browned.',
      'While the beef is cooking, chop the onions, tomatoes, and lettuce.',
      'Once the beef is cooked, drain any excess fat and stir in the chopped onions. Cook until the onions are soft.',
      'Warm the tortillas in a separate pan or in the oven.',
      'Assemble the tacos by placing the cooked beef in the tortillas and adding the tomatoes, lettuce, cheese, and salsa on top.',
      'Serve immediately with your favorite toppings.'
    ],
  },
  {
    id: 7,
    image: 'https://res.cloudinary.com/jnto/image/upload/w_1440,h_900,c_fill,f_auto,fl_lossy,q_60/v1/media/filer_public/47/7f/477f36c3-a329-437d-a571-d75cdaa73a6f/1_5_zv5jq9',
    name: 'Sushi',
    ingredients: ['🍚 Sushi rice', '🟩 Nori', '🐟 Fish', '🥒 Cucumber', '🥑 Avocado', '🧂 Soy sauce'],
    timeToCook: '45 mins',
    type: 'Dinner',
    instructions: [
      'Rinse the sushi rice under cold water until the water runs clear, then cook it according to the package instructions.',
      'While the rice is cooking, prepare the fillings by slicing the fish, cucumber, and avocado into thin strips.',
      'Once the rice is cooked, allow it to cool slightly, then spread it over a sheet of nori.',
      'Place the fillings on top of the rice, then carefully roll the nori into a tight cylinder.',
      'Using a sharp knife, slice the roll into bite-sized pieces.',
      'Serve the sushi with soy sauce and wasabi, if desired.'
    ],
  },
  {
    id: 8,
    image: 'https://joyfoodsunshine.com/wp-content/uploads/2022/07/best-omelette-recipe-1.jpg',
    name: 'Omelette',
    ingredients: ['🥚 Eggs', '🥛 Milk', '🧀 Cheese', '🥓 Ham', '🌶️ Bell peppers', '🧅 Onions'],
    timeToCook: '10 mins',
    type: 'Breakfast',
    instructions: [
      'In a bowl, whisk together the eggs and milk until frothy.',
      'Chop the ham, bell peppers, and onions into small pieces.',
      'Heat a non-stick pan over medium heat and pour in the egg mixture.',
      'As the eggs begin to set, sprinkle the chopped ham, bell peppers, onions, and cheese evenly over the surface.',
      'Once the omelette is mostly set but still slightly runny on top, fold it in half.',
      'Cook for another minute, then slide the omelette onto a plate and serve immediately.'
    ],
  },
  {
    id: 9,
    image: 'https://www.jessicagavin.com/wp-content/uploads/2023/03/fettuccine-alfredo-12-1200.jpg',
    name: 'Fettuccine Alfredo',
    ingredients: ['🍝 Fettuccine', '🧈 Butter', '🧄 Garlic', '🥛 Heavy cream', '🧀 Parmesan cheese'],
    timeToCook: '25 mins',
    type: 'Dinner',
    instructions: [
      'Cook the fettuccine in a large pot of salted boiling water according to the package instructions.',
      'While the pasta is cooking, melt the butter in a large pan over medium heat and sauté the garlic until fragrant.',
      'Stir in the heavy cream and bring to a simmer, then reduce the heat and let it thicken slightly.',
      'Add the grated Parmesan cheese to the sauce and stir until melted and smooth.',
      'Once the pasta is cooked, drain it and add it to the pan with the sauce. Toss to coat evenly.',
      'Serve the fettuccine Alfredo hot, garnished with extra Parmesan cheese and freshly ground black pepper.'
    ],
  },
  {
    id: 10,
    image: 'https://cdn.tasteatlas.com/images/dishes/893703cf36f8488eb54d80a7e4bfcf9e.jpg?w=905&h=510',
    name: 'Tom Yum Soup',
    ingredients: ['🍤 Shrimp', '🥣 Chicken broth', '🥥 Coconut milk', '🌶️ Thai chili', '🧄 Garlic', '🍋 Lemongrass', '🫛 Mushrooms'],
    timeToCook: '40 mins',
    type: 'Dinner',
    instructions: [
      'In a large pot, bring the chicken broth to a boil and add the lemongrass, garlic, and Thai chili.',
      'Let the broth simmer for about 10 minutes to infuse the flavors, then strain out the solids.',
      'Add the shrimp and mushrooms to the broth and cook until the shrimp turn pink and opaque.',
      'Stir in the coconut milk and bring the soup back to a gentle simmer.',
      'Adjust the seasoning with fish sauce, lime juice, and fresh herbs if desired.',
      'Serve the Tom Yum Soup hot, garnished with cilantro and additional lime wedges.'
    ],
  },
  // New 20 recipes...
  {
    id: 11,
    image: 'https://asset.kompas.com/crops/dEGKFeCsgAduGCTurSbqX1r5kK4=/0x0:800x533/750x500/data/photo/2022/06/07/62aecd2034d23.jpg',
    name: 'Nasi Goreng',
    ingredients: ['🍚 Cooked rice', '🥚 Eggs', '🧄 Garlic', '🌶️ Chili', '🥓 Chicken or shrimp', '🧂 Soy sauce'],
    timeToCook: '20 mins',
    type: 'Lunch',
    instructions: [
      'Heat some oil in a wok and fry the garlic and chili until fragrant.',
      'Add the chicken or shrimp and cook until done.',
      'Push the ingredients to one side of the wok and scramble the eggs on the other side.',
      'Add the cooked rice to the wok and stir everything together.',
      'Season with soy sauce and continue to stir-fry until the rice is evenly coated and heated through.',
      'Serve the nasi goreng hot, garnished with fried shallots and cucumber slices.'
    ],
  },
  {
    id: 12,
    image: 'https://img-global.cpcdn.com/recipes/022e54510d4d61c2/1200x630cq70/photo.jpg',
    name: 'Mie Goreng',
    ingredients: ['🍝 Egg noodles', '🧄 Garlic', '🌶️ Chili', '🥚 Eggs', '🥬 Bok choy', '🧂 Sweet soy sauce'],
    timeToCook: '25 mins',
    type: 'Dinner',
    instructions: [
      'Boil the egg noodles according to the package instructions, then drain and set aside.',
      'Heat some oil in a wok and sauté the garlic and chili until fragrant.',
      'Add the bok choy and cook until wilted.',
      'Push the vegetables to one side of the wok and scramble the eggs on the other side.',
      'Add the cooked noodles and sweet soy sauce, then toss everything together until well combined.',
      'Serve the mie goreng hot, garnished with fried shallots and lime wedges.'
    ],
  },
  {
    id: 13,
    image: 'https://www.unileverfoodsolutions.co.id/dam/global-ufs/mcos/sea/calcmenu/recipes/ID-recipes/soup-&-stews/soto-betawi/main-header.jpg',
    name: 'Soto Betawi',
    ingredients: ['🥩 Beef', '🥥 Coconut milk', '🍋 Lemongrass', '🧄 Garlic', '🧅 Onions', '🥔 Potatoes', '🍅 Tomatoes'],
    timeToCook: '1 hour 30 mins',
    type: 'Lunch',
    instructions: [
      'Boil the beef with lemongrass and bay leaves until tender, then set aside.',
      'In a separate pot, sauté the garlic, onions, and spices until fragrant.',
      'Add the beef, coconut milk, and some of the beef broth, and bring to a simmer.',
      'Add the potatoes and cook until tender.',
      'Finally, add the tomatoes and adjust the seasoning.',
      'Serve the soto betawi hot, garnished with fried shallots and a squeeze of lime.'
    ],
  },
  {
    id: 14,
    image: 'https://www.feastingathome.com/wp-content/uploads/2022/12/Avgolemono-Soup-7.jpg',
    name: 'Avgolemono Soup',
    ingredients: ['🐓 Chicken', '🍚 Rice', '🥚 Eggs', '🍋 Lemon', '🥣 Chicken broth'],
    timeToCook: '45 mins',
    type: 'Dinner',
    instructions: [
      'Boil the chicken in a pot with chicken broth until cooked, then shred the meat.',
      'Add rice to the broth and cook until tender.',
      'In a bowl, whisk together the eggs and lemon juice.',
      'Slowly add some hot broth to the egg mixture while whisking constantly.',
      'Pour the egg mixture back into the pot, stirring until the soup thickens slightly.',
      'Add the shredded chicken and serve the avgolemono soup hot.'
    ],
  },
  {
    id: 15,
    image: 'https://www.veganricha.com/wp-content/uploads/2022/12/vegan-tacos-blog-Vegan-Richa-9864.jpg',
    name: 'Vegan Tacos',
    ingredients: ['🌮 Tortillas', '🥑 Avocado', '🌽 Corn', '🍅 Tomatoes', '🥬 Lettuce', '🫘 Black beans'],
    timeToCook: '30 mins',
    type: 'Lunch',
    instructions: [
      'Warm the tortillas in a pan or oven.',
      'Mash the avocado and season with salt and lime juice.',
      'In a pan, cook the corn and black beans with some spices until heated through.',
      'Assemble the tacos by spreading the mashed avocado on the tortillas, then adding the corn, beans, tomatoes, and lettuce.',
      'Serve the vegan tacos with your favorite salsa or hot sauce.'
    ],
  },
  {
    id: 16,
    image: 'https://www.africanbites.com/wp-content/uploads/2017/08/Jollof-Rice-7.jpg',
    name: 'Jollof Rice',
    ingredients: ['🍚 Rice', '🍅 Tomatoes', '🌶️ Chili', '🧄 Garlic', '🧅 Onions', '🥩 Meat or fish'],
    timeToCook: '1 hour',
    type: 'Dinner',
    instructions: [
      'Blend the tomatoes, chili, and some onions to make a puree.',
      'Heat some oil in a pot and sauté the remaining onions and garlic until fragrant.',
      'Add the tomato puree and cook until the oil starts to separate from the sauce.',
      'Add the rice and stir to coat with the sauce.',
      'Pour in the broth or water and add the meat or fish. Cover and cook until the rice is done and the liquid is absorbed.',
      'Serve the Jollof rice hot, garnished with fried plantains or a side of salad.'
    ],
  },
  {
    id: 17,
    image: 'https://www.thespruceeats.com/thmb/E2FGC9RsD2dOmkPpNiQOxuZnTHA=/4032x3024/filters:no_upscale()/shakshuka-poached-eggs-in-tomato-sauce-5749193-hero-01-6b08f16bcf3f429d85ab99a6b87b8f9b.jpg',
    name: 'Shakshuka',
    ingredients: ['🥚 Eggs', '🍅 Tomatoes', '🧅 Onions', '🧄 Garlic', '🌶️ Chili', '🧂 Spices (cumin, paprika)'],
    timeToCook: '30 mins',
    type: 'Breakfast',
    instructions: [
      'Heat some oil in a pan and sauté the onions, garlic, and chili until soft.',
      'Add the chopped tomatoes and spices, and cook until the tomatoes break down and form a thick sauce.',
      'Make small wells in the sauce and crack the eggs into them.',
      'Cover the pan and cook until the eggs are set to your liking.',
      'Serve the shakshuka hot, garnished with fresh herbs and a side of bread for dipping.'
    ],
  },
  {
    id: 18,
    image: 'https://www.wholesomeyum.com/wp-content/uploads/2020/08/wholesomeyum-Caesar-Salad-Recipe-12.jpg',
    name: 'Caesar Salad',
    ingredients: ['🥗 Romaine lettuce', '🍞 Croutons', '🧀 Parmesan cheese', '🐟 Anchovies', '🧄 Garlic', '🍋 Lemon', '🥚 Egg yolk', '🧂 Olive oil'],
    timeToCook: '20 mins',
    type: 'Lunch',
    instructions: [
      'In a large bowl, whisk together the egg yolk, minced garlic, lemon juice, and anchovy paste.',
      'Slowly whisk in the olive oil until the dressing is emulsified and creamy.',
      'Toss the chopped romaine lettuce with the dressing until evenly coated.',
      'Add croutons and grated Parmesan cheese, and toss again.',
      'Serve the Caesar salad immediately, garnished with additional Parmesan shavings if desired.'
    ],
  },
  {
    id: 19,
    image: 'https://www.simplyrecipes.com/thmb/qbHp9MabM_MmDQGldM5eLwK66Wc=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Classic-Peanut-Butter-Cookies-LEAD-01-869e20a5d5ae48a297dffbb5cbb38c3c.jpg',
    name: 'Peanut Butter Cookies',
    ingredients: ['🥜 Peanut butter', '🧈 Butter', '🍬 Sugar', '🥚 Egg', '🥄 Vanilla extract', '🥣 Flour', '🧂 Baking soda', '🧂 Salt'],
    timeToCook: '35 mins',
    type: 'Dessert',
    instructions: [
      'Preheat the oven to 350°F (175°C).',
      'In a large bowl, cream together the butter, peanut butter, and sugar until light and fluffy.',
      'Beat in the egg and vanilla extract until well combined.',
      'In a separate bowl, whisk together the flour, baking soda, and salt.',
      'Gradually add the dry ingredients to the wet ingredients, mixing until just combined.',
      'Roll the dough into balls and place them on a baking sheet. Flatten each ball with a fork to create a crosshatch pattern.',
      'Bake the cookies for 10-12 minutes, or until the edges are lightly browned.',
      'Allow the cookies to cool on a wire rack before serving.'
    ],
  },
  {
    id: 20,
    image: 'https://www.inspiredtaste.net/wp-content/uploads/2020/08/Banana-Bread-Recipe-4-1200.jpg',
    name: 'Banana Bread',
    ingredients: ['🍌 Ripe bananas', '🥚 Eggs', '🧈 Butter', '🍬 Sugar', '🥣 Flour', '🧂 Baking soda', '🧂 Salt', '🥛 Milk', '🥄 Vanilla extract'],
    timeToCook: '1 hour 15 mins',
    type: 'Dessert',
    instructions: [
      'Preheat the oven to 350°F (175°C) and grease a loaf pan.',
      'In a large bowl, mash the ripe bananas with a fork.',
      'Add the melted butter, sugar, eggs, and vanilla extract, and mix until smooth.',
      'In a separate bowl, whisk together the flour, baking soda, and salt.',
      'Gradually add the dry ingredients to the wet ingredients, mixing until just combined.',
      'Pour the batter into the prepared loaf pan and smooth the top.',
      'Bake for 60-70 minutes, or until a toothpick inserted into the center comes out clean.',
      'Allow the banana bread to cool in the pan for 10 minutes before transferring to a wire rack to cool completely.'
    ],
  },
];

export default recipes;