/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 189.0, "minX": 0.0, "maxY": 2632.0, "series": [{"data": [[0.0, 189.0], [0.1, 258.0], [0.2, 265.0], [0.3, 269.0], [0.4, 271.0], [0.5, 273.0], [0.6, 275.0], [0.7, 277.0], [0.8, 278.0], [0.9, 279.0], [1.0, 281.0], [1.1, 282.0], [1.2, 282.0], [1.3, 283.0], [1.4, 284.0], [1.5, 285.0], [1.6, 286.0], [1.7, 286.0], [1.8, 287.0], [1.9, 288.0], [2.0, 288.0], [2.1, 289.0], [2.2, 289.0], [2.3, 290.0], [2.4, 291.0], [2.5, 291.0], [2.6, 292.0], [2.7, 292.0], [2.8, 292.0], [2.9, 293.0], [3.0, 293.0], [3.1, 294.0], [3.2, 294.0], [3.3, 295.0], [3.4, 295.0], [3.5, 295.0], [3.6, 296.0], [3.7, 296.0], [3.8, 296.0], [3.9, 297.0], [4.0, 297.0], [4.1, 297.0], [4.2, 298.0], [4.3, 298.0], [4.4, 298.0], [4.5, 299.0], [4.6, 299.0], [4.7, 299.0], [4.8, 299.0], [4.9, 300.0], [5.0, 300.0], [5.1, 300.0], [5.2, 301.0], [5.3, 301.0], [5.4, 301.0], [5.5, 301.0], [5.6, 302.0], [5.7, 302.0], [5.8, 302.0], [5.9, 302.0], [6.0, 303.0], [6.1, 303.0], [6.2, 303.0], [6.3, 303.0], [6.4, 304.0], [6.5, 304.0], [6.6, 304.0], [6.7, 304.0], [6.8, 304.0], [6.9, 305.0], [7.0, 305.0], [7.1, 305.0], [7.2, 305.0], [7.3, 306.0], [7.4, 306.0], [7.5, 306.0], [7.6, 306.0], [7.7, 306.0], [7.8, 307.0], [7.9, 307.0], [8.0, 307.0], [8.1, 307.0], [8.2, 307.0], [8.3, 308.0], [8.4, 308.0], [8.5, 308.0], [8.6, 308.0], [8.7, 308.0], [8.8, 308.0], [8.9, 309.0], [9.0, 309.0], [9.1, 309.0], [9.2, 309.0], [9.3, 309.0], [9.4, 310.0], [9.5, 310.0], [9.6, 310.0], [9.7, 310.0], [9.8, 310.0], [9.9, 310.0], [10.0, 310.0], [10.1, 311.0], [10.2, 311.0], [10.3, 311.0], [10.4, 311.0], [10.5, 311.0], [10.6, 311.0], [10.7, 312.0], [10.8, 312.0], [10.9, 312.0], [11.0, 312.0], [11.1, 312.0], [11.2, 312.0], [11.3, 313.0], [11.4, 313.0], [11.5, 313.0], [11.6, 313.0], [11.7, 313.0], [11.8, 313.0], [11.9, 313.0], [12.0, 314.0], [12.1, 314.0], [12.2, 314.0], [12.3, 314.0], [12.4, 314.0], [12.5, 314.0], [12.6, 314.0], [12.7, 315.0], [12.8, 315.0], [12.9, 315.0], [13.0, 315.0], [13.1, 315.0], [13.2, 315.0], [13.3, 315.0], [13.4, 316.0], [13.5, 316.0], [13.6, 316.0], [13.7, 316.0], [13.8, 316.0], [13.9, 316.0], [14.0, 316.0], [14.1, 317.0], [14.2, 317.0], [14.3, 317.0], [14.4, 317.0], [14.5, 317.0], [14.6, 317.0], [14.7, 317.0], [14.8, 317.0], [14.9, 318.0], [15.0, 318.0], [15.1, 318.0], [15.2, 318.0], [15.3, 318.0], [15.4, 318.0], [15.5, 318.0], [15.6, 318.0], [15.7, 319.0], [15.8, 319.0], [15.9, 319.0], [16.0, 319.0], [16.1, 319.0], [16.2, 319.0], [16.3, 319.0], [16.4, 319.0], [16.5, 320.0], [16.6, 320.0], [16.7, 320.0], [16.8, 320.0], [16.9, 320.0], [17.0, 320.0], [17.1, 320.0], [17.2, 320.0], [17.3, 320.0], [17.4, 321.0], [17.5, 321.0], [17.6, 321.0], [17.7, 321.0], [17.8, 321.0], [17.9, 321.0], [18.0, 321.0], [18.1, 321.0], [18.2, 322.0], [18.3, 322.0], [18.4, 322.0], [18.5, 322.0], [18.6, 322.0], [18.7, 322.0], [18.8, 322.0], [18.9, 322.0], [19.0, 322.0], [19.1, 322.0], [19.2, 323.0], [19.3, 323.0], [19.4, 323.0], [19.5, 323.0], [19.6, 323.0], [19.7, 323.0], [19.8, 323.0], [19.9, 323.0], [20.0, 323.0], [20.1, 324.0], [20.2, 324.0], [20.3, 324.0], [20.4, 324.0], [20.5, 324.0], [20.6, 324.0], [20.7, 324.0], [20.8, 324.0], [20.9, 324.0], [21.0, 324.0], [21.1, 325.0], [21.2, 325.0], [21.3, 325.0], [21.4, 325.0], [21.5, 325.0], [21.6, 325.0], [21.7, 325.0], [21.8, 325.0], [21.9, 325.0], [22.0, 326.0], [22.1, 326.0], [22.2, 326.0], [22.3, 326.0], [22.4, 326.0], [22.5, 326.0], [22.6, 326.0], [22.7, 326.0], [22.8, 326.0], [22.9, 326.0], [23.0, 327.0], [23.1, 327.0], [23.2, 327.0], [23.3, 327.0], [23.4, 327.0], [23.5, 327.0], [23.6, 327.0], [23.7, 327.0], [23.8, 327.0], [23.9, 327.0], [24.0, 327.0], [24.1, 328.0], [24.2, 328.0], [24.3, 328.0], [24.4, 328.0], [24.5, 328.0], [24.6, 328.0], [24.7, 328.0], [24.8, 328.0], [24.9, 328.0], [25.0, 328.0], [25.1, 329.0], [25.2, 329.0], [25.3, 329.0], [25.4, 329.0], [25.5, 329.0], [25.6, 329.0], [25.7, 329.0], [25.8, 329.0], [25.9, 329.0], [26.0, 329.0], [26.1, 329.0], [26.2, 330.0], [26.3, 330.0], [26.4, 330.0], [26.5, 330.0], [26.6, 330.0], [26.7, 330.0], [26.8, 330.0], [26.9, 330.0], [27.0, 330.0], [27.1, 330.0], [27.2, 331.0], [27.3, 331.0], [27.4, 331.0], [27.5, 331.0], [27.6, 331.0], [27.7, 331.0], [27.8, 331.0], [27.9, 331.0], [28.0, 331.0], [28.1, 331.0], [28.2, 331.0], [28.3, 331.0], [28.4, 332.0], [28.5, 332.0], [28.6, 332.0], [28.7, 332.0], [28.8, 332.0], [28.9, 332.0], [29.0, 332.0], [29.1, 332.0], [29.2, 332.0], [29.3, 332.0], [29.4, 332.0], [29.5, 333.0], [29.6, 333.0], [29.7, 333.0], [29.8, 333.0], [29.9, 333.0], [30.0, 333.0], [30.1, 333.0], [30.2, 333.0], [30.3, 333.0], [30.4, 333.0], [30.5, 333.0], [30.6, 334.0], [30.7, 334.0], [30.8, 334.0], [30.9, 334.0], [31.0, 334.0], [31.1, 334.0], [31.2, 334.0], [31.3, 334.0], [31.4, 334.0], [31.5, 334.0], [31.6, 334.0], [31.7, 334.0], [31.8, 335.0], [31.9, 335.0], [32.0, 335.0], [32.1, 335.0], [32.2, 335.0], [32.3, 335.0], [32.4, 335.0], [32.5, 335.0], [32.6, 335.0], [32.7, 335.0], [32.8, 335.0], [32.9, 335.0], [33.0, 336.0], [33.1, 336.0], [33.2, 336.0], [33.3, 336.0], [33.4, 336.0], [33.5, 336.0], [33.6, 336.0], [33.7, 336.0], [33.8, 336.0], [33.9, 336.0], [34.0, 336.0], [34.1, 336.0], [34.2, 337.0], [34.3, 337.0], [34.4, 337.0], [34.5, 337.0], [34.6, 337.0], [34.7, 337.0], [34.8, 337.0], [34.9, 337.0], [35.0, 337.0], [35.1, 337.0], [35.2, 337.0], [35.3, 337.0], [35.4, 338.0], [35.5, 338.0], [35.6, 338.0], [35.7, 338.0], [35.8, 338.0], [35.9, 338.0], [36.0, 338.0], [36.1, 338.0], [36.2, 338.0], [36.3, 338.0], [36.4, 338.0], [36.5, 338.0], [36.6, 339.0], [36.7, 339.0], [36.8, 339.0], [36.9, 339.0], [37.0, 339.0], [37.1, 339.0], [37.2, 339.0], [37.3, 339.0], [37.4, 339.0], [37.5, 339.0], [37.6, 339.0], [37.7, 339.0], [37.8, 340.0], [37.9, 340.0], [38.0, 340.0], [38.1, 340.0], [38.2, 340.0], [38.3, 340.0], [38.4, 340.0], [38.5, 340.0], [38.6, 340.0], [38.7, 340.0], [38.8, 340.0], [38.9, 340.0], [39.0, 340.0], [39.1, 341.0], [39.2, 341.0], [39.3, 341.0], [39.4, 341.0], [39.5, 341.0], [39.6, 341.0], [39.7, 341.0], [39.8, 341.0], [39.9, 341.0], [40.0, 341.0], [40.1, 341.0], [40.2, 341.0], [40.3, 342.0], [40.4, 342.0], [40.5, 342.0], [40.6, 342.0], [40.7, 342.0], [40.8, 342.0], [40.9, 342.0], [41.0, 342.0], [41.1, 342.0], [41.2, 342.0], [41.3, 342.0], [41.4, 342.0], [41.5, 343.0], [41.6, 343.0], [41.7, 343.0], [41.8, 343.0], [41.9, 343.0], [42.0, 343.0], [42.1, 343.0], [42.2, 343.0], [42.3, 343.0], [42.4, 343.0], [42.5, 343.0], [42.6, 343.0], [42.7, 343.0], [42.8, 344.0], [42.9, 344.0], [43.0, 344.0], [43.1, 344.0], [43.2, 344.0], [43.3, 344.0], [43.4, 344.0], [43.5, 344.0], [43.6, 344.0], [43.7, 344.0], [43.8, 344.0], [43.9, 344.0], [44.0, 344.0], [44.1, 345.0], [44.2, 345.0], [44.3, 345.0], [44.4, 345.0], [44.5, 345.0], [44.6, 345.0], [44.7, 345.0], [44.8, 345.0], [44.9, 345.0], [45.0, 345.0], [45.1, 345.0], [45.2, 345.0], [45.3, 345.0], [45.4, 346.0], [45.5, 346.0], [45.6, 346.0], [45.7, 346.0], [45.8, 346.0], [45.9, 346.0], [46.0, 346.0], [46.1, 346.0], [46.2, 346.0], [46.3, 346.0], [46.4, 346.0], [46.5, 346.0], [46.6, 347.0], [46.7, 347.0], [46.8, 347.0], [46.9, 347.0], [47.0, 347.0], [47.1, 347.0], [47.2, 347.0], [47.3, 347.0], [47.4, 347.0], [47.5, 347.0], [47.6, 347.0], [47.7, 347.0], [47.8, 347.0], [47.9, 348.0], [48.0, 348.0], [48.1, 348.0], [48.2, 348.0], [48.3, 348.0], [48.4, 348.0], [48.5, 348.0], [48.6, 348.0], [48.7, 348.0], [48.8, 348.0], [48.9, 348.0], [49.0, 348.0], [49.1, 348.0], [49.2, 349.0], [49.3, 349.0], [49.4, 349.0], [49.5, 349.0], [49.6, 349.0], [49.7, 349.0], [49.8, 349.0], [49.9, 349.0], [50.0, 349.0], [50.1, 349.0], [50.2, 349.0], [50.3, 349.0], [50.4, 350.0], [50.5, 350.0], [50.6, 350.0], [50.7, 350.0], [50.8, 350.0], [50.9, 350.0], [51.0, 350.0], [51.1, 350.0], [51.2, 350.0], [51.3, 350.0], [51.4, 350.0], [51.5, 350.0], [51.6, 350.0], [51.7, 351.0], [51.8, 351.0], [51.9, 351.0], [52.0, 351.0], [52.1, 351.0], [52.2, 351.0], [52.3, 351.0], [52.4, 351.0], [52.5, 351.0], [52.6, 351.0], [52.7, 351.0], [52.8, 351.0], [52.9, 351.0], [53.0, 352.0], [53.1, 352.0], [53.2, 352.0], [53.3, 352.0], [53.4, 352.0], [53.5, 352.0], [53.6, 352.0], [53.7, 352.0], [53.8, 352.0], [53.9, 352.0], [54.0, 352.0], [54.1, 352.0], [54.2, 352.0], [54.3, 353.0], [54.4, 353.0], [54.5, 353.0], [54.6, 353.0], [54.7, 353.0], [54.8, 353.0], [54.9, 353.0], [55.0, 353.0], [55.1, 353.0], [55.2, 353.0], [55.3, 353.0], [55.4, 353.0], [55.5, 353.0], [55.6, 354.0], [55.7, 354.0], [55.8, 354.0], [55.9, 354.0], [56.0, 354.0], [56.1, 354.0], [56.2, 354.0], [56.3, 354.0], [56.4, 354.0], [56.5, 354.0], [56.6, 354.0], [56.7, 354.0], [56.8, 355.0], [56.9, 355.0], [57.0, 355.0], [57.1, 355.0], [57.2, 355.0], [57.3, 355.0], [57.4, 355.0], [57.5, 355.0], [57.6, 355.0], [57.7, 355.0], [57.8, 355.0], [57.9, 355.0], [58.0, 356.0], [58.1, 356.0], [58.2, 356.0], [58.3, 356.0], [58.4, 356.0], [58.5, 356.0], [58.6, 356.0], [58.7, 356.0], [58.8, 356.0], [58.9, 356.0], [59.0, 356.0], [59.1, 356.0], [59.2, 356.0], [59.3, 357.0], [59.4, 357.0], [59.5, 357.0], [59.6, 357.0], [59.7, 357.0], [59.8, 357.0], [59.9, 357.0], [60.0, 357.0], [60.1, 357.0], [60.2, 357.0], [60.3, 357.0], [60.4, 358.0], [60.5, 358.0], [60.6, 358.0], [60.7, 358.0], [60.8, 358.0], [60.9, 358.0], [61.0, 358.0], [61.1, 358.0], [61.2, 358.0], [61.3, 358.0], [61.4, 358.0], [61.5, 358.0], [61.6, 359.0], [61.7, 359.0], [61.8, 359.0], [61.9, 359.0], [62.0, 359.0], [62.1, 359.0], [62.2, 359.0], [62.3, 359.0], [62.4, 359.0], [62.5, 359.0], [62.6, 359.0], [62.7, 359.0], [62.8, 360.0], [62.9, 360.0], [63.0, 360.0], [63.1, 360.0], [63.2, 360.0], [63.3, 360.0], [63.4, 360.0], [63.5, 360.0], [63.6, 360.0], [63.7, 360.0], [63.8, 360.0], [63.9, 361.0], [64.0, 361.0], [64.1, 361.0], [64.2, 361.0], [64.3, 361.0], [64.4, 361.0], [64.5, 361.0], [64.6, 361.0], [64.7, 361.0], [64.8, 361.0], [64.9, 361.0], [65.0, 362.0], [65.1, 362.0], [65.2, 362.0], [65.3, 362.0], [65.4, 362.0], [65.5, 362.0], [65.6, 362.0], [65.7, 362.0], [65.8, 362.0], [65.9, 362.0], [66.0, 362.0], [66.1, 363.0], [66.2, 363.0], [66.3, 363.0], [66.4, 363.0], [66.5, 363.0], [66.6, 363.0], [66.7, 363.0], [66.8, 363.0], [66.9, 363.0], [67.0, 363.0], [67.1, 363.0], [67.2, 364.0], [67.3, 364.0], [67.4, 364.0], [67.5, 364.0], [67.6, 364.0], [67.7, 364.0], [67.8, 364.0], [67.9, 364.0], [68.0, 364.0], [68.1, 364.0], [68.2, 365.0], [68.3, 365.0], [68.4, 365.0], [68.5, 365.0], [68.6, 365.0], [68.7, 365.0], [68.8, 365.0], [68.9, 365.0], [69.0, 365.0], [69.1, 365.0], [69.2, 365.0], [69.3, 366.0], [69.4, 366.0], [69.5, 366.0], [69.6, 366.0], [69.7, 366.0], [69.8, 366.0], [69.9, 366.0], [70.0, 366.0], [70.1, 366.0], [70.2, 366.0], [70.3, 367.0], [70.4, 367.0], [70.5, 367.0], [70.6, 367.0], [70.7, 367.0], [70.8, 367.0], [70.9, 367.0], [71.0, 367.0], [71.1, 367.0], [71.2, 367.0], [71.3, 368.0], [71.4, 368.0], [71.5, 368.0], [71.6, 368.0], [71.7, 368.0], [71.8, 368.0], [71.9, 368.0], [72.0, 368.0], [72.1, 368.0], [72.2, 368.0], [72.3, 369.0], [72.4, 369.0], [72.5, 369.0], [72.6, 369.0], [72.7, 369.0], [72.8, 369.0], [72.9, 369.0], [73.0, 369.0], [73.1, 369.0], [73.2, 370.0], [73.3, 370.0], [73.4, 370.0], [73.5, 370.0], [73.6, 370.0], [73.7, 370.0], [73.8, 370.0], [73.9, 370.0], [74.0, 370.0], [74.1, 370.0], [74.2, 371.0], [74.3, 371.0], [74.4, 371.0], [74.5, 371.0], [74.6, 371.0], [74.7, 371.0], [74.8, 371.0], [74.9, 371.0], [75.0, 371.0], [75.1, 372.0], [75.2, 372.0], [75.3, 372.0], [75.4, 372.0], [75.5, 372.0], [75.6, 372.0], [75.7, 372.0], [75.8, 372.0], [75.9, 372.0], [76.0, 373.0], [76.1, 373.0], [76.2, 373.0], [76.3, 373.0], [76.4, 373.0], [76.5, 373.0], [76.6, 373.0], [76.7, 373.0], [76.8, 373.0], [76.9, 374.0], [77.0, 374.0], [77.1, 374.0], [77.2, 374.0], [77.3, 374.0], [77.4, 374.0], [77.5, 374.0], [77.6, 374.0], [77.7, 374.0], [77.8, 375.0], [77.9, 375.0], [78.0, 375.0], [78.1, 375.0], [78.2, 375.0], [78.3, 375.0], [78.4, 375.0], [78.5, 375.0], [78.6, 376.0], [78.7, 376.0], [78.8, 376.0], [78.9, 376.0], [79.0, 376.0], [79.1, 376.0], [79.2, 376.0], [79.3, 376.0], [79.4, 376.0], [79.5, 377.0], [79.6, 377.0], [79.7, 377.0], [79.8, 377.0], [79.9, 377.0], [80.0, 377.0], [80.1, 377.0], [80.2, 377.0], [80.3, 378.0], [80.4, 378.0], [80.5, 378.0], [80.6, 378.0], [80.7, 378.0], [80.8, 378.0], [80.9, 378.0], [81.0, 379.0], [81.1, 379.0], [81.2, 379.0], [81.3, 379.0], [81.4, 379.0], [81.5, 379.0], [81.6, 379.0], [81.7, 379.0], [81.8, 380.0], [81.9, 380.0], [82.0, 380.0], [82.1, 380.0], [82.2, 380.0], [82.3, 380.0], [82.4, 380.0], [82.5, 381.0], [82.6, 381.0], [82.7, 381.0], [82.8, 381.0], [82.9, 381.0], [83.0, 381.0], [83.1, 381.0], [83.2, 382.0], [83.3, 382.0], [83.4, 382.0], [83.5, 382.0], [83.6, 382.0], [83.7, 382.0], [83.8, 382.0], [83.9, 383.0], [84.0, 383.0], [84.1, 383.0], [84.2, 383.0], [84.3, 383.0], [84.4, 383.0], [84.5, 384.0], [84.6, 384.0], [84.7, 384.0], [84.8, 384.0], [84.9, 384.0], [85.0, 384.0], [85.1, 385.0], [85.2, 385.0], [85.3, 385.0], [85.4, 385.0], [85.5, 385.0], [85.6, 385.0], [85.7, 386.0], [85.8, 386.0], [85.9, 386.0], [86.0, 386.0], [86.1, 386.0], [86.2, 386.0], [86.3, 387.0], [86.4, 387.0], [86.5, 387.0], [86.6, 387.0], [86.7, 387.0], [86.8, 388.0], [86.9, 388.0], [87.0, 388.0], [87.1, 388.0], [87.2, 388.0], [87.3, 388.0], [87.4, 389.0], [87.5, 389.0], [87.6, 389.0], [87.7, 389.0], [87.8, 389.0], [87.9, 390.0], [88.0, 390.0], [88.1, 390.0], [88.2, 390.0], [88.3, 390.0], [88.4, 391.0], [88.5, 391.0], [88.6, 391.0], [88.7, 391.0], [88.8, 391.0], [88.9, 392.0], [89.0, 392.0], [89.1, 392.0], [89.2, 392.0], [89.3, 393.0], [89.4, 393.0], [89.5, 393.0], [89.6, 393.0], [89.7, 393.0], [89.8, 394.0], [89.9, 394.0], [90.0, 394.0], [90.1, 394.0], [90.2, 395.0], [90.3, 395.0], [90.4, 395.0], [90.5, 395.0], [90.6, 396.0], [90.7, 396.0], [90.8, 396.0], [90.9, 396.0], [91.0, 397.0], [91.1, 397.0], [91.2, 397.0], [91.3, 397.0], [91.4, 398.0], [91.5, 398.0], [91.6, 398.0], [91.7, 399.0], [91.8, 399.0], [91.9, 399.0], [92.0, 400.0], [92.1, 400.0], [92.2, 400.0], [92.3, 400.0], [92.4, 401.0], [92.5, 401.0], [92.6, 401.0], [92.7, 402.0], [92.8, 402.0], [92.9, 402.0], [93.0, 403.0], [93.1, 403.0], [93.2, 403.0], [93.3, 404.0], [93.4, 404.0], [93.5, 404.0], [93.6, 405.0], [93.7, 405.0], [93.8, 406.0], [93.9, 406.0], [94.0, 407.0], [94.1, 407.0], [94.2, 407.0], [94.3, 408.0], [94.4, 408.0], [94.5, 409.0], [94.6, 409.0], [94.7, 410.0], [94.8, 410.0], [94.9, 411.0], [95.0, 411.0], [95.1, 412.0], [95.2, 412.0], [95.3, 413.0], [95.4, 413.0], [95.5, 414.0], [95.6, 415.0], [95.7, 415.0], [95.8, 416.0], [95.9, 416.0], [96.0, 417.0], [96.1, 418.0], [96.2, 418.0], [96.3, 419.0], [96.4, 420.0], [96.5, 421.0], [96.6, 422.0], [96.7, 422.0], [96.8, 423.0], [96.9, 424.0], [97.0, 425.0], [97.1, 426.0], [97.2, 427.0], [97.3, 429.0], [97.4, 430.0], [97.5, 431.0], [97.6, 433.0], [97.7, 434.0], [97.8, 436.0], [97.9, 437.0], [98.0, 439.0], [98.1, 441.0], [98.2, 443.0], [98.3, 445.0], [98.4, 448.0], [98.5, 451.0], [98.6, 454.0], [98.7, 457.0], [98.8, 461.0], [98.9, 466.0], [99.0, 472.0], [99.1, 480.0], [99.2, 488.0], [99.3, 498.0], [99.4, 512.0], [99.5, 531.0], [99.6, 559.0], [99.7, 592.0], [99.8, 622.0], [99.9, 791.0], [100.0, 2632.0]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 444040.0, "series": [{"data": [[600.0, 707.0], [700.0, 198.0], [800.0, 124.0], [900.0, 23.0], [1000.0, 16.0], [1100.0, 14.0], [1200.0, 6.0], [1300.0, 12.0], [1400.0, 12.0], [1500.0, 20.0], [1600.0, 11.0], [100.0, 3.0], [1700.0, 33.0], [1800.0, 92.0], [1900.0, 45.0], [2000.0, 30.0], [2100.0, 18.0], [2200.0, 12.0], [2300.0, 8.0], [2400.0, 5.0], [2500.0, 3.0], [2600.0, 1.0], [200.0, 24535.0], [300.0, 444040.0], [400.0, 37266.0], [500.0, 2101.0]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2600.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 278.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 505870.0, "series": [{"data": [[0.0, 505870.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 3187.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 278.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 288.8312392214829, "minX": 1.6205349E12, "maxY": 300.0, "series": [{"data": [[1.6205352E12, 300.0], [1.6205349E12, 300.0], [1.62053538E12, 300.0], [1.62053508E12, 300.0], [1.62053526E12, 300.0], [1.62053544E12, 300.0], [1.62053496E12, 300.0], [1.62053514E12, 300.0], [1.62053532E12, 300.0], [1.6205355E12, 288.8312392214829], [1.62053502E12, 300.0]], "isOverall": false, "label": "Thread Group rcdn-2", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6205355E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 236.0, "minX": 1.0, "maxY": 446.0, "series": [{"data": [[2.0, 269.0], [3.0, 269.0], [4.0, 265.0], [5.0, 262.0], [6.0, 264.0], [8.0, 293.5], [15.0, 303.0], [16.0, 337.0], [17.0, 349.0], [18.0, 309.0], [19.0, 334.0], [20.0, 420.0], [22.0, 279.0], [24.0, 311.0], [25.0, 346.5], [27.0, 236.0], [28.0, 308.0], [30.0, 276.0], [31.0, 305.0], [33.0, 312.0], [32.0, 310.0], [34.0, 326.0], [37.0, 317.0], [36.0, 310.5], [39.0, 330.0], [38.0, 303.0], [41.0, 333.0], [40.0, 317.0], [42.0, 337.0], [44.0, 374.0], [46.0, 335.0], [49.0, 334.0], [48.0, 383.0], [51.0, 326.5], [53.0, 321.0], [52.0, 329.0], [55.0, 331.0], [54.0, 401.0], [57.0, 332.0], [56.0, 405.0], [58.0, 325.0], [60.0, 360.5], [63.0, 333.0], [62.0, 329.0], [67.0, 328.0], [66.0, 331.0], [64.0, 329.0], [71.0, 432.0], [70.0, 334.5], [68.0, 339.0], [75.0, 419.6666666666667], [72.0, 341.0], [79.0, 330.0], [78.0, 401.5], [76.0, 408.0], [82.0, 399.0], [81.0, 332.5], [87.0, 332.0], [86.0, 402.0], [85.0, 337.0], [84.0, 331.5], [90.0, 394.0], [89.0, 336.5], [93.0, 392.6666666666667], [99.0, 340.0], [98.0, 341.0], [97.0, 338.0], [96.0, 343.0], [103.0, 380.0], [102.0, 339.0], [101.0, 340.0], [107.0, 336.0], [106.0, 336.0], [105.0, 376.0], [104.0, 379.0], [110.0, 332.0], [109.0, 343.0], [108.0, 335.0], [115.0, 339.0], [114.0, 338.0], [112.0, 336.0], [119.0, 313.0], [118.0, 353.0], [117.0, 340.0], [116.0, 340.0], [123.0, 329.0], [122.0, 327.0], [121.0, 341.0], [120.0, 326.0], [127.0, 359.0], [126.0, 332.0], [125.0, 326.0], [124.0, 327.0], [135.0, 348.0], [134.0, 406.5], [132.0, 370.0], [131.0, 312.0], [130.0, 310.0], [129.0, 311.0], [128.0, 351.0], [143.0, 343.0], [142.0, 331.0], [141.0, 315.0], [140.0, 331.0], [139.0, 402.0], [138.0, 422.0], [137.0, 350.0], [136.0, 308.0], [151.0, 316.0], [150.0, 293.0], [149.0, 309.0], [148.0, 330.0], [147.0, 313.0], [146.0, 302.0], [145.0, 345.5], [158.0, 311.0], [157.0, 313.0], [156.0, 302.5], [154.0, 295.0], [152.0, 309.0], [167.0, 306.0], [166.0, 325.0], [164.0, 302.0], [162.0, 306.0], [160.0, 304.0], [175.0, 388.0], [174.0, 378.0], [173.0, 321.0], [172.0, 388.0], [171.0, 312.0], [170.0, 371.0], [169.0, 296.0], [168.0, 324.0], [182.0, 285.0], [180.0, 391.0], [179.0, 290.0], [178.0, 387.5], [176.0, 282.0], [191.0, 307.0], [189.0, 332.0], [188.0, 362.0], [187.0, 301.0], [186.0, 288.0], [185.0, 446.0], [184.0, 345.0], [199.0, 308.0], [198.0, 323.0], [197.0, 300.0], [195.0, 318.0], [194.0, 280.0], [193.0, 258.0], [192.0, 290.0], [207.0, 299.0], [206.0, 293.0], [205.0, 262.0], [204.0, 302.0], [203.0, 295.0], [202.0, 282.0], [201.0, 316.0], [215.0, 297.0], [214.0, 297.0], [212.0, 296.0], [211.0, 296.0], [210.0, 297.0], [209.0, 300.0], [208.0, 308.0], [223.0, 299.0], [222.0, 345.0], [221.0, 299.5], [220.0, 294.0], [218.0, 311.0], [217.0, 297.0], [216.0, 296.0], [230.0, 330.0], [229.0, 338.0], [228.0, 295.0], [227.0, 362.0], [226.0, 301.0], [224.0, 340.0], [233.0, 367.0], [232.0, 350.0], [270.0, 353.0], [269.0, 369.3333333333333], [266.0, 330.0], [265.0, 356.0], [264.0, 363.75], [263.0, 360.5], [262.0, 372.6666666666667], [260.0, 398.6666666666667], [259.0, 367.8888888888889], [256.0, 372.5], [284.0, 337.75], [287.0, 362.0], [286.0, 350.0], [285.0, 349.625], [282.0, 341.0], [279.0, 343.6666666666667], [273.0, 349.25], [275.0, 337.0], [274.0, 344.0], [278.0, 326.0], [277.0, 367.0], [276.0, 361.0], [296.0, 327.75], [300.0, 353.268132857052], [299.0, 336.20512820512835], [298.0, 306.0], [297.0, 305.3333333333333], [295.0, 316.59999999999997], [294.0, 304.0], [293.0, 311.0], [292.0, 307.0], [291.0, 308.14285714285717], [290.0, 311.5], [288.0, 352.0], [1.0, 267.0]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}, {"data": [[299.9109917834033, 353.2535894843321]], "isOverall": false, "label": "AuthzRequest-rcdn-2-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 300.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 10688.7, "minX": 1.6205349E12, "maxY": 6928441.783333333, "series": [{"data": [[1.6205352E12, 6928441.783333333], [1.6205349E12, 5428212.0], [1.62053538E12, 6849949.733333333], [1.62053508E12, 6923545.6], [1.62053526E12, 6726598.016666667], [1.62053544E12, 6882259.833333333], [1.62053496E12, 6840551.7], [1.62053514E12, 6767220.566666666], [1.62053532E12, 6820961.433333334], [1.6205355E12, 537244.8833333333], [1.62053502E12, 6711639.2]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6205352E12, 137839.2], [1.6205349E12, 107993.0], [1.62053538E12, 136280.26666666666], [1.62053508E12, 137744.4], [1.62053526E12, 133826.0], [1.62053544E12, 136920.16666666666], [1.62053496E12, 136093.3], [1.62053514E12, 134634.43333333332], [1.62053532E12, 135703.56666666668], [1.6205355E12, 10688.7], [1.62053502E12, 133525.8]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6205355E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 335.6760285784673, "minX": 1.6205349E12, "maxY": 404.2354791514289, "series": [{"data": [[1.6205352E12, 344.02626853125804], [1.6205349E12, 404.2354791514289], [1.62053538E12, 347.71577910032386], [1.62053508E12, 344.1277433662099], [1.62053526E12, 353.9591302636761], [1.62053544E12, 346.2210597172844], [1.62053496E12, 348.300168340391], [1.62053514E12, 351.9548966299596], [1.62053532E12, 349.37364407273157], [1.6205355E12, 335.6760285784673], [1.62053502E12, 354.82469530233266]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6205355E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 335.6321754126634, "minX": 1.6205349E12, "maxY": 404.16369178249295, "series": [{"data": [[1.6205352E12, 343.98194635488653], [1.6205349E12, 404.16369178249295], [1.62053538E12, 347.6805147627155], [1.62053508E12, 344.083237745661], [1.62053526E12, 353.922746950018], [1.62053544E12, 346.1833637849833], [1.62053496E12, 348.24568023064626], [1.62053514E12, 351.9095389911382], [1.62053532E12, 349.33855975782893], [1.6205355E12, 335.6321754126634], [1.62053502E12, 354.78369423736956]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6205355E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.020001923261852024, "minX": 1.6205349E12, "maxY": 0.10110117941596426, "series": [{"data": [[1.6205352E12, 0.041150848234754796], [1.6205349E12, 0.09012435991221546], [1.62053538E12, 0.06015226464677746], [1.62053508E12, 0.04200122352221486], [1.62053526E12, 0.0657024793388426], [1.62053544E12, 0.020001923261852024], [1.62053496E12, 0.06393065149668141], [1.62053514E12, 0.10110117941596426], [1.62053532E12, 0.032192963731977185], [1.6205355E12, 0.08647450110864745], [1.62053502E12, 0.020175127203881243]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6205355E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 189.0, "minX": 1.6205349E12, "maxY": 2632.0, "series": [{"data": [[1.6205352E12, 1395.0], [1.6205349E12, 2632.0], [1.62053538E12, 1397.0], [1.62053508E12, 566.0], [1.62053526E12, 1419.0], [1.62053544E12, 562.0], [1.62053496E12, 1404.0], [1.62053514E12, 1397.0], [1.62053532E12, 585.0], [1.6205355E12, 474.0], [1.62053502E12, 589.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6205352E12, 378.0], [1.6205349E12, 401.0], [1.62053538E12, 376.0], [1.62053508E12, 382.0], [1.62053526E12, 392.0], [1.62053544E12, 381.0], [1.62053496E12, 389.0], [1.62053514E12, 385.0], [1.62053532E12, 392.0], [1.6205355E12, 369.0], [1.62053502E12, 391.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6205352E12, 411.0], [1.6205349E12, 445.0], [1.62053538E12, 408.0], [1.62053508E12, 427.9900000000016], [1.62053526E12, 423.0], [1.62053544E12, 414.0], [1.62053496E12, 426.0], [1.62053514E12, 420.0], [1.62053532E12, 432.0], [1.6205355E12, 408.0], [1.62053502E12, 435.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6205352E12, 389.0], [1.6205349E12, 415.0], [1.62053538E12, 386.0], [1.62053508E12, 394.0], [1.62053526E12, 403.0], [1.62053544E12, 392.0], [1.62053496E12, 402.0], [1.62053514E12, 397.0], [1.62053532E12, 403.0], [1.6205355E12, 379.0], [1.62053502E12, 405.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6205352E12, 202.0], [1.6205349E12, 230.0], [1.62053538E12, 189.0], [1.62053508E12, 218.0], [1.62053526E12, 212.0], [1.62053544E12, 209.0], [1.62053496E12, 197.0], [1.62053514E12, 206.0], [1.62053532E12, 195.0], [1.6205355E12, 208.0], [1.62053502E12, 200.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6205352E12, 336.0], [1.6205349E12, 358.0], [1.62053538E12, 343.0], [1.62053508E12, 341.0], [1.62053526E12, 354.0], [1.62053544E12, 343.0], [1.62053496E12, 344.0], [1.62053514E12, 351.0], [1.62053532E12, 349.0], [1.6205355E12, 335.0], [1.62053502E12, 349.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6205355E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 300.0, "minX": 31.0, "maxY": 1861.0, "series": [{"data": [[31.0, 1482.0], [317.0, 1861.0], [475.0, 577.0], [485.0, 661.0], [507.0, 334.0], [519.0, 576.0], [569.0, 578.0], [578.0, 503.5], [618.0, 513.0], [662.0, 441.0], [646.0, 441.0], [645.0, 442.0], [692.0, 437.0], [673.0, 436.0], [719.0, 424.0], [708.0, 423.0], [722.0, 414.0], [762.0, 400.0], [741.0, 418.0], [739.0, 395.0], [743.0, 391.0], [765.0, 379.0], [753.0, 403.0], [759.0, 386.0], [757.0, 375.0], [758.0, 389.0], [794.0, 375.0], [785.0, 373.0], [795.0, 372.0], [788.0, 384.0], [791.0, 386.0], [790.0, 374.0], [789.0, 380.0], [771.0, 381.0], [773.0, 380.0], [792.0, 390.0], [793.0, 390.0], [775.0, 382.0], [774.0, 391.0], [772.0, 381.0], [799.0, 373.0], [798.0, 364.0], [786.0, 374.0], [781.0, 391.0], [779.0, 372.0], [769.0, 386.0], [770.0, 379.0], [783.0, 386.0], [776.0, 386.0], [778.0, 388.0], [826.0, 357.0], [803.0, 362.0], [807.0, 374.0], [825.0, 359.0], [824.0, 362.0], [828.0, 364.0], [827.0, 347.0], [804.0, 372.0], [806.0, 373.0], [805.0, 371.0], [808.0, 370.5], [820.0, 363.0], [821.0, 362.0], [823.0, 370.0], [822.0, 352.0], [818.0, 363.0], [816.0, 358.0], [817.0, 366.0], [830.0, 355.0], [831.0, 341.0], [819.0, 362.0], [829.0, 360.0], [801.0, 373.0], [802.0, 372.0], [800.0, 361.0], [815.0, 364.0], [814.0, 369.0], [809.0, 361.0], [812.0, 357.0], [813.0, 366.5], [810.0, 362.0], [811.0, 364.0], [835.0, 359.0], [861.0, 344.0], [832.0, 361.0], [853.0, 343.0], [855.0, 344.0], [854.0, 348.0], [860.0, 352.0], [836.0, 358.0], [837.0, 354.0], [838.0, 354.0], [839.0, 362.0], [857.0, 349.0], [858.0, 348.0], [856.0, 353.0], [859.0, 352.0], [849.0, 352.0], [851.0, 349.0], [850.0, 354.5], [848.0, 359.0], [862.0, 343.0], [863.0, 347.0], [852.0, 347.0], [842.0, 356.0], [840.0, 350.0], [841.0, 352.0], [843.0, 356.0], [844.0, 357.0], [847.0, 346.0], [846.0, 360.0], [845.0, 359.0], [834.0, 358.0], [833.0, 360.0], [892.0, 334.0], [865.0, 348.0], [884.0, 347.0], [885.0, 345.0], [883.0, 339.0], [882.0, 340.0], [886.0, 333.0], [887.0, 338.0], [878.0, 345.0], [881.0, 341.0], [877.0, 341.0], [876.0, 344.0], [875.0, 348.0], [873.0, 350.0], [874.0, 352.0], [872.0, 342.0], [864.0, 346.0], [879.0, 338.0], [895.0, 334.0], [894.0, 329.0], [893.0, 333.0], [880.0, 341.0], [870.0, 343.0], [890.0, 341.0], [888.0, 342.0], [891.0, 336.0], [871.0, 344.0], [867.0, 343.0], [866.0, 346.0], [868.0, 349.0], [869.0, 340.0], [897.0, 328.0], [927.0, 325.0], [918.0, 324.0], [919.0, 334.0], [916.0, 326.0], [917.0, 324.0], [900.0, 327.0], [901.0, 335.0], [902.0, 327.5], [921.0, 335.0], [922.0, 332.0], [923.0, 327.0], [925.0, 327.0], [926.0, 311.0], [924.0, 329.0], [898.0, 336.0], [899.0, 343.0], [915.0, 315.0], [896.0, 346.0], [911.0, 326.0], [907.0, 333.0], [908.0, 333.0], [910.0, 333.0], [909.0, 332.0], [906.0, 334.0], [904.0, 331.0], [905.0, 322.0], [912.0, 333.0], [914.0, 324.0], [913.0, 330.0], [930.0, 331.0], [933.0, 333.0], [931.0, 324.0], [932.0, 335.0], [937.0, 320.0], [936.0, 318.0], [947.0, 320.0], [951.0, 318.0], [948.0, 307.0], [949.0, 316.0], [950.0, 326.0], [929.0, 326.0], [928.0, 317.0], [938.0, 329.0], [934.0, 333.0], [954.0, 317.0], [953.0, 313.0], [956.0, 312.5], [945.0, 326.0], [946.0, 318.0], [942.0, 319.0], [941.0, 320.0], [976.0, 305.0], [978.0, 310.0], [970.0, 319.5], [977.0, 301.0], [1003.0, 300.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1003.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 300.0, "minX": 31.0, "maxY": 1859.0, "series": [{"data": [[31.0, 1482.0], [317.0, 1859.0], [475.0, 577.0], [485.0, 660.0], [507.0, 334.0], [519.0, 576.0], [569.0, 578.0], [578.0, 503.5], [618.0, 512.5], [662.0, 441.0], [646.0, 441.0], [645.0, 442.0], [692.0, 437.0], [673.0, 436.0], [719.0, 424.0], [708.0, 423.0], [722.0, 414.0], [762.0, 400.0], [741.0, 417.0], [739.0, 395.0], [743.0, 391.0], [765.0, 379.0], [753.0, 403.0], [759.0, 386.0], [757.0, 375.0], [758.0, 389.0], [794.0, 375.0], [785.0, 373.0], [795.0, 372.0], [788.0, 384.0], [791.0, 386.0], [790.0, 374.0], [789.0, 380.0], [771.0, 381.0], [773.0, 380.0], [792.0, 390.0], [793.0, 390.0], [775.0, 382.0], [774.0, 391.0], [772.0, 381.0], [799.0, 373.0], [798.0, 364.0], [786.0, 374.0], [781.0, 391.0], [779.0, 372.0], [769.0, 386.0], [770.0, 379.0], [783.0, 386.0], [776.0, 386.0], [778.0, 388.0], [826.0, 357.0], [803.0, 362.0], [807.0, 374.0], [825.0, 359.0], [824.0, 362.0], [828.0, 364.0], [827.0, 347.0], [804.0, 372.0], [806.0, 373.0], [805.0, 371.0], [808.0, 370.0], [820.0, 363.0], [821.0, 362.0], [823.0, 370.0], [822.0, 352.0], [818.0, 363.0], [816.0, 358.0], [817.0, 366.0], [830.0, 355.0], [831.0, 340.0], [819.0, 362.0], [829.0, 360.0], [801.0, 373.0], [802.0, 372.0], [800.0, 361.0], [815.0, 364.0], [814.0, 369.0], [809.0, 361.0], [812.0, 357.0], [813.0, 366.0], [810.0, 362.0], [811.0, 364.0], [835.0, 359.0], [861.0, 344.0], [832.0, 361.0], [853.0, 343.0], [855.0, 344.0], [854.0, 348.0], [860.0, 352.0], [836.0, 358.0], [837.0, 354.0], [838.0, 354.0], [839.0, 362.0], [857.0, 349.0], [858.0, 348.0], [856.0, 353.0], [859.0, 352.0], [849.0, 352.0], [851.0, 349.0], [850.0, 354.5], [848.0, 359.0], [862.0, 343.0], [863.0, 347.0], [852.0, 347.0], [842.0, 356.0], [840.0, 350.0], [841.0, 352.0], [843.0, 356.0], [844.0, 357.0], [847.0, 346.0], [846.0, 360.0], [845.0, 359.0], [834.0, 358.0], [833.0, 360.0], [892.0, 334.0], [865.0, 348.0], [884.0, 347.0], [885.0, 345.0], [883.0, 339.0], [882.0, 340.0], [886.0, 333.0], [887.0, 338.0], [878.0, 345.0], [881.0, 341.0], [877.0, 341.0], [876.0, 344.0], [875.0, 348.0], [873.0, 350.0], [874.0, 352.0], [872.0, 342.0], [864.0, 346.0], [879.0, 337.0], [895.0, 334.0], [894.0, 329.0], [893.0, 333.0], [880.0, 341.0], [870.0, 343.0], [890.0, 341.0], [888.0, 342.0], [891.0, 336.0], [871.0, 344.0], [867.0, 343.0], [866.0, 346.0], [868.0, 349.0], [869.0, 340.0], [897.0, 328.0], [927.0, 325.0], [918.0, 323.0], [919.0, 334.0], [916.0, 326.0], [917.0, 324.0], [900.0, 327.0], [901.0, 335.0], [902.0, 327.5], [921.0, 335.0], [922.0, 332.0], [923.0, 327.0], [925.0, 327.0], [926.0, 311.0], [924.0, 329.0], [898.0, 336.0], [899.0, 343.0], [915.0, 315.0], [896.0, 346.0], [911.0, 326.0], [907.0, 333.0], [908.0, 333.0], [910.0, 333.0], [909.0, 331.0], [906.0, 334.0], [904.0, 331.0], [905.0, 322.0], [912.0, 333.0], [914.0, 324.0], [913.0, 330.0], [930.0, 331.0], [933.0, 333.0], [931.0, 324.0], [932.0, 335.0], [937.0, 320.0], [936.0, 318.0], [947.0, 320.0], [951.0, 318.0], [948.0, 307.0], [949.0, 316.0], [950.0, 326.0], [929.0, 326.0], [928.0, 317.0], [938.0, 329.0], [934.0, 333.0], [954.0, 317.0], [953.0, 313.0], [956.0, 312.5], [945.0, 326.0], [946.0, 318.0], [942.0, 319.0], [941.0, 320.0], [976.0, 305.0], [978.0, 310.0], [970.0, 319.0], [977.0, 301.0], [1003.0, 300.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1003.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 62.65, "minX": 1.6205349E12, "maxY": 872.4, "series": [{"data": [[1.6205352E12, 872.4], [1.6205349E12, 688.5], [1.62053538E12, 862.5333333333333], [1.62053508E12, 871.8], [1.62053526E12, 847.0], [1.62053544E12, 866.5833333333334], [1.62053496E12, 861.3333333333334], [1.62053514E12, 852.1166666666667], [1.62053532E12, 858.8833333333333], [1.6205355E12, 62.65], [1.62053502E12, 845.1166666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6205355E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 67.65, "minX": 1.6205349E12, "maxY": 872.4, "series": [{"data": [[1.6205352E12, 872.4], [1.6205349E12, 683.5], [1.62053538E12, 862.5333333333333], [1.62053508E12, 871.8], [1.62053526E12, 847.0], [1.62053544E12, 866.5833333333334], [1.62053496E12, 861.35], [1.62053514E12, 852.1166666666667], [1.62053532E12, 858.8833333333333], [1.6205355E12, 67.65], [1.62053502E12, 845.1]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6205355E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 67.65, "minX": 1.6205349E12, "maxY": 872.4, "series": [{"data": [[1.6205352E12, 872.4], [1.6205349E12, 683.5], [1.62053538E12, 862.5333333333333], [1.62053508E12, 871.8], [1.62053526E12, 847.0], [1.62053544E12, 866.5833333333334], [1.62053496E12, 861.35], [1.62053514E12, 852.1166666666667], [1.62053532E12, 858.8833333333333], [1.6205355E12, 67.65], [1.62053502E12, 845.1]], "isOverall": false, "label": "AuthzRequest-rcdn-2-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6205355E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 67.65, "minX": 1.6205349E12, "maxY": 872.4, "series": [{"data": [[1.6205352E12, 872.4], [1.6205349E12, 683.5], [1.62053538E12, 862.5333333333333], [1.62053508E12, 871.8], [1.62053526E12, 847.0], [1.62053544E12, 866.5833333333334], [1.62053496E12, 861.35], [1.62053514E12, 852.1166666666667], [1.62053532E12, 858.8833333333333], [1.6205355E12, 67.65], [1.62053502E12, 845.1]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6205355E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

