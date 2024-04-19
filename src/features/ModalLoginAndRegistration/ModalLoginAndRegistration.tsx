import { FormLogin } from '@/src/entities/FormLogin/FormLogin';
import { FormRegistration } from '@/src/entities/FormRegistration/FormRegistration';
import { Button } from '@/src/shared/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from '@/src/shared/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/src/shared/ui/tabs';

export const ModalLoginAndRegistration = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className=" font-bold ">Войти</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-secondary">
        <DialogHeader>
          <Tabs defaultValue="login" className="mt-[10px] ">
            <TabsList className="grid w-full grid-cols-2 bg-primary/10">
              <TabsTrigger
                value="login"
                className="whitespace-pre-wrap data-[state=active]:bg-primary data-[state=active]:text-white text-gray-400 "
              >
                Вход
              </TabsTrigger>
              <TabsTrigger
                value="registration"
                className="whitespace-pre-wrap data-[state=active]:bg-primary data-[state=active]:text-white text-gray-400 "
              >
                Регистрация
              </TabsTrigger>
            </TabsList>
            <TabsContent value="login">
              <FormLogin />
            </TabsContent>
            <TabsContent value="registration">
              <FormRegistration />
            </TabsContent>
          </Tabs>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
