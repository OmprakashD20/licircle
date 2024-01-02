import NavBar from "@/components/Header/NavBar";
import Footer from "@/components/Footer/Footer";
import AnimatedButton from "@/components/Shared/Button";

const Error = () => {
  return (
    <>
      <NavBar />
      <main className="min-h-full place-items-center bg-background px-6 py-20 sm:py-16 lg:px-8">
        <div className="text-center my-12">
          <p className="text-xl font-semibold text-primary font-bebasNeue">
            404
          </p>
          <h1 className="mt-4 text-3xl font-bold font-quando tracking-tight text-gray-900 sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 font-oxygen text-base leading-7 text-gray-600">
            Sorry, we couldn't find the page you're looking for.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Error;
