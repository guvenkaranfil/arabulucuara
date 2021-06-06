import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

function SvgLetterIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 19.5 13.055"
      {...props}>
      <G data-name="Group 778">
        <Path
          data-name="Path 11774"
          d="M18.275.25H1.224a.973.973 0 00-.974.967v10.622a.973.973 0 00.974.966h17.051a.973.973 0 00.975-.966V1.217a.973.973 0 00-.975-.967zm-.366.724l-7.6 5.65a1.026 1.026 0 01-1.121 0l-7.6-5.65zM13.85 6.997l4.141 5.07.014.014H1.495l.014-.014 4.141-5.07a.36.36 0 00-.054-.509.367.367 0 00-.514.054l-4.1 5.021V1.427L8.75 7.203a1.757 1.757 0 002 0l7.77-5.776v10.134l-4.1-5.021a.367.367 0 00-.514-.054.36.36 0 00-.056.511z"
          fill="#fff"
          stroke="#fff"
          strokeWidth={0.5}
        />
      </G>
    </Svg>
  );
}

export default SvgLetterIcon;
