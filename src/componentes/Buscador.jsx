import React, { useState, useEffect } from "react";

function Buscador() {
  const [data, setData] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [resultados, setResultados] = useState([]);

  // Función para cargar los datos de "stays.json" una vez al montar el componente.
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("stays.json");
        const resJson = await res.json();
        setData(resJson);
      } catch (error) {
        console.error("Error al cargar los datos:", error);
      }
    };

    getData();
  }, []);

  // Función para manejar el cambio en el término de búsqueda.
  const handleBusquedaChange = () => {
    // Filtrar los resultados en base a la búsqueda.
    const resultadosFiltrados = data.filter((item) =>
      item.city.toLowerCase().includes(busqueda.toLowerCase())
    );
    setResultados(resultadosFiltrados);
  };

  return (
    <div>
      <div className="search">
        <input
          type="text"
          placeholder="Whole, Finland..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="modin"
        />

        <input type="text" className="modme" placeholder="Add Guests..." />

        <button type="button" onClick={handleBusquedaChange} className="modfin">
          <span style={{ color: 'red' }} class="material-symbols-outlined " >
            search
          </span >
        </button>

      </div>

      <div className="card-contai">
        {resultados.map((resultado, index) => (
     <div key={index} className="car">
     <img src={resultado.photo} alt={resultado.city} className="imag" />
     <div className="contmod">
       <div className="left-content">
         <p>{resultado.type}. {resultado.beds} beds</p>
         <p></p>
       </div>
       <div className="right-content">
         <div className="star">
           <span class="material-symbols-outlined star-icon">
             star_half
           </span>
         </div>
        
       </div>
       <p>{resultado.rating}</p>
     </div>
     <p>{resultado.title}</p>
   </div>
        ))}
      </div>
    </div>
  );
}

export default Buscador;