// 图生文
import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();
// import fs from 'fs';
// const data = fs.readFileSync('1.jpeg');
// const encodedImage = data.toString('base64');
// const base64Image = `data:image/jpeg;base64,${encodedImage}`;
// console.log(base64Image);


// 构造 client
const client = new OpenAI({
    apiKey: process.env['HUNYUAN_API_KEY'], // 混元 APIKey
    baseURL: "https://api.hunyuan.cloud.tencent.com/v1", // 混元 endpoint
});

const completion = await client.chat.completions.create({
    model: "hunyuan-vision",

    messages: [
        {
            role: 'user',
            content: [
                {
                    "type": "text",
                    "text": "What's in this image?"
                },
                {
                    "type": "image_url",
                    "image_url": {
                        "url": "https://qcloudimg.tencent-cloud.cn/raw/42c198dbc0b57ae490e57f89aa01ec23.png"
                        //"url": "data:image/jpeg;base64,xxxxxxx"
                    }
                }
            ]
        }
    ],
});
console.log(completion.choices[0].message.content);