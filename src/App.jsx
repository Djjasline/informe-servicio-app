
import React, { useRef, useState, useEffect } from "react";
import SignatureCanvas from "react-signature-canvas";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function App() {
  const [listaMateriales, setListaMateriales] = useState([{ cantidad: '', material: '', codigo: '' }]);
  const [responsableTecnico, setResponsableTecnico] = useState({ nombre: '', cargo: '', telefono: '' });
  const [responsableCliente, setResponsableCliente] = useState({ nombre: '', cargo: '', telefono: '' });
  const [cliente, setCliente] = useState("");
  const [codigoInterno, setCodigoInterno] = useState("");
  const [fechaServicio, setFechaServicio] = useState("");
  const [direccion, setDireccion] = useState("");
  const [referencia, setReferencia] = useState("");
  const [personalTecnico, setPersonalTecnico] = useState("");
  const [tecnicoApoyo, setTecnicoApoyo] = useState("");
  const firmaAstapRef = useRef(null);
  const firmaClienteRef = useRef(null);
  const formRef = useRef(null);
  const [pruebasAntes, setPruebasAntes] = useState(5);
  const [pruebasDespues, setPruebasDespues] = useState(5);
  const [actividades, setActividades] = useState([{ descripcion: '', evidencia: '' }]);
  const [pdfList, setPdfList] = useState([]);
  const [search, setSearch] = useState("");
  const [correoSupervisor, setCorreoSupervisor] = useState("");

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("informesPDF") || "[]");
    setPdfList(stored);
  }, []);

  return (
    <div>
      <header>
        <h1>ASTAP - Informe de Servicio</h1>
        <p>Formulario funcionando...</p>
      </header>
      <main ref={formRef}>
        <input placeholder="Cliente" value={cliente} onChange={e => setCliente(e.target.value)} />
        <input placeholder="Código Interno" value={codigoInterno} onChange={e => setCodigoInterno(e.target.value)} />
        <input placeholder="Fecha del Servicio" type="date" value={fechaServicio} onChange={e => setFechaServicio(e.target.value)} />
        <input placeholder="Dirección" value={direccion} onChange={e => setDireccion(e.target.value)} />
        <input placeholder="Referencia" value={referencia} onChange={e => setReferencia(e.target.value)} />
      </main>
    </div>
  );
}
