// create employee-list component
Vue.component('employee-list',
    {
        template:
            `
            <div>
                <h2>Employee name: {{ name }}</h2>
                <p>Address: {{ address }}</p>
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
                { name: 'Mg Mg', address: 'Mandalay' },
                { name: 'Kyaw Kyaw', address: 'Yangon' },
                { name: 'Ma Ma', address: 'Pyin Oo Lwin' },
                { name: 'Zaw Zaw', address: 'Yangon' }
            ]
        }
    }
);
