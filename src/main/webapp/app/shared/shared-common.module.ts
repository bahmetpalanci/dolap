import { NgModule } from '@angular/core';

import { DolapSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [DolapSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [DolapSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class DolapSharedCommonModule {}
