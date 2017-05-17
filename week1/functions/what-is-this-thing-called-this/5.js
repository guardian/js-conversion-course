var o = {prop: 37};

function independent() {
  return this;
}

o.f = independent;
o.f();

// Is it...
// (a) undefined
// (b) o
// (c) window
// (d) o.f