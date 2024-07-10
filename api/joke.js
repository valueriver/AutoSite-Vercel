export default async (req, res) => {
    const jokes = [
        "为什么科学家不相信原子？因为它们组成了一切！",
        "为什么稻草人会得奖？因为他在田里表现出色！",
        "为什么骷髅不互相打架？因为他们没有胆量。"
    ];
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    res.status(200).json({ joke: randomJoke });
};