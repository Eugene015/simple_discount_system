const clientName = 'John'
let clientSpentForAllTime = 110

let discount = 0

if (clientSpentForAllTime >= 100 && clientSpentForAllTime <= 300) {
    discount = 10,
    alert(`You have discount ${discount}%!`)  
}

else if (clientSpentForAllTime > 300 && clientSpentForAllTime <= 500) {
    discount = 20,
    alert(`You have discount ${discount}%!`)
}

else if (clientSpentForAllTime > 500) {
    discount = 30,
    alert(`You have discount ${discount}%!`)
}

else {
    discount = 0 
}

let clientSpentToday = 25

clientSpentForAllTime = clientSpentToday + clientSpentForAllTime
clientSpentToday = clientSpentToday - (clientSpentToday * (discount / 100))

alert(`Thank you, ${clientName}! Now you pay ${clientSpentToday}$. You spent ${clientSpentForAllTime}$ in our restaurant for the whole period of time.`)





