import React from "react";

const Cta = () => {
  return (
    <section className="pt-14 pb-2 flex p-10 min-[650px]:pt-2 flex-col h-[55dvh] bg-primary xl:flex-row xl:items-center xl:-mt-10">
      <div>
        <h1 className="mb-5 font-bold font-heading text-accent text-4xl xl:text-6xl max-[375px]:text-3xl">
          Discover the Taste of Fun
        </h1>
        <p className="text-secondary original font-body mt-1 xl:text-xl xl:my-2">
          Find your nearest store and enjoy a refreshing Dr Pepper!
        </p>
      </div>

      <div className="xl:ml-auto xl:mr-[10dvw]">
        <button className="bg-accent cursor-pointer px-4 py-2 rounded-md border-none my-2 font-body font-bold text-primary hover:text-secondary">
          Try
        </button>
      </div>
    </section>
  );
};

export default Cta;
