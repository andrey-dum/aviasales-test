import React from 'react'

export default function Tickets({tickets}) {
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

            {tickets.map((ticket) => (
            
            <div className="ticket" key={`${ticket.price}_${ticket.duration}`}>
                <div className="ticketHeader">
                    <div className="ticketPrice">
                        {ticket.price} Р
                    </div>
                    <div className="ticketLogo">
                        <img src={`//pics.avs.io/99/36/${ticket.carrier}.png`} alt=""/>
                        {/* <img src="https://logopond.com/logos/cfe0510f7a2888be7ea56da181e90d4a.png" alt=""/> */}
                    </div>
                </div>
                {ticket.segments.map(segment => (
                    <div className="ticketData" key={`${segment.date}-${segment.destination}`}>
                      <div className="ticketData__item">
                          <p className="ticketData__item__grey">
                          {segment.origin} - {segment.destination}
                          </p>
                          <p>
                            { new Date(segment.date).getHours() + 
                            ":" +
                                new Date(segment.date).getMinutes() +
                                " - " +
                               new Date(
                                new Date(segment.date).setHours(
                                    new Date().getHours() + Math.ceil(segment.duration / 60)
                                )
                               ).getHours() + 
                               ":" +
                               new Date(
                                new Date(segment.date).setMinutes(new Date(segment.date).getMinutes() + segment.duration)
                               ).getMinutes()
                            }
                              {/* {segment.date} */}
                              
                              </p>   
                      
                      </div>
                      <div className="ticketData__item">
                          <p className="ticketData__item__grey">
                              В пути
                          </p>
                        <p>{ `${Math.ceil(segment.duration / 60)} : ${segment.duration % 60}` }</p>   
                      </div>
                      <div className="ticketData__item">
                          <p className="ticketData__item__grey">
                             { segment.stops.length === 0 ? 'Без пересадок' : `Пересадок ${segment.stops.length}` }
                          </p>
                            <p>{ segment.stops.join(', ') }</p>   
                      </div>
                    </div> 
                   ))}

            </div>
            ))}
            
        </div>
    )
}
