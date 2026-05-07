import { hunyuan_openai_singlechat, hunyuan_openai_multichat, hunyuan_openai_image } from "./index.js";

// 测试
// const res= await hunyuan_openai_singlechat("说！你是谁","hunyuan-turbos-latest",process.env['HUNYUAN_API_KEY']);
const res = await hunyuan_openai_image("这是什么图片", "hunyuan-turbos-latest", process.env['HUNYUAN_API_KEY'], "https://qcloudimg.tencent-cloud.cn/raw/42c198dbc0b57ae490e57f89aa01ec23.png")


console.log(res);