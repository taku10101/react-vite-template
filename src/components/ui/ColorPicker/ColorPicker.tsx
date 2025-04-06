import React from 'react';
import { Button, ColorPicker as AriaColorPicker, ColorPickerProps as AriaColorPickerProps, DialogTrigger } from 'react-aria-components';
import { tv } from 'tailwind-variants';
import { ColorSwatch } from '../ColorSwatch/ColorSwatch';
import { focusRing } from '../../../utils/story';
import { ColorArea } from '../ColorArea/ColorArea';
import { ColorSlider } from '../ColorSlider/ColorSlider';
import { ColorField } from '../ColorField/ColorField';
import { Dialog } from '../Dialog/Dialog';
import { Popover } from '../Popover/Popover';


const buttonStyles = tv({
  extend: focusRing,
  base: 'flex gap-2 items-center cursor-default rounded-xs text-sm text-gray-800 dark:text-gray-200'
});

export interface ColorPickerProps extends AriaColorPickerProps {
  label?: string;
  children?: React.ReactNode;
}

export function ColorPicker({ label, children, ...props }: ColorPickerProps) {
  return (
    <AriaColorPicker {...props}>
      <DialogTrigger>
        <Button className={buttonStyles}>
          <ColorSwatch />
          <span>{label}</span>
        </Button>
        <Popover placement="bottom start">
          <Dialog className="flex flex-col gap-2">
            {children || (
              <>
                <ColorArea
                  colorSpace="hsb"
                  xChannel="saturation"
                  yChannel="brightness"
                />
                <ColorSlider colorSpace="hsb" channel="hue" />
                <ColorField label="Hex" />
              </>
            )}
          </Dialog>
        </Popover>
      </DialogTrigger>
    </AriaColorPicker>
  );
}
