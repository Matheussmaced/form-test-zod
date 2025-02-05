import Form from "@/components/home-page/form";

export default function Home() {
  return (
    <main className="bg-bgColor bg-opacity-20 h-screen w-screen flex justify-center">
      <div className="bg-white flex flex-col w-min m-auto justify-center px-12 py-14">
        <Form />
      </div>
    </main>
  );
}
