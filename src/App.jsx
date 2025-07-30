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
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      <header className="bg-[#003366] text-white p-4 flex justify-between">
        <h1 className="font-bold">ASTAP - Informes de Servicio</h1>
        <div className="space-x-2">
          <button className="bg-[#003366] text-white px-3 py-1 rounded">Generar PDF</button>
          <button className="bg-red-500 text-white px-3 py-1 rounded">Limpiar</button>
        </div>
      </header>
      <main className="pt-24 px-6 max-w-6xl mx-auto space-y-6">
        <div ref={formRef} className="space-y-6 bg-white p-6 rounded shadow">
          <h2 className="text-2xl font-bold text-center text-[#003366]">INFORME DE TRABAJO Ú SERVICIO</h2>
          <input placeholder="Cliente" value={cliente} onChange={e => setCliente(e.target.value)} className="border p-2 w-full" />
          <input placeholder="Código Interno" value={codigoInterno} onChange={e => setCodigoInterno(e.target.value)} className="border p-2 w-full" />
          <input placeholder="Fecha del Servicio" type="date" value={fechaServicio} onChange={e => setFechaServicio(e.target.value)} className="border p-2 w-full" />
          <input placeholder="Dirección" value={direccion} onChange={e => setDireccion(e.target.value)} className="border p-2 w-full" />
          <input placeholder="Referencia" value={referencia} onChange={e => setReferencia(e.target.value)} className="border p-2 w-full" />
          <input placeholder="Personal Técnico" value={personalTecnico} onChange={e => setPersonalTecnico(e.target.value)} className="border p-2 w-full" />
          <input placeholder="Técnico de Apoyo" value={tecnicoApoyo} onChange={e => setTecnicoApoyo(e.target.value)} className="border p-2 w-full" />
        </div>
      </main>
    </div>
  );
}