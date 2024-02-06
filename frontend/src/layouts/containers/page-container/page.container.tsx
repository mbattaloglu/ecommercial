import appStyles from "../../../styles/app.styles.module.scss";

type PageContainerProps = {
  children: React.ReactNode;
};

export const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
  return (
    <div className={appStyles["page"]}>
      <div
        className={`${appStyles["base-container"]} ${appStyles["container"]}`}
      >
        {children}
      </div>
    </div>
  );
};
