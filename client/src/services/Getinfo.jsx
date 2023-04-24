import axios from "axios"

const Getinfo= {   
    async getCardio(){  
        const result = await axios.get (process.env.REACT_APP_API_URL+"/cardio")
        return result.data    
    },   

    async getBodyCombat(){  
        const result = await axios.get (process.env.REACT_APP_API_URL+"/bodyCombat")
        return result.data    
    },   

    async getMeditacion(){  
        const result = await axios.get (process.env.REACT_APP_API_URL+"/meditacion")
        return result.data    
    },   

    async getPilates(){  
        const result = await axios.get (process.env.REACT_APP_API_URL+"/pilates")
        return result.data    
    },   

    async getYoga(){  
        const result = await axios.get (process.env.REACT_APP_API_URL+"/yoga")
        return result.data    
    },   

    async getResistencia(){  
        const result = await axios.get (process.env.REACT_APP_API_URL+"/resistencia")
        return result.data    
    },   
}

export default Getinfo;