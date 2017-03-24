'use strict';

var inches;
var cm;
var conv1;

function cm(inches){ conv1 = inches / (2.54);
  return conv1;
}
function inches(cm){ conv1 = cm * (2.54);
  return conv1;
}
