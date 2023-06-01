import { tv } from 'tailwind-variants';

export const metadata = {
  title: 'Dashboard',
  description: 'アクティビティダッシュボード',
};

const dashboard = tv({
  slots: {
    base: 'mx-auto max-w-screen-lg px-4',
  },
});

const { base } = dashboard();

export default function Layout(props: {
  children: React.ReactNode;
  health: React.ReactNode;
  activity: React.ReactNode;
}): JSX.Element {
  return (
    <main className={base()}>
      {props.children}
      {props.health}
      {props.activity}
    </main>
  );
}
