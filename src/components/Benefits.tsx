import React from 'react';
import { Shield, Clock, Percent, Users } from 'lucide-react';

export function Benefits() {
  const benefits = [
    {
      icon: <Shield className="h-10 w-10 text-blue-600" />,
      title: 'Totalmente Seguro',
      description: 'Seus dados são protegidos com a mais alta tecnologia de segurança.',
    },
    {
      icon: <Clock className="h-10 w-10 text-blue-600" />,
      title: 'Rápido e Prático',
      description: 'Processo simplificado com resposta em até 24 horas.',
    },
    {
      icon: <Percent className="h-10 w-10 text-blue-600" />,
      title: 'Melhores Taxas',
      description: 'Condições especiais e taxas competitivas para você.',
    },
    {
      icon: <Users className="h-10 w-10 text-blue-600" />,
      title: 'Atendimento Personalizado',
      description: 'Suporte dedicado para auxiliar em todo o processo.',
    },
  ];

  return (
    <section id="benefits" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Benefícios</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-center mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-center">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}