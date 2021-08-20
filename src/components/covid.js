import React, {useEffect, useState} from 'react'
import './styles.css'; 
//react arrow function component with export
//pascle convention


export const Covid = () => {

    
    const [data, setData] = useState([]);
    const getCovidData = async () => {
        //when we use fetch api it returns a promises
        //promises means in future the data will be rejected or rejected

        try {
            const res = await fetch('https://data.covid19india.org/data.json');
            const actualData = await res.json();
            console.log(actualData.statewise[0]);
            setData(actualData.statewise[0]);
        } catch (err) {
            console.log(err);
        }  
    }
    //use effect hooks
    useEffect(() => {
       getCovidData();
    }, []);

    return (
        <>
            <section>
                <div className="header">
                    {/* <h1>LIVE</h1>    */}
                    <h2>COVID-19 LIVE TRACKER</h2>  
                </div>
                <ul>

                    {/* zeroth */}

                    <li className="card">
                            <div className="card_main">
                                <div className="card_inner">
                                    <p className="card_name"><sup>OUR</sup>COUNTRY</p>
                                    <p className="card_total card_small">INDIA</p>
                                </div>
                            </div>
                    </li>

                    {/* first */}
                    <li className="card">
                            <div className="card_main">
                                <div className="card_inner">
                                    <p className="card_name"><sup>TOTAL</sup>RECOVERED</p>
                                    <p className="card_total card_small">{data.recovered}</p>
                                </div>
                            </div>
                    </li>

                    {/* 2nd */}

                    <li className="card">
                        <div className="card_main">
                            <div className="card_inner">
                                <p className="card_name"><sup>TOTAL</sup>CONFIRMED</p>
                                <p className="card_total card_small">{data.confirmed}</p>
                            </div>
                        </div>
                    </li>

                    {/* 3rd */}

                    <li className="card">
                        <div className="card_main">
                            <div className="card_inner">
                                <p className="card_name"><sup>TOTAL</sup>DEATH</p>
                                <p className="card_total card_small">{data.deaths}</p>
                            </div>
                        </div>
                    </li>

                    {/* 4th */}

                    <li className="card">
                        <div className="card_main">
                            <div className="card_inner">
                                <p className="card_name"><sup>TOTAL</sup>ACTIVE</p>
                                <p className="card_total card_small">{data.active}</p>
                            </div>
                        </div>
                    </li>

                    {/* 5th */}

                    <li className="card">
                        <div className="card_main">
                            <div className="card_inner">
                                <p className="card_name"><sup>LAST</sup>UPDATED</p>
                                <p className="card_total card_small">{data.lastupdatedtime}</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </section>
        </>
    )
}

export default Covid;