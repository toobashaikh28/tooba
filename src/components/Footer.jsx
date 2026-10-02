import Icon from './Icons.jsx';
import SocialLinks from './SocialLinks.jsx';
import { profile } from '../data/content.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>© {new Date().getFullYear()} {profile.name}, {profile.location}</p>
        <SocialLinks className="social--footer" />
        <a className="footer__top" href="#home">
          Back to top
          <Icon name="arrowUp" />
        </a>
      </div>
    </footer>
  );
}
