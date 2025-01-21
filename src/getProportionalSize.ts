export const getProportionalSize = (
  originalWidth?: number,
  originalHeight?: number,
  maxSize = 32
) => {
  if (!originalWidth || !originalHeight) {
    return { width: maxSize, height: maxSize };
  }

  if (originalHeight > originalWidth) {
    const height = Math.min(maxSize, originalHeight);
    const width = Math.round(height * (originalWidth / originalHeight));
    return { width, height };
  }

  const width = Math.min(maxSize, originalWidth);
  const height = Math.round(width * (originalHeight / originalWidth));
  return { width, height };
};