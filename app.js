const App = {
  data() {
    return {
      counter: 0,
      title: 'ToDO List',
      titleString: 'Опишите задачу',
      inputValue: '',
      inputMaxLen: 64,
      todoList: ['Составить план', 'Добавить 2 задачи']
    }
  },
  methods: {
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
    },
    progress() {
      return parseInt(this.inputValue.length / this.inputMaxLen * 100);
    }
  },
  watch: {
    /**
     * Ограничение длины названия задачи
     */
    inputValue(value) {
      if (value.length > this.inputMaxLen) {
        this.inputValue = value.substr(0,this.inputMaxLen);
      }
    }
  }
}

const app = Vue.createApp(App)
app.mount('#app')