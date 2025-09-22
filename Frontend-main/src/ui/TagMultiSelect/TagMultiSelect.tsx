import { useState } from 'react';
import { ICategory, ITag } from '@app-types';
import { Combobox, useCombobox } from '@mantine/core';
import { useLanguage } from '@hooks/useLanguage.ts';

interface TagMultiSelectProps {
  tags: ITag[];
  categories: ICategory[];
  selectedTagIds: number[];
  onChange: (tagIds: number[]) => void;
}

export const TagMultiSelect: React.FC<TagMultiSelectProps> = ({
  tags,
  categories,
  selectedTagIds,
  onChange,
}) => {
  const { l } = useLanguage();
  const [search, setSearch] = useState('');
  const combobox = useCombobox({
    onDropdownClose: () => setSearch(''), // Очищаем поиск при закрытии
  });
  const selectedTags = tags.filter(tag => selectedTagIds.includes(tag.id));

  const filteredTags = tags.filter(tag =>
    tag.name.toLowerCase().includes(search.toLowerCase()),
  );

  const toggleTag = (tag: ITag) => {
    const isSelected = selectedTagIds.includes(tag.id);
    const newSelection = isSelected
      ? selectedTagIds.filter(id => id !== tag.id)
      : [...selectedTagIds, tag.id];

    onChange(newSelection);
  };

  return (
    <Combobox store={combobox} withinPortal={false}>
      <Combobox.Target>
        <div
          onClick={() => combobox.openDropdown()}
          style={{
            border: '1px solid #ccc',
            padding: '8px',
            borderRadius: '15px',
            cursor: 'pointer',
            maxHeight: '300px',
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '4px',
            background: 'white',
            marginTop: '-15px',
          }}
        >
          {selectedTags.length > 0 ? (
            selectedTags.map(tag => (
              <span
                key={tag.id}
                style={{
                  backgroundColor: tag.color,
                  padding: '4px 8px',
                  borderRadius: '4px',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                {tag.name}
                <button
                  onClick={e => {
                    e.stopPropagation();
                    toggleTag(tag);
                  }}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#fff',
                    cursor: 'pointer',
                  }}
                >
                  ×
                </button>
              </span>
            ))
          ) : (
            <span style={{ color: '#aaa' }}>{l.selectTags}</span>
          )}
        </div>
      </Combobox.Target>

      <Combobox.Dropdown
        style={{
          height: '500px',
          overflowY: 'auto',
        }}
      >
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Поиск..."
          style={{
            width: '100%',
            padding: '8px',
            border: 'none',
            borderBottom: '1px solid #ddd',
            outline: 'none',
          }}
        />

        {filteredTags.map(tag => {
          const category = categories.find(c => c.id === tag.category_id);
          return (
            <Combobox.Option
              key={tag.id}
              value={tag.id.toString()}
              onClick={() => toggleTag(tag)}
            >
              <span
                style={{
                  backgroundColor: tag.color,
                  padding: '2px 6px',
                  borderRadius: '4px',
                  color: '#fff',
                }}
              >
                {tag.name}
              </span>
              {category && (
                <span
                  style={{ marginLeft: 8, fontSize: 12, color: category.color }}
                >
                  {category.name}
                </span>
              )}
            </Combobox.Option>
          );
        })}
      </Combobox.Dropdown>
    </Combobox>
  );
};
