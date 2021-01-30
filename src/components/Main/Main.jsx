import React from 'react'
import Tickets from '../Tickets/Tickets'

export default function Main({tickets, filter}) {
    return (
        <div className="main">
            <Tickets tickets={tickets} filter={filter} />
        </div>
    )
}
