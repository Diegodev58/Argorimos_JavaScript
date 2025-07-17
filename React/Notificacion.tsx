import React, { useState } from "react";

export default function App() {
  const [notificacionVisible, setNotificacionVisible] = useState(false);

  const mostrarNotificacion = () => {
    setNotificacionVisible(true);

    // Ocultar automáticamente después de 4 segundos
    setTimeout(() => {
      setNotificacionVisible(false);
    }, 4000);
  };

  const cerrarNotificacion = () => {
    setNotificacionVisible(false);
  };

  return (
    <div style={estilos.contenedor}>
      <h1 style={estilos.titulo}>Ejemplo de Notificación</h1>
      <button style={estilos.boton} onClick={mostrarNotificacion}>
        Mostrar Notificación
      </button>

      {/* Ventana de notificación */}
      {notificacionVisible && (
        <div style={estilos.notificacion}>
          <span style={estilos.mensaje}>¡Esta es una notificación emergente!</span>
          <button style={estilos.botonCerrar} onClick={cerrarNotificacion}>
            &times;
          </button>
        </div>
      )}
    </div>
  );
}

// === Estilos en JavaScript ===
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
    position: "relative",
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
  notificacion: {
    position: "fixed",
    bottom: "30px",
    right: "30px",
    backgroundColor: "#10b981",
    color: "#fff",
    padding: "16px 24px",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    zIndex: 100,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "12px",
    animation: "slideIn 0.3s ease-out",
  },
  mensaje: {
    fontSize: "1rem",
  },
  botonCerrar: {
    fontSize: "1.25rem",
    fontWeight: "bold",
    background: "none",
    border: "none",
    color: "#fff",
    cursor: "pointer",
  },
};

// === Animaciones con CSS ===
const hojaEstilos = document.createElement("style");
hojaEstilos.type = "text/css";
hojaEstilos.innerText = `
  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;
document.head.appendChild(hojaEstilos);
