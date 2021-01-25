import React from 'react'

export default function Tickets() {
    return (
        <div className="tickets">

            <div className="filterPrice">
                <div className="filterElement filterLow__price">
                    Самый дешевый
                </div>
                <div className="filterElement filterFaster">
                    Самый быстрый
                </div>    
            </div>

            <div className="ticket">
                <div className="ticketHeader">
                    <div className="ticketPrice">
                        13 400 Р
                    </div>
                    <div className="ticketLogo">
                        <img src="https://logopond.com/logos/cfe0510f7a2888be7ea56da181e90d4a.png" alt=""/>
                    </div>
                </div>

                <div className="ticketData">
                   
                    <div className="ticketData__item">
                        <p className="ticketData__item__grey">
                            MOW - HKT
                        </p>
                        <p>10:45 - 08:00</p>   
                    </div>
                    <div className="ticketData__item">
                        <p className="ticketData__item__grey">
                            MOW - HKT
                        </p>
                        <p>10:45 - 08:00</p>   
                    </div>
                    <div className="ticketData__item">
                        <p className="ticketData__item__grey">
                            MOW - HKT
                        </p>
                        <p>10:45 - 08:00</p>   
                    </div>
                </div>
                <div className="ticketData">
                    <div className="ticketData__item">
                        <p className="ticketData__item__grey">
                            MOW - HKT
                        </p>
                        <p>10:45 - 08:00</p>   
                    </div>
                    <div className="ticketData__item">
                        <p className="ticketData__item__grey">
                            MOW - HKT
                        </p>
                        <p>10:45 - 08:00</p>   
                    </div>
                    <div className="ticketData__item">
                        <p className="ticketData__item__grey">
                            MOW - HKT
                        </p>
                        <p>10:45 - 08:00</p>   
                    </div>
                </div>

            </div>
            
        </div>
    )
}
