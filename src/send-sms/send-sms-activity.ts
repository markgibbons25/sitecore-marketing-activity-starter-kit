import { SingleItem } from '@sitecore/ma-core';

export class SendSmsActivity extends SingleItem {
    getVisual(): string {
        var definedText = this.isDefined ? 'Parameters set' : 'Parameters not set';
        var subTitle = 'Send SMS';
        return `
            <div class="viewport-send-sms-editor marketing-action">
                <span class="icon">
                    <img src="/~/icon/officewhite/32x32/smartphone_cloud.png" />
              </span>
                <p class="text with-subtitle" title="${subTitle}">
                    ${subTitle}
                    <small class="subtitle" title="${definedText}">${definedText}</small>
                </p>
            </div>
        `;
    }

    get isDefined(): boolean {
        return Boolean(this.editorParams.targetUrl);
    }
}




