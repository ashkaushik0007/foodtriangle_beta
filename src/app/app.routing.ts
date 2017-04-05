import { Routes, RouterModule } from '@angular/router';

import { HomeComponent, LoginComponent, RegisterComponent  } from './components/index';
import { AuthGuard } from './guards/index';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);