import { Routes } from '@angular/router';
import { GlossaryListComponent } from './glossary-list/glossary-list.component';
import { GlossaryDetailComponent } from './glossary-detail/glossary-detail.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "glossary-list", component: GlossaryListComponent},
    {path: 'glossary-detail/:id', component: GlossaryDetailComponent},
    {path: 'home', component: HomeComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'about', component: AboutComponent},

];
