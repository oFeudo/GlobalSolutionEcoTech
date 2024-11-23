import Head from 'next/head';

export default function Index() {
  const abrirMenu = () => {
    const dropdown = document.getElementById("myDropdown");
    if (dropdown) {
      dropdown.classList.toggle("show");
    }
  };

  return (
    <>
      <Head>
        <title>EcoTech</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/img/estilo.css" />
      </Head>
      <header>
        <div className="logo">
          <a href="/"><img src="/img/EcoTechLogo.jpeg" alt="EcoTech Logo" /></a>
        </div>
        <nav>
          <ul>
            <li><a href="/integrantes">Quem somos</a></li>
            <li><a href="#">Ajuda</a></li>
            <li><a href="/formulario">Entre em contato</a></li>
          </ul>
        </nav>
        <div style={{ position: "absolute", right: 0 }} className="dropdown">
          <button onClick={abrirMenu} style={{ border: "none", background: "none" }}>
            <img src="/img/botao.png" alt="botão" id="botaoHeader" />
          </button>
          <div id="myDropdown" className="dropdown-content">
            <a href="/integrantes">Quem somos</a>
            <a href="#">Ajuda</a>
            <a href="/formulario">Entre em contato</a>
          </div>
        </div>
      </header>
      <main>
        <section className="hero">
          <div className="hero-image">
            <img src="/img/fundo.jpg" alt="Sea turtle" id="fundoG" />
            <img src="/img/fundoP.jpg" alt="Sea turtle" id="fundoP" />
          </div>
          <div className="hero-text">
            <h1>Somos a ECO Plate</h1>
            <p>Venha conhecer nossos serviços e ganhe recompensas por ajudar a preservar os oceanos!</p>
            <button>Saiba mais</button>
          </div>
        </section>
        <section className="contact">
          <h2>Dúvidas?</h2>
          <p>
            Pergunte ao <a href="">nosso assistente</a><br />
            Ou <a href="/formulario">entre em contato conosco</a>
          </p>
        </section>
      </main>
    </>
  );
}
