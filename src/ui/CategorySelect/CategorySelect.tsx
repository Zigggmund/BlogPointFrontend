import { Group, Select, SelectProps, Text, ThemeIcon } from '@mantine/core';
import { ICategory } from '@app-types';

interface CategorySelectProps extends Omit<SelectProps, 'data'> {
  categories: ICategory[];
}

export const CategorySelect: React.FC<CategorySelectProps> = ({
  categories,
  ...props
}) => {
  const data = categories.map(category => ({
    value: category.id.toString(),
    label: category.name,
    color: category.color,
  }));

  return (
    <Select
      data={data}
      component={CategoryItem}
      searchable
      checkIconPosition="left"
      {...props}
    />
  );
};

interface ItemProps extends React.ComponentPropsWithoutRef<'div'> {
  label: string;
  value: string;
  color: string;
}

const CategoryItem = ({ label, color, ...others }: ItemProps) => (
  <div {...others}>
    <Group>
      <ThemeIcon size="sm" radius="xl" style={{ backgroundColor: color }} />
      <Text>{label}</Text>
    </Group>
  </div>
);
