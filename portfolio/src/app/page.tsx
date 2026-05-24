import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Loader from "../components/Loader";
import CursorGlow from "../components/CursorGlow";
import CustomCursor from "../components/CustomCursor";
import CommandPalette from "../components/CommandPalette";
import MobileMenu from "../components/MobileMenu";
import ThemeToggle from "../components/ThemeToggle";
import AIChat from "../components/AIChat";
import SelectedWork from "../components/SelectedWork";
import HorizontalScroll from "../components/HorizontalScroll";
import About from "../components/About";
import Experience from "../components/Experience";
import TechStack from "../components/TechStack";
import TechOrbit from "../components/TechOrbit";
import PageReveal from "../components/PageReveal";
import Certifications from "../components/Certifications";
import GitHubSection from "../components/GitHubSection";
import SpotifyNowPlaying from "../components/SpotifyNowPlaying";
import Contact from "../components/Contact";
import ScrollProgress from "../components/ScrollProgress";
import MouseGradient from "../components/MouseGradient";
import Reveal from "../components/Reveal";
import Dock from "../components/Dock";
import ParallaxSection from "../components/ParallaxSection";
import ConsoleMessage from "../components/ConsoleMessage";
import TerminalMode from "../components/TerminalMode";
import StatsSection from "../components/StatsSection";
import ThemeSwitcher from "../components/ThemeSwitcher";

export default function Home() {
  return (
    <PageReveal>
      <main className="relative overflow-hidden bg-[#050505] text-white">
        <Loader />
        <ScrollProgress />
        <MouseGradient />
        <div className="pointer-events-none fixed inset-0 z-[1] opacity-[0.03] mix-blend-soft-light bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <CursorGlow />
        <CustomCursor />
        <CommandPalette />
        <MobileMenu />
        <ThemeToggle />
        <ThemeSwitcher />
        <AIChat />
        <div className="pointer-events-none fixed inset-0 z-[0] grid-background" />
        <div className="pointer-events-none fixed top-[-200px] left-[-100px] z-[0] h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[140px]" />
        <div className="pointer-events-none fixed bottom-[-200px] right-[-100px] z-[0] h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[140px]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/[0.06] to-transparent" />
        <Navbar />
        <Hero />
        <StatsSection />
        <Reveal>
          <About />
        </Reveal>

        <Reveal>
          <Experience />
        </Reveal>

        <ParallaxSection>
          <Reveal>
            <TechOrbit />
          </Reveal>
        </ParallaxSection>

        <SpotifyNowPlaying />
        <ParallaxSection>
          <Reveal>
            <SelectedWork />
          </Reveal>
        </ParallaxSection>

        {/* HorizontalScroll temporarily disabled due to GSAP + sticky + Framer conflicts */}
        {/* <HorizontalScroll /> */}

        <Reveal>
          <GitHubSection />
        </Reveal>

        <ParallaxSection>
          <Reveal>
            <Certifications />
          </Reveal>
        </ParallaxSection>

        <Reveal>
          <Contact />
        </Reveal>
        <ConsoleMessage />
        <TerminalMode />
        <Dock />
      </main>
    </PageReveal>
  );
}