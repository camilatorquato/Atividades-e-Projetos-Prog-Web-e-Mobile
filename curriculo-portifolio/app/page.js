// app/page.js
import Link from 'next/link';

export default function Home() {
  return (
    <div style={styles.page}>
      {/* Barra de Navegação Superior */}
      <nav style={styles.nav}>
        <h2 style={styles.logo}>Meu Portfólio</h2>
        <div style={styles.navLinks}>
          <a href="#sobre" style={styles.navLink}>Sobre</a>
          <a href="#academico" style={styles.navLink}>Acadêmico</a>
          <a href="#profissional" style={styles.navLink}>Profissional</a>
          <a href="#projetos" style={styles.navLink}>Projetos</a>
          <Link href="/forca" style={styles.btnJogoNav}> Jogo da Forca</Link>
        </div>
      </nav>

      {/* Cabeçalho / Apresentação */}
      <header id="sobre" style={styles.header}>
        <h1 style={styles.nome}>Seu Nome Aqui</h1>
        <p style={styles.subtitulo}>Desenvolvedor Web & Estudante de Tecnologia</p>
        <p style={styles.bio}>
          Bem-vindo ao meu portfólio! Aqui você encontra minha trajetória acadêmica, 
          experiências profissionais e meus projetos de programação.
        </p>
      </header>

      {/* Seção Acadêmica */}
      <section id="academico" style={styles.section}>
        <h2 style={styles.tituloSecao}> Formação Acadêmica</h2>
        <div style={styles.card}>
          <h3>Análise e Desenvolvimento de Sistemas / Eng. de Software</h3>
          <p><strong>Instituição:</strong> Seu Instituto / Universidade</p>
          <p><strong>Período:</strong> 2024 - Cursando</p>
        </div>
      </section>

      {/* Seção Profissional */}
      <section id="profissional" style={styles.section}>
        <h2 style={styles.tituloSecao}> Experiência Profissional</h2>
        <div style={styles.card}>
          <h3>Desenvolvedor Front-End Junior / Estagiário</h3>
          <p><strong>Empresa:</strong> Nome da Empresa / Projeto</p>
          <p>Desenvolvimento de interfaces web com HTML, CSS e JavaScript/React.</p>
        </div>
      </section>

      {/* Seção Extracurricular */}
      <section style={styles.section}>
        <h2 style={styles.tituloSecao}> Atividades Extracurriculares</h2>
        <ul style={styles.lista}>
          <li>Curso de extensão em Desenvolvimento Web e Mobile</li>
          <li>Participação em Hackathons e eventos de tecnologia</li>
          <li>Voluntariado em monitoria de programação</li>
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
            <h3>🎲 Jogo de Dados</h3>
            <p>Aplicação interativa de disputa de dados de 5 rodadas entre 2 jogadores.</p>
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
    backgroundColor: '#f8fafc',
    color: '#1e293b',
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
  logo: { fontSize: '20px', fontWeight: 'bold', color: '#0f172a' },
  navLinks: { display: 'flex', gap: '15px', alignItems: 'center' },
  navLink: { color: '#475569', textDecoration: 'none', fontWeight: '500' },
  btnJogoNav: {
    backgroundColor: '#4f46e5',
    color: '#ffffff',
    padding: '8px 16px',
    borderRadius: '6px',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  header: { textAlign: 'center', padding: '60px 20px', maxWidth: '800px', margin: '0 auto' },
  nome: { fontSize: '36px', color: '#0f172a', marginBottom: '10px' },
  subtitulo: { fontSize: '18px', color: '#4f46e5', fontWeight: '600', marginBottom: '15px' },
  bio: { fontSize: '16px', color: '#64748b', lineHeight: '1.6' },
  section: { maxWidth: '800px', margin: '0 auto 40px auto' },
  tituloSecao: { fontSize: '22px', borderBottom: '2px solid #e2e8f0', paddingBottom: '8px', marginBottom: '20px' },
  card: {
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '8px',
    border: '1px solid #e2e8f0',
    boxShadow: '0 2px 4px rgba(0,0,0,0.04)',
    marginBottom: '15px',
  },
  lista: { paddingLeft: '20px', lineHeight: '1.8' },
  gridProjetos: { display: 'flex', gap: '20px', flexWrap: 'wrap' },
  cardProjeto: {
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '8px',
    border: '1px solid #e2e8f0',
    flex: '1 1 calc(50% - 20px)',
  },
  cardProjetoDestaque: {
    backgroundColor: '#eef2ff',
    padding: '20px',
    borderRadius: '8px',
    border: '2px solid #818cf8',
    flex: '1 1 calc(50% - 20px)',
  },
  btnAcessarProjeto: {
    display: 'inline-block',
    marginTop: '12px',
    backgroundColor: '#4f46e5',
    color: '#fff',
    padding: '10px 16px',
    borderRadius: '6px',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  footer: { textAlign: 'center', padding: '30px 0', color: '#94a3b8', fontSize: '14px' },
};

