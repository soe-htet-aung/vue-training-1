// create employee-list component
Vue.component('employee-list',
    {
        template:
            `
            <div>
                <h1>{{ name }}</h1>
                <p>{{ address }}</p>
                <hr>
            </div>
        `,
        props: {
            name: {
                type: String,
                required: true
            },
            address: {
                type: String,
                required: true
            },
        }
    }
);

// create vue object
new Vue(
    {
        el: '#app',
        data: {
            employeeList: [
                { name: 'Mg Mg', address: 'Meiktila' },
                { name: 'Kyaw Kyaw', address: 'Yangon' },
                { name: 'Ma Ma', address: 'Yangon' },
                { name: 'Zaw Zaw', address: 'Yangon' }
            ]
        }
    }
);
