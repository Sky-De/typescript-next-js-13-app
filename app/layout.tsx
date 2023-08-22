import "@styles/globals.css";

export const metedata = {
  title: "",
  description: "",
};
type Props = {
  children: React.ReactNode;
};
const rootLayout = ({ children }: Props): JSX.Element => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="grandiant" />
        </div>
        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default rootLayout;
