import React, { useState, useEffect } from 'react';
import './FetchComponent.css';

export default function FetchData(props) {
    const [apiData, setApiData] = useState(null);
    async function getCategory() {
        const fetchHeaders = new Headers();
        fetchHeaders.append('Accept', 'application/json');
        try {
            const request = await fetch('https://api.mediehuset.net/mediesuset/', { headers: fetchHeaders });
            const response = await request.json();
            console.log(response);
            setApiData(response);
        } catch (error) {
            console.log('getCategory -> Error', error);
        }
    }
    useEffect(() => {
        getCategory()
    }, [])
    return (
        <div>
            <section className="fetchclass">
                {
                    apiData && apiData.news.items.slice(0, 6).map((item, i) =>
                        <div key={i}>
                            <img src={item.image} />
                            <div className="grey-box">
                                <h3 className="api-h3">{item.title.toUpperCase()}</h3>
                                <p className="api-p">{item.teaser.slice(0, 150)}</p>
                                <button className="front-button">Læs Mere</button>
                            </div>
                            <br />
                        </div>
                    )
                }
            </section>
        </div>
    )
}