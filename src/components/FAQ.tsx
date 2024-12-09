import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqs = [
    {
      question: 'Como funciona o processo de aumento de limite?',
      answer: 'Nosso processo é simples e rápido. Após preencher o formulário, nossa equipe fará uma análise do seu perfil e entrará em contato com as melhores opções para você em até 24 horas.'
    },
    {
      question: 'Quais documentos são necessários?',
      answer: 'Geralmente solicitamos RG, CPF, comprovante de renda e comprovante de residência. Documentos adicionais podem ser solicitados conforme necessidade.'
    },
    {
      question: 'Em quanto tempo recebo o aumento?',
      answer: 'O prazo médio é de 24 a 48 horas após a aprovação da solicitação, podendo variar de acordo com o banco.'
    },
    {
      question: 'Existe garantia de aprovação?',
      answer: 'Cada caso é analisado individualmente, mas temos uma taxa de aprovação de 98% dos casos.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Perguntas Frequentes</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5" />
                ) : (
                  <ChevronDown className="h-5 w-5" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}