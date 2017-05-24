var o = {
  f: function() {
    return this 
  }
};
var p = Object.create(o);
p.f();

// Is it...
// (a) o
// (b) p
// (c) window
// (d) undefined