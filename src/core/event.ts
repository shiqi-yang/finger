interface EventCache {
  [eventName: string]: Function []
};


export default class EventEmitter {
  private readonly events: EventCache = {};
  
  on(eventName: string, func: Function): boolean {
    this.events[eventName] = this.events[eventName] || [];
    this.events[eventName].push(func);
  }

  once(eventName: string, func: Function) {
    this.on(eventName, func);
    this.on(eventName, () => {
      this.clean(eventName);
    });
  }
  
  emit(eventName: string, ...args: any[]) {
    const queue = this.events[eventName] || [];
    queue.forEach(f => f(...args));
  }

  remove(eventName: string, func: Function) {
    const queue = this.events[eventName] || [];
    const index = queue.indexOf(func);
    queue.splice(index, index == -1 ? 0: 1);
  }

  clean(eventName: string): boolean {
    delete this.events[eventName]
  }
};
