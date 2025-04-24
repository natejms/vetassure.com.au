// app/page.tsx
import LandingPage2 from "./components/landing-page-2";
import MainApp from "./components/main-app";

const SITE_OPEN = false;

export default function Home() {
  if (!SITE_OPEN) return <LandingPage2 />;
  return <MainApp />;
}
