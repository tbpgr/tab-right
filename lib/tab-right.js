'use babel';

import { CompositeDisposable } from 'atom';

export default {

  subscriptions: null,

  activate(state) {
    this.subscriptions = new CompositeDisposable();
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'tab-right:toRight': () => this.toRight(),
    }));
  },

  deactivate() {
    this.subscriptions.dispose();
  },

  serialize() {
  },

  toRight() {
    pane = atom.workspace.getActivePane();
    total = pane.getItems().length;
    item = pane.getActiveItem();
    pane.moveItem(item, total - 1);
  }
};
