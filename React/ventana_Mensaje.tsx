import React, { useState } from "react";

export default function App() {
  const [modalAbierto, setModalAbierto] = useState(false);

  return (
    <div style={estilos.contenedor}>
      <h1 style={estilos.titulo}>Ejemplo de Ventana Emergente</h1>
      <button style={estilos.boton} onClick={() => setModalAbierto(true)}>
        Abrir Ventana Emergente
      </button>

      {/* Ventana Emergente */}
      {modalAbierto && (
        <>
          <div style={estilos.sombra} onClick={() => setModalAbierto(false)}></div>
          <div style={estilos.modal}>
            <div style={estilos.encabezado}>
              <h2 style={estilos.tituloModal}>Ventana Emergente</h2>
              <button style={estilos.botonCerrar} onClick={() => setModalAbierto(false)}>
                &times;
              </button>
            </div>
            <div style={estilos.cuerpo}>
              <p>Esta es una ventana emergente simple implementada en React y CSS.</p>
            </div>
            <div style={estilos.pie}>
              <button style={estilos.botonSecundario} onClick={() => setModalAbierto(false)}>
                Cerrar
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

// Estilos en español
const estilos = {
  contenedor: {
    minHeight: "100vh",
    backgroundColor: "#f3f4f6",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  titulo: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: "20px",
  },
  boton: {
    padding: "12px 24px",
    backgroundColor: "#3b82f6",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  sombra: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    zIndex: 10,
  },
  modal: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
    zIndex: 11,
    width: "90%",
    maxWidth: "500px",
    maxHeight: "90vh",
    overflowY: "auto",
    animation: "zoomIn 0.3s ease-out",
  },
  encabezado: {
    borderBottom: "1px solid #e5e7eb",
    padding: "16px 24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  tituloModal: {
    fontSize: "1.25rem",
    fontWeight: "bold",
    color: "#111827",
  },
  botonCerrar: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    background: "none",
    border: "none",
    cursor: "pointer",
    color: "#6b7280",
  },
  cuerpo: {
    padding: "24px",
    fontSize: "1rem",
    color: "#4b5563",
  },
  pie: {
    borderTop: "1px solid #e5e7eb",
    padding: "16px 24px",
    textAlign: "right",
  },
  botonSecundario: {
    padding: "8px 16px",
    backgroundColor: "#6b7280",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
};

// Animación de entrada
const hojaEstilos = document.createElement("style");
hojaEstilos.type = "text/css";
hojaEstilos.innerText = `
  @keyframes zoomIn {
    from {
      transform: translate(-50%, -50%) scale(0.9);
      opacity: 0;
    }
    to {
      transform: translate(-50%, -50%) scale(1);
      opacity: 1;
    }
  }
`;
document.head.appendChild(hojaEstilos);
