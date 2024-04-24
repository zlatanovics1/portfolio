export default function Section({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) {
  return (
    <section id={id} className="my-60 py-10 content-container">
      {children}
    </section>
  );
}
