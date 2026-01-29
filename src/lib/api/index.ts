// API Configuration
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"; // Backend URL

// Basic API Client function with authentication support
export const apiClient = {
    get: async (endpoint: string, token?: string | null) => {
        const headers: HeadersInit = {};

        if (token) {
            headers["Authorization"] = `Bearer ${token}`;
        }

        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            headers,
        });

        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }

        return response.json();
    },

    post: async (endpoint: string, data: unknown, token?: string | null) => {
        const headers: HeadersInit = {
            "Content-Type": "application/json",
        };

        if (token) {
            headers["Authorization"] = `Bearer ${token}`;
        }

        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            method: "POST",
            headers,
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }

        return response.json();
    },

    delete: async (endpoint: string, token?: string | null) => {
        const headers: HeadersInit = {};

        if (token) {
            headers["Authorization"] = `Bearer ${token}`;
        }

        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            headers,
            method: "DELETE",
        });

        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }

        return response.json();
    },

    put: async (endpoint: string, data: unknown, token?: string | null) => {
        const headers: HeadersInit = {
            "Content-Type": "application/json",
        };

        if (token) {
            headers["Authorization"] = `Bearer ${token}`;
        }

        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            method: "PUT",
            headers,
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }

        return response.json();
    },
    uploadToS3: async (url: string, file: File) => {
        // Note: We don't set Content-Type header here because the presigned URL
        // is generated without ContentType in the signature. The browser will
        // set an appropriate Content-Type automatically based on the file.
        const response = await fetch(url, {
            method: "PUT",
            body: file,
        });
        if (!response.ok) {
            throw new Error(`S3 Upload Error: ${response.status}`);
        }
        return response; // S3 doesn't return JSON
    },
};
