export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <div className="footer-logo">FL<em>OR</em></div>
          <p className="footer-desc">Crypto. Adventure. Malta.<br />followtheflor.com</p>
          <div className="footer-socials">
            <a href="#" className="social-btn">Instagram</a>
            <a href="#" className="social-btn">LinkedIn</a>
            <a href="#" className="social-btn">TikTok</a>
            <a href="#" className="social-btn">YouTube</a>
          </div>
        </div>
        <div>
          <p className="footer-col-title">Explore</p>
          <ul className="footer-links">
            <li><a href="/onchain">Flor Onchain</a></li>
            <li><a href="/runs">Flor Runs</a></li>
            <li><a href="/explores">Flor Explores</a></li>
            <li><a href="/#about">About Flor</a></li>
          </ul>
        </div>
        <div>
          <p className="footer-col-title">Connect</p>
          <ul className="footer-links">
            <li><a href="#">Instagram</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">TikTok</a></li>
            <li><a href="/#newsletter">Newsletter</a></li>
          </ul>
        </div>
        <div>
          <p className="footer-col-title">Resources</p>
          <ul className="footer-links">
            <li><a href="#">Coming soon</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>&copy; 2026 followtheflor.com</span>
        <span>Built from Malta, with intention.</span>
      </div>
    </footer>
  )
}
