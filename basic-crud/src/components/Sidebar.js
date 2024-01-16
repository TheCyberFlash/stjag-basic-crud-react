import React from "react";
import { Link} from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <Link to="/stjag-basic-crud-react/">Home</Link>
            <Link to="/stjag-basic-crud-react/orders">Orders</Link>
            <Link to="/stjag-basic-crud-react/customers">Customers</Link>
            <Link to="/stjag-basic-crud-react/refunds">Refunds</Link>
            <Link to="/stjag-basic-crud-react/config">Config</Link>
        </div>
    )
}

export default Sidebar;