import { updateOptionsEffect } from "./viewPlugin";
import {
    type CmSkUpdateOptions,
    type ThemeOptions
} from "./types/types";

/**
 * `getShikiHi` only be resolved after the editor's extensions registered
 */
export default function useActions(getShikiHi: () => Promise<any>) {

    return {
        /**
         * Update the highlighter options dynamically,
         * support `lang` and `theme` options for now.
         * can update the `theme` that is registered in shiki by theme name. like `github-light`
         * 
         * @param {CmSkUpdateOptions} options {lang, theme}
         */
        async update(options: CmSkUpdateOptions) {
            const shikiHi = await getShikiHi()
            if (options.theme) {
                return this.setTheme({ theme: options.theme })
            }
            shikiHi.view!.dispatch({
                effects: updateOptionsEffect.of(options)
            });
        },
        /** 
        * Update the editor's themes dynamically
        * 
        * @param options
        */
        async setTheme(options: ThemeOptions) {
            const shikiHi = await getShikiHi()
            shikiHi.setTheme(options);
        },
        /** 
        * get the editor's current theme
        * 
        * @param options
        */
        async getCurrentTheme() {
            const shikiHi = await getShikiHi()
            return shikiHi.getCurrentTheme();
        }
    }
}