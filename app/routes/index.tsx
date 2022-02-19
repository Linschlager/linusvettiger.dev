import styles from '../styles/index.css'

export const links = () => [
  { rel: 'stylesheet', 'href': styles }
];

export default function Index() {
  return (
    <div className="index">
      <div className="cover page" id="cover">
        <h1>Hi, I'm Linus</h1>
        <a href="#socials" className="arrow-down">
          <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" fill="currentColor" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
          </svg>
        </a>
      </div>
      <article className="socials page" id="socials">
        <h2>My socials: <small>I don't have a whole lot</small></h2>
        <div className="socials-list">
          <a href="https://github.com/Linschlager" rel="noopener noreferrer" target="_blank" className="primary">GitHub</a>
          <a href="https://stackoverflow.com/users/5228642" rel="noopener noreferrer" target="_blank" className="primary">StackOverflow</a>
          <a href="https://www.reddit.com/user/Linschlager" rel="noopener noreferrer" target="_blank" className="primary">Reddit</a>
        </div>
      </article>
    </div>
  );
}
