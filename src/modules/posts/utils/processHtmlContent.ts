import { useUploadFile } from '@hooks/useUploadFile.ts';

export function useProcessHtmlContent() {
  const uploadFile = useUploadFile();

  return async function processHtmlContent(content: string): Promise<{ content: string; postImages: number[] }> {
    const { parse } = await import('node-html-parser');
    const root = parse(content);
    const postImages: number[] = [];

    const imgElements = root.querySelectorAll('img');

    for (const img of imgElements) {
      const src = img.getAttribute('src');
      if (!src || /^https?:\/\//i.test(src)) continue;

      try {
        const response = await fetch(src);
        const blob = await response.blob();
        const file = new File([blob], 'image.png', { type: blob.type });

        const result = await uploadFile.mutateAsync({ file, type: 'image' });
        const imageId = result.data.data.id;

        postImages.push(imageId);

        // Создаем элемент <img69 /> как HTML-элемент, а не строку
        const newImg = parse(`<img id="${imageId}" />`);
        img.replaceWith(newImg);
      } catch (err) {
        console.error('Ошибка загрузки изображения:', err);
      }
    }

    return {
      content: root.toString(),
      postImages,
    };
  };
}
