import pageStyles from "../styles/index.Table.module.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  useEffect(() => {
    setData([{}, {}, {}, {}]);
  }, []);
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1 style={{ padding: "20px" }}>Prueba práctica de himnos</h1>
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
            <label>Auto-sync:</label>
            {"  "}
            <input type="checkbox" />
          </dialog>
        </div>
      </div>
      <p style={{ padding: "10px" }}>
        Idioma
        <select onClick={(e)=>{
           console.log("Cambiaste el idioma: ",e.target.hymnNumber)
        }}>
          <option value="spa">Español</option>
          <option value="eng">Ingles</option>
          <option value="por">Portuges</option>
        </select>
      </p>
      <br />
      <p style={{ padding: "10px" }}>Reproducción de himnos</p>
      <table className={pageStyles.hymnsTable}>
        <thead>
          <tr>
            <th>Numero</th>
            <th>Nombre</th>
            <th>Con voz</th>
            <th>Controles</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <tr key={i}>
              <td>
                <input
                  type="number"
                  style={{ width: "80px" }}
                  value={d.hymnNumber || ""}
                  onChange={(e) => {
                    setData((p) =>
                      p.map((r, x) => ({
                        ...r,
                        hymnNumber: x == i ? e?.target?.value : r.hymnNumber,
                      })),
                    );
                  }}
                />
              </td>
              <td>
                <select
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
                  <option value="">Seleccione un himno de la lista</option>
                  <option value="1">Primer himno de la lista</option>
                  <option value="2">Segundo himno de la lista</option>
                  <option value="3">Tercer himno de la lista</option>
                  <option value="4">Cuarto himno de la lista</option>
                  <option value="5">Quinto himno de la lista</option>
                </select>
              </td>
              <td style={{ textAlign: "center" }}>
                <input type="checkbox" />
              </td>
              <td style={{ display: "flex", justifyContent: "space-between" }}>
                {d.hymnNumber > "0" ? (
                  <audio controls />
                ) : (
                  <div style={{ width: "300px" }}></div>
                )}
                <input
                  type="button"
                  value="x"
                  style={{
                    margin: "10px",
                    //height: "20px",
                    padding: "0px 10px",
                    border: "unset",
                    background: "unset",
                  }}
                  onClick={() => {
                    const newData = [];
                    data.forEach((y, x) => {
                      if (x !== i) newData.push(y);
                    });
                    setData(newData);
                  }}
                />
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
                <input
                  type="button"
                  style={{ background: "unset", border: "unset" }}
                  value="+"
                  onClick={() => {
                    setData([...data, {}]);
                  }}
                />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
