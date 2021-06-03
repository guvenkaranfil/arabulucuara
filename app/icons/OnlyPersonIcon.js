import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgOnlyPersonIcon(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 15 15" {...props}>
      <Path
        data-name="solid user-alt"
        d="M7.5 8.438a4.219 4.219 0 10-4.219-4.219A4.22 4.22 0 007.5 8.438zm3.75.938H9.636a5.1 5.1 0 01-4.271 0H3.75A3.75 3.75 0 000 13.125v.469A1.407 1.407 0 001.406 15h12.188A1.407 1.407 0 0015 13.594v-.469a3.75 3.75 0 00-3.75-3.75z"
        fill="#b3b3b3"
      />
    </Svg>
  );
}

export default SvgOnlyPersonIcon;
