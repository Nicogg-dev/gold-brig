export default {
    title: "Proyectos",
    name: "proyectos",
    type: "document",
    fields: [
      {
        title: "Nombre",
        name: "Nombre",
        type: "string",
      },
      {
        title: "Ubicacion",
        name: "ubicacion",
        type: "string",
      },
      {
        title: "URL Google Maps",
        name: "url",
        type: "string",
      },
      {
        title: "Precio",
        name: "precio",
        type: "number",
      },
      {
        title: "Area (m2)",
        name: "area",
        type: "number",
      },
      {
        title: "Parqueadero",
        name: "parqueadero",
        type: "number",
      },
      {
        title: "cuartos",
        name: "cuartos",
        type: "number",
      },
      {
        title: "piso",
        name: "piso",
        type: "number",
      },
      {
        title: "banos",
        name: "banos",
        type: "number",
      },
      {
        title: "terraza",
        name: "terraza",
        type: "number",
      },
      {
        title: "Administracion (valor)",
        name: "administracion",
        type: "number",
      },
      {
        title: "Estrato",
        name: "estrato",
        type: "number",
      },
      {
        title: "Año de la casa",
        name: "ano",
        type: "number",
      },
      {
        name: 'Imagenes',
        title: 'Imágenes',
        type: 'array',
        of: [{ type: 'image' }],
      },
      {
        title: "Informacion",
        name: "informacion",
        type: "string",
      },
      {
        name: 'Caracteristicas',
        title: 'Caracteristicas',
        type: 'array',
        of: [{ type: 'string' }],
      },
    ],
  };