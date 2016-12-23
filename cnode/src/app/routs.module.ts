
import { UserdetailComponent } from './userdetail/userdetail.component';
import { TopiccontentComponent } from './topiccontent/topiccontent.component';
import { IndexComponent } from './index/index.component';
import { RouterModule, Routes} from '@angular/router';

 const appRoutes: Routes = [
    {path: '', component: IndexComponent},
    {path: 'topic/:id', component: TopiccontentComponent},
    {path: 'user/:loginname', component: UserdetailComponent},
]
export const routes = RouterModule.forRoot(appRoutes);
