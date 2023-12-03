import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000'; // Your API base URL

export const sendPromptToAssistant = async (prompt: string, threadId?: string): Promise<any> => {
  try {
    const response = await axios.post(`${API_BASE_URL}/assistant`, { prompt, threadId });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
 