var o = {
  prop: 37,
  f: function() {
    return this;
  }
};

o.f();

// Is it...
// (a) undefined
// (b) o
// (c) window
// (d) o.f