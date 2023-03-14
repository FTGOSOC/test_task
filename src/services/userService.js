import axios from 'axios';

export const getUsers = async () => {
    const {data} = await axios.get('https://60de1565878c890017fa2d5f.mockapi.io/api/v1/users')
    return data.map(item => ({
        value: item.id,
        content: item.name
    }))
}