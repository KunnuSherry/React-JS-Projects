const mongoose = require('mongoose')

mongoose.connect(
    'mongodb+srv://kunal:1234@cluster0.x8pvpl3.mongodb.net/'
).then(()=>console.log(`MongoDB Connected !`)).catch(()=>console.log('Error Occured!'))