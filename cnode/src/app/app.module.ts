import { CreateTimePipe } from './pipe/create.pipe';
import { routes } from './routs.module';
import { HeadComponent } from './head/head.component';
import { CnodeService } from './services/cnode.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { IndexComponent } from './index/index.component';
import { AppComponent } from './app.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { TopiccontentComponent } from './topiccontent/topiccontent.component';

@NgModule({
  declarations: [
    HeadComponent,
    IndexComponent,
    AppComponent,
    UserdetailComponent,
    TopiccontentComponent,
    CreateTimePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [CnodeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
