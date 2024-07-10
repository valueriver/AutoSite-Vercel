export default async (req, res) => {
    const { city } = req.query;

    if (!city) {
        return res.status(400).json({ error: 'City is required' });
    }

    try {
        // 获取天气信息
        const weatherResponse = await fetch(`https://wttr.in/${city}?format=j1`);
        const weatherData = await weatherResponse.json();

        if (!weatherData || weatherData.error) {
            return res.status(404).json({ error: 'City not found' });
        }

        res.status(200).json(weatherData);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch weather data' });
    }
};