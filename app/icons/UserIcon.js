import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

function SvgUserIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 84.093 94"
      {...props}>
      <G fill="none" stroke="#181c32" strokeLinecap="round" strokeWidth={5}>
        <Path
          data-name="Path 5545"
          d="M81.593 91.501v-9.887A19.773 19.773 0 0061.82 61.841H22.273A19.773 19.773 0 002.5 81.614v9.887"
          strokeLinejoin="round"
        />
        <Path data-name="Path 11500" d="M42.5 2.5a20 20 0 11-20 20 20 20 0 0120-20z" />
      </G>
    </Svg>
  );
}

export default SvgUserIcon;
