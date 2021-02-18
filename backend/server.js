const express  = require ('express');
const connectDB = require('./config/db')
const dotenv = require('dotenv')
const productRoutes = require('./routes/productRoutes')
const userRoutes = require('./routes/userRoutes')
const orderRoutes = require('./routes/orderRoutes')
const notFound = require('./middlerware/errorHandler')
const errorHandler = require('./middlerware/errorHandler')

dotenv.config()
connectDB()

const app = express()

app.use(express.json())

app.get('/', (req,res) => {
    res.send('Api is running')
})

app.use('/api/products',productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)

app.use(notFound)
app.use(errorHandler)

app.listen(5000, console.log('Server running on port 5000'))