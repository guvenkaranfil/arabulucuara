import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgSearchPath(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 141.501 31.001"
      {...props}>
      <Path
        data-name="Union 7"
        d="M39 31H.321c1.671-.06 9.432-1.084 12.931-14.737 1.657-6.1 5.384-16.361 19.362-16.259h76.272c13.978-.1 17.7 10.162 19.362 16.259 3.5 13.649 11.258 14.675 12.931 14.736H102zM0 31h.321H0zm141.179 0h.321H141.179z"
        fill="#f4e1f0"
      />
    </Svg>
  );
}

export default SvgSearchPath;
