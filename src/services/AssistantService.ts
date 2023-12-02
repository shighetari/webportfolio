// import axios from 'axios';

// const API_BASE_URL = 'http://localhost:3000';

// export const createNewThread = async () => {
//     try {
//       // Implement the logic to create a new thread and return its ID
//       const response = await axios.post(`${API_BASE_URL}/create-thread`);
//       console.log(response.data)
//       return response.data.threadId;
//     } catch (error) {
//       console.error('Error creating new thread:', error);
//       return null;
//     }
//   };
  

// export const sendMessage = async (message: string, threadId: string) => {
//   await axios.post(`${API_BASE_URL}/send-message`, { message, threadId });
//   console.log(message)
// };

// export const fetchMessages = async (threadId: string) => {
//   const response = await axios.get(`${API_BASE_URL}/fetch-messages`, { params: { threadId } });
//   console.log(response)
//   return response.data;
// };

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
