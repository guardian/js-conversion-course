var o = {
  prop: 37,
  f: function() {
    return this;
  }
};

// Is it...
// (a) undefined
// (b) o
// (c) window
// (d) it depends