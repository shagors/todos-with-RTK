import { ReactNode } from "react";

type TContainerProps = {
  children: ReactNode;
};

const Container = ({ children }: TContainerProps) => {
  return <div className="w-full max-w-7xl mx-auto h-screen">{children}</div>;
};

export default Container;
