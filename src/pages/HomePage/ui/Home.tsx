import NotFound from '@/app/not-found';
import { Button } from '@/src/shared/ui/button';
import { ThemeButton } from '@/src/widgets/ThemeButton/ThemeButton';

export default function HomePage() {
  return (
    <main>
      <Button>Button</Button>
      <ThemeButton />

      <NotFound />
    </main>
  );
}
