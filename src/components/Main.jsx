import React from "react";
import dogBathIcon from "../images/dogBath.svg";
import collarIcon1 from "../images/collar1.svg";
import collarIcon2 from "../images/collar2.svg";
import collarIcon3 from "../images/collar3.svg";
import carryIcon1 from "../images/carry1.svg";
import carryIcon2 from "../images/carry2.svg";
import carryIcon3 from "../images/carry3.svg";
import "../Main.css";
import "../App.css";
import ProductGrid3col from "./ProductGrid3col";
import Button from "./Button"

export default function Main() {
  const productsSetCollar = [
    {
      image: collarIcon1,
      description:
        "Leather Dog Collars with Gold Name Tag <br/> Luxe Animal Spa",
      price: "CA $325.00",
    },
    {
      image: collarIcon2,
      description:
        "Pink & White Diamond Encrusted Dog Collar <br/> Luxe Animal Spa",
      price: "CA $1225.00",
    },
    {
      image: collarIcon3,
      description: "Large 3000kt Silver Diamond Collar <br/> Luxe Animal Spa",
      price: "CA $1500.00",
    },
  ];
 const productsSetCarry = [
   {
     image: carryIcon1,
     description:
       "Leather Dog Collars with Gold Name Tag <br/> Luxe Animal Spa",
     price: "CA $325.00",
   },
   {
     image: carryIcon2,
     description:
       "Pink & White Diamond Encrusted Dog Collar <br/> Luxe Animal Spa",
     price: "CA $1225.00",
   },
   {
     image: carryIcon3,
     description: "Large 3000kt Silver Diamond Collar <br/> Luxe Animal Spa",
     price: "CA $1500.00",
   },
 ];


  return (
    <div container_main>
      <div className="spa_package">
        <h2 className="spa_package-header">Trending Spa Package</h2>
        <div className="spa_container">
          <div className="spa_img">
            {" "}
            <img src={dogBathIcon} alt="" />
          </div>

          <div className="spa_info">
            <div className="package">
              {" "}
              <p className="package_name">
                Doggy Facial and Fur Cleanse Treatment{" "}
              </p>
              <p className="package_price">$269</p>
            </div>

            <p className="package_description">
              Dogs receive a facial with our vegan, cruelty free face products
              and cleansing of any dirt left hiding in their beautiful fur
              (comes with a take home face products and animal treats).
            </p>
            {/* <button>See More Spa Packages</button> */}
            <Button buttonText={"See More Spa Packages"} />
          </div>
        </div>
      </div>
      <div className="collars">
        <h2>Dog Collars</h2>
        <ProductGrid3col products={productsSetCollar} />
        <Button buttonText={"See More Dog Collars"} />
      </div>
      <div className="carryOn">
        <h2>Animal Carry Ons</h2>
        <ProductGrid3col products={productsSetCarry} />
        <Button buttonText={"See More Carry Ons"} />
      </div>
    </div>
  );
}
