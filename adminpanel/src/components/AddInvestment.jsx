import React, { useState } from 'react';
import Navbar from './Navbar';
const AddInvestment = () => {
    const url = import.meta.env.VITE_BASE_URL;
    const [formData, setFormData] = useState({
        tag: '',
        image: '',
        title: '',
        location: '',
        description: '',
        totalPrice: '',
        getPrice: '',
        securityType: '',
        investmentMultiplier: '',
        maturity: '',
        minInvestment: '',
    });

    const [errors, setErrors] = useState({}); // to store validation errors

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: files[0],
        }));
    };

    const validateForm = () => {
        const newErrors = {};

        // Check if all fields are filled
        Object.keys(formData).forEach((key) => {
            if (!formData[key] && key !== 'image') {
                newErrors[key] = 'This field is required';
            }
        });

        // Check if image is selected
        if (!formData.image) {
            newErrors.image = 'Image is required';
        }

        setErrors(newErrors);

        // If there are any errors, return false, otherwise true
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return; // Do not submit if there are validation errors
        }

        const formPayload = new FormData();
        for (const key in formData) {
            formPayload.append(key, formData[key]);
        }

        try {
            const response = await fetch(`${url}/api/investment_data/upload`, {
                method: 'POST',
                body: formPayload,
            });

            if (!response.ok) {
                throw new Error('Something went wrong during the upload.');
            }

            alert('Investment successfully added!');
            setFormData({
                tag: '',
                image: '',
                title: '',
                location: '',
                description: '',
                totalPrice: '',
                getPrice: '',
                securityType: '',
                investmentMultiplier: '',
                maturity: '',
                minInvestment: '',
            });
        } catch (error) {
            alert('Error: ' + error.message);
        }
    };

    return (
        <div>
            <Navbar />
            <div className="container py-4  " style={{ backgroundColor: "#E7DDFF", maxWidth: "550px" }} >

                <h2 className="mb-4 text-center">Add Investment</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="tag" className="form-label">Tag:</label>
                        <input
                            type="text"
                            id="tag"
                            name="tag"
                            className="form-control"
                            value={formData.tag}
                            onChange={handleChange}
                            required
                        />
                        {errors.tag && <div className="text-danger">{errors.tag}</div>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="image" className="form-label">Card Image:</label>
                        <input
                            type="file"
                            id="image"
                            name="image"
                            className="form-control"
                            onChange={handleFileChange}
                            required
                        />
                        {errors.image && <div className="text-danger">{errors.image}</div>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title:</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            className="form-control"
                            value={formData.title}
                            onChange={handleChange}
                            required
                        />
                        {errors.title && <div className="text-danger">{errors.title}</div>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="location" className="form-label">Location:</label>
                        <input
                            type="text"
                            id="location"
                            name="location"
                            className="form-control"
                            value={formData.location}
                            onChange={handleChange}
                            required
                        />
                        {errors.location && <div className="text-danger">{errors.location}</div>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description:</label>
                        <textarea
                            id="description"
                            name="description"
                            className="form-control"
                            value={formData.description}
                            onChange={handleChange}
                            required
                        />
                        {errors.description && <div className="text-danger">{errors.description}</div>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="totalPrice" className="form-label">Total Price:</label>
                        <input
                            type="number"
                            id="totalPrice"
                            name="totalPrice"
                            className="form-control"
                            value={formData.totalPrice}
                            onChange={handleChange}
                            required
                        />
                        {errors.totalPrice && <div className="text-danger">{errors.totalPrice}</div>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="getPrice" className="form-label">Get Price:</label>
                        <input
                            type="number"
                            id="getPrice"
                            name="getPrice"
                            className="form-control"
                            value={formData.getPrice}
                            onChange={handleChange}
                            required
                        />
                        {errors.getPrice && <div className="text-danger">{errors.getPrice}</div>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="securityType" className="form-label">Security Type:</label>
                        <input
                            type="text"
                            id="securityType"
                            name="securityType"
                            className="form-control"
                            value={formData.securityType}
                            onChange={handleChange}
                            required
                        />
                        {errors.securityType && <div className="text-danger">{errors.securityType}</div>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="investmentMultiplier" className="form-label">Investment Multiple:</label>
                        <input
                            type="number"
                            id="investmentMultiplier"
                            name="investmentMultiplier"
                            className="form-control"
                            value={formData.investmentMultiplier}
                            onChange={handleChange}
                            required
                        />
                        {errors.investmentMultiplier && <div className="text-danger">{errors.investmentMultiplier}</div>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="maturity" className="form-label">Maturity:</label>
                        <input
                            type="number"
                            id="maturity"
                            name="maturity"
                            className="form-control"
                            value={formData.maturity}
                            onChange={handleChange}
                            required
                        />
                        {errors.maturity && <div className="text-danger">{errors.maturity}</div>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="minInvestment" className="form-label">Min. Investment:</label>
                        <input
                            type="number"
                            id="minInvestment"
                            name="minInvestment"
                            className="form-control"
                            value={formData.minInvestment}
                            onChange={handleChange}
                            required
                        />
                        {errors.minInvestment && <div className="text-danger">{errors.minInvestment}</div>}
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ marginLeft: "75px" }}>Submit Investment</button>
                </form>
            </div>
        </div>
    );
};

export default AddInvestment;
