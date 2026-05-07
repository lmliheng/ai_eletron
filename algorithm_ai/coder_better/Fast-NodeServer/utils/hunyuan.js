const OpenAI = require("openai");
const dotenv = require("dotenv");

dotenv.config();

// 单轮对话（CommonJS）
const hunyuan_openai_singlechat = async (prompt, model, api_key) => {
    // 构造 client
    const client = new OpenAI({
        apiKey: api_key,          // 混元 APIKey
        baseURL: "https://api.hunyuan.cloud.tencent.com/v1", // 混元 endpoint
    });
   const my_content = "我给你发一段代码，如果不是代码，就直接返回'不是代码'，如果是代码，就对这个算法进行分析，复杂度分析，运行案例，优化思路，并给我评分，0颗星到5颗星之间"
    
    const completion = await client.chat.completions.create({
        model: model,
        messages: [
            {
                role: "user",
                content: my_content + prompt,
            },
        ],
        enable_enhancement: true, // 混元自定义参数
    });

    return completion.choices[0].message.content;
};

// ✅ CommonJS 导出方式
module.exports = {
    hunyuan_openai_singlechat,
};