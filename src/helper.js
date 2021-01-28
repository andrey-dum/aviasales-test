export function ticketNormalize(arrayTickets) {
    return arrayTickets.map(ticket => {
      
       return {
        ...ticket,
        price: priceNormalize(ticket.price),
        carrier: `//pics.avs.io/99/36/${ticket.carrier}.png`,
        segments: outIn(ticket.segments)
       }
    })

}


export function priceNormalize(price) {
    return price.toString().split('')
        .reverse()
        .reduce((agrigation, char, i) => {
        if(i % 3 === 0) {
            return agrigation + ' ' + char;
        }
        return agrigation + char
        }, "Р ")
            .split('')
            .reverse()
            .join('')
    }

export function timeOutIn(date, time) {
    const dateOut = new Date(date)
    const outHours = dateOut.getHours()
    const outMinutes = dateOut.getMinutes()

    const inHours =  new Date(
        dateOut.setHours(
            new Date().getHours() + Math.ceil(time / 60)
        )).getHours()

    const inMinutes =  new Date(
        dateOut.setMinutes(dateOut.getMinutes() + time)
    ).getMinutes()

    return `${outHours}:${outMinutes} - ${inHours}:${inMinutes}`
}

function outIn(arrayOutIn) {
    return arrayOutIn.map((segment) => {
        return {
            ...segment,
            out: `${segment.origin} - ${segment.destination}`,
            outTime: timeOutIn(segment.date, segment.duration),
            timeInTrack: timeInTrack(segment.duration),
            // stops: '',
            // stopC: ''
        }
    })
}


function timeInTrack(duration) {
    return `${Math.ceil(duration / 60)}ч ${duration % 60}м`
}