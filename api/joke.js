export default async (req, res) => {
  try {
    const jokes = [
      "为什么程序员喜欢用黑色的背景？因为他们不想看到bug。",
      "程序员的女朋友生气了，他会怎么哄？重启一下。",
      "为什么程序员总是分不清圣诞节和万圣节？因为 Oct 31 == Dec 25。",
      "程序员最讨厌什么？文档。",
      "为什么程序员喜欢喝咖啡？因为他们需要 Java。"
    ];
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    
    res.status(200).json({
      joke: randomJoke
    });
  } catch (error) {
    res.status(500).json({ error: "处理请求时出错。" });
  }
};
