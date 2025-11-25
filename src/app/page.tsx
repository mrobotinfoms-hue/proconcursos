'use client'

import Link from 'next/link'
import { Navbar } from '@/components/custom/navbar'
import { Footer } from '@/components/custom/footer'
import {
  Upload,
  Brain,
  BarChart3,
  Trophy,
  Clock,
  CheckCircle2,
  Zap,
  Target,
  Download,
  Printer,
  Star,
  ArrowRight,
  Sparkles,
} from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Estude para concursos públicos com{' '}
              <span className="relative">
                simulados personalizados{' '}
                <span className="absolute bottom-2 left-0 right-0 h-3 bg-purple-200 dark:bg-purple-900 -z-10" />
              </span>{' '}
              gerados por inteligência artificial.
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Análise de desempenho, gamificação e muito mais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/#get-started"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Começar Grátis
              </Link>
              <button className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-lg hover:border-blue-600 transition-colors font-medium">
                Ver Demo
              </button>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-6">
              ✨ Teste grátis: 1 edital + 1 simulado com até 3 matérias
            </p>
          </div>
          <div className="hidden md:block bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-3xl h-96 flex items-center justify-center">
            <Sparkles size={100} className="text-gray-400" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            4 passos simples para turbinar seus estudos e conquistar sua aprovação
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-16">
            Processo intuitivo e eficiente
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Upload, title: 'Upload Edital', description: 'Envie seu edital PDF' },
              { icon: Brain, title: 'IA Analisa', description: 'Processamento automático' },
              { icon: BarChart3, title: 'Simulado Gerado', description: 'Prova personalizada' },
              { icon: Trophy, title: 'Aprove!', description: 'Estude e conquiste' },
            ].map((feature, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-900 p-8 rounded-xl border border-gray-200 dark:border-gray-700 text-center hover:shadow-lg transition-shadow">
                <feature.icon size={40} className="mx-auto mb-4 text-blue-600" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          Recursos exclusivos que vão acelerar sua aprovação
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {[
            { icon: Clock, title: 'Cronômetro', desc: 'Pratique dentro do tempo real' },
            { icon: BarChart3, title: 'Análise', desc: 'Veja seu progresso detalhado' },
            { icon: Download, title: 'Download', desc: 'Baixe seus simulados' },
            { icon: Printer, title: 'Impressão', desc: 'Imprima para estudar offline' },
            { icon: Target, title: 'Foco', desc: 'Estude por disciplina' },
            { icon: Zap, title: 'Rápido', desc: 'Geração em segundos' },
          ].map((benefit, idx) => (
            <div key={idx} className="flex gap-4">
              <benefit.icon size={32} className="text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-1">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{benefit.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="get-started" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            Comece grátis e desbloqueie todo o potencial quando estiver pronto
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {[
              {
                name: 'Gratuito',
                price: 'R$ 0',
                desc: 'Para testar a plataforma',
                features: ['1 simulado grátis', 'Até 3 matérias', 'Sem cartão de crédito'],
              },
              {
                name: 'PRO',
                price: 'R$ 24,90',
                period: '/mês',
                desc: 'Plano completo',
                features: [
                  'Simulados ilimitados',
                  'Todas as matérias',
                  'Analytics completo',
                  'Suporte prioritário',
                ],
              },
            ].map((plan, idx) => (
              <div
                key={idx}
                className={`p-8 rounded-xl border-2 ${
                  idx === 1
                    ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20'
                    : 'border-gray-200 dark:border-gray-700'
                }`}
              >
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{plan.desc}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-gray-600 dark:text-gray-400">{plan.period}</span>}
                </div>
                <button
                  className={`w-full py-3 rounded-lg font-medium mb-6 ${
                    idx === 1
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'border-2 border-gray-300 dark:border-gray-600 hover:border-blue-600'
                  } transition-colors`}
                >
                  {idx === 0 ? 'Começar Grátis' : 'Assinar Agora'}
                </button>
                <ul className="space-y-3">
                  {plan.features?.map((feature, fidx) => (
                    <li key={fidx} className="flex items-center gap-2">
                      <CheckCircle2 size={20} className="text-green-600" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          Histórias reais de aprovação com o PRO CONCURSOS
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {[
            {
              name: 'Maria Silva',
              role: 'Aprovada em Concurso Federal',
              text: '"Aprovei em apenas 3 meses usando o PRO CONCURSOS. Os simulados são incríveis!"',
            },
            {
              name: 'João Santos',
              role: 'Policial Federal',
              text: '"A plataforma me ajudou a organizar meus estudos e focar nas disciplinas mais difíceis."',
            },
            {
              name: 'Ana Costa',
              role: 'Servidora Pública',
              text: '"Melhor investimento para estudar. Recomendo para todos que querem passar em concurso."',
            },
          ].map((testimonial, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">"{testimonial.text}"</p>
              <p className="font-bold">{testimonial.name}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Junte-se a milhares de aprovados que transformaram seus estudos com o PRO CONCURSOS
          </h2>
          <Link
            href="/#get-started"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-bold"
          >
            Começar Gratuitamente
          </Link>
          <p className="text-blue-100 mt-6">✨ Sem cartão de crédito • Teste completo grátis • Cancele quando quiser</p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
