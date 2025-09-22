import { useEffect, useState } from 'react';

export const TextDisplay = () => {
  const [post, setPost] = useState<{ title: string; content: string } | null>(
    null,
  );

  useEffect(() => {
    const savedPost = localStorage.getItem('post');
    if (savedPost) {
      setPost(JSON.parse(savedPost));
    }
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-4">
      {post ? (
        <>
          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
          <div
            className="prose max-w-full"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </>
      ) : (
        <p>Пост не найден</p>
      )}
    </div>
  );
};
