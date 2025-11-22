import './globals.css';

export default function Home() {
  return (
    <main className="container">
      <h1 className="title">??? ?????? ?? ??? ???? ????</h1>
      <p className="subtitle">?? ????? ???? ? ??????????? ?? CSS</p>

      <div className="scene">
        <div className="sofa" />

        <div className="sponge">
          <div className="eye left" />
          <div className="eye right" />
          <div className="mouth" />
          <div className="arm left" />
          <div className="arm right" />
        </div>

        <div className="tv">
          <div className="screen">
            <div className="film-grain" />
            <div className="film-sprockets top" />
            <div className="film-sprockets bottom" />
            <div className="play-indicator" />
          </div>
          <div className="stand" />
        </div>

        <div className="popcorn">
          <div className="bucket" />
          <div className="kernels">
            {Array.from({ length: 14 }).map((_, i) => (
              <span key={i} className={`kernel k${i}`} />
            ))}
          </div>
        </div>
      </div>

      <footer className="footer">????????? ?? Next.js ? CSS ? ???? ??????? ??? Vercel</footer>
    </main>
  );
}
