// API para manejar la playlist con bugs
let playlistData = {}; // Bug: almacenamiento en memoria, se pierde al reiniciar

export default function handler(req, res) {
  if (req.method === 'GET') {
    // Bug: No valida si existe el sessionId
    const { sessionId } = req.query;
    res.status(200).json(playlistData[sessionId] || { playlist: [{}, {}, {}, {}] });
    
  } else if (req.method === 'POST') {
    const { sessionId, playlist } = req.body;
    
    // Bug: No valida los datos recibidos
    playlistData[sessionId] = playlist;
    
    // Bug: No retorna confirmación
    res.status(200);
    
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}