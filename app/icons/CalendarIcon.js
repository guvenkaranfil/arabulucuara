import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgCalendarIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 14.89 16.417"
      {...props}>
      <Path
        data-name="Combined Shape"
        d="M4.215 16.417A3.9 3.9 0 010 12.234v-6.91a3.816 3.816 0 013.791-4.1V.572a.573.573 0 011.146 0v.634H9.96V.572a.573.573 0 111.145 0v.648a4.11 4.11 0 012.7 1.115 4.107 4.107 0 011.085 2.992v6.966a3.87 3.87 0 01-4.216 4.125zm-3.07-4.182a2.754 2.754 0 003.07 3.037h6.458a2.73 2.73 0 003.07-2.98V6.8H1.146zm12.6-6.581v-.33a2.949 2.949 0 00-.754-2.18 2.952 2.952 0 00-1.891-.775v.716a.573.573 0 11-1.145 0v-.733H4.937v.734a.573.573 0 01-1.146 0v-.717a2.662 2.662 0 00-2.645 2.955v.329zm-3.477 6.522a.57.57 0 01.569-.572h.007a.572.572 0 11-.576.572zm-3.388 0a.57.57 0 01.569-.572h.007a.572.572 0 11-.576.572zm-3.4 0a.57.57 0 01.57-.572h.01a.572.572 0 11-.577.572zm6.784-2.967a.57.57 0 01.569-.573h.007a.573.573 0 11-.576.573zm-3.388 0a.57.57 0 01.569-.573h.007a.573.573 0 11-.576.573zm-3.4 0a.571.571 0 01.57-.573h.014a.573.573 0 11-.577.573z"
        fill="#b3b3b3"
      />
    </Svg>
  );
}

export default SvgCalendarIcon;
