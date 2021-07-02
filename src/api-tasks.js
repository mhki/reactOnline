import axios from 'axios'

const create = async(task) => {
    try {

        const config = {
            headers:{
                'Accept':'application/json'
            }
        }

        const resp = await axios.post('/api/create',task,config)

        return await resp.json()
    } catch (err) {
        console.log(err)
    }
}


const list = async signal =>{
    try {
        const resp = await fetch('/api/list',{
            method:'GET',
            signal:signal
        })

        return await resp.json()
    } catch (err) {
        console.log(err)
    }
}

export {
    create,list
}