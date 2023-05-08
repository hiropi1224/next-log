import { tv } from 'tailwind-variants';
import { DashboardShell } from '@/app/components/dashboardShell';
import { DashboardTable } from '@/app/components/dashboardTable';

const contents = tv({
  slots: {
    base: 'mx-auto max-w-screen-lg px-4 md:px-8',
    area: 'm-2',
  },
});

const { base } = contents();

export default async function Blogs(): Promise<JSX.Element> {
  return (
    <main className={base()}>
      <DashboardShell>
        <DashboardTable />
      </DashboardShell>
    </main>
  );
}
