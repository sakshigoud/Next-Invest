import React, { useEffect, useState } from "react";
import Card from "./card";
import 'bootstrap/dist/css/bootstrap.min.css';

const CardList = () => {
    const url = import.meta.env.VITE_BASE_URL;
    const [cardsData, setCardsData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${url}/api/investment_data`);
                const data = await response.json();
                setCardsData(data);
                setIsLoading(false);
            } catch (err) {
                setError("Failed to fetch data");
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <>
            <div className="text-center" style={{ marginTop: "30px", marginBottom: "40px", backgroundImage: 'url("/images/Shape.svg")', backgroundRepeat: "no-repeat" }}>
                <h1><b>Offerings open for investment</b></h1>
                <p className="color" style={{ color: "grey" }}>Explore pre-vetted investment opportunities available in a growing <br /> number of industry categories</p>


                <div className="row g-4">
                    {cardsData.map((card) => (
                        <div key={card._id} className="col-lg-4 col-md-6 col-12">
                            <Card
                                title={card.title}
                                description={card.description}
                                tag={card.tag}
                                location={card.location}
                                image={`${url}${card.image}`}
                                totalPrice={card.totalPrice}
                                getPrice={card.getPrice}
                                securityType={card.securityType}
                                investmentMultiplier={card.investmentMultiplier}
                                maturity={card.maturity}
                                minInvestment={card.minInvestment}
                            />
                        </div>
                    ))}
                </div>


                <div>
                    <button className="btn btn-outline-danger" style={{ marginTop: "20px" }}>View All Projects</button>
                </div>
            </div>
        </>
    );
};

export default CardList;
