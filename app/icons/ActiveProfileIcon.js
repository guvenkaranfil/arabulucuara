import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgActiveProfileIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 26.25 26"
      {...props}>
      <Path
        d="M13.125 0A13 13 0 1026.25 13a13.218 13.218 0 00-1.007-5 13.033 13.033 0 00-12.118-8zm0 3.9a3.9 3.9 0 11-3.937 3.9 3.914 3.914 0 013.937-3.9zm0 18.46a9.474 9.474 0 01-7.875-4.186c.039-2.587 5.25-4 7.875-4s7.836 1.417 7.875 4a9.474 9.474 0 01-7.875 4.186z"
        fill="#7e0736"
      />
    </Svg>
  );
}

export default SvgActiveProfileIcon;
