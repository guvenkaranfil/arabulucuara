import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgEditIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 18.017 20"
      {...props}>
      <Path
        data-name="Combined Shape"
        d="M1.693 20a.786.786 0 01-.766-.609l-.86-3.666a2.517 2.517 0 01.483-2.151l9.878-12.441.007-.009v-.005A3.137 3.137 0 0114.8.69l1.788 1.4.019.014a2.958 2.958 0 011.325 1.874 3.049 3.049 0 01-.383 2.322c-.019.03-.037.058-1.958 2.481a.8.8 0 01-.052.077.787.787 0 01-.082.092C14.024 10.761 11.6 13.815 7.5 18.986a2.561 2.561 0 01-1.978.966L1.7 20zm.086-5.436a.931.931 0 00-.18.8l.714 3.046 3.187-.04a.985.985 0 00.768-.37l7.527-9.485-4.467-3.459zm13-7.292c.86-1.084 1.427-1.8 1.48-1.869a1.438 1.438 0 00.148-1.06 1.482 1.482 0 00-.683-.937c-.063-.043-1.326-1.03-1.866-1.452l-.03-.024a1.576 1.576 0 00-.988-.35 1.542 1.542 0 00-1.186.549l-1.344 1.69z"
        fill="#b3b3b3"
      />
    </Svg>
  );
}

export default SvgEditIcon;
