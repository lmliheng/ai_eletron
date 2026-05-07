import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();

// 单轮对话
// 构造 client
const client = new OpenAI({
    apiKey: process.env['HUNYUAN_API_KEY'], // 混元 APIKey
    baseURL: "https://api.hunyuan.cloud.tencent.com/v1", // 混元 endpoint
});
// commonjs 不让使用await
const completion = await client.chat.completions.create({
    model: "hunyuan-turbos-latest",
    messages: [
        {
            role: "user",
            content: "你是一个专业的翻译，帮我翻译：妈了个巴子",
        },
    ],
    enable_enhancement: true, // <- 自定义参数
});

console.log(completion.choices[0].message.content)
