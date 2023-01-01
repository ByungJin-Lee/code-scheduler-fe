import Header from "../../components/Header";

type MainTemplateProps = {
  children: React.ReactNode;
};

const MainTemplate = ({ children }: MainTemplateProps) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

MainTemplate.defaultProps = {};

export default MainTemplate;
