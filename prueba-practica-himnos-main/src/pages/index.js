import pageStyles from "../styles/index.Table.module.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("spa");

  // Traducciones para múltiples idiomas
  const translations = {
    spa: {
      pageTitle: "Prueba práctica de himnos",
      language: "Idioma",
      hymnPlayback: "Reproducción de himnos",
      autoSync: "Auto-sync:",
      tableHeaders: {
        number: "Numero",
        name: "Nombre",
        withVoice: "Con voz",
        controls: "Controles"
      },
      selectOptions: {
        selectHymn: "Seleccione un himno de la lista",
        firstHymn: "Primer himno de la lista",
        secondHymn: "Segundo himno de la lista",
        thirdHymn: "Tercer himno de la lista",
        fourthHymn: "Cuarto himno de la lista",
        fifthHymn: "Quinto himno de la lista"
      },
      languageOptions: {
        spanish: "Español",
        english: "Inglés",
        portuguese: "Portugués"
      }
    },
    eng: {
      pageTitle: "Hymns Practice Test",
      language: "Language",
      hymnPlayback: "Hymn Playback",
      autoSync: "Auto-sync:",
      tableHeaders: {
        number: "Number",
        name: "Name",
        withVoice: "With Voice",
        controls: "Controls"
      },
      selectOptions: {
        selectHymn: "Select a hymn from the list",
        firstHymn: "First hymn from the list",
        secondHymn: "Second hymn from the list",
        thirdHymn: "Third hymn from the list",
        fourthHymn: "Fourth hymn from the list",
        fifthHymn: "Fifth hymn from the list"
      },
      languageOptions: {
        spanish: "Spanish",
        english: "English",
        portuguese: "Portuguese"
      }
    },
    por: {
      pageTitle: "Teste Prático de Hinos",
      language: "Idioma",
      hymnPlayback: "Reprodução de hinos",
      autoSync: "Sincronização automática:",
      tableHeaders: {
        number: "Número",
        name: "Nome",
        withVoice: "Com voz",
        controls: "Controles"
      },
      selectOptions: {
        selectHymn: "Selecione um hino da lista",
        firstHymn: "Primeiro hino da lista",
        secondHymn: "Segundo hino da lista",
        thirdHymn: "Terceiro hino da lista",
        fourthHymn: "Quarto hino da lista",
        fifthHymn: "Quinto hino da lista"
      },
      languageOptions: {
        spanish: "Espanhol",
        english: "Inglês",
        portuguese: "Português"
      }
    }
  };

  const currentTranslation = translations[selectedLanguage];

  // Número máximo de himnos disponibles en la lista
  const maxHymnNumber = 5;

  useEffect(() => {
    setData([{}, {}, {}, {}]);
  }, []);
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1 style={{ padding: "20px" }}>{currentTranslation.pageTitle}</h1>
        <div style={{ position: "relative" }}>
          <button
            style={{
              margin: "10px",
              backgroundColor: "unset",
              border: "unset",
              height: "40px",
            }}
            onClick={() => {
              setOpenDialog(!openDialog);
            }}
          >
            ...
          </button>
          <dialog
            open={openDialog}
            style={{
              position: "absolute",
              top: "50px",
              left: "-100px",
              width: "120px",
              padding: "10px",
              border: "1px solid",
            }}
          >
            <label>{currentTranslation.autoSync}</label>
            {"  "}
            <input type="checkbox" />
          </dialog>
        </div>
      </div>
      <p style={{ padding: "10px" }}>
        {currentTranslation.language}
        <select 
          value={selectedLanguage}
          onChange={(e) => {
            console.log("Cambiaste el idioma: ", e.target.value);
            setSelectedLanguage(e.target.value);
          }}
        >
          <option value="spa">{currentTranslation.languageOptions.spanish}</option>
          <option value="eng">{currentTranslation.languageOptions.english}</option>
          <option value="por">{currentTranslation.languageOptions.portuguese}</option>
        </select>
      </p>
      <br />
      <p style={{ padding: "10px" }}>{currentTranslation.hymnPlayback}</p>
      <div className={pageStyles.tableContainer}>
        <table className={pageStyles.hymnsTable}>
        <thead>
          <tr>
            <th>{currentTranslation.tableHeaders.number}</th>
            <th>{currentTranslation.tableHeaders.name}</th>
            <th>{currentTranslation.tableHeaders.withVoice}</th>
            <th>{currentTranslation.tableHeaders.controls}</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <tr key={i}>
              <td>
                <input
                  type="number"
                  className={pageStyles.numberInput}
                  min="1"
                  max={maxHymnNumber}
                  value={d.hymnNumber || ""}
                  onChange={(e) => {
                    const inputValue = parseInt(e.target.value);
                    // Validar que el número no sea superior al máximo de himnos disponibles
                    if (e.target.value === "" || (inputValue >= 1 && inputValue <= maxHymnNumber)) {
                      setData((p) =>
                        p.map((r, x) => ({
                          ...r,
                          hymnNumber: x == i ? e?.target?.value : r.hymnNumber,
                        })),
                      );
                    }
                  }}
                />
              </td>
              <td>
                <select
                  className={pageStyles.selectInput}
                  value={d.hymnNumber || ""}
                  onChange={(e) => {
                    setData((p) =>
                      p.map((r, x) => ({
                        ...r,
                        hymnNumber: x == i ? e?.target?.value : r.hymnNumber,
                      })),
                    );
                  }}
                >
                  <option value="">{currentTranslation.selectOptions.selectHymn}</option>
                  <option value="1">{currentTranslation.selectOptions.firstHymn}</option>
                  <option value="2">{currentTranslation.selectOptions.secondHymn}</option>
                  <option value="3">{currentTranslation.selectOptions.thirdHymn}</option>
                  <option value="4">{currentTranslation.selectOptions.fourthHymn}</option>
                  <option value="5">{currentTranslation.selectOptions.fifthHymn}</option>
                </select>
              </td>
              <td style={{ textAlign: "center" }}>
                <input type="checkbox" />
              </td>
              <td>
                <div className={pageStyles.controlsContainer}>
                  {d.hymnNumber > "0" ? (
                    <audio controls className={pageStyles.audioPlayer} />
                  ) : (
                    <div className={pageStyles.audioPlayer}></div>
                  )}
                  <button
                    type="button"
                    className={pageStyles.deleteButton}
                    onClick={() => {
                      const newData = [];
                      data.forEach((y, x) => {
                        if (x !== i) newData.push(y);
                      });
                      setData(newData);
                    }}
                  >
                    ×
                  </button>
                </div>
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan="4">
              <div
                style={{
                  display: "grid",
                  justifyContent: "end",
                  padding: "10px 20px",
                }}
              >
                <button
                  type="button"
                  className={pageStyles.addButton}
                  onClick={() => {
                    setData([...data, {}]);
                  }}
                >
                  +
                </button>
              </div>
            </td>
          </tr>
        </tbody>
        </table>
      </div>
    </div>
  );
}
