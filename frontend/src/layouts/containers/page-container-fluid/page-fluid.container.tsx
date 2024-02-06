import appStyles from "../../../styles/app.styles.module.scss";

type PageContainerFluidProps = {
  children: React.ReactNode;
};

export const PageContainerFluid: React.FC<PageContainerFluidProps> = ({
  children,
}) => {
  return (
    <div className={appStyles["page"]}>
      <div
        className={`${appStyles["base-container"]} ${appStyles["container-fluid"]}`}
      >
        {children}
      </div>
    </div>
  );
};
