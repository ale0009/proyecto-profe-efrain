'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap } from 'lucide-react'

export default function ConsultorPage() {
  const [query, setQuery] = useState('')
  const [response, setResponse] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!query.trim()) return

    setIsLoading(true)
    
    const responses = [
      "Para optimizar sus operaciones empresariales, recomiendo PostgreSQL como sistema de gestión de base de datos. Es robusto, cumple con ACID, soporta JSON y tiene extensiones poderosas como PostGIS para datos geoespaciales.",
      "Considerando sus necesidades, Kubernetes sería ideal para orquestar sus contenedores. Permite escalar aplicaciones, gestionar despliegues y garantizar alta disponibilidad con herramientas de monitoreo integradas.",
      "Para desarrollo web empresarial, Next.js + Node.js forman una combinación potente. Ofrecen renderizado híbrido, optimización automática y una arquitectura escalable para aplicaciones empresariales.",
      "Apache Superset sería excelente para análisis de datos empresariales. Proporciona visualizaciones interactivas, integración con múltiples fuentes de datos y capacidades de exploración avanzadas.",
      "Para seguridad y monitoreo, la combinación de ELK Stack (Elasticsearch, Logstash, Kibana) permite análisis de logs en tiempo real, visualizaciones personalizadas y alertas configurables."
    ]

    await new Promise(resolve => setTimeout(resolve, 1000))
    setResponse(responses[Math.floor(Math.random() * responses.length)])
    setIsLoading(false)
  }

  return (
    <main className="min-h-screen bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-800 to-gray-900 flex flex-col items-center justify-start p-4 sm:p-8">
      <div className="w-full max-w-4xl">
        <header className="flex items-center justify-center gap-4 mb-12">
          <GraduationCap className="h-12 w-12 text-blue-500" />
          <h1 className="text-4xl font-bold text-white text-center">
            Universidad ECCI
          </h1>
        </header>

        <Card className="w-full bg-gray-800/50 border-gray-700 backdrop-blur-sm">
          <CardContent className="p-6 sm:p-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Consultor de Software Empresarial
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="query" className="text-sm font-medium text-gray-200">
                  ¿Qué tipo de software empresarial está buscando?
                </label>
                <Input
                  id="query"
                  type="text"
                  placeholder="Ej: Necesito un sistema de gestión de recursos empresariales..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full bg-gray-700/50 text-white border-gray-600 focus:border-blue-500 h-12"
                  disabled={isLoading}
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12 text-lg"
                disabled={isLoading}
              >
                {isLoading ? "Generando respuesta..." : "Consultar"}
              </Button>
            </form>

            {response && (
              <div className="mt-8 space-y-4">
                <h3 className="text-xl font-semibold text-white">
                  Recomendación:
                </h3>
                <Card className="bg-gray-700/50 border-gray-600">
                  <CardContent className="p-6">
                    <p className="text-gray-200 leading-relaxed">
                      {response}
                    </p>
                  </CardContent>
                </Card>
              </div>
            )}
          </CardContent>
        </Card>

        <footer className="mt-8 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Universidad ECCI - Consultor de Software Empresarial
        </footer>
      </div>
    </main>
  )
}