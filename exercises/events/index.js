// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
  constructor() {
    this.events = new Map();
  }

  // Register an event handler
  on(eventName, callback) {
    const existingEventArray = this.events.get(eventName);

    if (existingEventArray) {
      existingEventArray.push(callback);
    } else {
      this.events.set(eventName, [callback]);
    }
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    const callbacks = this.events.get(eventName) || [];

    callbacks.forEach((callback) => {
      callback();
    });
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    this.events.delete(eventName);
  }
}

module.exports = Events;
