import React from "react";

const Home = () => {
  return (
    <main>
      <div className="max-w-[1200px] mt-8 mx-auto">
        <video src={"/sono.mp4"} controls />
        <div className="w-5/6 mx-auto py-10 text-center">
          <h1 className="sm:text-lg text-center font-bold">
            Descubra os segredos para proporcionar noites inteiras de sono
            tranquilo ao seu bebê
          </h1>
          <br />
          <h1 className="sm:text-lg text-center font-bold">
            Aprenda estratégias comprovadas para estabelecer uma rotina de sono
            saudável e eficiente para seu bebê
          </h1>
          <br />
          <h1 className="sm:text-lg text-center font-bold">
            Diga adeus as noites mal dormidas e transforme a rotina de sua
            fofura, encontrando as melhores técnicas para garantir um sono
            reparador sem interrupções
          </h1>
        </div>
        <div className="mt-20 pb-28 flex justify-center">
          <button className="rounded-lg px-8 py-4 bg-green-400 hover:bg-green-300">
            <a
              href="https://hotmart.com/pt-br/marketplace/produtos/introdulcao-alimentar-para-bebes-50-receitas-de-papinhas-saborosas-e-nutritivas/T82163193B"
              target="blank">
              SAIBA MAIS
            </a>
          </button>
        </div>
      </div>
    </main>
  );
};

export default Home;
