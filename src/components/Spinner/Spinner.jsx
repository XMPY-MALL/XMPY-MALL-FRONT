// components/Spinner/Spinner.jsx
/** @jsxImportSource @emotion/react */
import { MoonLoader } from "react-spinners";
import { XMPY_COLORS } from "../../constants/colors";

export default function Spinner({ size = 36 }) {
  return <MoonLoader size={size} color={XMPY_COLORS.BEIGE_BROWN} />;
}
