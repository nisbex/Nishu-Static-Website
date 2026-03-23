class SiteNavbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav class="navbar">
                <div class="container nav-container">
                    <a href="index.html" class="logo">Nishu<span class="dot">.</span>IT</a>
                    <button class="menu-toggle" aria-label="Toggle navigation">&#9776;</button>
                    <ul class="nav-links">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="skills.html">Skills</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </div>
            </nav>
        `;

        // Handle mobile menu toggle
        const toggle = this.querySelector('.menu-toggle');
        const links = this.querySelector('.nav-links');
        
        toggle.addEventListener('click', () => {
            links.classList.toggle('active');
            toggle.classList.toggle('active');
        });
        
        // Highlight active link
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';
        const navItems = this.querySelectorAll('.nav-links a');
        navItems.forEach(item => {
            if (item.getAttribute('href') === currentPath) {
                item.classList.add('active-link');
            }
        });
    }
}

class SiteFooter extends HTMLElement {
    connectedCallback() {
        const year = new Date().getFullYear();
        this.innerHTML = `
            <footer class="footer">
                <div class="container footer-container">
                    <div class="footer-info">
                        <h3>Nishu<span class="dot">.</span>IT</h3>
                        <p>IT Student specializing in System Administration, Server Management, Linux, and Microsoft Office.</p>
                    </div>
                    <div class="footer-links">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="about.html">About</a></li>
                            <li><a href="skills.html">Skills</a></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </div>
                    <div class="footer-social">
                        <h4>Connect</h4>
                        <div class="social-icons">
                            <a href="#" aria-label="LinkedIn" class="social-icon">In</a>
                            <a href="#" aria-label="GitHub" class="social-icon">GH</a>
                            <a href="#" aria-label="Email" class="social-icon">@</a>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>&copy; ${year} Nishu. All rights reserved.</p>
                </div>
            </footer>
        `;
    }
}

// Register custom elements
customElements.define('site-navbar', SiteNavbar);
customElements.define('site-footer', SiteFooter);
