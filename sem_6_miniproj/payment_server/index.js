const express = require("express")
const app = express()
const PORT = process.env.PORT || 5000

const stripe = require("stripe")("sk_test_51LSIAeSEpyehr2icDf72DBnFD0RTPgrhl0apTMl5pqzTixHWvU7AhTuEruPqHZgJytsRPxiup7lwBY0OXaHjmNAN00SxpORtBF");
const uuid = require("uuid").v4;
const cors = require('cors')
app.use(cors())
const bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())
app.post("/checkout", async(req, res) => {
    console.log(req.body)
    let error, status;
    try {
        const { product, token } = req.body
        const customer =  await stripe.customer.create({
            email: token.email,
            source: token.id
        })
        const key = uuid()
        const charge = await stripe.charges.create(
            {
                amount: product.price * 100,
                currency: "usd",
                customer: customer.id,
                receipt_email: token.email,
                description: `Purchased the ${product.name}`,
                shipping: {
                    name: token.card.name,
                    address: {
                        line1: token.card.address_line1,
                        line2: token.card.address_line2,
                        city: token.card.address_city,
                        country: token.card.address_country,
                        postal_code: token.card.address_zip,
                    },
                },
            },
            {
                key,
            }
        );
        console.log("Charge:", { charge });
        status = "success";
    }
    catch (error) {
        console.log(error)
        status = "failure"
    }

    res.json({ error, status });
})

app.listen(PORT, () => {
    console.log("server man")
})

