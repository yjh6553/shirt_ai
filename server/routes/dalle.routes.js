import express from 'express';
import * as dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

const router = express.Router();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

router.route('/').get((req, res) => {
    res.status(200).json({ message: "Hello from DALL.E Routes" });
});

router.route('/').post(async (req, res) => {
    const { prompt } = req.body;
    try {
        const response = await openai.images.generate({
            model:"dall-e-3",
            prompt: prompt,
            n: 1,
            size: "1024x1024",
            response_format: "b64_json"
        });
        
        console.log(response.data);
        if(response && response.data && response.data.length > 0){
            const image = response.data[0].b64_json;
            res.status(200).json({ photo : image });
        } else {
            throw new Error("Unexpected response format or no data returned.11")
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message });
    }
});

export default router;