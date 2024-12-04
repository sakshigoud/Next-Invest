import React from "react";

const InvestorSection = () => {
    return (
        <section className="container-fluid py-5">
            <div
                className="row align-items-center"
                style={{
                    backgroundColor: "#E7DDFF",
                    height: "700px",
                    backgroundImage: 'url("/images/1.svg")',
                    backgroundRepeat: "no-repeat",
                    marginTop: "2%",
                    backgroundSize: "cover",
                }}
            >

                <div className="col-md-6 text-center text-md-start">
                    <div className="p-4">
                        <div className="mb-3" style={{ display: "flex", alignItems: "center" }}>

                            <img
                                src="/images/Subtract.svg"
                                alt="Growth Icon"
                                className="img-fluid"
                                style={{
                                    width: "50px",
                                    marginLeft: "150px",
                                    marginTop: "-80px",
                                    maxWidth: "100%",
                                }}
                            />
                        </div>
                        <h2 className="fw-bold" style={{ fontSize: "2rem", marginLeft: "150px" }}>
                            $7M+ paid out to investors
                        </h2>
                        <p
                            className="text-muted"
                            style={{
                                lineHeight: "1.8",
                                marginLeft: "150px",
                            }}
                        >
                            Next Invest has already paid out over $7M in cash <br /> returns to investors. Earn potential cash
                            payments <br /> through unique revenue-share and debt financing <br /> investments.
                        </p>
                    </div>
                </div>


                <div className="col-md-6">
                    <img
                        src="./images/14.svg"
                        alt=""
                        style={{
                            float: "right",
                            maxWidth: "100%",
                            marginBottom: "800px",
                        }}
                    />
                    <div className="position-relative">

                        <img
                            src="./images/15.svg"
                            alt=""
                            style={{
                                float: "right",
                                maxWidth: "100%",


                            }}
                        />
                        <img
                            src="/images/16.svg"
                            alt="Chart"
                            className="img-fluid"
                            style={{
                                borderRadius: "10px",
                                maxWidth: "100%"

                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InvestorSection;
