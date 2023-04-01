
// inline-template component
Vue.component('inline-template-component', {
    data() {
        return {
            count: 0
        }
    },
    methods: {
        increaseVote() {
            this.count++
        }
    }
});

// x-template component
Vue.component('x-template-component', {
    template: `#x-template`,
    data() {
        return {
            count: 0
        }
    },
    methods: {
        increaseVote() {
            this.count++
        }
    }
});

// slot component
Vue.component('slot-template-component', {
    template: `
        <div>
            <h1>
                <slot name="title">This is default slot template title</slot>
            </h1>
            <p>
                <slot name="content">This is default slot template content</slot>
            </p>
        </div>
    `,
});

// create vue object
new Vue({
    el: '#app'
});
