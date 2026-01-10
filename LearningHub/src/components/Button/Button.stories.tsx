import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
    title: 'UI/Button',
    component: Button,
    tags: ['autodocs'],
    args: {
        children: "Button",
        variant: 'primary',
        fontWeight: 'normal',
        disabled: false,
        loading: false,
    },
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'outline', 'ghost', 'danger']
        },
        shape: { control: 'select',
            options: ['rounded', 'circle']
        },
        fontWeight: {control: 'radio',
            options: ['normal', 'bold']
        },
        disabled: { control: 'boolean' },
        loading: { control: 'boolean' },
        leftIcon: { control: false },
        rightIcon: { control: false },
        iconOnly: { control: 'boolean' },
        fullWidth: {control: 'boolean' },
    }
}

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {}

export const Variants: Story = {
    render: () => {
        return (
        <div style={{display: 'flex', gap: 10}}>
            <Button variant='primary'>Primary</Button>
            <Button variant='outline'>Outline</Button>
            <Button variant='ghost'>Ghost</Button>
            <Button variant='danger'>Danger</Button>
        </div>
        )
    }
}

export const ButtonsInProject: Story = {
    render: () => {
        return (
            <div style={{display: 'flex', gap: 10}}>
                <Button variant='primary' fontWeight='bold'>Начать обучение</Button>
                <Button variant='outline' fontWeight='bold'>Смотреть рынки</Button>
                <Button variant='ghost' fontWeight='bold'>Начать</Button>
                <Button variant='danger' fontWeight='bold'>СБРОСИТЬ ПОРТФЕЛЬ</Button>
            </div>
        )
    }
}

export const Shapes: Story = {
    render: () => {
        return (
            <div style={{display: 'flex', gap: 10}}>
                <Button shape='circle'>111</Button>
                <Button shape='rounded'>Rounded</Button>
            </div>
        )
    }
}

export const FontWeight: Story = {
    render: () => {
        return (
            <div style={{display: 'flex', gap: 10}}>
                <Button fontWeight='normal'>Button</Button>
                <Button fontWeight='bold'>Button</Button>
            </div>
        )
    }
}