import {createClient} from '@sanity/client';

export const client = createClient({
  projectId: 'mqrds487',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true
});
