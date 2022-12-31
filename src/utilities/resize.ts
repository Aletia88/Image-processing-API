import sharp from 'sharp';

// Function to resize the provided image using Sharp
export async function resizeImage(filename: string, width: number, height: number) {
  await sharp(`src/images/images/${filename}.jpg`)
    .resize(width, height)
    .toFile(`src/images/thumb/${filename}-${width}-${height}.jpg`);
  return `src/images/thumb/${filename}-${width}-${height}.jpg`;
}
