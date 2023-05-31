import "./globals.css"
import Providers from "./Providers"

export const metadata = {
  title: "Neumorphism Design",
  description: "Live Demo for Neumorphism Design",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
