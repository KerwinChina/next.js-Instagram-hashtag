// src/pages/api/channel/[channelId].js
import axios from 'axios';
import fetch from 'node-fetch';
export default async function handler(req, res) {
  const { channelId } = req.query;
  console.info("handler channel-info")
  try {

    // const apiUrl = `https://case.tinytimesoft.com/api/channel-info?channel=${channelId}`;
    const apiUrl = `http://74.120.174.141:3008/api/channel-info?channel=${channelId}`;
    console.info(apiUrl)
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.info(data)
    res.status(200).json(data);
  } catch (error) {
    // 错误处理
    console.error("Error making API request:", error);
    res.status(error.response?.status || 500).json({ message: error.message });
  }
}
