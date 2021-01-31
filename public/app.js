const App = {
  data() {
    return {
      radio: 'todo',
      counter: 0,
      title: 'ToDO List',
      titleString: 'Опишите задачу',
      inputValue: '',
      inputMaxLen: 64,
      todoList: ['Составить план', 'Добавить 2 задачи'],
      search: ''
    }
  },
  /**
   * Загрузка списка задач из LocalStorage
   */
  mounted() {
    if (localStorage.getItem('todoList')) {
      try {
        this.todoList = JSON.parse(localStorage.getItem('todoList'));
      } catch(e) {
        localStorage.removeItem('todoList');
      }
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
     * Сохранение списка задач в LocalStorage
     */
    saveTask() {
      const parsed = JSON.stringify(this.todoList);
      localStorage.setItem('todoList', parsed);
    },
    /**
     * Добавление задачи в список
     */
    addTask() {
      let task = this.inputValue;
      if (task !== '') {
        this.todoList.push(task);
        this.inputValue = '';
        this.saveTask()
      }
    },
    /**
     * Удаление задачи из списка
     * @param id - номер задачи
     */
    deleteTask(id) {
      this.todoList.splice(id, 1);
      this.saveTask()
    },
    /**
     * Поднять задачу в списке
     * @param  id
     */
    upTask(id) {
      if (id > 0) {
        [ this.todoList[id-1], this.todoList[id] ] = [ this.todoList[id], this.todoList[id-1] ];
        this.saveTask()
      }
    },
    /**
     * Понизить задачу в списке
     * @param  id
     */
    downTask(id) {
      if (id < this.todoList.length - 1) {
        [ this.todoList[id+1], this.todoList[id] ] = [ this.todoList[id], this.todoList[id+1] ];
        this.saveTask()
      }
    },
    /**
     * Первый символ строки с большой буквы
     * @param  str
     * @return {string}
     */
    ucFirst(str) {
      if (!str) return str;
      return str[0].toUpperCase() + str.slice(1);
    },
  },
  computed: {
    /**
     * Фильтрация списка задач по введенной строке поиска
     * @returns {any}
     */
    filteredList() {
        const strSearch = this.search.toLocaleLowerCase();
        if (strSearch === '') {
            return this.todoList;
        }

        return this.todoList.filter(function (item) {
            return item.toLocaleLowerCase().indexOf(strSearch) > -1;
        });
    },
    /**
     * Количество задач в списке
     */
    countTask() {
      return this.todoList.length;
    },
    /**
     * Процентное отношение заполнености введеного текста
     * по отношению к макс. допустимой длине названия задачи
     * @returns {number}
     */
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
};

Vue.createApp(App).mount('#app');
