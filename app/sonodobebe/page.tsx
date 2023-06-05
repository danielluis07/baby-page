import Image from "next/image";
import logos from "../../public/logos.png";
import visa from "../../public/visa.png";
import master from "../../public/master-card.png";
import pix from "../../public/pix.png";
import boleto from "../../public/boleto-logo.png";

const Home = () => {
  return (
    <main>
      <div className="max-w-[1200px] mt-8 mx-auto">
        <video src={"/sono.mp4"} controls />
        <div className="w-5/6 mx-auto py-10 text-center">
          <h1 className="sm:text-lg text-center font-bold">
            Pais exaustos: descubram o segredo para fazer seu bebê dormir a
            noite toda
          </h1>
          <br />
          <h1 className="sm:text-lg text-center font-bold">
            A solução definitiva para os problemas de sono do seu bebê.
            Transforme noites agitadas em tranquilidade
          </h1>
          <br />
          <h1 className="sm:text-lg text-center font-bold">
            Diga adeus às noites em claro. Aprenda as técnicas comprovadas para
            acalmar seu bebê e garantir seu sono profundo
          </h1>
        </div>
        <div className="flex justify-center">
          <button className="rounded-lg px-8 py-4 bg-green-400 hover:bg-green-300">
            <a href="https://pay.kiwify.com.br/JKceqDi" target="blank">
              SIM, QUERO MELHORAR O SONO DO MEU BEBÊ
            </a>
          </button>
        </div>
        <div className="flex pt-28 pb-20 flex-row gap-x-8 justify-center items-center">
          <div className="w-[80px]">
            <Image src={visa} alt="visa" />
          </div>
          <div className="w-[80px]">
            <Image src={master} alt="master-card" />
          </div>
          <div className="w-[80px]">
            <Image src={pix} alt="pix" />
          </div>
          <div className="w-[80px]">
            <Image src={boleto} alt="pix" />
          </div>
        </div>
        <div className="flex w-5/6 mx-auto justify-center items-center">
          <div className="flex bg-orange-300 hover:bg-orange-200 p-4 rounded-md justify-center flex-col gap-y-1">
            <a href="https://pay.kiwify.com.br/JKceqDi" target="blank">
              <p className="text-center cursor-pointer">R$36,50</p>
            </a>
            <a href="https://pay.kiwify.com.br/JKceqDi" target="blank">
              <p className="text-center cursor-pointer">ou</p>
            </a>
            <a href="https://pay.kiwify.com.br/JKceqDi" target="blank">
              <p className="text-center cursor-pointer">6x R$6,74</p>
            </a>
          </div>
        </div>
        <div className="mt-20 bg-slate-100 py-16">
          <div className="w-5/6 mx-auto justify-center items-center flex">
            <Image src={logos} width={500} height={500} alt="image" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
