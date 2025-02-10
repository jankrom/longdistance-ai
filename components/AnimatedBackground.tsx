"use client"

import useAnimatedBackground from "../hooks/useAnimatedBackground"

export default function AnimatedBackground() {
  const canvasRef = useAnimatedBackground()

  return <canvas ref={canvasRef} className="absolute inset-0" />
}
