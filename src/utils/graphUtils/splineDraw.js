export function splineDraw(points, tension) {

  if (tension == null) tension = 1;
  
  var size = points.length;
  var last = size - 4;    

  var path = "M" + [points[0], points[1]];

  for (var i = 0; i < size - 2; i +=2) {

    var x0 = i ? points[i - 2] : points[0];
    var y0 = i ? points[i - 1] : points[1];

    var x1 = points[i + 0];
    var y1 = points[i + 1];

    var x2 = points[i + 2];
    var y2 = points[i + 3];

    var x3 = i !== last ? points[i + 4] : x2;
    var y3 = i !== last ? points[i + 5] : y2;
    
    var cp1x = x1 + (x2 - x0) / 6 * tension;
    var cp1y = y1 + (y2 - y0) / 6 * tension;

    var cp2x = x2 - (x3 - x1) / 6 * tension;
    var cp2y = y2 - (y3 - y1) / 6 * tension;
   
    path += "C" + [cp1x, cp1y, cp2x, cp2y, x2, y2];
  } 

  return path;
}