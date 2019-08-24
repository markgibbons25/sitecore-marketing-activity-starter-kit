import { Component, OnInit, Injector } from '@angular/core';
import { EditorBase } from '@sitecore/ma-core';

@Component({
    selector: 'ma-send-sms-editor',
    template: `
        <section class="content">
            <div class="form-group">
                <div class="row readonly-editor">
                    <div class="col-12">
                        <label class="title">Target Url</label>
                        <input type="text" class="form-control" [(ngModel)]="targetUrl" />
                    </div>
                    <div class="col-12">
                        <label class="title">Message Text</label>
                        <textarea class="form-control" [(ngModel)]="messageText" rows="5"></textarea>
                    </div>
                </div>
            </div>
        </section>
    `,
    styles: ['']
})

export class SendSmsEditorComponent extends EditorBase implements OnInit {


    constructor(private injector: Injector) {
        super();
    }

    targetUrl: string;
    messageText: string;

    ngOnInit(): void {
        let tempUrl = 'https://temp';
        let tempText = 'Temp';
        this.targetUrl = this.model ? this.model.targetUrl || tempUrl: tempUrl;
        this.messageText = this.model ? this.model.messageText || tempText: tempText;
    }

    serialize(): any {
        return {
            targetUrl: this.targetUrl,
            messageText: this.messageText
        };
    }
}