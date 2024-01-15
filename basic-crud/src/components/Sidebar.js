import React from "react";
import { Link} from "react-router-dom";

const Sidebar = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/orders">Orders</Link>
            <Link to="/customers">Customers</Link>
            <Link to="/refunds">Refunds</Link>
            <Link to="/config">Config</Link>
        </div>
    )
}

export default Sidebar;