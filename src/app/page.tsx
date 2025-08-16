import { FaApple, FaGoogle } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex items-center justify-center w-full mt-20 sm:mt-30">
      <div className="flex items-center gap-12">
        <div className="hidden sm:flex flex-col items-center mt-5">
          <svg
            width="150"
            height="150"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="10" y="10" width="60" height="60" fill="black" />
            <rect x="80" y="10" width="20" height="20" fill="black" />
            <rect x="110" y="10" width="60" height="60" fill="black" />
            <rect x="180" y="10" width="10" height="10" fill="black" />
            <rect x="10" y="80" width="20" height="20" fill="black" />
            <rect x="40" y="80" width="20" height="20" fill="black" />
            <rect x="70" y="80" width="10" height="10" fill="black" />
            <rect x="90" y="80" width="10" height="10" fill="black" />
            <rect x="110" y="80" width="20" height="20" fill="black" />
            <rect x="140" y="80" width="10" height="10" fill="black" />
            <rect x="160" y="80" width="10" height="10" fill="black" />
            <rect x="180" y="80" width="10" height="10" fill="black" />
            <rect x="10" y="110" width="60" height="60" fill="black" />
            <rect x="80" y="110" width="10" height="10" fill="black" />
            <rect x="100" y="110" width="10" height="10" fill="black" />
            <rect x="130" y="110" width="60" height="60" fill="black" />
            <rect x="10" y="180" width="10" height="10" fill="black" />
            <rect x="30" y="180" width="10" height="10" fill="black" />
            <rect x="50" y="180" width="10" height="10" fill="black" />
            <rect x="80" y="180" width="20" height="20" fill="black" />
            <rect x="110" y="180" width="10" height="10" fill="black" />
            <rect x="130" y="180" width="10" height="10" fill="black" />
            <rect x="150" y="180" width="10" height="10" fill="black" />
            <rect x="170" y="180" width="20" height="20" fill="black" />
          </svg>
          <div className="flex flex-col items-center mt-14 text-center">
            <h2 className="text-xl text-black font-bold">
              Login com código QR
            </h2>
            <p className="mt-2">
              Escaneie este código com o{" "}
              <span className="text-green-600">aplicativo Poloniex</span> para
            </p>
            <p>um login rápido</p>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl text-black font-bold">Login da conta</h2>
          <div className="mt-5 flex flex-col gap-4">
            <div>
              <p className="text-gray-400 text-xs">E-mail / Telefone</p>
              <input
                className="border border-gray-300 focus:border-green-300 outline-none rounded-xs py-2 px-14 mt-1"
                type="text"
              />
            </div>
            <button className="bg-black text-white py-3 rounded-xs">
              Próximo
            </button>
            <p className="text-sm text-gray-400 font-medium">
              Não tem uma conta?{" "}
              <span className="text-green-600 underline">Cadastre-se</span>
            </p>
            <div className="flex items-center w-full my-4">
              <span className="flex-grow border-t border-gray-300"></span>
              <span className="mx-2 text-gray-400 text-xs">Ou outro</span>
              <span className="flex-grow border-t border-gray-300"></span>
            </div>
            <div className="flex gap-4">
              <button className="flex-1 py-3 rounded-md flex items-center justify-center bg-gray-200 hover:bg-gray-300 cursor-pointer transition-colors duration-300 transform">
                <FaApple size={20} />
              </button>
              <button className="flex-1 py-3 rounded-md flex items-center justify-center bg-gray-200 hover:bg-gray-300 cursor-pointer transition-colors duration-300 transform">
                <FaGoogle size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
