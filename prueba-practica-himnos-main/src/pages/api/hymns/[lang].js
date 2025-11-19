// API endpoint con bugs intencionados
export default async function handler(req, res) {
  if (req.method !== "GET") {
    console.log("Error 405, Method not allowed");
    // Bug 1: No regresa un resultado
    return;
  }

  const { lang } = req.query;

  // Bug 2: No valida el idioma
  // Bug 3: No importa la función correctamente
  // Bug 4: No maneja errores

  try {
    const getHymnsByLang = require("getHymns"); // Bug: import incorrecto
    const hymns = await getHymnsByLang(lang);

    // Bug 5: No valida si hymns existe
    res.status(200).json(hymns);
  } catch (error) {
    // Bug 6: No retorna estructura de error consistente
    res.status(500);
  }
}
