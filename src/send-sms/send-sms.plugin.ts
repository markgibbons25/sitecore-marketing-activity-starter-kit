import { Plugin } from '@sitecore/ma-core';
import { SendSmsActivity } from './send-sms-activity';
import { SendSmsModuleNgFactory } from '../../codegen/send-sms/send-sms-module.ngfactory';
import { SendSmsEditorComponent } from '../../codegen/send-sms/send-sms-editor.component';
 
@Plugin({
    activityDefinitions: [
        {
            id: 'b1a0e7a2-c62f-4ecf-a749-1c6ce89e8256',
            activity: SendSmsActivity,
            editorComponenet: SendSmsEditorComponent,
            editorModuleFactory: SendSmsModuleNgFactory
        }
    ]
})

export default class SendSmsPlugin {}