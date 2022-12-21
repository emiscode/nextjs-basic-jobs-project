import Link from "../src/components/Link";
import PageTitle from "../src/components/PageTitle";

// SSG: Static Site Generation
// SSR: Server Side Rendering
// ISG: Incremental Static Generation

// getStaticProps: executa somente uma vez em tempo de BUILD
// getServerSideProps: executa e faz pré-render a cada acesso na página
// em DEV: ambos são executados a cada acesso na página

export async function getStaticProps() {
  const FAQ_API_URL =
    "https://gist.githubusercontent.com/emiscode/a0df2afa313f01b70ce42c80cb76661a/raw/5acde9dc74e80483366f31a7c19b6bc1b5c595ac/jobsProjectData.json";

  const faq = await fetch(FAQ_API_URL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.error(`error: ${err.message}`);
    });

  return {
    props: {
      faq,
    },
  };
}

export default function FAQPage(props) {
  return (
    <div>
      <PageTitle title="FAQ - Jobs Project" />
      <h1>Jobs Project - FAQ</h1>
      <Link href={"/"}>Home</Link>
      <ul>
        {props.faq.map((item) => (
          <li key={item.id}>
            <article>
              <h2>{item.question}</h2>
              <p>{item.answer}</p>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
