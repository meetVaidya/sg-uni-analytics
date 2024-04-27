// pages/api/predict.ts
import axios, { AxiosResponse } from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

interface PredictRequest {
    university: string;
    school: string;
    degree: string;
}

interface PredictResponse {
    employment_rate: number;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<PredictResponse | { error: string }>
) {
    if (req.method === 'POST') {
        try {
            const { university, school, degree } = req.body as PredictRequest;

            // Send the POST request to your Flask server
            const response: AxiosResponse<{ employment_rate: number }> =
                await axios.post(
                    'http://localhost:8080/api/predict', // Update the URL here
                    {
                        university,
                        school,
                        degree,
                    }
                );

            // Return the predicted employment rate from the Flask server
            res.status(200).json({
                employment_rate: response.data.employment_rate,
            });
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ error: 'An error occurred' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
