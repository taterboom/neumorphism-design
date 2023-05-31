"use client"

import { useEffect, useMemo, useState } from "react"
import color from "color"
import { useTheme } from "next-themes"
import { FxemojiSunrays, PhEyeBold, PhEyeClosedBold, TablerArrowsRight } from "./icons"

export default function App() {
  const { resolvedTheme, theme, setTheme } = useTheme()
  const [zenMode, setZenMode] = useState(true)
  useEffect(() => {
    console.log(resolvedTheme, theme, typeof resolvedTheme, typeof theme)
    // @ts-ignore
    window.colorjs = color
  }, [resolvedTheme, theme])

  const backgroundColor = useMemo(
    () => (resolvedTheme === "dark" ? "#292929" : "#e8e8e8"),
    [resolvedTheme]
  )
  const foregroundColor = useMemo(
    () => (resolvedTheme === "dark" ? "#e8e8e8" : "#292929"),
    [resolvedTheme]
  )
  const shadowColor = useMemo(() => {
    const baseColorObj = color(backgroundColor)
    const shadowColors = [baseColorObj.darken(0.1).hex(), baseColorObj.lighten(0.1).hex()]
    return shadowColors
  }, [backgroundColor])

  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center p-24 pt-48"
      style={{ background: backgroundColor }}
    >
      <div className="fixed top-12 left-1/2 -translate-x-1/2 flex gap-32 items-center">
        <h1
          className="neumorphism-text text-6xl font-bold"
          style={
            {
              "--size": "2px",
              "--foreground-color": backgroundColor,
              "--shadow-color-1": shadowColor[0],
              "--shadow-color-2": shadowColor[1],
            } as React.CSSProperties
          }
        >
          Neumorphism Design
        </h1>
        <button
          className="neumorphism-button shrink-0 w-12 h-12 text-xl flex justify-center items-center rounded-full"
          style={
            {
              "--size": "4px",
              "--background-color": backgroundColor,
              "--foreground-color": foregroundColor,
              "--shadow-color-1": shadowColor[0],
              "--shadow-color-2": shadowColor[1],
            } as React.CSSProperties
          }
          onClick={() => {
            setZenMode(!zenMode)
          }}
        >
          {zenMode ? <PhEyeClosedBold /> : <PhEyeBold />}
        </button>
      </div>
      <div>
        <button
          className="neumorphism-button relative px-24 py-8 rounded-2xl text-2xl capitalize font-semibold"
          style={
            {
              "--size": "8px",
              "--background-color": backgroundColor,
              "--foreground-color": foregroundColor,
              "--shadow-color-1": shadowColor[0],
              "--shadow-color-2": shadowColor[1],
            } as React.CSSProperties
          }
          onClick={() => {
            setTheme(resolvedTheme === "light" ? "dark" : "light")
          }}
        >
          <span>{resolvedTheme}</span>
          {!zenMode && (
            <>
              <div className="absolute -left-24 -top-24">
                <FxemojiSunrays className="text-4xl" />
                <TablerArrowsRight className="text-2xl rotate-45 ml-9 mt-1 text-[#ffc639]" />
              </div>
              <div className="text-lg font-normal">
                <div className="indicator">
                  <div className="indicator-line"></div>
                  <span>
                    <b>BaseColor</b>: {backgroundColor}
                  </span>
                </div>
                <div className="indicator">
                  <div className="indicator-line"></div>
                  <span>
                    Lighten ( <b>BaseColor</b> )
                  </span>
                </div>
                <div className="indicator">
                  <div className="indicator-line"></div>
                  <span>
                    <b>BaseColor</b>
                  </span>
                </div>
                <div className="indicator">
                  <div className="indicator-line"></div>
                  <span>
                    Darken ( <b>BaseColor</b> )
                  </span>
                </div>
              </div>
            </>
          )}
        </button>
      </div>
    </main>
  )
}
