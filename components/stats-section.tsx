export function StatsSection() {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground text-sm md:text-base">Processos Automatizados</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-accent mb-2">1000+</div>
            <div className="text-muted-foreground text-sm md:text-base">Horas Economizadas</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">25+</div>
            <div className="text-muted-foreground text-sm md:text-base">Empresas Atendidas</div>
          </div>
        </div>
      </div>
    </section>
  )
}
