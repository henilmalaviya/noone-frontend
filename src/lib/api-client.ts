import createClient from 'openapi-fetch';
import type { paths } from './api-types';

// Ensure the environment variable is defined
const backendOrigin = import.meta.env.VITE_BACKEND_ORIGIN;
if (!backendOrigin) {
	throw new Error('VITE_BACKEND_ORIGIN environment variable is not defined');
}

// Create a type-safe fetch client
const apiClient = createClient<paths>({
	baseUrl: backendOrigin // Use the environment variable
});

export default apiClient;
