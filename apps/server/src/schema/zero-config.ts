import { drizzleZeroConfig } from 'drizzle-zero'
import * as drizzleSchema from './drizzle'

export default drizzleZeroConfig(drizzleSchema,{
    tables: {
        tableOne: {
            id: true,
            options: true,  
        },
        tableTwo: {
            id: true,
            options: true,
        },
        tableThree: {
            id: true,
            options: true,
        },
        tableFour: {
            id: true,
            options: true,
        },
        tableFive: {
            id: true,
            options: true,
        },
    },
})
