'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Navbar } from '@/components/custom/navbar'
import { Footer } from '@/components/custom/footer'
import { CheckCircle2, ArrowLeft, CreditCard, Shield, Zap, Clock } from 'lucide-react'

export default function PlanosPage() {
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'annual' | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    setTimeout(() => {
      setIsProcessing(false)
      alert('Pagamento em desenvolvimento - gateway será integrado no próximo módulo')
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-12 px-4 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8">
          <ArrowLeft size={20} />
          Voltar
        </Link>

        <h1 className="text-5xl font-bold mb-4">
          Invista na sua aprovação com a plataforma mais completa de simulados para concursos
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Escolha o plano que melhor se adequa ao seu objetivo
        </p>
      </section>

      {/* Plans Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {[
            {
              name: 'Plano Mensal',
              price: 'R$ 24,90',
              period: '/mês',
              type: 'monthly',
              features: [
                'Simulados ilimitados',
                'Todas as matérias',
                'Analytics completo',
                'Suporte prioritário',
                'Baixar PDFs',
                'Cancelar quando quiser',
              ],
            },
            {
              name: 'Plano Anual',
              price: 'R$ 199,90',
              period: '/ano',
              type: 'annual',
              badge: 'Economize 33%',
              features: [
                'Simulados ilimitados',
                'Todas as matérias',
                'Analytics completo',
                'Suporte prioritário',
                'Baixar PDFs',
                '12 meses de acesso',
                'Certificados de progresso',
              ],
            },
          ].map((plan, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-xl border-2 relative ${
                plan.type === 'annual'
                  ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20'
                  : 'border-gray-200 dark:border-gray-700'
              }`}
            >
              {plan.badge && (
                <div className="absolute top-0 right-4 -translate-y-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                  {plan.badge}
                </div>
              )}

              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold">{plan.price}</span>
                <span className="text-gray-600 dark:text-gray-400">{plan.period}</span>
              </div>

              <button
                onClick={() => setSelectedPlan(plan.type as 'monthly' | 'annual')}
                className={`w-full py-3 rounded-lg font-bold mb-6 transition-colors ${
                  plan.type === 'annual'
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'border-2 border-gray-300 dark:border-gray-600 hover:border-blue-600'
                }`}
              >
                Escolher Plano
              </button>

              <ul className="space-y-3">
                {plan.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-center gap-2">
                    <CheckCircle2 size={20} className="text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Form Section */}
      {selectedPlan && (
        <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800 max-w-4xl mx-auto rounded-xl">
          <h2 className="text-3xl font-bold mb-2">
            Complete os dados para ativar seu plano{' '}
            <span className="text-blue-600">
              {selectedPlan === 'monthly' ? 'Mensal' : 'Anual'}
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            🔒 Seus dados estão protegidos com criptografia SSL
          </p>

          <form onSubmit={handlePayment} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold mb-2">Nome Completo</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-900"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-900"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold mb-2">CPF</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-900"
                  placeholder="000.000.000-00"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Telefone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-900"
                  required
                />
              </div>
            </div>

            <div className="border-t border-gray-300 dark:border-gray-700 pt-6 mt-6">
              <h3 className="font-bold text-lg mb-4">Dados do Cartão</h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold mb-2">Número do Cartão</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-900"
                    placeholder="0000 0000 0000 0000"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-bold mb-2">Validade</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-900"
                      placeholder="MM/AA"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">CVV</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-900"
                      placeholder="000"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">Nome no Cartão</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-900"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isProcessing}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-8"
            >
              {isProcessing ? 'Processando...' : 'Confirmar Pagamento'}
            </button>

            <div className="flex gap-4 text-sm text-gray-600 dark:text-gray-400 justify-center">
              <div className="flex items-center gap-1">
                <Shield size={16} />
                <span>Seguro com SSL</span>
              </div>
              <div className="flex items-center gap-1">
                <CreditCard size={16} />
                <span>Cartão protegido</span>
              </div>
            </div>
          </form>
        </section>
      )}

      {/* FAQ */}
      <section className="py-20 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">Perguntas Frequentes</h2>

        <div className="space-y-6">
          {[
            {
              q: 'Posso cancelar minha assinatura?',
              a: 'Sim! Você pode cancelar sua assinatura a qualquer momento, sem multa ou questionamentos.',
            },
            {
              q: 'Qual é a diferença entre os planos?',
              a: 'O plano anual oferece uma economia de 33% comparado ao mensal, além de acesso a certificados exclusivos.',
            },
            {
              q: 'Como recebo meu acesso?',
              a: 'Imediatamente após confirmar o pagamento, você receberá um email com suas credenciais de acesso.',
            },
          ].map((faq, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-lg mb-2">{faq.q}</h3>
              <p className="text-gray-600 dark:text-gray-400">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
