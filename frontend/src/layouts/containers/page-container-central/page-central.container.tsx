import appStyles from "../../../styles/app.styles.module.scss";

type PageContainerCentralProps = {
  children: React.ReactNode;
};

export const PageCentralContainer: React.FC<PageContainerCentralProps> = ({
  children,
}) => {
  return (
    <div className={appStyles["page"]}>
      <div
        className={`${appStyles["base-container"]} ${appStyles["container-center"]}`}
      >
        {children}
      </div>
    </div>
  );
};
