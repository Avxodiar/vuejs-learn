const App = {
  data() {
    return {
      counter: 0,
      title: 'ToDO List',
      titleString: 'Опишите задачу',
      inputValue: '',
      todoList: ['Составить план', 'Добавить 2 задачи']
    }
  },
  methods: {
    inputChangeHandler(evt) {
      this.inputValue = evt.target.value
    },
    inputPressEnter(evt) {
      if (evt.key === 'Enter') {
        this.addTask();
      }
    },
    addTask() {
      let task = this.inputValue;
      if (task != '') {
        this.todoList.push(task)
        this.inputValue = ''
      }
    },
    deleteTask(id) {
      this.todoList.splice(id, 1);
    }
  }
}

const app = Vue.createApp(App)
app.mount('#app')