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
    /**
     * Значение поля ввода
     */
    inputChangeHandler(evt) {
      this.inputValue = evt.target.value
    },
    /**
     * Добавление задачи по нажатию Enter в поле ввода
     */
    inputPressEnter(evt) {
      if (evt.key === 'Enter') {
        this.addTask();
      }
    },
    /**
     * Добавление задачи в список
     */
    addTask() {
      let task = this.inputValue;
      if (task != '') {
        this.todoList.push(task)
        this.inputValue = ''
      }
    },
    /**
     * Удаление задачи из списка
     * @param  int id - номер задачи
     */
    deleteTask(id) {
      this.todoList.splice(id, 1);
    },
    /**
     * Первый символ строки с большой буквы
     * @param  string str
     * @return string
     */
    ucFirst(str) {
      if (!str) return str;
      return str[0].toUpperCase() + str.slice(1);;
    },
  },
  computed: {
    /**
     * Количество задач в списке
     */
    countTask() {
      return this.todoList.length;
    }
  }
}

const app = Vue.createApp(App)
app.mount('#app')