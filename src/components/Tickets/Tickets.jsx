import React from 'react'

export default function Tickets({tickets, filter}) {
    const [sort, setSort] = React.useState('price');

    // const [filter, setFilter] = React.useState({});
    // const handleChange = (e) => {
    //     setFilter({
    //         ...filter,
    //         [e.target.name]: e.target.checked
    //     })

    //     // if(filter.all) {
    //     //     Object.keys(filter).map(key => setFilter({key: true}))
    //     // }
    // }

    const sortFn = {
        price: (a, b) => a.price.localeCompare(b.price),
        // price: (a, b) => a.price - b.price,
        faster: (a, b) => a.segments[0].duration - b.segments[0].duration
    }

    const handleSort = React.useCallback(
        (sortBy) => {
           if(sortBy === 'price') {
               setSort('price')
            return
           } else if(sortBy === 'faster') {
            setSort('faster')
           }
        },
        
        [],
    )


    // const getTicketsByFilter = {
    //     'all': tickets => tickets,
    //     'one': tickets => tickets.filter(tickets => tickets.segments[0].stops.length === 1),
    // };

    const filtered = tickets.filter(ticket => {
        if(filter.all) {
            return ticket
        }
        if(filter.without && ticket.segments[0].stops.length === 0) {
            return ticket
        }
        if(filter.one && ticket.segments[0].stops.length === 1) {
            return ticket
        }
        // return ticket
    })

   

    // const filterdTikets = filter
    //     ? getTodosByList(match.params.listId, state.todos)
    // //     : getTodosByFilter[path](state.todos);
    // const filterdTickets = filter
    //     ? getTicketsByFilter[filter](tickets)
    //     : tickets

    const sortedTickets = tickets && filtered.slice().sort(sortFn[sort])
   
  
    return (
        <div className="tickets">

            <div className="filterPrice">
                <div 
                    className={`${sort === 'price' ? 'active' : ''} filterElement filterLow__price`}
                    onClick={() => handleSort('price')}>
                    Самый дешевый
                </div>
                <div 
                    className={`${sort === 'faster' ? 'active' : ''} filterElement filterFaster`} 
                    onClick={() => handleSort('faster')}>
                    Самый быстрый
                </div>    
            </div>

            {sortedTickets.map((ticket) => (
            
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
