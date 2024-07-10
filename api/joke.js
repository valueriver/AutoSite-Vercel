export default async (req, res) => {
    const jokes = [
        "Why don't scientists trust atoms? Because they make up everything!",
        "Why did the scarecrow win an award? Because he was outstanding in his field!",
        "Why don't skeletons fight each other? They don't have the guts."
    ];
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    res.status(200).json({ joke: randomJoke });
};