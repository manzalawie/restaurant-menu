window.MENU = {
  restaurant: {
    nameAr: "فطيرة الشاورما",
    nameEn: "Shawarma Pie",
    phone: "0540465696",
    email: "SHAWARMAPIE.KSA@GMAIL.COM"
  },
  categories: [
    {
      id: "boxes",
      nameEn: "Boxes",
      nameAr: "بوكسات",
      icon: "box",
      image: "images/items/27.jpg",
      items: [
        { id: 27, nameAr: "بوكس تورتو", nameEn: "Torto Box", price: 27, calories: 1889, mlgm: 3365, image: "images/items/27.jpg" },
        { id: 28, nameAr: "بوكس شاورما عربي", nameEn: "Arabi Shawarma Box", price: 22, calories: 2180, mlgm: 3255, image: "images/items/28.png" },
        { id: 44, nameAr: "عربي سنجل", nameEn: "Arabi Single", price: 17, calories: 1090, mlgm: 1627, image: "images/items/44.jpg" },
        { id: 29, nameAr: "بوكس قوارب شاورما", nameEn: "Shawarma Boats Box", price: 25, calories: 1240, mlgm: 0.280, image: "images/items/29.png" },
        { id: 37, nameAr: "شاورما فرن", nameEn: "Oven Shawarma", price: 28, calories: 1375, mlgm: 2.282, image: "images/items/37.png" },
        {
          id: 30,
          nameAr: "بوكس كوجيك",
          nameEn: "Kojek Box",
          price: 27,
          calories: 1133,
          image: "images/items/30.png",
          typePreview: true,
          choices: [
            { id: "chicken", nameAr: "دجاج", nameEn: "Chicken", calories: 1133, mlgm: 1.254, price: 27, image: "images/items/30.png" },
            { id: "shawarma", nameAr: "شاورما", nameEn: "Shawarma", calories: 1133, mlgm: 1.168, price: 27, image: "images/items/30.png" }
          ]
        },
        {
          id: 31,
          nameAr: "بوكس بارتي جايز",
          nameEn: "Party Guys Box",
          image: "images/items/31.png",
          calories: 333,
          caloriesNoteAr: "للسندوتش",
          caloriesNoteEn: "per sandwich",
          sizes: [
            { id: "11", nameAr: "11 حبة", nameEn: "11 pcs", price: 61, calories: 333 },
            { id: "16", nameAr: "16 حبة", nameEn: "16 pcs", price: 79, calories: 333 },
            { id: "22", nameAr: "22 حبة", nameEn: "22 pcs", price: 105, calories: 333 }
          ]
        }
      ]
    },
    {
      id: "pies",
      nameEn: "Pies & Pizza",
      nameAr: "فطائر و بيتزا",
      icon: "pizza",
      image: "images/items/19.png",
      items: [
        { id: 19, nameAr: "فطيرة شاورما", nameEn: "Shawarma Pie", price: 16, calories: 1305, mlgm: 1.010, image: "images/items/19.png" },
        { id: 20, nameAr: "فطيرة دجاج", nameEn: "Chicken Pie", price: 13, calories: 1337, mlgm: 1.060, image: "images/items/20.png" },
        {
          id: 15,
          nameAr: "فور بايتس",
          nameEn: "Four Bites",
          price: 16,
          calories: 1889,
          mlgm: 0.742,
          image: "images/items/15.jpg",
          typePreview: true,
          choices: [
            { id: "chicken", nameAr: "دجاج", nameEn: "Chicken", calories: 1889, mlgm: 0.742, price: 16, image: "images/items/15.jpg" },
            { id: "shawarma", nameAr: "شاورما", nameEn: "Shawarma", calories: 1889, mlgm: 0.742, price: 16, image: "images/items/15.jpg" }
          ]
        },
        {
          id: 21,
          nameAr: "بيتزا شاورما",
          nameEn: "Shawarma Pizza",
          image: "images/items/21.jpg",
          sizes: [
            { id: "large", nameAr: "كبير", nameEn: "Large", price: 30, calories: 2747, mlgm: 0.620 },
            { id: "small", nameAr: "صغير", nameEn: "Small", price: 25, calories: 1926, mlgm: 0.740 }
          ]
        },
        {
          id: 22,
          nameAr: "بيتزا دجاج",
          nameEn: "Chicken Pizza",
          image: "images/items/22.jpg",
          sizes: [
            { id: "large", nameAr: "كبير", nameEn: "Large", price: 30, calories: 740, mlgm: 1.598 },
            { id: "small", nameAr: "صغير", nameEn: "Small", price: 25, calories: 620, mlgm: 1.094 }
          ]
        },
        {
          id: 23,
          nameAr: "بيتزا خضار",
          nameEn: "Vegetable Pizza",
          image: "images/items/23.jpg",
          sizes: [
            { id: "large", nameAr: "كبير", nameEn: "Large", price: 28, calories: 2747, mlgm: 0.580 },
            { id: "small", nameAr: "صغير", nameEn: "Small", price: 23, calories: 1926, mlgm: 0.560 }
          ]
        },
        { id: 24, nameAr: "كاليزوني شاورما", nameEn: "Shawarma Calzone", price: 32, calories: 2747, mlgm: 2.97, image: "images/items/24.jpg" },
        { id: 25, nameAr: "كاليزوني دجاج", nameEn: "Chicken Calzone", price: 32, calories: 1926, mlgm: 2.97, image: "images/items/25.jpg" },
        {
          id: 26,
          nameAr: "بوكس العائلة",
          nameEn: "Family Box",
          price: 78,
          calories: 564,
          caloriesNoteAr: "للقطعة",
          caloriesNoteEn: "per piece",
          image: "images/items/26.jpg",
          typePreview: true,
          choices: [
            { id: "chicken", nameAr: "دجاج", nameEn: "Chicken", calories: 564, mlgm: 4.182, price: 78, image: "images/items/26.jpg" },
            { id: "shawarma", nameAr: "شاورما", nameEn: "Shawarma", calories: 564, mlgm: 4.276, price: 78, image: "images/items/26.jpg" }
          ]
        }
      ]
    },
    {
      id: "shawarma",
      nameEn: "Shawarma",
      nameAr: "ساندوتش الشاورما",
      icon: "skewer",
      image: "images/items/9.png",
      items: [
        { id: 9, nameAr: "شاورما مكس", nameEn: "Shawarma Mix", price: 14, calories: 800, mlgm: 0.130, image: "images/items/9.png" },
        { id: 10, nameAr: "شاورما ساندوتش صاج", nameEn: "Shawarma Saj", price: 6, calories: 341, mlgm: 0.125, image: "images/items/10.png" },
        { id: 11, nameAr: "شاورما ساندوتش شامي", nameEn: "Shawarma Shami", price: 6, calories: 357, mlgm: 0.125, image: "images/items/11.png" },
        { id: 12, nameAr: "شاورما ساندوتش تورتيلا", nameEn: "Shawarma Tortilla", price: 7, calories: 182, mlgm: 0.125, image: "images/items/12.png" },
        { id: 13, nameAr: "شاورما صاروخ صاج", nameEn: "Sarookh Saj", price: 12, calories: 847, mlgm: 0.225, image: "images/items/13.png" },
        { id: 14, nameAr: "شاورما صاروخ تورتلا", nameEn: "Sarookh Tortilla", price: 13, calories: 715, mlgm: 0.225, image: "images/items/14.png" }
      ]
    },
    {
      id: "sandwiches",
      nameEn: "Sandwiches",
      nameAr: "ساندوتشات",
      icon: "burger",
      image: "images/items/16.jpg",
      items: [
        { id: 16, nameAr: "برجر شاورما", nameEn: "Shawarma Burger", price: 14, calories: 742, mlgm: 1.082, image: "images/items/16.jpg" },
        { id: 17, nameAr: "برجر فايري", nameEn: "Fire Burger", price: 16, calories: 1042, mlgm: 1.042, image: "images/items/17.jpg" },
        { id: 18, nameAr: "استربس", nameEn: "Strips", price: 14, calories: 582, mlgm: 0.582, image: "images/items/18.jpg" }
      ]
    },
    {
      id: "breakfast",
      nameEn: "Breakfast",
      nameAr: "فطور",
      icon: "egg",
      image: "images/items/1.png",
      items: [
        { id: 1, nameAr: "مدور مكس جبن", nameEn: "Cheese Mix Round", price: 5, calories: 696, image: "images/items/1.png" },
        { id: 2, nameAr: "مدور بيض", nameEn: "Egg Round", price: 4, calories: 522, image: "images/items/2.png" },
        { id: 3, nameAr: "مدور بيض بالجبن", nameEn: "Egg & Cheese Round", price: 5, calories: 609, image: "images/items/3.png" },
        { id: 4, nameAr: "مدور شكشوكة", nameEn: "Shakshuka Round", price: 4, calories: 522, image: "images/items/4.png" },
        { id: 5, nameAr: "مدور شكشوكة بالجبن", nameEn: "Shakshuka & Cheese Round", price: 5, calories: 609, image: "images/items/5.png" },
        { id: 6, nameAr: "مدور اتشكن مكس", nameEn: "Chicken Mix Round", price: 6, calories: 783, image: "images/items/6.png" },
        { id: 7, nameAr: "بوكس صحابك 6 فطاير", nameEn: "Friends Box 6 Pies", price: 25, calories: 3478, image: "images/items/7.jpg" },
        { id: 8, nameAr: "بوكس مدور اتشكن مكس", nameEn: "Chicken Mix Round Box", price: 40, calories: 6078, image: "images/items/8.jpg" }
      ]
    },
    {
      id: "sides",
      nameEn: "Side Orders",
      nameAr: "الطلبات الجانبية",
      icon: "fries",
      image: "images/items/34.png",
      items: [
        { id: 34, nameAr: "بطاطس ذهبية", nameEn: "Golden Fries", price: 8, calories: 240, mlgm: 0.100, image: "images/items/34.png" },
        { id: 35, nameAr: "بطاطس ويدجز", nameEn: "Potato Wedges", price: 9, calories: 320, mlgm: 0.100, image: "images/items/35.png" },
        { id: 36, nameAr: "بطاطس كيرلي", nameEn: "Curly Fries", price: 9, calories: 320, mlgm: 0.100, image: "images/items/36.png" },
        { id: 38, nameAr: "بطاطس كيرلي", nameEn: "Curly Fries", price: 10, calories: 280, mlgm: 0.100, image: "images/items/38.png" }
      ]
    },
    {
      id: "sauces",
      nameEn: "Sauces & Taghmisat",
      nameAr: "صوصات و تغميسات",
      icon: "sauce",
      image: "images/items/32-plain.png",
      items: [
        {
          id: 32,
          nameAr: "سبيشل",
          nameEn: "Special Sauce",
          price: 2,
          calories: 100,
          mlgm: 0.100,
          image: "images/items/32-plain.png",
          choiceMode: true,
          typePreview: true,
          choices: [
            { id: "plain", nameAr: "سادة", nameEn: "Plain", price: 2, calories: 100, mlgm: 0.100, image: "images/items/32-plain.png" },
            { id: "spicy", nameAr: "شطية", nameEn: "Spicy", price: 2, calories: 100, mlgm: 0.100, image: "images/items/32-spicy.png" }
          ]
        },
        {
          id: 33,
          nameAr: "ثومية",
          nameEn: "Garlic Sauce",
          price: 2,
          calories: 100,
          mlgm: 0.100,
          image: "images/items/33-plain.png",
          choiceMode: true,
          typePreview: true,
          choices: [
            { id: "plain", nameAr: "سادة", nameEn: "Plain", price: 2, calories: 100, mlgm: 0.100, image: "images/items/33-plain.png" },
            { id: "spicy", nameAr: "شطية", nameEn: "Spicy", price: 2, calories: 100, mlgm: 0.100, image: "images/items/33-spicy.png" }
          ]
        }
      ]
    },
    {
      id: "juices",
      nameEn: "Juices & Cocktail",
      nameAr: "مشروبات و عصائر",
      icon: "juice",
      image: "images/items/39.png",
      items: [
        {
          id: 39,
          nameAr: "برتقال",
          nameEn: "Orange Juice",
          image: "images/items/39.png",
          mlgm: 150,
          sizes: [
            { id: "small", nameAr: "صغير", nameEn: "Small", price: 9 },
            { id: "large", nameAr: "كبير", nameEn: "Large", price: 12 },
            { id: "liter", nameAr: "لتر", nameEn: "1 Liter", price: 22 },
            { id: "liter15", nameAr: "لتر و نص", nameEn: "1.5 Liter", price: 28 }
          ]
        },
        {
          id: 40,
          nameAr: "كوكتيل",
          nameEn: "Cocktail",
          image: null,
          mlgm: 150,
          sizes: [
            { id: "small", nameAr: "صغير", nameEn: "Small", price: 9 },
            { id: "large", nameAr: "كبير", nameEn: "Large", price: 12 },
            { id: "liter", nameAr: "لتر", nameEn: "1 Liter", price: 22 },
            { id: "liter15", nameAr: "لتر و نص", nameEn: "1.5 Liter", price: 28 }
          ]
        },
        {
          id: 41,
          nameAr: "عورا القلب",
          nameEn: "Awra Al-Qalb",
          image: "images/items/41.png",
          mlgm: 150,
          sizes: [
            { id: "small", nameAr: "صغير", nameEn: "Small", price: 10 },
            { id: "large", nameAr: "كبير", nameEn: "Large", price: 13 },
            { id: "liter", nameAr: "لتر", nameEn: "1 Liter", price: 28 },
            { id: "liter15", nameAr: "لتر و نص", nameEn: "1.5 Liter", price: 33 }
          ]
        },
        {
          id: 42,
          nameAr: "مشروبات غازية",
          nameEn: "Soft Drinks",
          price: 3,
          image: "images/items/soda/pepsi-diet.webp",
          choiceMode: true,
          typePreview: true,
          logoGrid: true,
          choices: [
            { id: "mirinda-orange", nameAr: "ميرندا برتقال", nameEn: "Mirinda Orange", price: 3, image: "images/items/soda/mirinda-orange.jpg" },
            { id: "mirinda-lemon", nameAr: "ميرندا ليمون", nameEn: "Mirinda Lemon", price: 3, image: "images/items/soda/mirinda-lemon.png" },
            { id: "pepsi-diet", nameAr: "بيبسي دايت", nameEn: "Pepsi Diet", price: 3, image: "images/items/soda/pepsi-diet.webp" },
            { id: "sevenup-diet", nameAr: "7 اب دايت", nameEn: "7UP Diet", price: 3, image: "images/items/soda/sevenup-diet.png" },
            { id: "sevenup", nameAr: "7 اب عادي", nameEn: "7UP", price: 3, image: "images/items/soda/sevenup.png" },
            { id: "mountain-dew", nameAr: "ماونتن ديو", nameEn: "Mountain Dew", price: 3, image: "images/items/soda/mountain-dew.png" }
          ]
        },
        { id: 43, nameAr: "مياه", nameEn: "Water", price: 1, image: "images/items/43.png" }
      ]
    }
  ]
};
