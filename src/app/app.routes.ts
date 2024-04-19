import { Routes,RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { LoginComponent } from './components/login/login.component';
export const routes: Routes = [
{ path: '', component: HomeComponent, pathMatch: 'full' },
{path: 'home', component: HomeComponent},
{path: 'inventory', component: InventoryComponent},
{path: 'login', component: LoginComponent}
  
];
