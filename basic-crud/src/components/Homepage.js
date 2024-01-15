import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
    return (
        <div>
            <h1>Homepage</h1>

            <p>Welcome to the homepage.</p>

            <p>Use the links in the sidebar to navigate to other pages.</p>

            <p>Or, click the button below to go to the orders page.</p>
            <Link to="/orders">
                <button>Go to Orders</button>
            </Link>

            <p>Or, click the button below to go to the customers page.</p>
            <Link to="/customers">
                <button>Go to Customers</button>
            </Link>

            <p>Or, click the button below to go to the refunds page.</p>
            <Link to="/refunds">
                <button>Go to Refunds</button>
            </Link>
        </div>
    );
}

export default Homepage;
