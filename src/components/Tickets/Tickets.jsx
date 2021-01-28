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
                        {ticket.price}
                    </div>
                    <div className="ticketLogo">
                        <img src={ticket.carrier} alt=""/>
                        {/* <img src={`//pics.avs.io/99/36/${ticket.carrier}.png`} alt=""/> */}
                    </div>
                </div>
                {ticket.segments.map(segment => (
                    <div className="ticketData" key={`${segment.date}-${segment.destination}`}>
                      <div className="ticketData__item">
                          <p className="ticketData__item__grey">
                          {/* {segment.origin} - {segment.destination} */}
                          {segment.out}
                          </p>
                          <p>{segment.outTime}</p>   
                      </div>
                      <div className="ticketData__item">
                          <p className="ticketData__item__grey">
                              В пути
                          </p>
                        <p>{ segment.timeInTrack }</p>   
                        {/* <p>{ `${Math.ceil(segment.duration / 60)}ч ${segment.duration % 60}м` }</p>    */}
                      </div>
                      <div className="ticketData__item">
                          <p className="ticketData__item__grey">
                             { segment.stops.length === 0 ? 'Без пересадок' : `Пересадки - ${segment.stops.length}` }
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
