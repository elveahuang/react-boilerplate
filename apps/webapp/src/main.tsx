import App from '@/App';
import '@/theme/default.css';
import { setup } from '@/utils';
import { log } from '@commons/core/utils';
import '@commons/webapp/theme/default.css';
import { createRoot } from 'react-dom/client';

setup().then((): void => {
    createRoot(document.getElementById('app') as HTMLElement).render(<App />);
    log(`App for webapp has been started.`);
});
