import React from 'react';
import AnimatedList from './AnimatedList';

export default {
    title: 'Components/AnimatedList',
    component: AnimatedList,
}

const Template = (args: React.ComponentProps<typeof AnimatedList>) => <AnimatedList {...args} />;

export const Default = Template.bind({});


// 必要に応じて他のバリエーションを追加します