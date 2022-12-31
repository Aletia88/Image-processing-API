import { resizeImage } from '../utilities/resize';

it('resizes image file ', async () => {
  const thumbnailFile = await resizeImage('fjord', 100, 100);
  const outputFile = `src/images/thumb/fjord-100-100.jpg`;
  expect(thumbnailFile).toEqual(outputFile);
});
