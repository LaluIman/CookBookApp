const recipes = [
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
        'Cook for another minute, then slide the omelette onto a plate and serve hot.'
      ],
    },
    {
      id: 9,
      image: 'https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/esensi/2023/11/cheeseburger.jpg',
      name: 'Cheeseburger',
      ingredients: ['🥩 Ground beef', '🧀 Cheese', '🍞 Buns', '🥬 Lettuce', '🍅 Tomatoes', '🧅 Onions', '🥒 Pickles'],
      timeToCook: '15 mins',
      type: 'Lunch',
      instructions: [
        'Form the ground beef into patties and season with salt and pepper.',
        'Heat a grill or pan over medium-high heat and cook the patties until they reach your desired level of doneness.',
        'Place a slice of cheese on top of each patty and allow it to melt.',
        'Toast the buns lightly on the grill or in a pan.',
        'Assemble the burgers by placing the patties on the buns and adding lettuce, tomatoes, onions, and pickles as desired.',
        'Serve with your choice of condiments.'
      ],
    },
    {
      id: 10,
      image: 'https://www.eatyourselfskinny.com/wp-content/uploads/2023/11/chocolate-chip-cookies-44-1200x1703.jpg',
      name: 'Chocolate Chip Cookies',
      ingredients: ['🌾 Flour', '🍬 Sugar', '🍯 Brown sugar', '🧈 Butter', '🥚 Eggs', '🍦 Vanilla extract', '🍫 Chocolate chips', '🥄 Baking soda'],
      timeToCook: '25 mins',
      type: 'Dessert',
      instructions: [
        'Preheat your oven to 350°F (175°C).',
        'In a large bowl, cream together the butter, sugar, and brown sugar until light and fluffy.',
        'Beat in the eggs and vanilla extract until well combined.',
        'In a separate bowl, whisk together the flour and baking soda, then gradually add to the wet ingredients.',
        'Stir in the chocolate chips.',
        'Drop spoonfuls of dough onto a baking sheet lined with parchment paper.',
        'Bake for 10-12 minutes, or until the edges are golden brown.',
        'Allow the cookies to cool on the baking sheet for a few minutes before transferring them to a wire rack to cool completely.'
      ],
    },
  ];
  
  
    
    export default recipes;
    