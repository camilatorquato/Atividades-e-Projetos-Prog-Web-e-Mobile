// app/page.js
import Link from 'next/link';

export default function Home() {
  return (
    <div style={styles.page}>
      {/* Barra de Navegação Superior */}
      <nav style={styles.nav}>
        <h2 style={styles.logo}>Portifólio</h2>
        <div style={styles.navLinks}>
          <a href="#sobre" style={styles.navLink}>Sobre</a>
          <a href="#academico" style={styles.navLink}>Acadêmico</a>
          <a href="#profissional" style={styles.navLink}>Profissional</a>
          <a href="#projetos" style={styles.navLink}>Projetos</a>
          <Link href="/forca" style={styles.btnJogoNav}> Jogo da Forca</Link>
        </div>
      </nav>

      <header style={styles.header}>
        <img
          src="/foto-perfil.jpg"
          alt="Foto de Perfil"
          style={styles.fotoPerfil}
        />
        <div style={styles.headerTexto}>
          <h1 style={styles.nome}>Camila Torquato</h1>
          <p style={styles.subtitulo}>Estudante de Ciência da Computação</p>
          <p style={styles.bio}>
            Estudante de Ciência da Computação apaixonada por transformar teoria, algoritmos e lógica em soluções web reais. Atualmente desenvolvendo aplicações
            interativas com React, Next.js e JavaScript, combinando código limpo, performance e boas práticas de desenvolvimento.
          </p>
        </div>
      </header>


      {/* Cabeçalho / Apresentação 
      <header id="sobre" style={styles.header}>
        <h1 style={styles.nome}>Camila Torquato</h1>
        <p style={styles.subtitulo}>Computer Science Student</p>
        <p style={styles.bio}>
          Bem-vindo ao meu portfólio! Aqui você encontra minha trajetória acadêmica, 
          experiências profissionais e meus projetos de programação.
        </p>
      </header>/*  */}

      {/* Seção Acadêmica */}
      <section id="academico" style={styles.section}>
        <h2 style={styles.tituloSecao}> Formação Acadêmica</h2>
        <div style={styles.card}>
          <h3>Ciência da Computação</h3>
          <p><strong>Instituição:</strong> Universidade Católica de Pernambuco</p>
          <p><strong>Período:</strong> 2024 - Cursando</p>
        </div>
      </section>

      {/* Seção Profissional */}
      <section id="profissional" style={styles.section}>
        <h2 style={styles.tituloSecao}> Habilidades Técnicas e Tecnologias</h2>
        <div style={styles.lista}>
          <p><strong>Linguagens e Frameworks:</strong> JavaScript (ES6+), React.js, Next.js (App Router), HTML5, CSS3, C++, C, Python, Java </p>
          <p><strong>Ferramentas:</strong> Git, GitHub, VS Code, Vercel, Node.js / NPM</p>
          <p><strong>Conceitos:</strong> Programação orientada a objetos, lógica de programação, algoritmos e estruturas de dados</p>
        </div>
      </section>

      {/* Seção Extracurricular */}
      <section style={styles.section}>
        <h2 style={styles.tituloSecao}> Atividades Extracurriculares</h2>
        <ul style={styles.lista}>
          <li>Programação Competitiva</li>
          <li>Participação em Hackathons e eventos de tecnologia</li>
          <li>Iniciação Científica</li>
        </ul>
      </section>

      {/* Galeria de Projetos */}
      <section id="projetos" style={styles.section}>
        <h2 style={styles.tituloSecao}> Galeria de Projetos</h2>
        <div style={styles.gridProjetos}>
          
          {/* Card do Projeto Jogo da Forca */}
          <div style={styles.cardProjetoDestaque}>
            <h3> Jogo da Forca (Projeto Pessoal)</h3>
            <p>Jogo interativo desenvolvido em Next.js com controle de tentativas e estados em React.</p>
            <Link href="/forca" style={styles.btnAcessarProjeto}>
              Jogar Agora →
            </Link>
          </div>

          <div style={styles.cardProjeto}>
            <h3> Jogo de Dados</h3>
            <p>Aplicação interativa de disputa de dados de 5 rodadas entre 2 jogadores.</p>
          </div>

          <div style={styles.cardProjeto}>
            <h3> Projeto Olhos de Águia</h3>
            <p>Integração de hardware de VANTs, robótica autônoma e, posteriormente, visão computacional.</p>
          </div>

        </div>
      </section>

      <footer style={styles.footer}>
        <p>© 2026 - Desenvolvido com Next.js na Vercel</p>
      </footer>
    </div>
  );
}

// Estilização Básica Harmonizada
const styles = {
  page: {
    backgroundColor: '#1e293b',
    color: '#e2e8f0',
    fontFamily: 'system-ui, sans-serif',
    minHeight: '100vh',
    padding: '0 20px',
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 0',
    borderBottom: '1px solid #e2e8f0',
    maxWidth: '1000px',
    margin: '0 auto',
  },
  logo: { fontSize: '20px', fontWeight: 'bold', color: '#e2e8f0' },
  navLinks: { display: 'flex', gap: '15px', alignItems: 'center' },
  navLink: { color: '#e2e8f0', textDecoration: 'none', fontWeight: '500' },
  btnJogoNav: {
    backgroundColor: '#f878cd',
    color: '#ffffff',
    padding: '8px 16px',
    borderRadius: '6px',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  header: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '40px 20 px', maxWidth: '800px', margin: '0 auto', height: '100vh', gap: '40px' },
  nome: { fontSize: '36px', color: '#e2e8f0', marginBottom: '10px' },
  subtitulo: { fontSize: '18px', color: '#f878cd', fontWeight: '600', marginBottom: '15px' },
  bio: { fontSize: '16px', color: '#e2e8f0', lineHeight: '1.6' },
  section: { maxWidth: '800px', margin: '0 auto 40px auto' },
  tituloSecao: { fontSize: '22px', borderBottom: '2px solid #e2e8f0', paddingBottom: '8px', marginBottom: '20px' },
  card: {
    backgroundColor: '#1e293b',
    padding: '20px',
    borderRadius: '8px',
    border: '1px solid #e2e8f0',
    boxShadow: '0 2px 4px rgba(0,0,0,0.04)',
    marginBottom: '15px',
  },
  lista: { paddingLeft: '20px', lineHeight: '1.8' },
  gridProjetos: { display: 'flex', gap: '20px', flexWrap: 'wrap' },
  cardProjeto: {
    backgroundColor: '#1e293b',
    padding: '20px',
    borderRadius: '8px',
    border: '1px solid #e2e8f0',
    flex: '1 1 calc(50% - 20px)',
  },
  cardProjetoDestaque: {
    backgroundColor: '#1e293b',
    padding: '20px',
    borderRadius: '8px',
    border: '2px solid #f878cd',
    flex: '1 1 calc(50% - 20px)',
  },
  btnAcessarProjeto: {
    display: 'inline-block',
    marginTop: '12px',
    backgroundColor: '#f878cd',
    color: '#fff',
    padding: '10px 16px',
    borderRadius: '6px',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  footer: { textAlign: 'center', padding: '30px 0', color: '#94a3b8', fontSize: '14px' },
  headerTexto: { textAlign: 'right'},
  fotoPerfil:{width: '225px', height:'225px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #f878cd', boxShadow: '0 2px 5px rgba(0,0,0,0.1'},
};

