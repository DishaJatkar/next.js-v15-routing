import "./styles.css";

export default function Layout(props: {
  modal: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      {props.modal}
      {props.children}
    </div>
  );
}
