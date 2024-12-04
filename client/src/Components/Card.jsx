import React, { useState } from "react";

const Card = ({
    title,
    description,
    location,
    tag,
    image,
    totalPrice,
    getPrice,
    securityType,
    investmentMultiplier,
    maturity,
    minInvestment
}) => {
    const [isHovered, setIsHovered] = useState(false);

    // Calculate percentage of getPrice out of totalPrice
    const raisedPercentage = totalPrice > 0 ? (getPrice / totalPrice) * 100 : 0;

    return (
        <div
            className={`card ${isHovered ? "shadow-lg" : "shadow-sm"}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                width: "100%",
                height: "auto",
                maxWidth: "300px",
                minHeight: "400px",
                transition: "box-shadow 0.3s ease-in-out",
                boxSizing: "border-box",
                marginLeft: "90px"
            }}
        >
            <div className="card-body">
                {!isHovered && (
                    <>
                        <div
                            style={{
                                position: "relative",
                                width: "100%",
                                height: "200px",
                            }}
                        >
                            <img
                                src={image}
                                alt={title}
                                className="card-img-top"
                                style={{
                                    objectFit: "cover",
                                    width: "100%",
                                    height: "100%",
                                }}
                            />
                            {tag && (
                                <div
                                    style={{
                                        position: "absolute",
                                        top: "10px",
                                        left: "10px",
                                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                                        color: "#fff",
                                        padding: "5px 10px",
                                        borderRadius: "5px",
                                        fontSize: "14px",
                                    }}
                                >
                                    {tag}
                                </div>
                            )}
                        </div>
                        <h5 className="card-title mt-3">{title}</h5>
                        <p>{location}</p>
                        <p className="card-text text-muted">{description}</p>
                        {/* Slider loader */}
                        <div className="mt-2">
                            <input
                                type="range"
                                value={raisedPercentage}
                                min="0"
                                max="100"
                                className="w-100"
                                style={{
                                    background: `linear-gradient(to right, #118222 ${raisedPercentage}%, #ddd ${raisedPercentage}%)`,
                                    appearance: 'none',
                                    height: '8px',
                                    borderRadius: '5px',
                                }}
                                readOnly
                            />
                        </div>

                        <div className="card-text">
                            <strong>${getPrice}</strong> raised of ${totalPrice}
                        </div>
                    </>
                )}

                {isHovered && (
                    <>
                        <h5 className="card-title">{title}</h5>
                        <p>{location}</p>
                        <p className="card-text text-muted">{description}</p>
                        {/* Slider loader */}
                        <div className="mt-2">
                            <input
                                type="range"
                                value={raisedPercentage}
                                min="0"
                                max="100"
                                className="w-100"
                                style={{
                                    background: `linear-gradient(to right, #118222 ${raisedPercentage}%, #ddd ${raisedPercentage}%)`,
                                    appearance: 'none',
                                    height: '8px',
                                    borderRadius: '5px',
                                }}
                                readOnly
                            />
                        </div>
                        <div className="card-text">
                            <strong>${getPrice}</strong> raised of ${totalPrice}
                        </div>
                        <div className="mt-3">
                            <div>
                                <strong>Security Type:</strong> {securityType}
                            </div>
                            <div>
                                <strong>Investment Multiple:</strong> {investmentMultiplier}x
                            </div>
                            <div>
                                <strong>Maturity:</strong> {maturity} Months
                            </div>
                            <div>
                                <strong>Min. Investment:</strong> ${minInvestment}
                            </div>
                        </div>
                        <button className="btn btn-danger w-100 mt-3">VIEW</button>
                    </>
                )}
            </div>
        </div>
    );
};

export default Card;
