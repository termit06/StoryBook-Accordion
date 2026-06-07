import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta = {
    label: "ReactComponentLibrary/Button",
    component: Button,
    tags: ['autodocs'],
} as Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Common: Story = {
    argTypes: {
        label: {
            description: 'Текст на кнопке',
            control: 'text'
        },
        onClick: {
            description: 'Обработчик клика',
            action: 'clicked'
        },
        contur: {
            description: 'Отcутствие фона у кнопки',
            control: 'boolean'
        }
    },

    args: {
        label: "Button",
        onClick: () => console.log(1)
    },
};