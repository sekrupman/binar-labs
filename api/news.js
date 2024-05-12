const fetchNewsSources = async () => {
  try {
    const link = await fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=7d5ab73b28504971ae8c7f7d7f5da55e');
    const data = await link.json();
    return data.articles || [];
  } catch (error) {
    console.error('Error fetching data:', error.message);
    return [];
  }
};

export default fetchNewsSources;
