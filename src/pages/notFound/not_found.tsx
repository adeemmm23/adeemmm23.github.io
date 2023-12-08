import NuitTree from "@/assets/logo/nuit_2020.svg";

const NotFound = () => {
  return (
    <div className="h-full flex items-center justify-center flex-col">
      <img src={NuitTree} alt="logo" width={200} />
      <h1 className="text-3xl font-Inter font-semibold">404</h1>
      <p>Page not found</p>
    </div>
  );
};

export default NotFound;
