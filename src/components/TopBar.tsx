import Image from "next/image";

export default function TopBar() {
  return (
    <div className="w-full bg-white px-3 py-2">
      <div className="flex items-center">
        <Image
          src="/Captura de tela 2025-08-15 230303.png"
          alt="Poloniex Logo"
          width={130}
          height={50}
          className="object-contain"
        />
      </div>
    </div>
  );
}