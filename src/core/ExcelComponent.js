import { DomListener } from "./DomListener";

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name || "";
    this.emitter = options.emitter;
    this.unsubscribers = []
    
    this.prepare();
  }

  //Настраиваем компонент до Инит
  prepare(){
    
  }
  // Возвращает шаблон компонента
  toHTML() {
    return "";
  }

  // Уведомляем слушателей про событие event
  $emit(event, ...args) {
    this.emitter.emit(event, ...args)
  }

  $on(event, fn) {
    const unsub = this.emitter.subscribe(event, fn)
    this.unsubscribers.push(unsub)
  }

  // Инициализируем компонент
  // Добавляем слушатели
  init() {
    this.initDomListeners();
  }

  // Удаляем компонент
  // чистим слушатели
  destroy() {
    this.removeDomListeners();
    this.unsubscribers.forEach(unsub => unsub())
  }
}
