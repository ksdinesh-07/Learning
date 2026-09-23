const food_app_data = {
    appName: "FoodExpress",
    version: "5.2.1",

    user: {
        userId: "USR10025",
        name: "Arun Kumar",
        email: "arun@example.com",
        phone: "+91-9876543210",
        dateOfBirth: "2002-08-15",
        gender: "Male",
        isPremium: true,
        accountStatus: "active",

        preferences: {
            language: "English",
            currency: "INR",
            notifications: {
                email: true,
                sms: false,
                push: true
            },
            foodPreferences: {
                vegetarian: true,
                vegan: false,
                spicyFood: true,
                preferredCuisines: [
                    "Indian",
                    "Chinese",
                    "Italian"
                ]
            }
        },

        addresses: [
            {
                addressId: "ADDR001",
                type: "Home",
                houseNumber: "25",
                street: "Periyar Street",
                area: "MGR Nagar",
                city: "Tiruppur",
                district: "Tiruppur",
                state: "Tamil Nadu",
                country: "India",
                pincode: "641602",

                location: {
                    latitude: 11.1085,
                    longitude: 77.3411
                },

                deliveryInstructions: "Call before delivery",
                isDefault: true
            },

            {
                addressId: "ADDR002",
                type: "Office",
                houseNumber: "45",
                street: "Avinashi Road",
                area: "Peelamedu",
                city: "Coimbatore",
                district: "Coimbatore",
                state: "Tamil Nadu",
                country: "India",
                pincode: "641004",

                location: {
                    latitude: 11.0168,
                    longitude: 76.9558
                },

                deliveryInstructions: "Deliver at reception",
                isDefault: false
            }
        ]
    },

    restaurants: [
        {
            restaurantId: "REST101",
            name: "Spice Garden",
            description: "Authentic South Indian cuisine",
            phone: "+91-9000000001",

            restaurantType: "Restaurant",
            isActive: true,
            isPureVeg: true,

            cuisines: [
                "South Indian",
                "Indian",
                "Breakfast"
            ],

            rating: {
                average: 4.6,
                totalRatings: 2845,
                foodRating: 4.7,
                deliveryRating: 4.5
            },

            pricing: {
                costForTwo: 350,
                minimumOrder: 150,
                deliveryFee: 30,
                taxPercentage: 5
            },

            delivery: {
                available: true,
                estimatedTime: 30,
                distance: 3.2,
                deliveryRadius: 8
            },

            location: {
                address: "Gandhipuram",
                city: "Coimbatore",
                state: "Tamil Nadu",
                pincode: "641012",

                coordinates: {
                    latitude: 11.0168,
                    longitude: 76.9558
                }
            },

            operatingHours: {
                monday: {
                    open: "07:00",
                    close: "22:30"
                },
                tuesday: {
                    open: "07:00",
                    close: "22:30"
                },
                wednesday: {
                    open: "07:00",
                    close: "22:30"
                },
                thursday: {
                    open: "07:00",
                    close: "22:30"
                },
                friday: {
                    open: "07:00",
                    close: "23:00"
                },
                saturday: {
                    open: "07:00",
                    close: "23:00"
                },
                sunday: {
                    open: "07:00",
                    close: "22:30"
                }
            },

            menu: [
                {
                    categoryId: "CAT001",
                    categoryName: "Breakfast",
                    categoryDescription: "Traditional South Indian breakfast",

                    items: [
                        {
                            itemId: "ITEM001",
                            name: "Masala Dosa",
                            description: "Crispy dosa with potato masala",

                            pricing: {
                                price: 90,
                                originalPrice: 100,
                                discount: 10
                            },

                            foodType: "vegetarian",
                            spiceLevel: "medium",

                            nutrition: {
                                calories: 320,
                                protein: 8,
                                carbohydrates: 45,
                                fat: 12
                            },

                            ingredients: [
                                "Rice",
                                "Urad Dal",
                                "Potato",
                                "Onion",
                                "Spices"
                            ],

                            allergens: [
                                "None"
                            ],

                            customizations: [
                                {
                                    optionName: "Extra Sambar",
                                    price: 20,
                                    available: true
                                },
                                {
                                    optionName: "Extra Chutney",
                                    price: 15,
                                    available: true
                                }
                            ],

                            availability: {
                                isAvailable: true,
                                stock: 50,
                                nextAvailable: null
                            },

                            ratings: {
                                average: 4.8,
                                count: 1240
                            },

                            tags: [
                                "bestseller",
                                "breakfast",
                                "vegetarian"
                            ]
                        },

                        {
                            itemId: "ITEM002",
                            name: "Idli",
                            description: "Soft steamed rice cakes",

                            pricing: {
                                price: 60,
                                originalPrice: 60,
                                discount: 0
                            },

                            foodType: "vegetarian",
                            spiceLevel: "low",

                            nutrition: {
                                calories: 180,
                                protein: 6,
                                carbohydrates: 32,
                                fat: 2
                            },

                            ingredients: [
                                "Rice",
                                "Urad Dal"
                            ],

                            allergens: [
                                "None"
                            ],

                            customizations: [
                                {
                                    optionName: "Extra Sambar",
                                    price: 20,
                                    available: true
                                }
                            ],

                            availability: {
                                isAvailable: true,
                                stock: 100,
                                nextAvailable: null
                            },

                            ratings: {
                                average: 4.5,
                                count: 980
                            },

                            tags: [
                                "breakfast",
                                "vegetarian"
                            ]
                        }
                    ]
                },

                {
                    categoryId: "CAT002",
                    categoryName: "Main Course",

                    items: [
                        {
                            itemId: "ITEM003",
                            name: "Paneer Butter Masala",
                            description: "Paneer cooked in creamy tomato gravy",

                            pricing: {
                                price: 240,
                                originalPrice: 280,
                                discount: 40
                            },

                            foodType: "vegetarian",
                            spiceLevel: "medium",

                            nutrition: {
                                calories: 450,
                                protein: 18,
                                carbohydrates: 20,
                                fat: 32
                            },

                            ingredients: [
                                "Paneer",
                                "Tomato",
                                "Butter",
                                "Cream",
                                "Spices"
                            ],

                            allergens: [
                                "Milk",
                                "Dairy"
                            ],

                            customizations: [
                                {
                                    optionName: "Extra Paneer",
                                    price: 60,
                                    available: true
                                },
                                {
                                    optionName: "Less Spicy",
                                    price: 0,
                                    available: true
                                }
                            ],

                            availability: {
                                isAvailable: true,
                                stock: 25,
                                nextAvailable: null
                            },

                            ratings: {
                                average: 4.7,
                                count: 750
                            },

                            tags: [
                                "popular",
                                "vegetarian"
                            ]
                        }
                    ]
                }
            ]
        },

        {
            restaurantId: "REST102",
            name: "Urban Pizza",
            description: "Pizza, burgers and Italian food",
            phone: "+91-9000000002",

            restaurantType: "Fast Food",
            isActive: true,
            isPureVeg: false,

            cuisines: [
                "Italian",
                "Fast Food",
                "Pizza",
                "Burgers"
            ],

            rating: {
                average: 4.3,
                totalRatings: 1920,
                foodRating: 4.4,
                deliveryRating: 4.2
            },

            pricing: {
                costForTwo: 650,
                minimumOrder: 200,
                deliveryFee: 40,
                taxPercentage: 5
            },

            delivery: {
                available: true,
                estimatedTime: 40,
                distance: 5.8,
                deliveryRadius: 10
            },

            location: {
                address: "RS Puram",
                city: "Coimbatore",
                state: "Tamil Nadu",
                pincode: "641002",

                coordinates: {
                    latitude: 11.005,
                    longitude: 76.953
                }
            },

            menu: [
                {
                    categoryId: "CAT101",
                    categoryName: "Pizza",

                    items: [
                        {
                            itemId: "ITEM101",
                            name: "Margherita Pizza",
                            description: "Classic cheese and tomato pizza",

                            pricing: {
                                price: 299,
                                originalPrice: 349,
                                discount: 50
                            },

                            foodType: "vegetarian",
                            spiceLevel: "low",

                            nutrition: {
                                calories: 680,
                                protein: 25,
                                carbohydrates: 75,
                                fat: 28
                            },

                            ingredients: [
                                "Pizza Dough",
                                "Tomato Sauce",
                                "Mozzarella",
                                "Basil"
                            ],

                            allergens: [
                                "Milk",
                                "Gluten"
                            ],

                            customizations: [
                                {
                                    optionName: "Extra Cheese",
                                    price: 50,
                                    available: true
                                },
                                {
                                    optionName: "Extra Olives",
                                    price: 30,
                                    available: true
                                }
                            ],

                            availability: {
                                isAvailable: true,
                                stock: 20,
                                nextAvailable: null
                            },

                            ratings: {
                                average: 4.6,
                                count: 1450
                            },

                            tags: [
                                "pizza",
                                "bestseller",
                                "vegetarian"
                            ]
                        },

                        {
                            itemId: "ITEM102",
                            name: "Chicken Pepperoni Pizza",
                            description: "Chicken pepperoni with mozzarella cheese",

                            pricing: {
                                price: 449,
                                originalPrice: 499,
                                discount: 50
                            },

                            foodType: "non-vegetarian",
                            spiceLevel: "medium",

                            nutrition: {
                                calories: 820,
                                protein: 38,
                                carbohydrates: 78,
                                fat: 40
                            },

                            ingredients: [
                                "Pizza Dough",
                                "Chicken Pepperoni",
                                "Mozzarella",
                                "Tomato Sauce"
                            ],

                            allergens: [
                                "Milk",
                                "Gluten"
                            ],

                            customizations: [
                                {
                                    optionName: "Extra Cheese",
                                    price: 50,
                                    available: true
                                }
                            ],

                            availability: {
                                isAvailable: false,
                                stock: 0,
                                nextAvailable: "2026-09-24T12:00:00"
                            },

                            ratings: {
                                average: 4.5,
                                count: 980
                            },

                            tags: [
                                "pizza",
                                "non-vegetarian"
                            ]
                        }
                    ]
                }
            ]
        }
    ],

    orders: [
        {
            orderId: "ORD10001",
            orderDate: "2026-09-20T13:30:00",
            orderStatus: "delivered",

            restaurant: {
                restaurantId: "REST101",
                name: "Spice Garden",
                city: "Coimbatore"
            },

            deliveryAddress: {
                type: "Home",
                city: "Tiruppur",
                pincode: "641602"
            },

            items: [
                {
                    itemId: "ITEM001",
                    name: "Masala Dosa",
                    quantity: 2,
                    unitPrice: 90,
                    customization: [
                        {
                            name: "Extra Sambar",
                            price: 20
                        }
                    ],
                    subtotal: 200
                },

                {
                    itemId: "ITEM002",
                    name: "Idli",
                    quantity: 1,
                    unitPrice: 60,
                    customization: [],
                    subtotal: 60
                }
            ],

            pricing: {
                itemTotal: 260,
                deliveryFee: 30,
                tax: 14.5,
                discount: 20,
                couponDiscount: 10,
                packagingFee: 10,
                totalAmount: 284.5
            },

            payment: {
                paymentId: "PAY50001",
                method: "UPI",
                provider: "Google Pay",
                status: "success",
                transactionId: "TXN789456",
                paidAmount: 284.5,
                paidAt: "2026-09-20T13:32:00"
            },

            delivery: {
                partner: {
                    id: "DEL501",
                    name: "Ravi",
                    phone: "+91-9000000011",
                    vehicleType: "Bike",
                    vehicleNumber: "TN38AB1234"
                },

                estimatedTime: 35,
                actualDeliveryTime: 32,

                tracking: {
                    pickedUpAt: "2026-09-20T13:48:00",
                    outForDeliveryAt: "2026-09-20T13:55:00",
                    deliveredAt: "2026-09-20T14:07:00"
                }
            },

            rating: {
                restaurantRating: 5,
                foodRating: 5,
                deliveryRating: 4,
                review: "Good food and fast delivery"
            }
        },

        {
            orderId: "ORD10002",
            orderDate: "2026-09-21T19:20:00",
            orderStatus: "delivered",

            restaurant: {
                restaurantId: "REST102",
                name: "Urban Pizza",
                city: "Coimbatore"
            },

            deliveryAddress: {
                type: "Office",
                city: "Coimbatore",
                pincode: "641004"
            },

            items: [
                {
                    itemId: "ITEM101",
                    name: "Margherita Pizza",
                    quantity: 1,
                    unitPrice: 299,

                    customization: [
                        {
                            name: "Extra Cheese",
                            price: 50
                        }
                    ],

                    subtotal: 349
                }
            ],

            pricing: {
                itemTotal: 349,
                deliveryFee: 40,
                tax: 19.45,
                discount: 30,
                couponDiscount: 20,
                packagingFee: 10,
                totalAmount: 368.45
            },

            payment: {
                paymentId: "PAY50002",
                method: "Credit Card",
                provider: "Razorpay",
                status: "success",
                transactionId: "TXN789457",
                paidAmount: 368.45,
                paidAt: "2026-09-21T19:25:00"
            },

            delivery: {
                partner: {
                    id: "DEL502",
                    name: "Suresh",
                    phone: "+91-9000000012",
                    vehicleType: "Bike",
                    vehicleNumber: "TN37CD5678"
                },

                estimatedTime: 40,
                actualDeliveryTime: 44,

                tracking: {
                    pickedUpAt: "2026-09-21T19:50:00",
                    outForDeliveryAt: "2026-09-21T20:00:00",
                    deliveredAt: "2026-09-21T20:24:00"
                }
            },

            rating: {
                restaurantRating: 4,
                foodRating: 5,
                deliveryRating: 3,
                review: "Pizza was good"
            }
        }
    ]
};