import {createApp, h} from 'vue'
import { createInertiaApp, Head, Link } from '@inertiajs/vue3'
import { setupProgress } from '@inertiajs/core'
import Toast from "vue-toastification";

setupProgress({
    delay: 250,
    color: '#5D87E6',
    includeCSS: true,
    showSpinner: false,
})

createInertiaApp({
    title: title => title ? `${title} - LaraBug` : 'LaraBug',
    resolve: (name) => {
        const pages = import.meta.glob('./Pages/**/*.vue')
        return pages[`./Pages/${name}.vue`]()
    },
    setup({ el, app, props, plugin }) {
        createApp({ render: () => h(app, props) })
            .use(Toast, {
                transition: "Vue-Toastification__fade",
                maxToasts: 5,
                newestOnTop: true,
                timeout: 5000,
            })
            .component('InertiaLink', Link)
            .component('InertiaHead', Head)
            .mixin({
                methods: { route }
            })
            .use(plugin)
            .mount(el)
    },
})
