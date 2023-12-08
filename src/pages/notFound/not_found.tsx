// import NuitTree from "@/assets/logo/nuit_2020.svg";

// const NotFound = () => {
//   return (
//     <div className="h-full flex items-center justify-center flex-col">
//       <h1>404</h1>
//       <p>Page not found</p>
//       <img src={NuitTree} alt="logo" width={200} />
//     </div>
//   );
// };

// export default NotFound;

import NuitTree from "@/assets/logo/nuit_2020.svg";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="h-full flex items-center justify-center flex-col">
      <Button variant="nuit2015">Hello</Button>
    </div>
  );
};

export default NotFound;
