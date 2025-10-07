import 'dotenv/config'
import app from './server'
import sequelize from './config/db'
import { error } from 'console'

const port = process.env.PORT || 4000

sequelize.sync().then( result => {
    console.log(result)
    
    // Start app
    app.listen( port, () => {
        console.log(`Running app in port ${port}...`)
    })
})
.catch(error => {
    console.error(error)
})

