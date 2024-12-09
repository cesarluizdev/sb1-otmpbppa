import React from 'react';

export function BankLogos() {
  const financialInstitutions = [
    {
      name: 'Banco Pan',
      logo: 'https://emprestimos.meliuz.com.br/static/media/pan.1c5e7d1e.svg'
    },
    {
      name: 'Mercantil',
      logo: 'https://emprestimos.meliuz.com.br/static/media/mercantil.e9c0c5c4.svg'
    },
    {
      name: 'BMG',
      logo: 'https://emprestimos.meliuz.com.br/static/media/bmg.1c5e7d1e.svg'
    },
    {
      name: 'Safra',
      logo: 'https://emprestimos.meliuz.com.br/static/media/safra.e9c0c5c4.svg'
    },
    {
      name: 'Daycoval',
      logo: 'https://emprestimos.meliuz.com.br/static/media/daycoval.1c5e7d1e.svg'
    },
    {
      name: 'C6 Bank',
      logo: 'https://emprestimos.meliuz.com.br/static/media/c6bank.e9c0c5c4.svg'
    },
    {
      name: 'Banrisul',
      logo: 'https://emprestimos.meliuz.com.br/static/media/banrisul.1c5e7d1e.svg'
    },
    {
      name: 'Cetelem',
      logo: 'https://emprestimos.meliuz.com.br/static/media/cetelem.e9c0c5c4.svg'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Instituições Financeiras Parceiras</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {financialInstitutions.map((institution) => (
            <div 
              key={institution.name} 
              className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <img
                src={institution.logo}
                alt={`Logo ${institution.name}`}
                className="h-12 w-auto object-contain filter hover:brightness-110 transition-all duration-300"
              />
            </div>
          ))}
        </div>
        <p className="text-center text-gray-600 mt-8 text-sm">
          *As instituições financeiras parceiras podem variar de acordo com a região e perfil do cliente
        </p>
      </div>
    </section>
  );
}