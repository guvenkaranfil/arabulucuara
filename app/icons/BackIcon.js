import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

function SvgBackIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 18.388 13.982"
      {...props}>
      <G data-name="back icon" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth={1.5}>
        <Path data-name="Path 1" d="M1.062 6.991h16.576" />
        <Path data-name="Path 2" d="M1.061 6.92L6.923 1.06" />
        <Path data-name="Path 3" d="M1.062 7.061l5.861 5.862" />
      </G>
    </Svg>
  );
}

export default SvgBackIcon;
