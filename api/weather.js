import fetch from 'node-fetch';

export default async (req, res) => {
    const { city } = req.query;

    if (!city) {
        return res.status(400).json({ error: 'City is required' });
    }

    try {
        // 获取城市的woeid
        const locationResponse = await fetch(`https://www.metaweather.com/api/location/search/?query=${city}`);
        const locationData = await locationResponse.json();

        if (locationData.length === 0) {
            return res.status(404).json({ error: 'City not found' });
        }

        const woeid = locationData[0].woeid;

        // 获取天气信息
        const weatherResponse = await fetch(`https://www.metaweather.com/api/location/${woeid}/`);
        const weatherData = await weatherResponse.json();

        res.status(200).json(weatherData);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch weather data' });
    }
};