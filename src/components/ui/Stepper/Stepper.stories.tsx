import React from 'react';
import Stepper from './Stepper';

export default {
    title: 'Components/Stepper',
    component: Stepper,
}

const Template = (args: React.ComponentProps<typeof Stepper>) => <Stepper {...args} />;

export const Default = Template.bind({});


// 必要に応じて他のバリエーションを追加します