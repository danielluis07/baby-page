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
        <div className="flex justify-center">
          <button className="rounded-lg px-8 py-4 bg-green-400 hover:bg-green-300">
            <a href="https://pay.kiwify.com.br/JKceqDi" target="blank">
              SIM, QUERO MELHORAR O SONO DO MEU BEBÊ
            </a>
          </button>
        </div>
        <div className="flex pt-28 pb-28 flex-row gap-x-8 justify-center items-center">
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
