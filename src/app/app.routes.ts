import { Routes } from '@angular/router';
import { TitlePageComponent } from './title-page/title-page.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: TitlePageComponent,
        children:
        [
            {
                path: '',
                component: HomeComponent,
            },
            {
                path: 'projects',
                component: ProjectsComponent,
            },
            {
                path: 'about',
                component: AboutComponent,
            },
        ]
    },
];