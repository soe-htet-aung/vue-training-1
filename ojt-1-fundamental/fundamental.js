new Vue({
    el: "#root",
    data: {
        title: "Todo List",
        newTask: null,
        toDoList: [
            { name: 'Go Shop', completed: false },
            { name: 'Buy Egg', completed: false },
        ]
    },
    methods: {
        // add to do task
        addTask() {
            let task = {
                name: this.newTask, completed: false
            }
            this.toDoList = [...this.toDoList, task]
            this.newTask = null
        },
        // delete to do task
        deleteTask(index) {
            this.toDoList.splice(index, 1)
        }
    },
    computed: {
        // get remain task total
        remainTaskTotal() {
            let total = this.toDoList.filter(function (toDoTask) {
                return toDoTask.completed === false
            })
            return total.length
        }
    }
});
