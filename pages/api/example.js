export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({ 
      success: true,
      data: {
        message: 'API response from Next.js',
        timestamp: new Date().toISOString()
      }
    })
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).json({ message: `Method ${req.method} not allowed` })
  }
}