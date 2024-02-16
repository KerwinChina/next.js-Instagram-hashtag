// src/pages/api/channel/[channelId]/posts.js
import axios from 'axios';

export default async function handler(req, res) {
  const { channelId, page = 1, limit = 6 } = req.query;

  try {

    const apiUrl = `http://74.120.174.141:3008/api/items?channel=${channelId}&page=${page}&limit=${limit}`;
    const response = await axios.get(apiUrl);


    res.status(200).json(response.data);
  } catch (error) {
    // 错误处理
    res.status(error.response?.status || 500).json({ message: error.message });
  }
}
