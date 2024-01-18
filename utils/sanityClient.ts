import {createClient} from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';


export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "zdqi8ha2", // Ajusta el nombre según tus variables de entorno
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production", // Ajusta el nombre según tus variables de entorno
  useCdn: process.env.NODE_ENV === 'production', // Utiliza el CDN en producción, ajusta según tus necesidades
  apiVersion: '2022-12-19',
  token: process.env.SANITY_TOKEN || '', // Asegúrate de haber configurado SANITY_TOKEN en tus variables de entorno
});

const builder = imageUrlBuilder(client);
export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}
