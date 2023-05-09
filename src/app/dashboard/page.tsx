import { tv } from 'tailwind-variants';
import { DashboardShell } from '@/app/components/dashboardShell';
import { PaceZoneTable } from '@/app/components/paceZoneTable';
import { PersonalRecordTable } from '@/app/components/personalRecordTable';

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
        <PersonalRecordTable />
        <PaceZoneTable />
      </DashboardShell>
    </main>
  );
}
