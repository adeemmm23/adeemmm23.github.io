import NuitTree from "@/assets/logo/nuit_2020.svg";

const NotFound = () => {
  return (
    <div className="h-full flex items-center justify-center flex-col gap-2">
      <img src={NuitTree} alt="logo" width={200} />
      <h1 className="text-3xl font-Inter font-semibold">404</h1>
      <h2 className="text-xl font-Inter font-semibold">
        Vous vous êtes perdu ?
      </h2>
      <p className="max-w-4xl text-center">
        Vous avez navigué à travers le dédale infini des résultats de recherche
        pour découvrir la Nuit de l'Info 2020, l'événement qui pratiquait la
        distanciation sociale, même avec lui-même !
      </p>
    </div>
  );
};

export default NotFound;
