import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method Not Allowed' });
      }
    
    const { city } = req.query;

    const apiKey = 'Yck2MYakN8t6Eu49qjbIbBodiASLiw2d2';

    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    const data = response.data;
    res.status(200).json(data);
    console.log(data)

}
