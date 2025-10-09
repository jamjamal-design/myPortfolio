import Link from "next/link"
import { Card } from "@/components/ui/card"
import { AnimatedSection } from "@/components/animated-section"
import { PortfolioHeader } from "@/components/portfolio-header"
import { getAllProjects } from "@/lib/data"

export const revalidate = 0 // static page

export default function ProjectsPage() {
  const projects = getAllProjects()

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="fixed inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:20px_20px] opacity-20 z-0"></div>
      <PortfolioHeader />

      <div className="relative z-10 container mx-auto p-6 pt-24">
        <AnimatedSection animation="fade-in">
          <h1 className="text-3xl font-bold mb-6">Projects</h1>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <AnimatedSection key={p.slug} animation="fade-up">
              <Card className="p-4">
                <Link href={`/projects/${p.slug}`} className="block">
                  <h2 className="text-xl font-semibold">{p.title}</h2>
                  <p className="text-sm text-zinc-400">{p.shortDescription}</p>
                </Link>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </main>
  )
}
