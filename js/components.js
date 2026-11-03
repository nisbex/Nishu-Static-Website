/* =========================================================
   Nishu Gurung | Portfolio — components.js
   Shared: SiteNavbar, SiteFooter (Web Components)
   ========================================================= */

class SiteNavbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav class="navbar" role="navigation" aria-label="Main navigation">
                <div class="container nav-container">
                    <a href="index.html" class="logo" aria-label="Nishu Gurung — Home">
                        Nishu
                    </a>
                    <button class="menu-toggle" aria-label="Toggle navigation menu" aria-expanded="false">
                        &#9776;
                    </button>
                    <ul class="nav-links" role="list">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="skills.html">Skills</a></li>
                        <li><a href="projects.html">Projects</a></li>
                        <li><a href="contact.html">Contact</a></li>
                        <li><a href="resume.html">Resume</a></li>
                    </ul>
                </div>
            </nav>
        `;

        // Mobile menu toggle
        const toggle = this.querySelector('.menu-toggle');
        const links  = this.querySelector('.nav-links');

        toggle.addEventListener('click', () => {
            const isOpen = links.classList.toggle('active');
            toggle.setAttribute('aria-expanded', String(isOpen));
        });

        // Close menu when a link is clicked
        this.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                links.classList.remove('active');
                toggle.setAttribute('aria-expanded', 'false');
            });
        });

        // Highlight the active page link
        const currentFile = window.location.pathname.split('/').pop() || 'index.html';
        this.querySelectorAll('.nav-links a').forEach(item => {
            if (item.getAttribute('href') === currentFile) {
                item.classList.add('active-link');
                item.setAttribute('aria-current', 'page');
            }
        });
    }
}

class SiteFooter extends HTMLElement {
    connectedCallback() {
        const year = new Date().getFullYear();
        this.innerHTML = `
            <footer class="footer" role="contentinfo">
                <div class="container">
                    <div class="footer-grid">
                        <div class="footer-brand">
                            <a href="index.html" class="logo">Nishu<span>.</span>dev</a>
                            <p>BSc (Hons) Computing student at Informatics College Pokhara — aspiring web developer and UI/UX learner based in Nepal.</p>
                        </div>
                        <div class="footer-col">
                            <h4>Pages</h4>
                            <ul>
                                <li><a href="index.html">Home</a></li>
                                <li><a href="about.html">About</a></li>
                                <li><a href="skills.html">Skills</a></li>
                                <li><a href="projects.html">Projects</a></li>
                                <li><a href="contact.html">Contact</a></li>
                                <li><a href="resume.html">Resume</a></li>
                            </ul>
                        </div>
                        <div class="footer-col">
                            <h4>Get in Touch</h4>
                            <ul>
                                <li><a href="mailto:grgnishu11@gmail.com">grgnishu11@gmail.com</a></li>
                                <li><a href="tel:+9779703605057">+977-9703605057</a></li>
                                <li style="color:#94A3B8; font-size:.9rem;">Pokhara, Nepal</li>
                            </ul>
                            <!-- Add real LinkedIn / GitHub URLs below when available -->
                            <!--
                            <div class="social-row mt-2">
                                <a href="YOUR_LINKEDIN_URL" class="social-btn" aria-label="LinkedIn" target="_blank" rel="noopener">in</a>
                                <a href="YOUR_GITHUB_URL"   class="social-btn" aria-label="GitHub"   target="_blank" rel="noopener">GH</a>
                            </div>
                            -->
                        </div>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>&copy; ${year} Nishu Gurung. Built with HTML, CSS &amp; JavaScript.</p>
                </div>
            </footer>
        `;
    }
}

// Register custom elements
customElements.define('site-navbar', SiteNavbar);
customElements.define('site-footer', SiteFooter);
