function sortedTickets(input, sortingCriteria){
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let result = [];
    for (let data of input){
        data = data.split('|');
        result.push(new Ticket(data[0], Number(data[1]), data[2]));
    }

    switch(sortingCriteria){
        case 'destination': result.sort((a, b) => a.destination.localeCompare(b.destination)); break;
        case 'price': result.sort((a, b) => a.price - b.price); break;
        case 'status': result.sort((a, b) => a.status.localeCompare(b.status)); break;
    }

    return result;
}

sortedTickets(
    ['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination');