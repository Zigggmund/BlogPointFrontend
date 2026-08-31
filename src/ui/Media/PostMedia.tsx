import { FC } from 'react';
import { Image } from '@mantine/core';

// не будет работать для видео с устройства

interface PostMediaProps {
  id: string; // так как id в виде {Post_string}{Post_number}-{mediaKey}
  mediaType: string;
  mediaURL: string;
  [key: string]: unknown; // Позволяет любые дополнительные пропсы
}

// НУЖНА ПРОВЕРКА URL?
export const PostMedia: FC<PostMediaProps> = ({
  id,
  mediaURL,
  mediaType,
  ...props
}) => {
  // для хранения элемента
  let mediaContent;
  const mediaProps = {
    bd: '1px solid black',
    p: '-20px',
    ...props,
  };
  console.log({ mediaURL });

  switch (mediaType) {
    case 'video':
      // превью видео
      mediaContent = (
        <Image
          {...mediaProps}
          src={getThumbnailUrl(mediaURL)}
          style={{ color: 'white' }}
          alt="Video preview"
        />
      );
      break;
    case 'image':
      mediaContent = (
        <Image
          {...mediaProps}
          id={id}
          src={mediaURL}
          style={{ color: 'white' }}
          alt="Unable to upload"
        />
      );
      break;
    default:
      mediaContent = (
        <Image
          {...mediaProps}
          src="../../../public/assets/images/icons/default_post.jpg"
        />
      );
      break;
  }
  return mediaContent;
};

// Функция для получения videoId, YouTube/RuTube/Vimeo
function getThumbnailUrl(url: string): string | null {
  if (url.includes('youtube.com') || url.includes('youtu.be')) {
    const youtubeMatch =
      url.match(/[?&]v=([^&]+)/) || url.match(/youtu\.be\/([^?]+)/);
    const videoId = youtubeMatch ? youtubeMatch[1] : null;
    return videoId
      ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
      : null;
  } else if (url.includes('rutube.ru')) {
    const rutubeMatch = url.match(/video\/([^/?]+)/);
    const videoId = rutubeMatch ? rutubeMatch[1] : null;
    return videoId ? `https://pic.rutube.ru/video/${videoId}/thumbnail` : null;
  } else if (url.includes('vimeo.com')) {
    const vimeoMatch = url.match(/vimeo\.com\/(\d+)/);
    const videoId = vimeoMatch ? vimeoMatch[1] : null;
    return videoId ? `https://vumbnail.com/${videoId}.jpg` : null;
  }
  return null; // Неподдерживаемая платформа
}
