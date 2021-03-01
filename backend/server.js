const express  = require ('express');
const connectDB = require('./config/db')
const dotenv = require('dotenv')
const productRoutes = require('./routes/productRoutes')
const userRoutes = require('./routes/userRoutes')
const orderRoutes = require('./routes/orderRoutes')
const uploadRoutes = require('./routes/uploadRoutes')
const notFound = require('./middlerware/errorHandler')
const errorHandler = require('./middlerware/errorHandler')
const path = require('path')

dotenv.config()
connectDB()

const app = express()

app.use(express.json())



app.use('/api/products',productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/upload', uploadRoutes)

if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/build')))

    app.get('*', (req, res) => 
    res.sendFile(path.resolve(__dirname, '../frontend/build/index.html'))
    )
} else {
    app.get('/', (req,res) => {
        res.send('Api is running')
    })
}

app.use('/uploads', express.static(path.join(__dirname, '/uploads')))
app.use(notFound)
app.use(errorHandler)

app.listen(process.env.PORT, console.log('Server running on port 5000'))