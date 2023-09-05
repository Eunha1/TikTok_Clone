// Layout
import { HeaderOnly } from '@/layouts';
import routesConfig from '@/config/routes';
// Pages
import Home from '@/pages/Home';
import Following from '@/pages/Following';
import Profile from '@/pages/Profile';
import Upload from '@/pages/Upload';
import Search from '@/pages/Search';
import Download from '@/pages/Download';
import Explore from '@/pages/Explore';
import Live from '@/pages/Live';
// Route
const publicRoutes = [
   { path: routesConfig.home, component: Home },
   { path: routesConfig.following, component: Following },
   { path: routesConfig.explore, component: Explore },
   { path: routesConfig.live, component: Live },
   { path: routesConfig.profile, component: Profile },
   { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
   { path: routesConfig.search, component: Search, layout: null },
   { path: routesConfig.download, component: Download },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
