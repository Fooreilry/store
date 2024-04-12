import { Input } from '@/src/shared/ui/Input/Input';
import { Button, ButtonVariants } from '@/src/shared/ui/Button';
import { Minus } from 'lucide-react';

export default function HomePage() {
  return (
    <main>
      <div style={{ position: 'relative' }}>
        <Input type="text" placeholder="прт" />
      </div>

      <br />
      <br />
      <Input type="text" placeholder="прт" variants="search" />
      <Button variant={ButtonVariants.SECONDARY} icon={<Minus />} iconPosition="left">
        Button
      </Button>
      <Button variant={ButtonVariants.PRIMARY} icon={<Minus />} iconPosition="left">
        Button
      </Button>
    </main>
  );
}
