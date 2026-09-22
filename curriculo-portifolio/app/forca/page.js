// app/forca/page.js
'use client';

import { useState } from 'react';
import Link from 'next/link';

// Lista de pelo menos 30 palavras do universo de tecnologia/programação
const LISTA_PALAVRAS = [
  'REACT', 'NEXTJS', 'JAVASCRIPT', 'HTML', 'COMPONENTES',
  'VARIAVEL', 'FUNCAO', 'NAVAGADOR', 'DESENVOLVIMENTO', 'SERVIDORES',
  'CSS', 'ESTILO', 'PORTFOLIO', 'VERCEL', 'GITHUB',
  'ALGORITMO', 'PROGRAMACAO', 'INTERFACE', 'TECLADO', 'CODIGO',
  'ESTADO', 'HOOKS', 'ARRAY', 'OBJETO', 'BOOTSTRAP',
  'TERMINAL', 'PROJETO', 'INTERNET', 'PROPRIEDADE', 'BANCO'
];

const LIMITE_ERROS = 6;

export default function JogoForca() {
  // Sorteia uma palavra aleatória da lista
  const [palavra, setPalavra] = useState(() => {
    const idx = Math.floor(Math.random() * LISTA_PALAVRAS.length);
    return LISTA_PALAVRAS[idx];
  });

  // Estado para armazenar as letras digitadas/clicadas
  const [letrasUsadas, setLetrasUsadas] = useState([]);

  // Calcula quantas letras erradas o jogador cometeu
  const erros = letrasUsadas.filter(letra => !palavra.includes(letra)).length;

  // Condições de término do jogo
  const venceu = palavra.split('').every(letra => letrasUsadas.includes(letra));
  const perdeu = erros >= LIMITE_ERROS;

  // Função para tratar o clique em uma letra
  function tentarLetra(letra) {
    if (letrasUsadas.includes(letra) || venceu || perdeu) return;
    setLetrasUsadas([...letrasUsadas, letra]);
  }

  // Reiniciar a partida com uma nova palavra
  function reiniciarJogo() {
    const idx = Math.floor(Math.random() * LISTA_PALAVRAS.length);
    setPalavra(LISTA_PALAVRAS[idx]);
    setLetrasUsadas([]);
  }

  // Alfabeto completo para montar o teclado virtual
  const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  return (
    <main style={styles.container}>
      <Link href="/" style={styles.linkVoltar}>
        ← Voltar para o Currículo
      </Link>

      <h1 style={styles.titulo}>Jogo da Forca</h1>

      {/* Desenho do Boneco usando CSS/SVG simples */}
      <div style={styles.areaForca}>
        <svg height="200" width="150" style={{ stroke: '#333', strokeWidth: '4', fill: 'none' }}>
          {/* Base e Estrutura da Forca */}
          <line x1="10" y1="190" x2="140" y2="190" />
          <line x1="40" y1="190" x2="40" y2="20" />
          <line x1="40" y1="20" x2="100" y2="20" />
          <line x1="100" y1="20" x2="100" y2="40" />

          {/* Partes do Boneco de acordo com o número de erros */}
          {erros >= 1 && <circle cx="100" cy="55" r="15" stroke="#ef4444" />} {/* Cabeça */}
          {erros >= 2 && <line x1="100" y1="70" x2="100" y2="120" stroke="#ef4444" />} {/* Corpo */}
          {erros >= 3 && <line x1="100" y1="85" x2="80" y2="105" stroke="#ef4444" />} {/* Braço Esq */}
          {erros >= 4 && <line x1="100" y1="85" x2="120" y2="105" stroke="#ef4444" />} {/* Braço Dir */}
          {erros >= 5 && <line x1="100" y1="120" x2="85" y2="155" stroke="#ef4444" />} {/* Perna Esq */}
          {erros >= 6 && <line x1="100" y1="120" x2="115" y2="155" stroke="#ef4444" />} {/* Perna Dir */}
        </svg>
      </div>

      <p style={styles.tentativasRestantes}>
        Tentativas restantes: <strong>{LIMITE_ERROS - erros}</strong>
      </p>

      {/* Exibição da Palavra com Underlines */}
      <div style={styles.palavraContainer}>
        {palavra.split('').map((letra, index) => (
          <span key={index} style={styles.tracoLetra}>
            {letrasUsadas.includes(letra) || perdeu ? letra : '_'}
          </span>
        ))}
      </div>

      {/* Interface de Vitória ou Derrota */}
      {venceu && (
        <div style={styles.msgVitoria}>
          <h2>🎉 Parabéns, você venceu!</h2>
          <p>A palavra era: <strong>{palavra}</strong></p>
        </div>
      )}

      {perdeu && (
        <div style={styles.msgDerrota}>
          <h2>❌ Você perdeu!</h2>
          <p>A palavra correta era: <strong>{palavra}</strong></p>
        </div>
      )}

      {/* Teclado Virtual com diferenciação de acerto/erro */}
      <div style={styles.teclado}>
        {alfabeto.map(letra => {
          const jaUsou = letrasUsadas.includes(letra);
          const acertou = jaUsou && palavra.includes(letra);
          const errou = jaUsou && !palavra.includes(letra);

          let btnEstilo = styles.btnTeclado;
          if (acertou) btnEstilo = { ...styles.btnTeclado, backgroundColor: '#22c55e', color: '#fff' };
          if (errou) btnEstilo = { ...styles.btnTeclado, backgroundColor: '#cbd5e1', color: '#94a3b8' };

          return (
            <button
              key={letra}
              onClick={() => tentarLetra(letra)}
              disabled={jaUsou || venceu || perdeu}
              style={btnEstilo}
            >
              {letra}
            </button>
          );
        })}
      </div>

      {/* Botão Reiniciar */}
      <button onClick={reiniciarJogo} style={styles.btnReiniciar}>
        🔄 Novo Jogo
      </button>
    </main>
  );
}

const styles = {
  container: {
    maxWidth: '600px',
    margin: '40px auto',
    padding: '20px',
    textAlign: 'center',
    fontFamily: 'system-ui, sans-serif',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
  },
  linkVoltar: { display: 'inline-block', marginBottom: '15px', color: '#4f46e5', textDecoration: 'none', fontWeight: 'bold' },
  titulo: { fontSize: '28px', color: '#0f172a', marginBottom: '10px' },
  areaForca: { margin: '15px 0' },
  tentativasRestantes: { fontSize: '16px', color: '#475569', marginBottom: '20px' },
  palavraContainer: { display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '25px' },
  tracoLetra: { fontSize: '32px', fontWeight: 'bold', color: '#0f172a', borderBottom: '3px solid #333', padding: '0 8px' },
  teclado: { display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center', marginBottom: '25px' },
  btnTeclado: {
    width: '38px',
    height: '42px',
    fontSize: '16px',
    fontWeight: 'bold',
    backgroundColor: '#f1f5f9',
    border: '1px solid #cbd5e1',
    borderRadius: '6px',
    cursor: 'pointer',
  },
  btnReiniciar: {
    backgroundColor: '#4f46e5',
    color: '#fff',
    border: 'none',
    padding: '12px 24px',
    fontSize: '16px',
    fontWeight: 'bold',
    borderRadius: '6px',
    cursor: 'pointer',
  },
  msgVitoria: { backgroundColor: '#dcfce7', color: '#166534', padding: '15px', borderRadius: '8px', marginBottom: '20px' },
  msgDerrota: { backgroundColor: '#fee2e2', color: '#991b1b', padding: '15px', borderRadius: '8px', marginBottom: '20px' },
};
