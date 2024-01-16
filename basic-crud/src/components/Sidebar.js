import React from "react";
import { Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faShoppingCart, faUsers, faUndo, faCog } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <Link to="/"><FontAwesomeIcon icon={faHome} />{' '} Home</Link>
            <Link to="/orders"><FontAwesomeIcon icon={faShoppingCart} />{' '} Orders</Link>
            <Link to="/customers"><FontAwesomeIcon icon={faUsers} />{' '} Customers</Link>
            <Link to="/refunds"><FontAwesomeIcon icon={faUndo} />{' '} Refunds</Link>
            <Link to="/config"><FontAwesomeIcon icon={faCog} />{' '} Config</Link>
        </div>
    )
}

export default Sidebar;