import type React from "react"
interface TexturedBackgroundProps {
  className?: string
  children: React.ReactNode
}

export function TexturedBackground({ className = "", children }: TexturedBackgroundProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Textured background layer */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: "url(/images/canvas-texture.png)",
          backgroundRepeat: "repeat",
          backgroundSize: "500px 500px",
        }}
      />
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
