export default async (req, res) => {
  try {
    const currentTime = new Date().toLocaleTimeString();
    
    res.status(200).json({
      message: "Hello from the API!",
      currentTime: currentTime
    });
  } catch (error) {
    res.status(500).json({ error: "An error occurred while processing your request." });
  }
};
