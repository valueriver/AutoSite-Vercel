import fetch from 'node-fetch';

const API_KEY = 'YOUR_API_KEY'; // 替换为你的OpenWeatherMap API密钥

export default async (req, res) => {
    const { city } = req.query;

    if (!city) {
        return res.status(400).json({ error: 'City is required' });
    }

    try {
        const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const weatherData = await weatherResponse.json();

        if (weatherData.cod !== 200) {
            return res.status(weatherData.cod).json({ error: weatherData.message });
        }

        res.status(200).json(weatherData);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch weather data' });
    }
};