// create crete-employee component
Vue.component('create-employee', {
    template: `
        <div style="background-color: rgb(60 251 0 / 25%);">
            <h1 style="font-style: oblique;">Create employee component</h1>
            <input v-model="name" placeholder="Employee name"><br><br>
            <input v-model="address" placeholder="Emplyee address"><br><br>
            <button v-on:click="createEmployee">Create</button>
        </div>
    `,
    data() {
        return {
            name: '',
            address: ''
        }
    },
    methods: {
        // create employee data & emit
        createEmployee() {
            this.$emit('create-employee-event', {
                name: this.name,
                address: this.address
            })
            // after emitting, reset input fields
            this.name = '',
            this.address = ''
        }
    }
});

// create employee-list component
Vue.component('employee-list',
    {
        template:
            `
            <div style="margin-top: 20px; background-color: rgba(0, 216, 251, 0.25);">
                <h1 style="font-style: oblique;">Employee list component</h1>
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
            ]
        },
        methods: {
            // insert employee data
            insertEmployee(employeeData) {
                if (employeeData.name && employeeData.address) {
                    this.employeeList.push(employeeData)
                }
            }
        }
    }
);
