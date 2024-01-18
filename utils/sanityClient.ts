import {createClient} from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const client = createClient({
  projectId: "zdqi8ha2",
  dataset: "production",
  useCdn: true,
  apiVersion: "2022-12-19",
});

const builder = imageUrlBuilder(client);
export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}
