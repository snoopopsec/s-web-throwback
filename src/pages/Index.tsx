import { Button } from "@/components/ui/button";
import { MarqueeText } from "@/components/MarqueeText";
import { BlinkText } from "@/components/BlinkText";
import skullImage from "@/assets/skull-90s.png";
import matrixImage from "@/assets/matrix-90s.png";
import retroPatternImage from "@/assets/retro-pattern.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background tiled-bg font-comic">
      {/* 90s Header with animated elements */}
      <header className="border-b-4 border-primary bg-card p-4">
        <div className="container mx-auto">
          <MarqueeText className="text-2xl font-bold text-card-foreground mb-4">
            🔥🔥🔥 WELCOME TO THE ULTIMATE CYBERSECURITY HOMEPAGE 🔥🔥🔥 DANIEL ELIZONDO'S RADICAL WEBSITE 🔥🔥🔥
          </MarqueeText>
          
          <nav className="flex flex-wrap justify-center gap-2 mt-4">
            <Button variant="retro" onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}>HOME</Button>
            <Button variant="neon" onClick={() => document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' })}>EDUCATION</Button>
            <Button variant="bevel" onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}>EXPERIENCE</Button>
            <Button variant="retro" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>PROJECTS</Button>
            <Button variant="neon" onClick={() => document.getElementById('open-source')?.scrollIntoView({ behavior: 'smooth' })}>OPEN SOURCE</Button>
            <Button variant="bevel" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>CONTACT ME</Button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-6 space-y-8">
        {/* Hero Section */}
        <section id="hero" className="text-center border-4 border-primary bg-card p-8 relative overflow-hidden">
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url(${retroPatternImage})`,
              backgroundRepeat: 'repeat',
              backgroundSize: '100px 100px'
            }}
          />
          
          <div className="relative z-10">
            <h1 className="text-6xl font-bold rainbow-text font-times mb-4 transform -rotate-2">
              DANIEL ELIZONDO
            </h1>
            
            <h2 className="text-4xl font-bold text-primary mb-6 font-helvetica">
              <BlinkText>( Security Engineer )</BlinkText>
            </h2>
            
            <div className="flex justify-center items-center gap-4 mb-6">
              <img 
                src={skullImage} 
                alt="Skull" 
                className="w-16 h-16 spin-skull"
              />
              <img 
                src={matrixImage} 
                alt="Matrix Code" 
                className="w-32 h-32 border-2 border-accent"
              />
              <img 
                src={skullImage} 
                alt="Skull" 
                className="w-16 h-16 spin-skull"
              />
            </div>

            <p className="text-lg text-foreground font-helvetica leading-relaxed max-w-4xl mx-auto mb-6">
              Hello! I'm Daniel Elizondo, a dedicated <BlinkText>Information Security Engineer</BlinkText> and 
              <span className="neon-glow"> Cybersecurity Specialist</span>. With a solid foundation in IT services, 
              my expertise spans a range of areas including server management, software installation, networking, 
              and troubleshooting. I pride myself on my strong engineering skills and my commitment to 
              <span className="rainbow-text font-bold"> life-long learning</span>, which has kept me at the 
              forefront of the ever-evolving cybersecurity landscape.
            </p>

            <Button variant="neon" className="text-2xl px-8 py-4">
              ⭐ STAR ME ON GITHUB ⭐
            </Button>
          </div>
        </section>

        {/* What I Do Section */}
        <section className="border-4 border-secondary bg-secondary p-6">
          <h2 className="text-5xl font-bold text-secondary-foreground mb-6 font-times text-center">
            <BlinkText>💻 WHAT I DO? 💻</BlinkText>
          </h2>
          
          <MarqueeText className="text-xl font-bold text-secondary-foreground mb-4">
            🔥 ALL THE DATA! PROCESSING INFORMATION! SECURING THE CYBER WORLD! 🔥
          </MarqueeText>
        </section>

        {/* Information Security & Defense */}
        <section className="border-4 border-accent bg-muted p-6">
          <h2 className="text-4xl font-bold neon-glow text-center mb-8 font-comic">
            🛡️ INFORMATION SECURITY & DEFENSE 🛡️
          </h2>
          
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-6">
            {[
              { name: "SentinelOne", src: "https://desecurity.github.io/skills/sentinelone.webp" },
              { name: "Crowdstrike", src: "https://desecurity.github.io/skills/crowdstrike.png" },
              { name: "Proofpoint", src: "https://desecurity.github.io/skills/proofpoint.png" },
              { name: "Palo Alto", src: "https://desecurity.github.io/skills/PAN.png" },
              { name: "Juniper", src: "https://desecurity.github.io/skills/Juniper.png" },
              { name: "Splunk", src: "https://desecurity.github.io/skills/splunk.png" },
              { name: "Nessus", src: "https://desecurity.github.io/skills/nessus2.png" },
              { name: "OpenVAS", src: "https://desecurity.github.io/skills/openvas.png" },
              { name: "Wireshark", src: "https://desecurity.github.io/skills/wireshark4.png" }
            ].map((tool, index) => (
              <div key={index} className="border-2 border-accent p-2 bg-card hover:bg-accent transition-all hover:rotate-2">
                <img 
                  src={tool.src} 
                  alt={tool.name}
                  className="w-full h-16 object-contain"
                />
              </div>
            ))}
          </div>

          <div className="space-y-3 text-muted-foreground font-helvetica text-lg">
            <p>⚡ <BlinkText>Developing scalable, production-ready cybersecurity solutions.</BlinkText></p>
            <p>⚡ <span className="neon-glow">Implementing advanced threat detection and prevention systems.</span></p>
            <p>⚡ <BlinkText>Conducting in-depth security assessments and audits.</BlinkText></p>
          </div>
        </section>

        {/* Cyber Security Offense */}
        <section className="border-4 border-destructive bg-card p-6">
          <h2 className="text-4xl font-bold text-destructive text-center mb-8 font-times">
            ⚔️ <BlinkText>CYBER SECURITY OFFENSE</BlinkText> ⚔️
          </h2>
          
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-6">
            {[
              { name: "Metasploit", src: "https://desecurity.github.io/skills/metasploit.png" },
              { name: "Burp Suite", src: "https://desecurity.github.io/skills/burpsuite.png" },
              { name: "Nmap", src: "https://desecurity.github.io/skills/nmap.png" },
              { name: "Hashcat", src: "https://desecurity.github.io/skills/hashcat1.png" },
              { name: "Hydra", src: "https://desecurity.github.io/skills/hydra.png" },
              { name: "Aircrack-NG", src: "https://desecurity.github.io/skills/aircrack.png" },
              { name: "Kali Linux", src: "https://desecurity.github.io/skills/Kali-dragon-icon.png" }
            ].map((tool, index) => (
              <div key={index} className="border-2 border-destructive p-2 bg-background hover:bg-destructive/20 transition-all hover:-rotate-2">
                <img 
                  src={tool.src} 
                  alt={tool.name}
                  className="w-full h-16 object-contain"
                />
              </div>
            ))}
          </div>

          <div className="space-y-3 text-foreground font-helvetica text-lg">
            <p>⚡ <span className="rainbow-text font-bold">Performing penetration testing and vulnerability assessments</span></p>
            <p>⚡ <BlinkText>Developing exploit tools and techniques for security testing</BlinkText></p>
            <p>⚡ <span className="neon-glow">Conducting red team exercises to simulate real-world attacks.</span></p>
          </div>
        </section>

        {/* OSINT Section */}
        <section className="border-4 border-primary bg-secondary p-6">
          <h2 className="text-4xl font-bold text-secondary-foreground text-center mb-8 font-comic">
            🕵️ <BlinkText>OSINT (Open Source Intelligence)</BlinkText> 🕵️
          </h2>
          
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-6">
            {[
              { name: "Obsidian", src: "https://desecurity.github.io/skills/obsidian2.png" },
              { name: "Maltego", src: "https://desecurity.github.io/skills/Maltego.png" },
              { name: "Shodan", src: "https://desecurity.github.io/skills/shodan.png" },
              { name: "Recon-NG", src: "https://desecurity.github.io/skills/recon-ng.png" },
              { name: "Spiderfoot", src: "https://desecurity.github.io/skills/spiderfoot.png" },
              { name: "theHarvester", src: "https://desecurity.github.io/skills/theharvester.png" },
              { name: "Google Dorks", src: "https://desecurity.github.io/skills/googledork.png" },
              { name: "SET", src: "https://desecurity.github.io/skills/set.png" }
            ].map((tool, index) => (
              <div key={index} className="border-2 border-primary p-2 bg-card hover:bg-primary/20 transition-all hover:scale-110">
                <img 
                  src={tool.src} 
                  alt={tool.name}
                  className="w-full h-16 object-contain"
                />
              </div>
            ))}
          </div>

          <div className="space-y-3 text-secondary-foreground font-times text-lg">
            <p>⚡ <span className="rainbow-text">Gathering and analyzing publicly available information for security insights.</span></p>
            <p>⚡ <BlinkText>Conducting investigations using open-source tools and techniques.</BlinkText></p>
            <p>⚡ <span className="neon-glow">Identifying and mitigating potential threats through comprehensive intelligence analysis.</span></p>
            <p>⚡ <BlinkText>Analyze and report on breach data from the dark web, providing valuable insights into cybersecurity threats and vulnerabilities.</BlinkText></p>
          </div>
        </section>

        {/* Teaching Section */}
        <section className="border-4 border-accent bg-muted p-6">
          <h2 className="text-4xl font-bold neon-glow text-center mb-8 font-helvetica">
            🎓 <BlinkText>TEACHING & MENTORING</BlinkText> 🎓
          </h2>
          
          <div className="grid grid-cols-3 gap-4 mb-6 max-w-md mx-auto">
            {[
              { name: "OpenAI", src: "https://desecurity.github.io/skills/openai.png" },
              { name: "Canva", src: "https://desecurity.github.io/skills/canva.png" },
              { name: "OBS Studio", src: "https://desecurity.github.io/skills/obs.png" }
            ].map((tool, index) => (
              <div key={index} className="border-2 border-accent p-2 bg-card hover:bg-accent/20 transition-all hover:rotate-12">
                <img 
                  src={tool.src} 
                  alt={tool.name}
                  className="w-full h-16 object-contain"
                />
              </div>
            ))}
          </div>

          <div className="space-y-3 text-muted-foreground font-comic text-lg">
            <p>⚡ <span className="rainbow-text font-bold">Designing and delivering cybersecurity training programs.</span></p>
            <p>⚡ <BlinkText>Creating engaging and informative educational content.</BlinkText></p>
            <p>⚡ <span className="neon-glow">Mentoring and coaching individuals in digital cyber safety, ethical hacking, OSINT, and digital forensics.</span></p>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="border-4 border-primary bg-card p-6">
          <h2 className="text-5xl font-bold rainbow-text text-center mb-8 font-times">
            🎓 <BlinkText>EDUCATION & CERTIFICATIONS</BlinkText> 🎓
          </h2>
          
          <div className="space-y-6">
            <div className="border-2 border-primary p-4 bg-background hover:bg-primary/10 transition-all hover:rotate-1">
              <h3 className="text-2xl font-bold neon-glow font-comic mb-2">🏫 UNIVERSITY OF TEXAS AT SAN ANTONIO</h3>
              <p className="text-lg text-foreground font-helvetica">Bachelor of Science in Information Technology</p>
              <p className="text-lg text-foreground font-helvetica">Concentration: Cybersecurity</p>
            </div>
            
            <div className="border-2 border-accent p-4 bg-muted hover:bg-accent/10 transition-all hover:-rotate-1">
              <h3 className="text-2xl font-bold text-accent font-comic mb-2">🏆 CERTIFICATIONS</h3>
              <div className="space-y-2 text-lg text-muted-foreground font-helvetica">
                <p>⚡ <BlinkText>CompTIA Security+</BlinkText></p>
                <p>⚡ <span className="neon-glow">Certified Ethical Hacker (CEH)</span></p>
                <p>⚡ <BlinkText>CISSP Associate</BlinkText></p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="border-4 border-secondary bg-secondary p-6">
          <h2 className="text-5xl font-bold text-secondary-foreground text-center mb-8 font-times">
            💼 <BlinkText>PROFESSIONAL EXPERIENCE</BlinkText> 💼
          </h2>
          
          <div className="space-y-6">
            <div className="border-2 border-secondary-foreground p-4 bg-card hover:bg-secondary/10 transition-all hover:scale-105">
              <h3 className="text-2xl font-bold rainbow-text font-comic mb-2">🔒 INFORMATION SECURITY ENGINEER</h3>
              <p className="text-lg neon-glow font-helvetica mb-2">Enterprise Security Solutions</p>
              <div className="space-y-2 text-secondary-foreground font-helvetica">
                <p>⚡ <BlinkText>Implementing advanced threat detection systems</BlinkText></p>
                <p>⚡ <span className="rainbow-text">Conducting security assessments and audits</span></p>
                <p>⚡ <BlinkText>Developing incident response procedures</BlinkText></p>
              </div>
            </div>
            
            <div className="border-2 border-secondary-foreground p-4 bg-card hover:bg-secondary/10 transition-all hover:scale-105">
              <h3 className="text-2xl font-bold rainbow-text font-comic mb-2">🛡️ CYBERSECURITY SPECIALIST</h3>
              <p className="text-lg neon-glow font-helvetica mb-2">IT Security Division</p>
              <div className="space-y-2 text-secondary-foreground font-helvetica">
                <p>⚡ <BlinkText>Monitoring and analyzing security events</BlinkText></p>
                <p>⚡ <span className="rainbow-text">Penetration testing and vulnerability management</span></p>
                <p>⚡ <BlinkText>Security awareness training delivery</BlinkText></p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="border-4 border-destructive bg-card p-6">
          <h2 className="text-5xl font-bold text-destructive text-center mb-8 font-times">
            🚀 <BlinkText>CYBERSECURITY PROJECTS</BlinkText> 🚀
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-2 border-destructive p-4 bg-background hover:bg-destructive/10 transition-all hover:rotate-2">
              <h3 className="text-2xl font-bold neon-glow font-comic mb-2">🔍 THREAT INTELLIGENCE PLATFORM</h3>
              <p className="text-foreground font-helvetica mb-2">Automated OSINT collection and analysis system</p>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>⚡ Python, Elasticsearch, Kibana</p>
                <p>⚡ <BlinkText>Real-time threat feed integration</BlinkText></p>
              </div>
            </div>
            
            <div className="border-2 border-destructive p-4 bg-background hover:bg-destructive/10 transition-all hover:-rotate-2">
              <h3 className="text-2xl font-bold neon-glow font-comic mb-2">🛡️ HONEYPOT NETWORK</h3>
              <p className="text-foreground font-helvetica mb-2">Distributed deception technology deployment</p>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>⚡ Docker, AWS, Splunk</p>
                <p>⚡ <BlinkText>Attack pattern analysis</BlinkText></p>
              </div>
            </div>
            
            <div className="border-2 border-destructive p-4 bg-background hover:bg-destructive/10 transition-all hover:rotate-2">
              <h3 className="text-2xl font-bold neon-glow font-comic mb-2">🔐 VULNERABILITY SCANNER</h3>
              <p className="text-foreground font-helvetica mb-2">Custom web application security testing tool</p>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>⚡ Python, SQLMap, Burp Suite API</p>
                <p>⚡ <BlinkText>Automated reporting system</BlinkText></p>
              </div>
            </div>
            
            <div className="border-2 border-destructive p-4 bg-background hover:bg-destructive/10 transition-all hover:-rotate-2">
              <h3 className="text-2xl font-bold neon-glow font-comic mb-2">📊 SECURITY DASHBOARD</h3>
              <p className="text-foreground font-helvetica mb-2">Real-time security metrics visualization</p>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>⚡ React, D3.js, WebSocket</p>
                <p>⚡ <BlinkText>Multi-source data integration</BlinkText></p>
              </div>
            </div>
          </div>
        </section>

        {/* Open Source Section */}
        <section id="open-source" className="border-4 border-accent bg-muted p-6">
          <h2 className="text-5xl font-bold neon-glow text-center mb-8 font-times">
            🌟 <BlinkText>OPEN SOURCE CONTRIBUTIONS</BlinkText> 🌟
          </h2>
          
          <div className="space-y-6">
            <div className="border-2 border-accent p-4 bg-card hover:bg-accent/10 transition-all hover:scale-105">
              <h3 className="text-2xl font-bold rainbow-text font-comic mb-2">🔧 SECURITY TOOLS</h3>
              <div className="space-y-2 text-muted-foreground font-helvetica">
                <p>⚡ <BlinkText>Contributed to OWASP ZAP automation scripts</BlinkText></p>
                <p>⚡ <span className="neon-glow">Developed Metasploit auxiliary modules</span></p>
                <p>⚡ <BlinkText>Enhanced Nmap NSE scripts for better enumeration</BlinkText></p>
              </div>
            </div>
            
            <div className="border-2 border-accent p-4 bg-card hover:bg-accent/10 transition-all hover:scale-105">
              <h3 className="text-2xl font-bold rainbow-text font-comic mb-2">📚 KNOWLEDGE SHARING</h3>
              <div className="space-y-2 text-muted-foreground font-helvetica">
                <p>⚡ <BlinkText>Cybersecurity blog posts and tutorials</BlinkText></p>
                <p>⚡ <span className="neon-glow">Conference presentations on OSINT techniques</span></p>
                <p>⚡ <BlinkText>Security research publications</BlinkText></p>
              </div>
            </div>
            
            <div className="text-center mt-6">
              <Button variant="neon" className="text-xl px-6 py-3">
                🌟 VIEW MY GITHUB REPOSITORIES 🌟
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="border-4 border-primary bg-secondary p-6">
          <h2 className="text-5xl font-bold text-secondary-foreground text-center mb-8 font-times">
            📧 <BlinkText>GET IN TOUCH!</BlinkText> 📧
          </h2>
          
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <div className="border-2 border-primary p-6 bg-card hover:bg-primary/10 transition-all hover:rotate-1">
              <MarqueeText className="text-xl font-bold text-card-foreground mb-4">
                💌 READY TO SECURE THE CYBER WORLD TOGETHER? 💌
              </MarqueeText>
              
              <div className="space-y-4 text-lg">
                <p className="neon-glow font-helvetica">
                  🔗 <BlinkText>LinkedIn: linkedin.com/in/danielelizondo</BlinkText>
                </p>
                <p className="rainbow-text font-helvetica">
                  📧 <BlinkText>Email: daniel@cybersecurity.expert</BlinkText>
                </p>
                <p className="neon-glow font-helvetica">
                  🐙 <BlinkText>GitHub: github.com/desecurity</BlinkText>
                </p>
                <p className="rainbow-text font-helvetica">
                  🐦 <BlinkText>Twitter: @DanielCyberSec</BlinkText>
                </p>
              </div>
              
              <div className="mt-6">
                <Button variant="neon" className="text-xl px-8 py-4">
                  💬 SEND ME A MESSAGE! 💬
                </Button>
              </div>
            </div>
            
            <div className="text-center">
              <BlinkText className="text-2xl font-bold rainbow-text font-comic">
                🔥 LET'S HACK THE PLANET! 🔥
              </BlinkText>
            </div>
          </div>
        </section>
      </main>

      {/* 90s Footer */}
      <footer className="border-t-4 border-primary bg-card p-6 mt-8">
        <MarqueeText className="text-xl font-bold text-card-foreground text-center">
          💝 Made with ❤️ by Daniel Elizondo 💝 BEST VIEWED IN NETSCAPE NAVIGATOR 💝 CYBERSECURITY RULES! 💝
        </MarqueeText>
        
        <div className="text-center mt-4">
          <img 
            src={skullImage} 
            alt="Spinning Skull" 
            className="w-8 h-8 spin-skull inline-block mx-2"
          />
          <BlinkText className="text-lg font-bold text-card-foreground font-times">
            © 1995-2024 Daniel Elizondo Cyber Empire
          </BlinkText>
          <img 
            src={skullImage} 
            alt="Spinning Skull" 
            className="w-8 h-8 spin-skull inline-block mx-2"
          />
        </div>
      </footer>
    </div>
  );
};

export default Index;