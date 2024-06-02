import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'', loadComponent:()=>import('./login/login.component').then(a=>a.LoginComponent)},
    {path:'browse', loadComponent:()=>import('./browse/browse.component').then(a=>a.BrowseComponent)}
];
