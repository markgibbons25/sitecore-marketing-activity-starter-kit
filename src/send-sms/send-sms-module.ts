import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SendSmsEditorComponent } from './send-sms-editor.component';

@NgModule({
    imports: [
        CommonModule,FormsModule
    ],
    declarations: [SendSmsEditorComponent],
    entryComponents: [SendSmsEditorComponent]
})
export class SendSmsModule { }