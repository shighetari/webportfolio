import axios from 'axios';

// Use Vite's import.meta.env to access environment variables
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL as string;

// This function sends a prompt to the assistant service and returns the response.
// It uses an optional threadId for associating the prompt with a specific conversation thread.
export const sendPromptToAssistant = async (prompt: string, threadId?: string): Promise<any> => {
  try {
    // Construct the endpoint URL using the base URL from the environment variable.
    const endpoint = `${API_BASE_URL}/assistant`;
    
    // Make the POST request to the assistant service with the prompt and optional threadId.
    const response = await axios.post(endpoint, { prompt, threadId });

    // Log the response data for debugging purposes.
    console.log('Response from assistant service:', response.data);

    // Return the response data from the function.
    return response.data;
  } catch (error) {
    // Log the error for debugging purposes.
    console.error('Error sending prompt to assistant service:', error);

    // Rethrow the error to be handled by the caller.
    throw error;
  }
};
