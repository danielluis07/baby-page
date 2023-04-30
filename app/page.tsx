import { Righteous } from "next/font/google";

const righteous = Righteous({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <>
      <div className="w-full h-[400px] bg-[url('../public/mom-and-baby-2.jpg')] text-center sm:text-start sm:h-[800px] sm:bg-[url('../public/mom-and-baby.jpg')] sm:bg-cover sm:bg-no-repeat">
        <div className="w-5/6 h-full mx-auto flex items-center">
          <div className="sm:w-1/2 leading-[4rem] font-extrabold">
            <h1
              className={`md:text-[34px] text-white sm:text-yellow-900 ${righteous.className}`}>
              DESCUBRA COMO TORNAR A INTRODUÇÃO ALIMENTAR UMA EXPERIÊNCIA
              SAUDÁVEL E PREZEROSA PARA O SEU PEQUENO
            </h1>
          </div>
        </div>
      </div>
      <div className="max-x-[2520px] mx-auto pb-20 xl:px-20 md:px-10 sm:px-2 px-4">
        <div className="flex flex-col gap-4 py-20">
          <h1 className="text-center sm:text-4xl pb-10">
            INTRODUÇÃO ALIMENTAR PARA BEBÊS
          </h1>
          <p className="text-center sm:text-lg">
            Ebook de introdução alimentar com 50 receitas nutritivas e saborosas
            para conquistar o paladar do seu bebê
          </p>
          <p className="text-center sm:text-lg">
            Guia completo ára uma introdução alimentar segura e prazerosa,
            criando hábitos alimentares saudáveis desde o início da vida
          </p>
          <p className="text-center sm:text-lg">
            Receitas criativas para variar a papinha do seu bebê e proporcionar
            uma alimentação completa e variada desde o início da vida
          </p>
        </div>
        <div className="max-w-[1500px] mx-auto">
          <video src={"/myvideo.mp4"} controls />
          <div className="mt-20 flex justify-center">
            <button className="rounded-lg px-8 py-4 bg-green-400 hover:bg-green-300">
              <a
                href="https://hotmart.com/pt-br/marketplace/produtos/introdulcao-alimentar-para-bebes-50-receitas-de-papinhas-saborosas-e-nutritivas/T82163193B"
                target="blank">
                QUERO COMPRAR
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
