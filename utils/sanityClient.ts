import {createClient} from '@sanity/client'
import config from "./sanityConfig";
const client = createClient({
  projectId: config.projectId,
  dataset: config.dataset,
  useCdn: true,
  apiVersion: "2022-06-22",
});
export default client;