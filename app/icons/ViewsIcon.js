import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgViewsIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 14.5 10.875"
      {...props}>
      <Path
        d="M14.351 4.681A7.634 7.634 0 007.251 0 7.634 7.634 0 00.15 4.681a1.991 1.991 0 000 1.514 7.634 7.634 0 007.1 4.681 7.634 7.634 0 007.1-4.681 1.991 1.991 0 00.001-1.514zm-7.1 3.174a2.417 2.417 0 112.416-2.417A2.419 2.419 0 017.25 7.855z"
        fill="#b3b3b3"
      />
    </Svg>
  );
}

export default SvgViewsIcon;
