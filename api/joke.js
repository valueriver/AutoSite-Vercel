export default async (req, res) => {
  try {
    const joke = "为什么程序员喜欢用黑色的背景？因为他们不想看到bug。";
    
    res.status(200).json({
      joke: joke
    });
  } catch (error) {
    res.status(500).json({ error: "处理请求时出错。" });
  }
};
