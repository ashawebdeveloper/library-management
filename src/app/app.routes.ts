import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { SuggestionsComponent } from './components/suggestions/suggestions.component';
import { ErrorComponent } from './components/error/error.component';

export const routes: Routes = [
    {
        path:'',
        component: HomePageComponent
    },
    {
        path: 'bookdetails/:id',
        component: BookDetailsComponent
    },
    {
        path: 'suggestions',
        component: SuggestionsComponent
    },
    {
        path: '**',
        component: ErrorComponent
    }
];
