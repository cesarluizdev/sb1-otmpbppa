import React from 'react';
import { Users, CreditCard, Award } from 'lucide-react';

export function Stats() {
  const stats = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      value: '10.000+',
      label: 'Clientes Satisfeitos'
    },
    {
      icon: <CreditCard className="h-8 w-8 text-blue-600" />,
      value: 'R$ 50M+',
      label: 'Em Limites Aprovados'
    },
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      value: '98%',
      label: 'Taxa de Aprovação'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}