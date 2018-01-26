import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { EditorComponent } from './pages/editor/editor.component';
// import { LoginComponent } from './pages/login/login.component';
import { ListViewComponent } from './list-view/list-view.component';

 



//canActivate: [AuthGuard]
const routes: Routes = [
  // { path: 'demo', component: DemoComponent },
  // { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '', component: ListViewComponent },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })], // <-- enableTracing is for debugging purposes only
  exports: [RouterModule]
})
export class AppRoutingModule {
}
