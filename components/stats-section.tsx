export function StatsSection() {
  const companies = [
    { name: "TechCorp", logo: "/abstract-tech-logo.png" },
    { name: "InnovateAI", logo: "/ai-company-logo.png" },
    { name: "DataFlow", logo: "/data-company-logo.png" },
    { name: "AutoSys", logo: "/automation-company-logo.jpg" },
    { name: "SmartOps", logo: "/operations-company-logo.jpg" },
  ]

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="text-muted-foreground mb-8">Empresas que já transformaram seus processos</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {companies.map((company, index) => (
              <img
                key={index}
                src={company.logo || "/placeholder.svg"}
                alt={`${company.name} logo`}
                className="h-8 grayscale hover:grayscale-0 transition-all duration-300"
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Processos Automatizados</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">1000+</div>
            <div className="text-muted-foreground">Horas Economizadas</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">25+</div>
            <div className="text-muted-foreground">Empresas Atendidas</div>
          </div>
        </div>
      </div>
    </section>
  )
}
