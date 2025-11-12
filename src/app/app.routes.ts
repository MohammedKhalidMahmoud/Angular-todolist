import { Routes } from '@angular/router';
import { RoleSelectionComponent } from './features/pages/role-selection.component.ts/role-selection.component';
// import { App } from './app';
import { authGuard } from './core/guards/auth-guard';
import { TasksPageComponent } from './features/pages/tasks-page/tasks-page.component';

export const routes: Routes = [
    {path:'', component: TasksPageComponent, canActivate: [authGuard]},
    {path:'role', component:RoleSelectionComponent}
];


// import { Routes } from '@angular/router';
// import { RoleSelectionComponent } from './pages/role-selection/role-selection.component';
// import { TasksComponent } from './components/tasks/tasks.component';
// import { AuthGuard } from './guards/auth.guard';
// import { AdminGuard } from './guards/admin.guard';

// export const routes: Routes = [
//   { path: '', redirectTo: 'role-selection', pathMatch: 'full' },
//   { path: 'role-selection', component: RoleSelectionComponent },
//   { path: 'tasks', component: TasksComponent, canActivate: [AuthGuard] },
//   // example: only admins can open /admin-settings
//   { path: 'admin-settings', loadComponent: () => import('./pages/admin-settings/admin-settings.component').then(m => m.AdminSettingsComponent), canActivate: [AdminGuard] },
// ];
