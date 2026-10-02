// Drop-in images. Name a file after the project or certificate id and it is picked up automatically:
//   src/assets/previews/eduevent.png          -> preview for the project with id "eduevent"
//   src/assets/certificates/mern-stack.jpg    -> image for the certificate with id "mern-stack"
const byId = (files) =>
  Object.fromEntries(
    Object.entries(files).map(([path, url]) => [path.split('/').pop().replace(/\.[^.]+$/, ''), url])
  );

const previews = byId(import.meta.glob('../assets/previews/*.{png,jpg,jpeg,webp}', { eager: true, query: '?url', import: 'default' }));
const certificates = byId(import.meta.glob('../assets/certificates/*.{png,jpg,jpeg,webp}', { eager: true, query: '?url', import: 'default' }));

export const previewFor = (id) => previews[id] ?? null;
export const certificateImageFor = (id) => certificates[id] ?? null;

// Optional headshot. Save a photo as src/assets/profile.jpg (or .png / .webp) and it appears in the hero.
const profileFiles = import.meta.glob('../assets/profile.{jpg,jpeg,png,webp}', { eager: true, query: '?url', import: 'default' });
export const profileImage = Object.values(profileFiles)[0] ?? null;
