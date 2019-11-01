import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
    exports: [
        MatCardModule,
        MatProgressBarModule,
        MatPaginatorModule,
        MatToolbarModule,
        MatInputModule,
        MatButtonModule
    ]
})
export class MaterialModule {}
