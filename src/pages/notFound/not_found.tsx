import NuitTree from "@/assets/logo/nuit_2020.svg";

const NotFound = () => {
  return (
    <div className="h-full flex items-center justify-center flex-col">
      <h1>404</h1>
      <p>Page not found</p>
      <img src={NuitTree} alt="logo" width={200} />
    </div>
  );
};

export default NotFound;
