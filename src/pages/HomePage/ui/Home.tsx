import { Input } from '@/src/shared/ui/Input/Input';

export default function HomePage() {
  return (
    <main>
      <div style={{ position: 'relative' }}>
        <Input type="text" placeholder="прт" />
      </div>

      <br />
      <br />
      <Input type="text" placeholder="прт" variants="search" />
    </main>
  );
}
