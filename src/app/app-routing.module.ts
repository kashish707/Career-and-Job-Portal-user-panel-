import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { VacanciesComponent } from './vacancies/vacancies.component';
import {ApplyComponent} from './vacancies/apply/apply.component'

const appRoutes: Routes = [
    { path: '', redirectTo:'/vacancies' ,pathMatch:'full'},
    {path: 'vacancies', component: VacanciesComponent},
    { path: 'apply/:id', component: ApplyComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],//configured
    exports: [RouterModule]
})
    
export class AppRoutingModule{

}