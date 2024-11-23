import Head from 'next/head';

export default function Integrantes() {
  return (
    <>
      <Head>
        <title>Quem somos</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/img/estilo.css" />
      </Head>
      <header>
        <div className="logo">
          <a href="/"><img src="C:\img\EcoTechLogo.jpg" alt="EcoTech Logo" /></a>
        </div>
        <nav>
          <ul>
            <li><a href="/integrantes">Quem somos</a></li>
            <li><a href="#">Ajuda</a></li>
            <li><a href="/formulario">Entre em contato</a></li>
          </ul>
        </nav>
        <div style={{ position: "absolute", right: 0 }}>
          <img src="/img/botao.png" alt="botão" id="botaoHeader" />
        </div>
      </header>
      <main>
        <div style={{ width: "100%", marginTop: "100px" }}>
          <div style={{ textAlign: "center" }}>
            <h2>Integrantes</h2>
          </div>
          <div className="membro">
            <img src="/img/felipe.jpg" alt="Foto do Membro 1" />
            <div>
              <h2>Felipe Yamaguchi Mesquita</h2>
              <p>RM: 556170</p>
              <p>Email: felipemesquita77@gmail.com</p>
              <a href="https://github.com/oFeudo" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
          <div className="membro">
            <img src="/img/gui.jpeg" alt="Foto do Membro 2" />
            <div>
              <h2>Guilherme Jesus Lima</h2>
              <p>RM: 555002</p>
              <p>Email: guilhermezlima05@gmail.com</p>
              <a href="https://github.com/limaaz1" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
          <div className="membro">
            <img src="/img/pedro.jpeg" alt="Foto do Membro 3" />
            <div>
              <h2>Pedro Henrique dos Reis Silva</h2>
              <p>RM: 555207</p>
              <p>Email: pedroh6863@gmail.com</p>
              <a href="https://github.com/PedroH6002" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
