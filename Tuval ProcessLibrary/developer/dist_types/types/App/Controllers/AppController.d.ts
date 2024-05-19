import { TForm, UIController } from '@tuval/forms';
export declare class AppController extends UIController {
    private menu_text;
    protected InitController(): void;
    OnBindModel(form: TForm): void;
    LoadView(): import("@tuval/forms").VStackClass;
}
