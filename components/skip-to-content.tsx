export default function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 z-50 rounded-md focus:outline-none"
    >
      Aller au contenu principal
    </a>
  )
}
