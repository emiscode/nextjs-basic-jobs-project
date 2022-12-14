import Link from "../src/components/Link";

export default function HomePage() {
  function Title({ children, as }) {
    const Tag = as;

    return (
      <>
        <Tag>{children}</Tag>
        <style jsx>{`
          ${Tag} {
            color: purple;
          }
        `}</style>
      </>
    );
  }

  return (
    <div>
      <Title as="h1">Jobs Project</Title>
      <Link href={"/faq"}>FAQ</Link>
    </div>
  );
}
