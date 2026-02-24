import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';

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
            }
        ]
    },
    {
        category: "Medicinal Plants",
        items: [
            {
                id: 4,
                name: "Aloe Vera",
                cost: 14.50,
                description: "A soothing succulent that helps clean indoor air.",
                image: "https://images.unsplash.com/photo-1596547609652-9fc5d8d428ce?auto=format&fit=crop&q=80&w=300&h=300"
            },
            {
                id: 5,
                name: "Echinacea",
                cost: 18.00,
                description: "A beautiful flower often used to boost the immune system.",
                image: "https://images.unsplash.com/photo-1600189033282-eeb7a627d722?auto=format&fit=crop&q=80&w=300&h=300"
            },
            {
                id: 6,
                name: "Chamomile",
                cost: 10.00,
                description: "An herb famous for making relaxing, sleep-inducing teas.",
                image: "https://images.unsplash.com/photo-1611077544093-6a9787ed9734?auto=format&fit=crop&q=80&w=300&h=300"
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
