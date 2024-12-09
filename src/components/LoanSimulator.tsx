import React, { useState } from 'react';
import { Calculator, ArrowRight } from 'lucide-react';

export function LoanSimulator() {
  const [loanAmount, setLoanAmount] = useState(5000);
  const [installments, setInstallments] = useState(12);
  
  const interestRate = 0.0299; // 2.99% monthly interest rate
  const monthlyPayment = calculateMonthlyPayment(loanAmount, installments, interestRate);

  function calculateMonthlyPayment(principal: number, months: number, rate: number) {
    const monthlyRate = rate;
    const payment = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / 
                   (Math.pow(1 + monthlyRate, months) - 1);
    return payment.toFixed(2);
  }

  return (
    <div className="bg-white rounded-lg shadow-xl p-6 md:p-8 w-full max-w-2xl mx-auto">
      <div className="flex items-center mb-6">
        <Calculator className="h-8 w-8 text-blue-600 mr-3" />
        <h3 className="text-2xl font-bold">Simulador de Empréstimo</h3>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Valor do Empréstimo: R$ {loanAmount.toLocaleString()}
          </label>
          <input
            type="range"
            min="1000"
            max="50000"
            step="100"
            value={loanAmount}
            onChange={(e) => setLoanAmount(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-sm text-gray-600 mt-1">
            <span>R$ 1.000</span>
            <span>R$ 50.000</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Número de Parcelas: {installments}x
          </label>
          <input
            type="range"
            min="3"
            max="24"
            value={installments}
            onChange={(e) => setInstallments(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-sm text-gray-600 mt-1">
            <span>3x</span>
            <span>24x</span>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600">Valor da Parcela</p>
              <p className="text-2xl font-bold text-blue-600">
                R$ {monthlyPayment}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Taxa de Juros</p>
              <p className="text-2xl font-bold text-blue-600">2,99% a.m.</p>
            </div>
          </div>
        </div>

        <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center">
          Solicitar Empréstimo
          <ArrowRight className="ml-2 h-5 w-5" />
        </button>
      </div>
    </div>
  );
}