import Button from './Button.jsx';
import SocialLinks from './SocialLinks.jsx';
import Terminal from './Terminal.jsx';
import { hero, profile } from '../data/content.js';
import { profileImage } from '../lib/assets.js';

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="hero__status"><span aria-hidden="true" />{hero.status}</p>

          <div className="hero__id">
            {profileImage && <img className="hero__avatar" src={profileImage} alt={`Photo of ${profile.name}`} width="56" height="56" />}
            <p className="hero__name">{profile.name}, {profile.role}</p>
          </div>

          <h1 id="hero-title" className="h1">{hero.headline}</h1>

          <div className="hero__actions">
            <Button href="#projects">{hero.primaryCta}</Button>
            <Button href={profile.resume} variant="outline" download={profile.resumeFilename}>{hero.secondaryCta}</Button>
          </div>

          <SocialLinks />
        </div>

        <Terminal />
      </div>
    </section>
  );
}
