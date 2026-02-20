export default function handler(req, res) {
  // 读取你在 Vercel 设置的那个 LIVE_TUNNEL 变量
  const tunnel = process.env.LIVE_TUNNEL || "https://init.com";

  // 开启跨域权限，确保 ENS 页面能正常访问
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json({ url: tunnel });
}
