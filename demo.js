const users = [
    {
        id: 1,
        skills: [
            {
                name: "python",
                rating: 5
            },
            {
                name: "c",
                rating: 3
            }
        ]
    },

    {
        id: 2,
        skills: [
            {
                name: "python",
                rating: 2
            },
            {
                name: "c",
                rating: 4
            },
            {
                name: "java",
                rating: 3
            }
        ]
    },

    {
        id: 3,
        skills: [
            {
                name: "python",
                rating: 4
            },
            {
                name: "c",
                rating: 5
            }
        ]
    }
];


// Get first user
const user = users[0];

console.log("User ID:");
console.log(user.id);


// Get skills
console.log("Skills before sorting:");
console.log(user.skills);


// Sort skills based on rating
const sorted_skills = [...user.skills].sort((a, b) => {
    return b.rating - a.rating;
});


// Display sorted skills
console.log("Skills after sorting:");
console.log(sorted_skills);

const foods = [
    {
        id: 1,
        name: "Chicken Biryani",
        category: "Biryani",
        price: 180
    },
    {
        id: 2,
        name: "Paneer Biryani",
        category: "Biryani",
        price: 160
    },
    {
        id: 3,
        name: "Veg Burger",
        category: "Burger",
        price: 120
    },
    {
        id: 4,
        name: "Chicken Burger",
        category: "Burger",
        price: 150
    },
    {
        id: 5,
        name: "Masala Dosa",
        category: "South Indian",
        price: 80
    }
];

const menu = foods.reduce((result, food) => {
    if (!result[food.category]) {
        result[food.category] = [];
    }
    result[food.category].push(food);
    return result;
}, {});

console.log(menu);