import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgInActiveProfileIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 26.25 26"
      {...props}>
      <Path
        d="M13.125 0A13 13 0 1026.25 13 13.068 13.068 0 0013.125 0zm0 3.9a3.9 3.9 0 11-3.937 3.9 3.914 3.914 0 013.937-3.9zm0 18.46a9.474 9.474 0 01-7.875-4.186c.039-2.587 5.25-4 7.875-4s7.836 1.417 7.875 4a9.474 9.474 0 01-7.875 4.186z"
        fill="#b3b3b3"
      />
    </Svg>
  );
}

export default SvgInActiveProfileIcon;
