import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgDeleteIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 18.458 20"
      {...props}>
      <Path
        data-name="Combined Shape"
        d="M5.263 19.958a2.967 2.967 0 01-3.018-2.829c-.315-2.84-.854-9.534-.859-9.6a.749.749 0 01.687-.808.771.771 0 01.808.688c0 .068.543 6.738.855 9.557a1.472 1.472 0 001.558 1.494c2.5.052 5.051.056 7.8.005a1.5 1.5 0 001.625-1.507c.311-2.794.851-9.482.856-9.55a.768.768 0 01.807-.688.752.752 0 01.688.808c-.006.068-.548 6.779-.86 9.594a2.977 2.977 0 01-3.09 2.842 192.37 192.37 0 01-7.857-.006zm9.178-14.969H.75a.75.75 0 110-1.5h3.268a.9.9 0 00.88-.723l.243-1.216A2.043 2.043 0 017.113 0h4.233a2.033 2.033 0 011.962 1.506l.254 1.261a.9.9 0 00.879.723h3.268a.75.75 0 110 1.5zm-2.222-1.5a2.388 2.388 0 01-.128-.428l-.243-1.216a.525.525 0 00-.5-.346H7.113a.529.529 0 00-.512.391l-.233 1.17a2.38 2.38 0 01-.128.428z"
        fill="#b3b3b3"
      />
    </Svg>
  );
}

export default SvgDeleteIcon;