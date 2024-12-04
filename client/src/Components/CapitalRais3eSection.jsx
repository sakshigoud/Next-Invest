import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CapitalRaiseSection = () => {
    return (
        <div className="container my-5 " style={{ backgroundImage: 'url("/images/Shape.svg")', backgroundRepeat: "no-repeat", height: "500px" }} >
            <div className="row align-items-center" style={{ height: "500px" }}>
                {/* Text Section */}
                <div className="col-md-6">
                    <h2 className="mb-4"><b>Looking to raise capital <br /> for your growing <br /> business?</b></h2>
                    <p className="mb-4">
                        Whether expanding or opening a brand-new <br /> concept, we make it easy
                        to raise money from <br /> thousands of local investors.
                    </p>
                    <button className="btn btn-success">Apply Online</button>
                </div>
                <div className="col-md-6 text-center">
                    <img
                        src="/images/2.svg"
                        alt="Raising Capital"
                        className="img-fluid"
                        style={{ maxHeight: "400px" }}
                    />
                </div>
            </div>
        </div>
    );
};

export default CapitalRaiseSection;