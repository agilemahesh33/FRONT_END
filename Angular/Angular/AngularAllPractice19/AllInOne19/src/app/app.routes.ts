import { Routes } from '@angular/router';
import { UsersComponent } from './Pages/users/users.component';
import { DataBindingComponent } from './Pages/data-binding/data-binding.component';
import { ControlFlowWithSignalsComponent } from './Pages/control-flow-with-signals/control-flow-with-signals.component';
import { DynamicCssComponent } from './Pages/dynamic-css/dynamic-css.component';

export const routes: Routes = [
    {
        path: 'user-page',
        component: UsersComponent
    },
    {
        path: 'dataBinding',
        component: DataBindingComponent
    },
    {
        path:'controlFlowSignals',
        component: ControlFlowWithSignalsComponent
    },
    {
        path:'dynamiccss',
        component : DynamicCssComponent
    },
    {
        path:'',
        redirectTo:'user-page',
        pathMatch:'full'
    }
];
