import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faHouse } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Header({cartCount}) {
  return (
    <header
      style={{
        marginBottom: "20px",
        top: "0",
        position: "sticky",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <Link to="/">
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <h1>
            FASHION <span style={{ backgroundColor: "red" }}>BEANS</span>
          </h1>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRePVRUDpolmsO5M8HKtcvRGXxnOGU-lpyi0A&usqp=CAU"
            style={{ height: "60px", width: "60px" }}
            alt="name"
          />
        </div>
      </Link>
      <div
        style={{
          marginRight: "30px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <Link to="/">

          <FontAwesomeIcon icon={faHouse} style={{"--fa-primary-opacity": "1","--fa-secondary-opacity": "0.9",}}/>

        </Link>

        <Link to="/cart">
          <FontAwesomeIcon icon={faCartPlus} size="lg" /><sup style={{color:"orange", fontSize:"20px"}}>{cartCount}</sup> 
        </Link>

      </div>
    </header>
  );
}

export default Header;