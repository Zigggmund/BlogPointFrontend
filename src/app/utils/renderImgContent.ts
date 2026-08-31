interface PostImage {
  id: number;
  url: string;
}

export function renderImgContent(
  content: string,
  postImages: PostImage[],
): string {
  return content.replace(
    /<img\s+[^>]*id=["']?(\d+)["']?[^>]*>/gi,
    (match, idStr) => {
      const id = parseInt(idStr, 10);
      const image = postImages.find(img => img.id === id);
      if (image) {
        return `<img src="${image.url}" />`;
      }
      return match;
    },
  );
}
