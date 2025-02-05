export default function PrivateLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="bg-bgColor p-4 fixed w-screen">
        <h2 className="text-center text-white">Área Privada</h2>
      </div>
      {children}
    </div>
  );
}