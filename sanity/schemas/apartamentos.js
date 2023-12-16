export default {
    title: "Apartamentos",
    name: "apartamentos",
    type: "document",
    fields: [
      {
        title: "Name",
        name: "name",
        type: "string",
      },
      {
        title: "ubicacion",
        name: "ubicacion",
        type: "string",
      },
      {
        title: "price",
        name: "price",
        type: "number",
      },
      {
        title: "area",
        name: "area",
        type: "number",
      },
      {
        title: "parqueadero",
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
        title: "administracion",
        name: "administracion",
        type: "number",
      },
      {
        title: "estrato",
        name: "estrato",
        type: "number",
      },
      {
        title: "ano",
        name: "ano",
        type: "number",
      },
      {
        name: 'images',
        title: 'Imágenes',
        type: 'array',
        of: [{ type: 'image' }],
      },
      {
        title: "informacion",
        name: "informacion",
        type: "string",
      },
      {
        name: 'caracteristicas',
        title: 'Caracteristicas',
        type: 'array',
        of: [{ type: 'string' }],
      },
    ],
  };