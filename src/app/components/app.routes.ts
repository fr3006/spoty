import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ArtistComponent } from './artist/artist.component';


const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'search', component: SearchComponent },
    { path: 'shared', component: NavbarComponent },
    { path: 'artist/:id', component: ArtistComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
   // { path: '**', component: PageNotFoundComponent },

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];


export const app_routing = RouterModule.forRoot(routes, { useHash : true});
