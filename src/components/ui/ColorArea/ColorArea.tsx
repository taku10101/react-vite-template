import {
  ColorArea as AriaColorArea,
  ColorAreaProps as AriaColorAreaProps
} from 'react-aria-components';
import { composeTailwindRenderProps } from '../../../utils/story';
import { ColorThumb } from '../ColorThumb/ColorThumb';


export interface ColorAreaProps extends AriaColorAreaProps { }

export function ColorArea(props: ColorAreaProps) {
  return (
    <AriaColorArea
      {...props}
      className={composeTailwindRenderProps(props.className, 'w-56 h-56 rounded-lg bg-gray-300 dark:bg-zinc-800 forced-colors:bg-[GrayText]')}
      style={({ defaultStyle, isDisabled }) => ({
        ...defaultStyle,
        background: isDisabled ? undefined : defaultStyle.background
      })}>
      <ColorThumb />
    </AriaColorArea>
  );
}
