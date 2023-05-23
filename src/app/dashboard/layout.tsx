export const metadata = {
  title: 'Dashboard',
  description: 'アクティビティダッシュボード',
};

export default function Layout(props: {
  children: React.ReactNode;
  health: React.ReactNode;
}): JSX.Element {
  return (
    <>
      {props.children}
      {props.health}
    </>
  );
}
