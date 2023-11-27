"use client";

import Lottie from "react-lottie";
import { Options } from "react-lottie";

interface Props {
  options: Options;
  height: number;
  width: number;
}

export default function LottieWrapper({ options, height, width }: Props) {
  return <Lottie options={options} height={height} width={width} />;
}
