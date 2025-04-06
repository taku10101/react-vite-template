import type { Meta } from '@storybook/react';
import { Button } from '../Button/Button';
import { DateField } from '../DateField/DateField';
import { Form } from './Form';
import { TextField } from '../TextField/TextField';

const meta: Meta<typeof Form> = {
  component: Form,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;

export const Example = (args: any) => (
  <Form {...args}>
    <TextField label="Email" name="email" type="email" isRequired />
    <DateField label="Birth date" isRequired />
    <div className="flex gap-2">
      <Button type="submit">Submit</Button>
      <Button type="reset" variant="secondary">Reset</Button>
    </div>
  </Form>
);
