export default {
    state: ()=> ({
        items: [
            {day: 'ВТ', time: '19:00', date: 13, month: 'декабрь', band: 'название группы', desc: 'Короткое описание мероприятия', link: 'https://translate.google.com/?hl=ru'},
            {day: 'ср', time: '18:00', date: 14, month: 'декабрь', band: 'ТНФ', desc: 'рок кованых сапог', link: 'https://tailwindcss.com/docs/align-items'},
            {day: 'ср', time: '18:00', date: 14, month: 'декабрь', band: 'ТНФ', desc: 'рок кованых сапог', link: 'https://tailwindcss.com/docs/align-items'},
            {day: 'ср', time: '18:00', date: 14, month: 'декабрь', band: 'ТНФ', desc: 'рок кованых сапог', link: 'https://tailwindcss.com/docs/align-items'},
            {day: 'ср', time: '18:00', date: 14, month: 'декабрь', band: 'ТНФ', desc: 'рок кованых сапог', link: 'https://tailwindcss.com/docs/align-items'},
            {day: 'ср', time: '18:00', date: 14, month: 'декабрь', band: 'ТНФ', desc: 'рок кованых сапог', link: 'https://tailwindcss.com/docs/align-items'},
            {day: 'ср', time: '18:00', date: 14, month: 'декабрь', band: 'ТНФ', desc: 'рок кованых сапог', link: 'https://tailwindcss.com/docs/align-items'},
            {day: 'ср', time: '18:00', date: 14, month: 'декабрь', band: 'ТНФ', desc: 'рок кованых сапог', link: 'https://tailwindcss.com/docs/align-items'},
            {day: 'ср', time: '18:00', date: 14, month: 'декабрь', band: 'ТНФ', desc: 'рок кованых сапог', link: 'https://tailwindcss.com/docs/align-items'},
        ]
    }),
    mutations: {
  
    },
    actions: {
  
    },
    getters: {
      afishaItems(state) {
          return state.items;
        },
    }
  }
  