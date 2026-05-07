import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();

// 单轮对话
const hunyuan_openai_singlechat = async (prompt, model, api_key) => {
    // 构造 client
    const client = new OpenAI({
        apiKey: api_key, // 混元 APIKey
        baseURL: "https://api.hunyuan.cloud.tencent.com/v1", // 混元 endpoint
    });
    // commonjs 不让使用await
    const completion = await client.chat.completions.create({
        model: model,
        messages: [
            {
                role: "user",
                content: prompt,
            },
        ],
        enable_enhancement: true, // <- 自定义参数
    });

    return completion.choices[0].message.content;
}

// console.log(await hunyuan_openai_singlechat("你是一个专业的翻译，帮我翻译：妈了个巴子","hunyuan-turbos-latest",process.env['HUNYUAN_API_KEY']))

// 多轮对话
const hunyuan_openai_multichat = async (prompts, model, api_key) => {
    const client = new OpenAI({
        apiKey: api_key, // 混元 APIKey
        baseURL: "https://api.hunyuan.cloud.tencent.com/v1", // 混元 endpoint
    });    
    const completion = await client.chat.completions.create({
        model: model,
        messages: prompts,
        enable_enhancement: true, // <- 自定义参数
    });
    return completion.choices.map((item) => item.message.content);
}

// 图生文
const hunyuan_openai_image = async (prompts, model, api_key, image_url) => {
    const client = new OpenAI({
        apiKey: api_key, // 混元 APIKey
        baseURL: "https://api.hunyuan.cloud.tencent.com/v1", // 混元 endpoint
    });    
    const completion = await client.chat.completions.create({
        model: model,
       
        // enable_enhancement: true,
            messages: [
        {
            role: 'user',
            content: [
                {
                    "type": "text",
                    "text": prompts
                },
                {
                    "type": "image_url",
                    "image_url": {
                        "url": image_url
                        //"url": "data:image/jpeg;base64,xxxxxxx"
                    }
                }
            ]
        }
    ],
        
    });
    return completion.choices.map((item) => item.message.content);
}

export {
    hunyuan_openai_singlechat,
    hunyuan_openai_multichat,
    hunyuan_openai_image,
}
