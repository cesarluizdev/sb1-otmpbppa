import React from 'react';
import { ClipboardCheck, MessageSquare, ThumbsUp } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      icon: <ClipboardCheck className="h-12 w-12 text-blue-600" />,
      title: 'Preencha o Formulário',
      description: 'Forneça suas informações básicas de forma rápida e segura.',
    },
    {
      icon: <MessageSquare className="h-12 w-12 text-blue-600" />,
      title: 'Análise Personalizada',
      description: 'Nossa equipe fará uma análise completa do seu perfil.',
    },
    {
      icon: <ThumbsUp className="h-12 w-12 text-blue-600" />,
      title: 'Aumento Aprovado',
      description: 'Receba seu aumento de limite em até 24 horas.',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Como Funciona</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}