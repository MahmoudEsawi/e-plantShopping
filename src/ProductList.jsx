import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import './ProductList.css'; // Assuming styling is here, or in App.css

const plantsData = [
    {
        category: "Aromatic Plants",
        items: [
            {
                id: 1,
                name: "Lavender",
                cost: 15.00,
                description: "Known for its beautiful scent and calming properties.",
                image: "https://images.unsplash.com/photo-1528310263300-47b2cf2bebb0?auto=format&fit=crop&q=80&w=300&h=300"
            },
            {
                id: 2,
                name: "Rosemary",
                cost: 12.00,
                description: "A fragrant evergreen herb perfect for culinary uses.",
                image: "https://images.unsplash.com/photo-1594917951016-1fdd206cc496?auto=format&fit=crop&q=80&w=300&h=300"
            },
            {
                id: 3,
                name: "Mint",
                cost: 8.50,
                description: "Refreshing and versatile, perfect for teas and cooking.",
                image: "https://images.unsplash.com/photo-1608827595350-58d04229986b?auto=format&fit=crop&q=80&w=300&h=300"
            },
            {
                id: 4,
                name: "Basil",
                cost: 7.00,
                description: "Essential aromatic herb for Italian cuisines.",
                image: "https://images.unsplash.com/photo-1557008075-84fb41477488?auto=format&fit=crop&q=80&w=300&h=300"
            },
            {
                id: 5,
                name: "Thyme",
                cost: 9.00,
                description: "A delicate herb with a strong, aromatic flavor.",
                image: "https://images.unsplash.com/photo-1628102641662-5b9c745cd120?auto=format&fit=crop&q=80&w=300&h=300"
            },
            {
                id: 6,
                name: "Oregano",
                cost: 8.00,
                description: "Robust herb widely used in Mediterranean cooking.",
                image: "https://images.unsplash.com/photo-1596483568971-d64e43b1e3ea?auto=format&fit=crop&q=80&w=300&h=300"
            }
        ]
    },
    {
        category: "Medicinal Plants",
        items: [
            {
                id: 7,
                name: "Aloe Vera",
                cost: 14.50,
                description: "A soothing succulent that helps clean indoor air.",
                image: "https://images.unsplash.com/photo-1596547609652-9fc5d8d428ce?auto=format&fit=crop&q=80&w=300&h=300"
            },
            {
                id: 8,
                name: "Echinacea",
                cost: 18.00,
                description: "A beautiful flower often used to boost the immune system.",
                image: "https://images.unsplash.com/photo-1600189033282-eeb7a627d722?auto=format&fit=crop&q=80&w=300&h=300"
            },
            {
                id: 9,
                name: "Chamomile",
                cost: 10.00,
                description: "An herb famous for making relaxing, sleep-inducing teas.",
                image: "https://images.unsplash.com/photo-1611077544093-6a9787ed9734?auto=format&fit=crop&q=80&w=300&h=300"
            },
            {
                id: 10,
                name: "Peppermint",
                cost: 11.00,
                description: "Helps relieve digestive symptoms and headaches.",
                image: "https://images.unsplash.com/photo-1558281143-6c8cf8220042?auto=format&fit=crop&q=80&w=300&h=300"
            },
            {
                id: 11,
                name: "Lemon Balm",
                cost: 12.50,
                description: "Known to reduce stress and anxiety, promote sleep.",
                image: "https://images.unsplash.com/photo-1621272036033-9037989d6e4b?auto=format&fit=crop&q=80&w=300&h=300"
            },
            {
                id: 12,
                name: "Ginger Plant",
                cost: 16.00,
                description: "Medicinal root plant known for anti-nausea properties.",
                image: "https://images.unsplash.com/photo-1563148118-d9dabc1b0f9f?auto=format&fit=crop&q=80&w=300&h=300"
            }
        ]
    },
    {
        category: "Air Purifying Plants",
        items: [
            {
                id: 13,
                name: "Snake Plant",
                cost: 15.99,
                description: "A hardy indoor plant that requires very little maintenance.",
                image: "https://images.unsplash.com/photo-1593696954203-882f0290ca83?auto=format&fit=crop&q=80&w=300&h=300"
            },
            {
                id: 14,
                name: "Spider Plant",
                cost: 10.00,
                description: "An adaptable houseplant known for its cascading foliage.",
                image: "https://images.unsplash.com/photo-1620649198640-5a18a5fd8df9?auto=format&fit=crop&q=80&w=300&h=300"
            },
            {
                id: 15,
                name: "Peace Lily",
                cost: 20.00,
                description: "Elegant plant that effectively removes toxins from the air.",
                image: "https://images.unsplash.com/photo-1597055181300-e3623edbc0b7?auto=format&fit=crop&q=80&w=300&h=300"
            },
            {
                id: 16,
                name: "Boston Fern",
                cost: 14.00,
                description: "Lush fern that improves indoor humidity and air quality.",
                image: "https://images.unsplash.com/photo-1616045618776-658d5f470659?auto=format&fit=crop&q=80&w=300&h=300"
            },
            {
                id: 17,
                name: "Rubber Plant",
                cost: 22.00,
                description: "Features broad leaves that produce excessive oxygen.",
                image: "https://images.unsplash.com/photo-1601058269781-678bdc3ed91a?auto=format&fit=crop&q=80&w=300&h=300"
            },
            {
                id: 18,
                name: "Pothos",
                cost: 11.50,
                description: "Extremely easy to care for and highly effective at purifying.",
                image: "https://images.unsplash.com/photo-1589311654152-44df0e1fe69b?auto=format&fit=crop&q=80&w=300&h=300"
            }
        ]
    }
];

const ProductList = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);

    const handleAddToCart = (plant) => {
        dispatch(addItem(plant));
    };

    return (
        <div className="product-list-page">
            {plantsData.map((section, index) => (
                <section key={index} className="category-section">
                    <h2 className="category-title">{section.category}</h2>
                    <div className="product-grid">
                        {section.items.map((plant) => {
                            // Check if plant is already in the cart to disable the button
                            const isAdded = cartItems.some((item) => item.name === plant.name);

                            return (
                                <div key={plant.id} className="plant-card">
                                    <img src={plant.image} alt={plant.name} />
                                    <div className="plant-details">
                                        <h3>{plant.name}</h3>
                                        <p className="plant-cost">${plant.cost.toFixed(2)}</p>
                                        <p className="plant-description">{plant.description}</p>
                                        <button
                                            className={`add-btn ${isAdded ? 'added' : ''}`}
                                            onClick={() => handleAddToCart(plant)}
                                            disabled={isAdded}
                                        >
                                            {isAdded ? "Added to Cart" : "Add to Cart"}
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>
            ))}
        </div>
    );
};

export default ProductList;
