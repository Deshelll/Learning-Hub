import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { PlayArrow } from '../../utils/svg/PlayArrow';
import { RightArrow } from '../../utils/svg/RightArrow';
import { Earth } from '../../utils/svg/Earth';
import { Share } from '../../utils/svg/Share';

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
            <div style={{display: 'flex', justifyContent: 'center', alignContent: 'center', gap: 10, flexWrap: 'wrap'}}>
                <Button variant='primary' fontWeight='bold'>Начать обучение</Button>
                <Button variant='outline' fontWeight='bold'>Смотреть рынки</Button>
                <Button variant='ghost' fontWeight='bold'>Начать</Button>
                <Button variant='danger' fontWeight='bold'>СБРОСИТЬ ПОРТФЕЛЬ</Button>
                <Button variant='primary' shape='circle' iconOnly ><PlayArrow /></Button>
                <Button variant='outline' shape='circle' iconOnly ><Earth /></Button>
                <Button variant='outline' shape='circle' iconOnly ><Share /></Button>
                <Button variant='primary' fontWeight='bold'>Создать портфель <RightArrow /></Button>
                
            </div>
        )
    }
}

export const Shapes: Story = {
    render: () => {
        return (
            <div style={{display: 'flex', gap: 10}}>
                <Button shape='circle' iconOnly><PlayArrow /></Button>
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