import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

const EmailList = () => {
    const [emails, setEmails] = useState([]);  // State to store the emails
    const [loading, setLoading] = useState(true);  // State for loading status
    const [error, setError] = useState(null);  // State for any errors

    useEffect(() => {
        const url = import.meta.env.VITE_BASE_URL
        const fetchEmails = async () => {
            try {
                const response = await fetch(`${url}/api/newsletter/get`);
                if (!response.ok) {
                    throw new Error('Failed to fetch emails');
                }
                const data = await response.json();
                setEmails(data);  // Set the emails in state
            } catch (error) {
                setError(error.message);  // Set the error message if something goes wrong
            } finally {
                setLoading(false);  // Set loading to false once the data is fetched or an error occurs
            }
        };

        fetchEmails();
    }, []);  // Empty dependency array to run the effect only once when the component mounts

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <Navbar />
            <div className="container mt-5">
                <h2 className="mb-4">Email List</h2>
                <ul className="list-group">
                    {emails.map((emailItem) => (
                        <li key={emailItem._id} className="list-group-item">
                            {emailItem.email}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default EmailList;
