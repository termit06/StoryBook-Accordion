import type { Meta, StoryObj } from '@storybook/react'
import AccordionReact from './AccordionReact';
const meta = {
  label: "ReactComponentLibrary/Accordion",
  component: AccordionReact,
  tags: ["autodocs"],
} as Meta<typeof AccordionReact>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  argTypes: {},
    args: {
        multiple: false,
    tabs: [
      { header: "Заголовок 1", children: "Описание 1" },
      { header: "Заголовок 2", children: "Описание 2" },
      { header: "Заголовок 3", children: "Описание 3" },
      { header: "Заголовок 4", children: "Описание 4", disabled: true},
    ],
  },
};