import { FormLogin } from '@/src/entities/FormLogin/FormLogin';
import { FormRegistration } from '@/src/entities/FormRegistration/FormRegistration';
import { Card, CardContent } from '@/src/shared/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/src/shared/ui/tabs';

export default function SignIn() {
  return (
    <main className="flex justify-center items-center">
      <section className="w-full xs:max-w-[400px]">
        <Card className="bg-secondary/30 shadow-lg">
          <CardContent>
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
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
