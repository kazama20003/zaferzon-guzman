import {
  FloatingServicesButton,
  Hero,
  PracticeAreas,
  ProcessSection,
  ReviewsSection,
  Solutions,
  TeamSection,
} from '@/components/home';

export default function Home() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <section id="inicio" className="px-4 pb-16 pt-4 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-[1710px]">
          <Hero />
        </div>
      </section>

      <Solutions />
      <PracticeAreas />
      <ProcessSection />
      <TeamSection />
      <ReviewsSection />
      <FloatingServicesButton />
    </main>
  );
}
