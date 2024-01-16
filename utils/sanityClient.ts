import {createClient} from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: "zdqi8ha2",
  dataset: "production",
  useCdn: true,
  apiVersion: "2022-12-19",
});

const builder = imageUrlBuilder(client);
export function urlFor(source) {
  return builder.image(source)
}
