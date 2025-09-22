import { useState } from 'react';
import { ICategory, ITag } from '@app-types';
import { categories, skyBlueColor, tags } from '@constants';
import { Carousel } from '@mantine/carousel';
import { Button, Flex, Menu } from '@mantine/core';
import { Heading4, Tag } from '@ui';

export const TagsFeed = () => {
  // для обозначения выбранного тега
  const [selectedTag, setSelectedTag] = useState<ITag | null>(null);

  const handleSelectTag = (tag: ITag): void => {
    setSelectedTag(prevTag => (prevTag?.id == tag.id ? null : tag));
  };

  return (
    <Flex align="center">
      <Carousel
        id="recommendationFeed"
        // draggable={{ md: false, base: true }} // не работает
        w={{base: '210px', md: '320px'}} // выравнивание по центру
        ml={{base: '30px', xs: '60px'}}
        // controlSize="50"
        type="container"
        slideSize={{ base: '100%', '300px': '100%', '500px': '33.333333%' }}
        loop
        align="start"
        styles={{
          control: {
            backgroundColor: skyBlueColor,
            color: 'white',
            transform: 'translateY(-50%)', // позиционирует стрелки по центру по вертикали
            zIndex: 10, // Выводит стрелки поверх слайдов
          },
          controls: {
            top: '50%',
            left: 'calc(-70px)', // сдвигает левую стрелку за пределы карусели
            right: 'calc(-70px)', // сдвигает правую стрелку за пределы карусели
            // Для мобилок
          },
        }}
      >
        {categories.map((category: ICategory) => {
          // если тег выбран, меняет стили кнопок
          const isTagSelected = selectedTag?.categoryId == category.id;
          return (
            <Carousel.Slide key={category.id}>
              <Menu
                trigger={'hover'}
                shadow="md"
                width={200}
                h={'45px'} // h={'45px'} РАБОТАЕТ, не убирать. Ошибкой не является
              >
                <Menu.Target>
                  <Button
                    p={'5px'}
                    w="100%"
                    bg={isTagSelected ? selectedTag?.color : 'transparent'}
                    style={{
                      border: `solid ${category.color} 2px`,
                      color: isTagSelected ? 'white' : category.color,
                    }}
                  >
                    <Heading4
                      fz={{base: '15px', xss: '18px', sm: '20px'}}
                      color={isTagSelected ? 'white' : category.color}
                    >
                      {isTagSelected ? `#${selectedTag?.name}` : category.name}
                    </Heading4>
                  </Button>
                </Menu.Target>

                <Menu.Dropdown
                  w={'auto'}
                  style={{ border: `solid ${category.color} 1px` }}
                >
                  {tags
                    .filter((tag: ITag) => tag.category_id === category.id)
                    .map((tag: ITag) => (
                      <Menu.Item
                        key={tag.id}
                        onClick={() => handleSelectTag(tag)}
                      >
                        <Tag
                          id={tag.id}
                          color={tag.color}
                          name={tag.name}
                          category_id={tag.category_id}
                          selected={selectedTag?.id === tag.id}
                        />
                      </Menu.Item>
                    ))}
                </Menu.Dropdown>
              </Menu>
            </Carousel.Slide>
          );
        })}
      </Carousel>
    </Flex>
  );
};
