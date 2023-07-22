<script>

import modal from './modal.vue'

export default {
    components: {
        modal
    },
    name: 'ActionTable',

    props: {
        msg: String
    },


    data() {
        return {
            //text: 'Hello World',
            cells: [
                {
                    action_name: 'Project Narwhal',
                    dueDate: '10/09/2023',
                    priority: 'Medium',
                    progress: 'In-Progress'
                },
                {
                    action_name: 'Project Penguin',
                    dueDate: '08/16/2023',
                    priority: 'Low',
                    progress: 'In-Progress'
                },
                {
                    action_name: 'Project Mammoth',
                    dueDate: '11/26/2023',
                    priority: 'High',
                    progress: 'Not-Started'
                }
            ],
            headings: ['Action Name', 'Due Date', 'Days Left', 'Priority', 'Progress'],

            showModal: false,

            formData: { checked: false }
        }
    },

    methods: {
        changeText(priority) {
            if (priority == "Medium") {

                return 'Medium'
            }
            else if (priority == "High") {

                return 'High'
            }
            else if (priority == "Low") {
                return 'Low'
            }
        },

        getColour(priority) {
            if (priority == "Medium") {

                return 'bg-yellow-medium'
            }
            else if (priority == "High") {

                return 'bg-red-high'
            }
            else if (priority == "Low") {
                return 'bg-green-low'
            }
        },

        saveChanges() {
            let newCell; // Define newCell variable here

            const editedIndex = this.cells.findIndex((cell) => cell.action_name === this.actionName);

            if (editedIndex !== -1) {
                // If the actionName already exists, update the existing action
                this.cells[editedIndex].dueDate = this.dueDate;
                this.cells[editedIndex].priority = this.priority;
                this.cells[editedIndex].progress = this.progress;
            } else {
                // Otherwise, create a new action
                newCell = {
                    action_name: this.actionName,
                    dueDate: this.dueDate,
                    priority: this.priority,
                    progress: this.progress
                };
                this.cells.push(newCell);
            }

            // Recalculate daysLeft for both new and edited actions
            this.cells.forEach((cell) => {
                const dueDate = new Date(cell.dueDate);
                cell.daysLeft = this.getDaysLeft(dueDate);
            });

            this.actionName = null;
            this.dueDate = null;
            this.priority = null;
            this.progress = null;
            this.showModal = false;
        },

        updateDaysLeft() {
            if (this.dueDate) {
                const currentDate = new Date();
                // currentDate = currentDate.toLocaleDateString("en-gb")
                const dueDate = new Date(this.dueDate);
                this.daysLeft = this.getDaysLeft(dueDate);
            } else {
                this.daysLeft = null;
            }
        },



        getDaysLeft(dueDate) {
            const currentDate = new Date();
            const timeDifference = dueDate.getTime() - currentDate.getTime();
            const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
            return daysDifference;
        },

        editAction(action) {
            // Set the modal input fields to the details of the selected action
            this.actionName = action.action_name; // Add this line to set the actionName property
            this.dueDate = action.dueDate;
            this.priority = action.priority;
            this.progress = action.progress;

            // Open the modal for editing
            this.showModal = true;
        },




    },

    mounted() {
        // Call 'getDaysLeft' for each cell to calculate the number of days left
        this.cells.forEach((cell) => {
            const dueDate = new Date(cell.dueDate);
            cell.daysLeft = this.getDaysLeft(dueDate);
        });

        this.changeText()
    }
}

</script>

<style>
label {
    display: block;
    margin-bottom: 5px;
    padding: 5px;
}

input {
    margin-bottom: 10px;
    padding: 5px;
    width: 300px;
}

h3 {
    margin-top: 8px;
}
</style>

<template>
    <div class="basis-1" style="padding-bottom: 5vh;"><button id="show-modal" class="border border-state-500"
            @click="showModal = true">Create Action</button></div>
    <div class="max-h-72 overflow-y-auto" style="margin-left: 10vw; margin-right: 10vw;">
        <table class="border-collapse border border-state-500">
            <thead>
                <tr>
                    <th v-for="heading in headings" :key="heading" class="border border-state-500">{{ heading }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="cell in cells" :key="cell">
                    <td class="px-8 border border-state-500">{{ cell.action_name }}</td>
                    <td class="px-8 border border-state-500">{{ cell.dueDate }}</td>
                    <td class="px-8 border border-state-500">{{ cell.daysLeft }}</td>
                    <td class="px-8 border border-state-500" :class="getColour(cell.priority)">{{
                        changeText(cell.priority) }}</td>
                    <td class="px-8 border border-state-500">{{ cell.progress }}</td>
                    <td class="px-8 border border-state-500">
                        <!-- Add the "Edit" button here -->
                        <button @click="editAction(cell)">Edit</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <modal :show="showModal" @close="showModal = false" @saveChanges="saveChanges">
        <template #header>
            <h3>Create Action</h3>
        </template>
        <template #body>
            <!-- Input Field/Label for Action Name -->
            <label for="actionName" class="px 2">Action Name:</label>
            <input type="text" id="actionName" class="px 2 border border-state-500" v-model="actionName"
                placeholder="Action Name Here">

            <br>

            <!-- Input Field/Label for Due Date -->
            <label for="due_date">Due Date:</label>
            <input type="date" id="due_date" class="px 2 border border-state-500" v-model="dueDate"
                placeholder="Due Date Here">

            <br>

            <!-- Input Field/Label for Priority
            
            <input type="text" id="priority" class="px 2 border border-state-500" v-model="priority"
                placeholder="Priority Here">

            <br> -->

            <label for="priority">Priority:</label>
            <select style="padding-left: 7vw; padding-right: 7vw" class="px 10 border border-state-500" v-model="priority">
                <option id="priority" disabled value="">Priority</option>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
            </select>

            <!-- Input Field/Label for Progress -->

            <!-- <input type="text" id="progress" class="px 2 border border-state-500" v-model="progress"
                placeholder="Progress Here"> -->
            <label for="progress">Progress:</label>
            <select style="padding-left: 6vw; padding-right: 6vw" class="px 10 border border-state-500" v-model="progress">
                <option id="progress" disabled value="">Progress</option>
                <option> Not-Started</option>
                <option>In-Progress</option>
                <option>Pending</option>
                <option>Completed</option>
            </select>

            <br>
        </template>
    </modal>
</template>



