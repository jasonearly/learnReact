const stripe = require('stripe')('sk_test_HB6rqYCi6mv3LThg10nXzo2Z')

exports.handler = async function (event) {
    const {
        tokenId,
        email,
        name,
        description,
        amount
    } = JSON.parse(event.body)

    const customer = await stripe.customers.create({
        description: email,
        source: tokenId
    })

    await stripe.charges.create({
        customer: customer.id,
        amount,
        name,
        description,
        currency: 'usd'
    })
}

// exports.handler = function () {
//     console.log('working...')
// }
