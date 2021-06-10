import * as React from 'react';
import Svg, {G, Circle, Rect} from 'react-native-svg';

function SvgSearchIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 26.389 25.889"
      {...props}>
      <G data-name="Group 793" fill="none">
        <G data-name="Ellipse 96" strokeWidth={2}>
          <Circle cx={11.5} cy={11.5} r={11.5} stroke="none" />
          <Circle cx={11.5} cy={11.5} r={10.5} />
        </G>
        <G data-name="Rectangle 172" transform="rotate(45 -12.85 35.642)">
          <Rect width={7} height={2} rx={1} stroke="none" />
          <Rect x={0.5} y={0.5} width={6} height={1} rx={0.5} />
        </G>
      </G>
    </Svg>
  );
}

export default SvgSearchIcon;
