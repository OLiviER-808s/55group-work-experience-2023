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
                    due_date: '09/10/2023',
                    days_left: 84,
                    priority: 'medium',
                    progress: 'in-progress'
                },
                {
                    action_name: 'Project Penguin',
                    due_date: '16/08/2023',
                    days_left: 29,
                    priority: 'low',
                    progress: 'in-progress'
                },
                {
                    action_name: 'Project Mammoth',
                    due_date: '26/11/2023',
                    days_left: 131,
                    priority: 'high',
                    progress: 'not-started'
                }
            ],
            headings: ['Action Name', 'Due Date', 'Days Left', 'Priority', 'Progress'],

            showModal: false,

            formData: { checked: false }
        }
    },

    methods: {
        changeText(priority) {
            if (priority == "medium") {

                return 'Medium'
            }
            else if (priority == "high") {

                return 'High'
            }
            else if (priority == "low") {
                return 'Low'
            }
        },

        getColour(priority) {
            if (priority == "medium") {

                return 'bg-yellow-medium'
            }
            else if (priority == "high") {

                return 'bg-red-high'
            }
            else if (priority == "low") {
                return 'bg-green-low'
            }
        },

        saveChanges(){
           let  newCell={
                action_name: this.actionName,
                due_date: this.dueDate,
                priority: this.priority,
                progress: this.progress
        }

            this.cells.push(newCell)


            this.actionName = null,
            this.dueDate = null,
            this.priority = null,
            this.progress = null

            this.showModal = false

        },
    },

    mounted() {
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

    <div class="grid grid-rows-2 gap-0" style="margin-left: 25vw;" >
        <div class="basis-1" style="padding-top: 20vh;" ><button id="show-modal" class="border border-state-500" @click="showModal = true">Create Action</button></div>
    
        <div>
            <table class="border-collapse border border-state-500">
                <thead>
                    <tr>
                        <th v-for="heading in headings" :key="heading" class="border border-state-500">{{ heading }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="cell in cells" :key="cell">
                        <td class="px-8 border border-state-500">{{ cell.action_name }}</td>
                        <td class="px-8 border border-state-500">{{ cell.due_date }}</td>
                        <td class="px-8 border border-state-500">{{ cell.days_left }}</td>
                        <td class="px-8 border border-state-500" :class="getColour(cell.priority)">{{ changeText(cell.priority) }}
                        </td>
                        <td class="px-8 border border-state-500">{{ cell.progress }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    
    </div>

    
    
  

    <modal :show="showModal" @close="showModal = false" @saveChanges="saveChanges">
        <template #header>
            <h3>Create Action</h3>
        </template>
        <template #body>
            <h3>Create your action here!</h3>
            <br>
            
            <!-- Input Field/Label for Action Name -->
            <label for="actionName" class = "px 2">Action Name:</label>
            <input type="text" id="actionName" class="px 2 border border-state-500" v-model="actionName" placeholder="Action Name Here">

            <br>

            <!-- Input Field/Label for Due Date -->
            <label for="dueDate">Due Date:</label>
            <input type="text" id="dueDate" class="px 2 border border-state-500" v-model="dueDate" placeholder="Due Date Here">

            <br>

            <!-- Input Field/Label for Priority -->
            <label for="priority">Priority:</label>
            <input type="text" id="priority" class="px 2 border border-state-500" v-model="priority" placeholder="Priority Here">

            <br>

            <!-- Input Field/Label for Progress -->
            <label for="progress">Progress:</label>
            <input type="text" id="progress" class="px 2 border border-state-500" v-model="progress" placeholder="Progress Here">

            <br>
        </template>
    </modal>
</template>



