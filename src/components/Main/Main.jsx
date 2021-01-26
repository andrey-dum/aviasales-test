import React from 'react'
import Tickets from '../Tickets/Tickets'

export default function Main({tickets}) {
    return (
        <div className="main">
            <Tickets tickets={tickets} />
        </div>
    )
}
