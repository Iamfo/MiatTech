import { useState, useEffect } from "react";

function useFetch() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(ture);
    const [error, setError] = useState(null);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await fetch(API_URL, { method: 'get' });
                if (!response.ok) {
                    throw new error("Error during fetchData");
                }

                const result = await response.json();

                setData(result);
                setError(null);
            } catch (error) {
                setError(error.message);
                setData(null);
            } finally {
                setLoading(false)
            }
        };

        fetchData();
    }, [url]);

    return (

        { data, loading, error }

    )
}
export default useFetch;