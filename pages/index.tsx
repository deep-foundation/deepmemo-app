import { PermissionPage } from '../imports/permission-page';
import { StartPage } from '../imports/start-page';
import { Connection } from '../src/connection';
import { AnimationProvider } from '../src/context';
import { i18nGetStaticProps } from '../src/i18n';

export default function Page() {

  return (
    <AnimationProvider>
      <StartPage />
      <Connection />
      <PermissionPage />
    </AnimationProvider>
  );
}

export async function getStaticProps(arg) {
  return await i18nGetStaticProps(arg);
}