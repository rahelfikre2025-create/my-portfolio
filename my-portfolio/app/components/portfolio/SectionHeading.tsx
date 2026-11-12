export function SectionHeading({ title, text }: { title: string; text: string }) {
  return <header className="section-heading"><h2>{title}</h2><p>{text}</p></header>
}
