import React from 'react';
import { LoanSimulator } from './LoanSimulator';

export function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Aumente seu limite de crédito hoje mesmo
            </h1>
            <p className="text-xl mb-8">
              Solução rápida e segura para aumentar seu limite de cartão de crédito
              em qualquer banco.
            </p>
          </div>
          <div className="md:w-1/2">
            <LoanSimulator />
          </div>
        </div>
      </div>
    </section>
  );
}