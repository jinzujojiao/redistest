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
        data: {"result": {"minY": 179.0, "minX": 0.0, "maxY": 3491.0, "series": [{"data": [[0.0, 179.0], [0.1, 288.0], [0.2, 303.0], [0.3, 311.0], [0.4, 316.0], [0.5, 321.0], [0.6, 324.0], [0.7, 327.0], [0.8, 329.0], [0.9, 331.0], [1.0, 332.0], [1.1, 334.0], [1.2, 335.0], [1.3, 336.0], [1.4, 337.0], [1.5, 338.0], [1.6, 339.0], [1.7, 340.0], [1.8, 341.0], [1.9, 342.0], [2.0, 343.0], [2.1, 343.0], [2.2, 344.0], [2.3, 345.0], [2.4, 345.0], [2.5, 346.0], [2.6, 347.0], [2.7, 347.0], [2.8, 348.0], [2.9, 348.0], [3.0, 349.0], [3.1, 349.0], [3.2, 350.0], [3.3, 350.0], [3.4, 351.0], [3.5, 351.0], [3.6, 352.0], [3.7, 352.0], [3.8, 353.0], [3.9, 353.0], [4.0, 353.0], [4.1, 354.0], [4.2, 354.0], [4.3, 355.0], [4.4, 355.0], [4.5, 355.0], [4.6, 356.0], [4.7, 356.0], [4.8, 356.0], [4.9, 357.0], [5.0, 357.0], [5.1, 357.0], [5.2, 358.0], [5.3, 358.0], [5.4, 358.0], [5.5, 359.0], [5.6, 359.0], [5.7, 359.0], [5.8, 359.0], [5.9, 360.0], [6.0, 360.0], [6.1, 360.0], [6.2, 361.0], [6.3, 361.0], [6.4, 361.0], [6.5, 361.0], [6.6, 362.0], [6.7, 362.0], [6.8, 362.0], [6.9, 362.0], [7.0, 363.0], [7.1, 363.0], [7.2, 363.0], [7.3, 363.0], [7.4, 363.0], [7.5, 364.0], [7.6, 364.0], [7.7, 364.0], [7.8, 364.0], [7.9, 365.0], [8.0, 365.0], [8.1, 365.0], [8.2, 365.0], [8.3, 365.0], [8.4, 366.0], [8.5, 366.0], [8.6, 366.0], [8.7, 366.0], [8.8, 366.0], [8.9, 367.0], [9.0, 367.0], [9.1, 367.0], [9.2, 367.0], [9.3, 367.0], [9.4, 368.0], [9.5, 368.0], [9.6, 368.0], [9.7, 368.0], [9.8, 368.0], [9.9, 369.0], [10.0, 369.0], [10.1, 369.0], [10.2, 369.0], [10.3, 369.0], [10.4, 369.0], [10.5, 370.0], [10.6, 370.0], [10.7, 370.0], [10.8, 370.0], [10.9, 370.0], [11.0, 371.0], [11.1, 371.0], [11.2, 371.0], [11.3, 371.0], [11.4, 371.0], [11.5, 371.0], [11.6, 372.0], [11.7, 372.0], [11.8, 372.0], [11.9, 372.0], [12.0, 372.0], [12.1, 372.0], [12.2, 373.0], [12.3, 373.0], [12.4, 373.0], [12.5, 373.0], [12.6, 373.0], [12.7, 373.0], [12.8, 373.0], [12.9, 374.0], [13.0, 374.0], [13.1, 374.0], [13.2, 374.0], [13.3, 374.0], [13.4, 374.0], [13.5, 375.0], [13.6, 375.0], [13.7, 375.0], [13.8, 375.0], [13.9, 375.0], [14.0, 375.0], [14.1, 376.0], [14.2, 376.0], [14.3, 376.0], [14.4, 376.0], [14.5, 376.0], [14.6, 376.0], [14.7, 376.0], [14.8, 376.0], [14.9, 377.0], [15.0, 377.0], [15.1, 377.0], [15.2, 377.0], [15.3, 377.0], [15.4, 377.0], [15.5, 377.0], [15.6, 378.0], [15.7, 378.0], [15.8, 378.0], [15.9, 378.0], [16.0, 378.0], [16.1, 378.0], [16.2, 378.0], [16.3, 379.0], [16.4, 379.0], [16.5, 379.0], [16.6, 379.0], [16.7, 379.0], [16.8, 379.0], [16.9, 379.0], [17.0, 379.0], [17.1, 380.0], [17.2, 380.0], [17.3, 380.0], [17.4, 380.0], [17.5, 380.0], [17.6, 380.0], [17.7, 380.0], [17.8, 381.0], [17.9, 381.0], [18.0, 381.0], [18.1, 381.0], [18.2, 381.0], [18.3, 381.0], [18.4, 381.0], [18.5, 381.0], [18.6, 382.0], [18.7, 382.0], [18.8, 382.0], [18.9, 382.0], [19.0, 382.0], [19.1, 382.0], [19.2, 382.0], [19.3, 382.0], [19.4, 383.0], [19.5, 383.0], [19.6, 383.0], [19.7, 383.0], [19.8, 383.0], [19.9, 383.0], [20.0, 383.0], [20.1, 383.0], [20.2, 384.0], [20.3, 384.0], [20.4, 384.0], [20.5, 384.0], [20.6, 384.0], [20.7, 384.0], [20.8, 384.0], [20.9, 384.0], [21.0, 384.0], [21.1, 385.0], [21.2, 385.0], [21.3, 385.0], [21.4, 385.0], [21.5, 385.0], [21.6, 385.0], [21.7, 385.0], [21.8, 385.0], [21.9, 386.0], [22.0, 386.0], [22.1, 386.0], [22.2, 386.0], [22.3, 386.0], [22.4, 386.0], [22.5, 386.0], [22.6, 386.0], [22.7, 386.0], [22.8, 387.0], [22.9, 387.0], [23.0, 387.0], [23.1, 387.0], [23.2, 387.0], [23.3, 387.0], [23.4, 387.0], [23.5, 387.0], [23.6, 387.0], [23.7, 388.0], [23.8, 388.0], [23.9, 388.0], [24.0, 388.0], [24.1, 388.0], [24.2, 388.0], [24.3, 388.0], [24.4, 388.0], [24.5, 388.0], [24.6, 388.0], [24.7, 389.0], [24.8, 389.0], [24.9, 389.0], [25.0, 389.0], [25.1, 389.0], [25.2, 389.0], [25.3, 389.0], [25.4, 389.0], [25.5, 389.0], [25.6, 390.0], [25.7, 390.0], [25.8, 390.0], [25.9, 390.0], [26.0, 390.0], [26.1, 390.0], [26.2, 390.0], [26.3, 390.0], [26.4, 390.0], [26.5, 391.0], [26.6, 391.0], [26.7, 391.0], [26.8, 391.0], [26.9, 391.0], [27.0, 391.0], [27.1, 391.0], [27.2, 391.0], [27.3, 391.0], [27.4, 391.0], [27.5, 392.0], [27.6, 392.0], [27.7, 392.0], [27.8, 392.0], [27.9, 392.0], [28.0, 392.0], [28.1, 392.0], [28.2, 392.0], [28.3, 392.0], [28.4, 392.0], [28.5, 393.0], [28.6, 393.0], [28.7, 393.0], [28.8, 393.0], [28.9, 393.0], [29.0, 393.0], [29.1, 393.0], [29.2, 393.0], [29.3, 393.0], [29.4, 393.0], [29.5, 394.0], [29.6, 394.0], [29.7, 394.0], [29.8, 394.0], [29.9, 394.0], [30.0, 394.0], [30.1, 394.0], [30.2, 394.0], [30.3, 394.0], [30.4, 394.0], [30.5, 395.0], [30.6, 395.0], [30.7, 395.0], [30.8, 395.0], [30.9, 395.0], [31.0, 395.0], [31.1, 395.0], [31.2, 395.0], [31.3, 395.0], [31.4, 395.0], [31.5, 395.0], [31.6, 396.0], [31.7, 396.0], [31.8, 396.0], [31.9, 396.0], [32.0, 396.0], [32.1, 396.0], [32.2, 396.0], [32.3, 396.0], [32.4, 396.0], [32.5, 396.0], [32.6, 397.0], [32.7, 397.0], [32.8, 397.0], [32.9, 397.0], [33.0, 397.0], [33.1, 397.0], [33.2, 397.0], [33.3, 397.0], [33.4, 397.0], [33.5, 397.0], [33.6, 397.0], [33.7, 398.0], [33.8, 398.0], [33.9, 398.0], [34.0, 398.0], [34.1, 398.0], [34.2, 398.0], [34.3, 398.0], [34.4, 398.0], [34.5, 398.0], [34.6, 398.0], [34.7, 398.0], [34.8, 399.0], [34.9, 399.0], [35.0, 399.0], [35.1, 399.0], [35.2, 399.0], [35.3, 399.0], [35.4, 399.0], [35.5, 399.0], [35.6, 399.0], [35.7, 399.0], [35.8, 399.0], [35.9, 400.0], [36.0, 400.0], [36.1, 400.0], [36.2, 400.0], [36.3, 400.0], [36.4, 400.0], [36.5, 400.0], [36.6, 400.0], [36.7, 400.0], [36.8, 400.0], [36.9, 400.0], [37.0, 401.0], [37.1, 401.0], [37.2, 401.0], [37.3, 401.0], [37.4, 401.0], [37.5, 401.0], [37.6, 401.0], [37.7, 401.0], [37.8, 401.0], [37.9, 401.0], [38.0, 401.0], [38.1, 402.0], [38.2, 402.0], [38.3, 402.0], [38.4, 402.0], [38.5, 402.0], [38.6, 402.0], [38.7, 402.0], [38.8, 402.0], [38.9, 402.0], [39.0, 402.0], [39.1, 403.0], [39.2, 403.0], [39.3, 403.0], [39.4, 403.0], [39.5, 403.0], [39.6, 403.0], [39.7, 403.0], [39.8, 403.0], [39.9, 403.0], [40.0, 403.0], [40.1, 403.0], [40.2, 404.0], [40.3, 404.0], [40.4, 404.0], [40.5, 404.0], [40.6, 404.0], [40.7, 404.0], [40.8, 404.0], [40.9, 404.0], [41.0, 404.0], [41.1, 404.0], [41.2, 405.0], [41.3, 405.0], [41.4, 405.0], [41.5, 405.0], [41.6, 405.0], [41.7, 405.0], [41.8, 405.0], [41.9, 405.0], [42.0, 405.0], [42.1, 405.0], [42.2, 405.0], [42.3, 406.0], [42.4, 406.0], [42.5, 406.0], [42.6, 406.0], [42.7, 406.0], [42.8, 406.0], [42.9, 406.0], [43.0, 406.0], [43.1, 406.0], [43.2, 406.0], [43.3, 406.0], [43.4, 407.0], [43.5, 407.0], [43.6, 407.0], [43.7, 407.0], [43.8, 407.0], [43.9, 407.0], [44.0, 407.0], [44.1, 407.0], [44.2, 407.0], [44.3, 407.0], [44.4, 408.0], [44.5, 408.0], [44.6, 408.0], [44.7, 408.0], [44.8, 408.0], [44.9, 408.0], [45.0, 408.0], [45.1, 408.0], [45.2, 408.0], [45.3, 408.0], [45.4, 408.0], [45.5, 409.0], [45.6, 409.0], [45.7, 409.0], [45.8, 409.0], [45.9, 409.0], [46.0, 409.0], [46.1, 409.0], [46.2, 409.0], [46.3, 409.0], [46.4, 409.0], [46.5, 410.0], [46.6, 410.0], [46.7, 410.0], [46.8, 410.0], [46.9, 410.0], [47.0, 410.0], [47.1, 410.0], [47.2, 410.0], [47.3, 410.0], [47.4, 410.0], [47.5, 411.0], [47.6, 411.0], [47.7, 411.0], [47.8, 411.0], [47.9, 411.0], [48.0, 411.0], [48.1, 411.0], [48.2, 411.0], [48.3, 411.0], [48.4, 411.0], [48.5, 411.0], [48.6, 412.0], [48.7, 412.0], [48.8, 412.0], [48.9, 412.0], [49.0, 412.0], [49.1, 412.0], [49.2, 412.0], [49.3, 412.0], [49.4, 412.0], [49.5, 412.0], [49.6, 413.0], [49.7, 413.0], [49.8, 413.0], [49.9, 413.0], [50.0, 413.0], [50.1, 413.0], [50.2, 413.0], [50.3, 413.0], [50.4, 413.0], [50.5, 413.0], [50.6, 413.0], [50.7, 414.0], [50.8, 414.0], [50.9, 414.0], [51.0, 414.0], [51.1, 414.0], [51.2, 414.0], [51.3, 414.0], [51.4, 414.0], [51.5, 414.0], [51.6, 414.0], [51.7, 415.0], [51.8, 415.0], [51.9, 415.0], [52.0, 415.0], [52.1, 415.0], [52.2, 415.0], [52.3, 415.0], [52.4, 415.0], [52.5, 415.0], [52.6, 415.0], [52.7, 416.0], [52.8, 416.0], [52.9, 416.0], [53.0, 416.0], [53.1, 416.0], [53.2, 416.0], [53.3, 416.0], [53.4, 416.0], [53.5, 416.0], [53.6, 416.0], [53.7, 417.0], [53.8, 417.0], [53.9, 417.0], [54.0, 417.0], [54.1, 417.0], [54.2, 417.0], [54.3, 417.0], [54.4, 417.0], [54.5, 417.0], [54.6, 417.0], [54.7, 418.0], [54.8, 418.0], [54.9, 418.0], [55.0, 418.0], [55.1, 418.0], [55.2, 418.0], [55.3, 418.0], [55.4, 418.0], [55.5, 418.0], [55.6, 419.0], [55.7, 419.0], [55.8, 419.0], [55.9, 419.0], [56.0, 419.0], [56.1, 419.0], [56.2, 419.0], [56.3, 419.0], [56.4, 419.0], [56.5, 419.0], [56.6, 420.0], [56.7, 420.0], [56.8, 420.0], [56.9, 420.0], [57.0, 420.0], [57.1, 420.0], [57.2, 420.0], [57.3, 420.0], [57.4, 420.0], [57.5, 421.0], [57.6, 421.0], [57.7, 421.0], [57.8, 421.0], [57.9, 421.0], [58.0, 421.0], [58.1, 421.0], [58.2, 421.0], [58.3, 421.0], [58.4, 422.0], [58.5, 422.0], [58.6, 422.0], [58.7, 422.0], [58.8, 422.0], [58.9, 422.0], [59.0, 422.0], [59.1, 422.0], [59.2, 422.0], [59.3, 423.0], [59.4, 423.0], [59.5, 423.0], [59.6, 423.0], [59.7, 423.0], [59.8, 423.0], [59.9, 423.0], [60.0, 423.0], [60.1, 423.0], [60.2, 424.0], [60.3, 424.0], [60.4, 424.0], [60.5, 424.0], [60.6, 424.0], [60.7, 424.0], [60.8, 424.0], [60.9, 424.0], [61.0, 424.0], [61.1, 425.0], [61.2, 425.0], [61.3, 425.0], [61.4, 425.0], [61.5, 425.0], [61.6, 425.0], [61.7, 425.0], [61.8, 425.0], [61.9, 425.0], [62.0, 426.0], [62.1, 426.0], [62.2, 426.0], [62.3, 426.0], [62.4, 426.0], [62.5, 426.0], [62.6, 426.0], [62.7, 426.0], [62.8, 427.0], [62.9, 427.0], [63.0, 427.0], [63.1, 427.0], [63.2, 427.0], [63.3, 427.0], [63.4, 427.0], [63.5, 427.0], [63.6, 427.0], [63.7, 428.0], [63.8, 428.0], [63.9, 428.0], [64.0, 428.0], [64.1, 428.0], [64.2, 428.0], [64.3, 428.0], [64.4, 428.0], [64.5, 429.0], [64.6, 429.0], [64.7, 429.0], [64.8, 429.0], [64.9, 429.0], [65.0, 429.0], [65.1, 429.0], [65.2, 429.0], [65.3, 430.0], [65.4, 430.0], [65.5, 430.0], [65.6, 430.0], [65.7, 430.0], [65.8, 430.0], [65.9, 430.0], [66.0, 430.0], [66.1, 431.0], [66.2, 431.0], [66.3, 431.0], [66.4, 431.0], [66.5, 431.0], [66.6, 431.0], [66.7, 431.0], [66.8, 432.0], [66.9, 432.0], [67.0, 432.0], [67.1, 432.0], [67.2, 432.0], [67.3, 432.0], [67.4, 432.0], [67.5, 432.0], [67.6, 433.0], [67.7, 433.0], [67.8, 433.0], [67.9, 433.0], [68.0, 433.0], [68.1, 433.0], [68.2, 433.0], [68.3, 434.0], [68.4, 434.0], [68.5, 434.0], [68.6, 434.0], [68.7, 434.0], [68.8, 434.0], [68.9, 434.0], [69.0, 435.0], [69.1, 435.0], [69.2, 435.0], [69.3, 435.0], [69.4, 435.0], [69.5, 435.0], [69.6, 435.0], [69.7, 436.0], [69.8, 436.0], [69.9, 436.0], [70.0, 436.0], [70.1, 436.0], [70.2, 436.0], [70.3, 436.0], [70.4, 437.0], [70.5, 437.0], [70.6, 437.0], [70.7, 437.0], [70.8, 437.0], [70.9, 437.0], [71.0, 437.0], [71.1, 438.0], [71.2, 438.0], [71.3, 438.0], [71.4, 438.0], [71.5, 438.0], [71.6, 438.0], [71.7, 439.0], [71.8, 439.0], [71.9, 439.0], [72.0, 439.0], [72.1, 439.0], [72.2, 439.0], [72.3, 439.0], [72.4, 440.0], [72.5, 440.0], [72.6, 440.0], [72.7, 440.0], [72.8, 440.0], [72.9, 440.0], [73.0, 441.0], [73.1, 441.0], [73.2, 441.0], [73.3, 441.0], [73.4, 441.0], [73.5, 441.0], [73.6, 441.0], [73.7, 442.0], [73.8, 442.0], [73.9, 442.0], [74.0, 442.0], [74.1, 442.0], [74.2, 443.0], [74.3, 443.0], [74.4, 443.0], [74.5, 443.0], [74.6, 443.0], [74.7, 443.0], [74.8, 444.0], [74.9, 444.0], [75.0, 444.0], [75.1, 444.0], [75.2, 444.0], [75.3, 444.0], [75.4, 445.0], [75.5, 445.0], [75.6, 445.0], [75.7, 445.0], [75.8, 445.0], [75.9, 445.0], [76.0, 446.0], [76.1, 446.0], [76.2, 446.0], [76.3, 446.0], [76.4, 446.0], [76.5, 447.0], [76.6, 447.0], [76.7, 447.0], [76.8, 447.0], [76.9, 447.0], [77.0, 447.0], [77.1, 448.0], [77.2, 448.0], [77.3, 448.0], [77.4, 448.0], [77.5, 448.0], [77.6, 449.0], [77.7, 449.0], [77.8, 449.0], [77.9, 449.0], [78.0, 449.0], [78.1, 450.0], [78.2, 450.0], [78.3, 450.0], [78.4, 450.0], [78.5, 450.0], [78.6, 451.0], [78.7, 451.0], [78.8, 451.0], [78.9, 451.0], [79.0, 451.0], [79.1, 452.0], [79.2, 452.0], [79.3, 452.0], [79.4, 452.0], [79.5, 452.0], [79.6, 453.0], [79.7, 453.0], [79.8, 453.0], [79.9, 453.0], [80.0, 453.0], [80.1, 454.0], [80.2, 454.0], [80.3, 454.0], [80.4, 454.0], [80.5, 455.0], [80.6, 455.0], [80.7, 455.0], [80.8, 455.0], [80.9, 455.0], [81.0, 456.0], [81.1, 456.0], [81.2, 456.0], [81.3, 456.0], [81.4, 457.0], [81.5, 457.0], [81.6, 457.0], [81.7, 457.0], [81.8, 458.0], [81.9, 458.0], [82.0, 458.0], [82.1, 458.0], [82.2, 459.0], [82.3, 459.0], [82.4, 459.0], [82.5, 459.0], [82.6, 460.0], [82.7, 460.0], [82.8, 460.0], [82.9, 460.0], [83.0, 461.0], [83.1, 461.0], [83.2, 461.0], [83.3, 461.0], [83.4, 462.0], [83.5, 462.0], [83.6, 462.0], [83.7, 462.0], [83.8, 463.0], [83.9, 463.0], [84.0, 463.0], [84.1, 464.0], [84.2, 464.0], [84.3, 464.0], [84.4, 464.0], [84.5, 465.0], [84.6, 465.0], [84.7, 465.0], [84.8, 466.0], [84.9, 466.0], [85.0, 466.0], [85.1, 466.0], [85.2, 467.0], [85.3, 467.0], [85.4, 467.0], [85.5, 468.0], [85.6, 468.0], [85.7, 468.0], [85.8, 469.0], [85.9, 469.0], [86.0, 469.0], [86.1, 470.0], [86.2, 470.0], [86.3, 470.0], [86.4, 471.0], [86.5, 471.0], [86.6, 471.0], [86.7, 472.0], [86.8, 472.0], [86.9, 472.0], [87.0, 473.0], [87.1, 473.0], [87.2, 473.0], [87.3, 474.0], [87.4, 474.0], [87.5, 474.0], [87.6, 475.0], [87.7, 475.0], [87.8, 475.0], [87.9, 476.0], [88.0, 476.0], [88.1, 477.0], [88.2, 477.0], [88.3, 477.0], [88.4, 478.0], [88.5, 478.0], [88.6, 478.0], [88.7, 479.0], [88.8, 479.0], [88.9, 480.0], [89.0, 480.0], [89.1, 481.0], [89.2, 481.0], [89.3, 481.0], [89.4, 482.0], [89.5, 482.0], [89.6, 483.0], [89.7, 483.0], [89.8, 484.0], [89.9, 484.0], [90.0, 485.0], [90.1, 485.0], [90.2, 485.0], [90.3, 486.0], [90.4, 486.0], [90.5, 487.0], [90.6, 487.0], [90.7, 488.0], [90.8, 488.0], [90.9, 489.0], [91.0, 489.0], [91.1, 490.0], [91.2, 491.0], [91.3, 491.0], [91.4, 492.0], [91.5, 492.0], [91.6, 493.0], [91.7, 493.0], [91.8, 494.0], [91.9, 495.0], [92.0, 495.0], [92.1, 496.0], [92.2, 497.0], [92.3, 497.0], [92.4, 498.0], [92.5, 498.0], [92.6, 499.0], [92.7, 500.0], [92.8, 500.0], [92.9, 501.0], [93.0, 502.0], [93.1, 503.0], [93.2, 503.0], [93.3, 504.0], [93.4, 505.0], [93.5, 506.0], [93.6, 506.0], [93.7, 507.0], [93.8, 508.0], [93.9, 509.0], [94.0, 509.0], [94.1, 510.0], [94.2, 511.0], [94.3, 512.0], [94.4, 513.0], [94.5, 514.0], [94.6, 515.0], [94.7, 516.0], [94.8, 517.0], [94.9, 518.0], [95.0, 519.0], [95.1, 520.0], [95.2, 521.0], [95.3, 522.0], [95.4, 523.0], [95.5, 524.0], [95.6, 525.0], [95.7, 526.0], [95.8, 528.0], [95.9, 529.0], [96.0, 530.0], [96.1, 532.0], [96.2, 533.0], [96.3, 534.0], [96.4, 536.0], [96.5, 537.0], [96.6, 539.0], [96.7, 541.0], [96.8, 543.0], [96.9, 544.0], [97.0, 546.0], [97.1, 548.0], [97.2, 550.0], [97.3, 552.0], [97.4, 554.0], [97.5, 556.0], [97.6, 558.0], [97.7, 561.0], [97.8, 563.0], [97.9, 566.0], [98.0, 569.0], [98.1, 572.0], [98.2, 575.0], [98.3, 579.0], [98.4, 583.0], [98.5, 587.0], [98.6, 592.0], [98.7, 598.0], [98.8, 604.0], [98.9, 612.0], [99.0, 620.0], [99.1, 631.0], [99.2, 644.0], [99.3, 663.0], [99.4, 689.0], [99.5, 723.0], [99.6, 784.0], [99.7, 891.0], [99.8, 1087.0], [99.9, 1771.0]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 240709.0, "series": [{"data": [[600.0, 2984.0], [700.0, 767.0], [800.0, 378.0], [900.0, 229.0], [1000.0, 181.0], [1100.0, 97.0], [1200.0, 36.0], [1300.0, 31.0], [1400.0, 21.0], [1500.0, 19.0], [1600.0, 28.0], [100.0, 1.0], [1700.0, 246.0], [1800.0, 93.0], [1900.0, 61.0], [2000.0, 43.0], [2100.0, 39.0], [2200.0, 34.0], [2300.0, 18.0], [2400.0, 10.0], [2500.0, 9.0], [2600.0, 8.0], [2700.0, 7.0], [2800.0, 10.0], [2900.0, 4.0], [3000.0, 2.0], [3100.0, 3.0], [200.0, 677.0], [3300.0, 2.0], [3200.0, 2.0], [3400.0, 2.0], [300.0, 151109.0], [400.0, 240709.0], [500.0, 25744.0]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 639.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 393111.0, "series": [{"data": [[0.0, 393111.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 29854.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 639.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 296.6509930785442, "minX": 1.62045792E12, "maxY": 300.0, "series": [{"data": [[1.62045834E12, 300.0], [1.62045816E12, 300.0], [1.62045822E12, 300.0], [1.62045804E12, 300.0], [1.62045852E12, 296.6509930785442], [1.6204581E12, 300.0], [1.62045792E12, 299.9942508710775], [1.6204584E12, 300.0], [1.62045798E12, 300.0], [1.62045846E12, 300.0], [1.62045828E12, 300.0]], "isOverall": false, "label": "Thread Group rcdn-2", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62045852E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 257.0, "minX": 1.0, "maxY": 534.0, "series": [{"data": [[2.0, 363.0], [4.0, 367.5], [5.0, 377.0], [6.0, 268.0], [7.0, 270.0], [8.0, 386.0], [9.0, 347.0], [10.0, 410.0], [11.0, 257.0], [12.0, 356.0], [13.0, 359.0], [14.0, 362.0], [15.0, 363.0], [16.0, 363.0], [17.0, 381.0], [19.0, 364.5], [20.0, 372.0], [21.0, 403.0], [22.0, 474.0], [23.0, 359.0], [24.0, 374.0], [25.0, 365.0], [26.0, 364.0], [27.0, 386.0], [28.0, 438.0], [29.0, 392.0], [30.0, 385.0], [31.0, 388.0], [32.0, 394.0], [35.0, 447.0], [34.0, 392.5], [36.0, 385.0], [39.0, 392.0], [38.0, 385.5], [41.0, 379.0], [40.0, 387.0], [43.0, 381.0], [42.0, 386.0], [45.0, 382.0], [44.0, 385.0], [47.0, 382.0], [46.0, 382.0], [49.0, 377.0], [48.0, 370.0], [51.0, 376.0], [50.0, 374.0], [53.0, 360.0], [52.0, 372.0], [55.0, 365.0], [54.0, 372.0], [57.0, 362.5], [59.0, 370.0], [58.0, 364.0], [61.0, 367.0], [60.0, 360.0], [63.0, 368.0], [62.0, 365.0], [67.0, 375.5], [65.0, 357.0], [71.0, 352.0], [70.0, 353.0], [68.0, 354.0], [75.0, 363.0], [74.0, 351.0], [73.0, 355.0], [72.0, 357.0], [79.0, 355.0], [78.0, 358.0], [77.0, 370.0], [76.0, 355.0], [83.0, 365.0], [82.0, 374.0], [81.0, 355.0], [80.0, 353.0], [86.0, 357.0], [85.0, 359.0], [84.0, 356.0], [91.0, 356.0], [90.0, 390.0], [89.0, 358.0], [88.0, 363.5], [95.0, 366.0], [94.0, 362.0], [93.0, 364.0], [92.0, 388.0], [98.0, 364.0], [97.0, 366.0], [103.0, 393.0], [102.0, 409.0], [101.0, 373.0], [100.0, 364.0], [107.0, 364.0], [105.0, 361.0], [104.0, 370.0], [110.0, 367.0], [109.0, 362.0], [108.0, 369.0], [115.0, 405.0], [114.0, 363.0], [112.0, 394.5], [119.0, 363.5], [117.0, 360.0], [116.0, 364.0], [123.0, 358.0], [122.0, 429.0], [121.0, 359.0], [120.0, 358.0], [127.0, 350.0], [126.0, 403.0], [125.0, 415.0], [124.0, 357.0], [135.0, 386.0], [134.0, 354.0], [132.0, 346.0], [131.0, 411.0], [130.0, 417.0], [129.0, 428.0], [128.0, 387.0], [143.0, 368.0], [142.0, 372.0], [141.0, 364.5], [140.0, 377.0], [139.0, 388.0], [137.0, 360.0], [136.0, 358.0], [151.0, 356.0], [150.0, 330.0], [149.0, 345.0], [148.0, 342.0], [147.0, 365.0], [146.0, 372.0], [145.0, 343.0], [144.0, 352.0], [159.0, 346.0], [158.0, 346.0], [157.0, 328.5], [155.0, 336.0], [153.0, 347.0], [152.0, 362.0], [166.0, 373.0], [165.0, 349.0], [164.0, 325.0], [162.0, 333.0], [161.0, 324.0], [160.0, 336.0], [175.0, 379.0], [174.0, 325.0], [173.0, 365.0], [172.0, 335.5], [170.0, 367.0], [169.0, 319.0], [168.0, 362.0], [183.0, 364.0], [182.0, 364.0], [181.0, 368.0], [180.0, 358.0], [179.0, 358.0], [178.0, 358.0], [177.0, 368.0], [176.0, 362.0], [191.0, 385.0], [189.0, 360.0], [186.0, 363.5], [184.0, 358.0], [199.0, 400.0], [198.0, 355.0], [197.0, 359.0], [196.0, 359.5], [195.0, 364.0], [194.0, 406.0], [192.0, 433.0], [207.0, 457.0], [206.0, 419.4], [203.0, 397.0], [215.0, 443.0], [214.0, 430.25], [210.0, 462.0], [223.0, 443.5], [221.0, 463.6666666666667], [216.0, 534.0], [227.0, 358.0], [226.0, 432.0], [224.0, 512.3333333333334], [236.0, 433.0], [234.0, 358.0], [255.0, 447.75000000000006], [254.0, 357.0], [253.0, 389.5], [267.0, 382.6666666666667], [265.0, 409.1666666666667], [264.0, 451.0], [263.0, 410.25], [262.0, 403.0], [261.0, 404.5], [258.0, 361.0], [256.0, 407.0], [286.0, 360.0], [277.0, 506.0], [287.0, 366.0], [285.0, 358.5], [284.0, 366.0], [283.0, 356.0], [282.0, 388.0], [280.0, 365.0], [279.0, 420.0], [275.0, 386.0], [272.0, 364.0], [278.0, 401.2], [296.0, 441.0], [300.0, 424.7812729605085], [299.0, 392.0], [298.0, 405.0], [297.0, 350.0], [295.0, 409.25], [294.0, 448.5], [293.0, 411.0], [292.0, 362.0], [291.0, 369.5], [290.0, 365.0], [289.0, 397.0], [288.0, 374.0], [1.0, 272.0]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}, {"data": [[299.8945996732767, 424.75017233075977]], "isOverall": false, "label": "AuthzRequest-rcdn-2-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 300.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 35002.26666666667, "minX": 1.62045792E12, "maxY": 2.28950362E7, "series": [{"data": [[1.62045834E12, 2.25508592E7], [1.62045816E12, 2.22654893E7], [1.62045822E12, 2.14453769E7], [1.62045804E12, 2.27611043E7], [1.62045852E12, 6934291.883333334], [1.6204581E12, 2.21317891E7], [1.62045792E12, 1.1978232E7], [1.6204584E12, 2.27750452E7], [1.62045798E12, 2.28741682E7], [1.62045846E12, 2.2380785E7], [1.62045828E12, 2.28950362E7]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.62045834E12, 113828.46666666666], [1.62045816E12, 112388.03333333334], [1.62045822E12, 108248.43333333333], [1.62045804E12, 114889.7], [1.62045852E12, 35002.26666666667], [1.6204581E12, 111713.9], [1.62045792E12, 60461.333333333336], [1.6204584E12, 114960.8], [1.62045798E12, 115461.13333333333], [1.62045846E12, 112970.0], [1.62045828E12, 115566.46666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62045852E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 409.9379300915992, "minX": 1.62045792E12, "maxY": 542.7430313588845, "series": [{"data": [[1.62045834E12, 416.575718317678], [1.62045816E12, 421.69818880480017], [1.62045822E12, 437.92935509767057], [1.62045804E12, 412.50409131540954], [1.62045852E12, 412.0877971712282], [1.6204581E12, 424.34068783443104], [1.62045792E12, 542.7430313588845], [1.6204584E12, 412.1204645409538], [1.62045798E12, 410.73406924234735], [1.62045846E12, 419.3575990675984], [1.62045828E12, 409.9379300915992]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62045852E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 409.34810645763844, "minX": 1.62045792E12, "maxY": 541.8278310104488, "series": [{"data": [[1.62045834E12, 415.96675611900184], [1.62045816E12, 421.1461843061036], [1.62045822E12, 437.28715303963327], [1.62045804E12, 411.95452565953843], [1.62045852E12, 411.49097201323985], [1.6204581E12, 423.76616458053667], [1.62045792E12, 541.8278310104488], [1.6204584E12, 411.42635605644244], [1.62045798E12, 410.14628472380554], [1.62045846E12, 418.7682750582754], [1.62045828E12, 409.34810645763844]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62045852E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.019688739141396787, "minX": 1.62045792E12, "maxY": 0.12730836236933707, "series": [{"data": [[1.62045834E12, 0.022625271827140983], [1.62045816E12, 0.025422338855174687], [1.62045822E12, 0.04271778529204261], [1.62045804E12, 0.019688739141396787], [1.62045852E12, 0.06274450797472174], [1.6204581E12, 0.046578506941989284], [1.62045792E12, 0.12730836236933707], [1.6204584E12, 0.0489050760491111], [1.62045798E12, 0.046321215162158355], [1.62045846E12, 0.020932400932400987], [1.62045828E12, 0.041288793692749126]], "isOverall": false, "label": "AuthzRequest-rcdn-2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62045852E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 179.0, "minX": 1.62045792E12, "maxY": 3491.0, "series": [{"data": [[1.62045834E12, 762.0], [1.62045816E12, 973.0], [1.62045822E12, 2103.0], [1.62045804E12, 785.0], [1.62045852E12, 718.0], [1.6204581E12, 741.0], [1.62045792E12, 3491.0], [1.6204584E12, 725.0], [1.62045798E12, 752.0], [1.62045846E12, 779.0], [1.62045828E12, 783.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.62045834E12, 474.0], [1.62045816E12, 483.0], [1.62045822E12, 473.0], [1.62045804E12, 464.0], [1.62045852E12, 465.0], [1.6204581E12, 479.0], [1.62045792E12, 568.0], [1.6204584E12, 464.0], [1.62045798E12, 454.0], [1.62045846E12, 466.0], [1.62045828E12, 462.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.62045834E12, 553.9900000000016], [1.62045816E12, 569.0], [1.62045822E12, 569.0], [1.62045804E12, 562.0], [1.62045852E12, 555.0], [1.6204581E12, 567.9900000000016], [1.62045792E12, 703.9900000000016], [1.6204584E12, 546.9900000000016], [1.62045798E12, 526.9900000000016], [1.62045846E12, 553.0], [1.62045828E12, 548.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.62045834E12, 498.0], [1.62045816E12, 508.0], [1.62045822E12, 502.9500000000007], [1.62045804E12, 490.0], [1.62045852E12, 495.0], [1.6204581E12, 503.0], [1.62045792E12, 601.0], [1.6204584E12, 490.0], [1.62045798E12, 476.0], [1.62045846E12, 489.0], [1.62045828E12, 489.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.62045834E12, 218.0], [1.62045816E12, 255.0], [1.62045822E12, 179.0], [1.62045804E12, 213.0], [1.62045852E12, 234.0], [1.6204581E12, 219.0], [1.62045792E12, 218.0], [1.6204584E12, 227.0], [1.62045798E12, 216.0], [1.62045846E12, 208.0], [1.62045828E12, 224.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.62045834E12, 407.0], [1.62045816E12, 419.0], [1.62045822E12, 416.0], [1.62045804E12, 402.0], [1.62045852E12, 407.0], [1.6204581E12, 420.0], [1.62045792E12, 479.0], [1.6204584E12, 411.0], [1.62045798E12, 404.0], [1.62045846E12, 412.0], [1.62045828E12, 398.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62045852E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 364.0, "minX": 3.0, "maxY": 1974.0, "series": [{"data": [[3.0, 462.0], [64.0, 1742.0], [102.0, 1748.5], [161.0, 364.0], [287.0, 891.0], [309.0, 1974.0], [307.0, 873.0], [351.0, 470.0], [392.0, 727.0], [412.0, 873.0], [444.0, 820.5], [481.0, 625.0], [506.0, 588.5], [510.0, 621.5], [525.0, 574.0], [536.0, 515.0], [571.0, 526.0], [560.0, 523.0], [552.0, 506.0], [568.0, 546.5], [572.0, 572.0], [591.0, 497.0], [606.0, 515.0], [598.0, 489.0], [585.0, 522.0], [604.0, 474.0], [580.0, 518.0], [605.0, 470.0], [581.0, 494.0], [614.0, 478.0], [616.0, 487.0], [635.0, 460.0], [620.0, 488.5], [623.0, 473.0], [630.0, 455.0], [624.0, 488.0], [619.0, 480.0], [638.0, 456.0], [615.0, 470.0], [631.0, 481.0], [666.0, 443.0], [660.0, 444.0], [664.0, 438.0], [645.0, 458.0], [665.0, 437.0], [655.0, 465.5], [654.0, 441.0], [641.0, 454.0], [643.0, 449.0], [642.0, 447.0], [644.0, 432.0], [662.0, 429.0], [663.0, 473.0], [661.0, 440.0], [653.0, 458.0], [658.0, 421.0], [659.0, 444.0], [669.0, 440.0], [670.0, 437.0], [656.0, 453.0], [657.0, 447.0], [671.0, 429.0], [667.0, 435.0], [650.0, 454.0], [652.0, 448.0], [677.0, 437.0], [700.0, 422.0], [687.0, 426.0], [680.0, 436.0], [681.0, 442.0], [682.0, 438.0], [684.0, 433.0], [685.0, 429.0], [686.0, 432.0], [674.0, 435.0], [672.0, 438.0], [673.0, 430.0], [676.0, 438.0], [675.0, 433.0], [703.0, 416.0], [696.0, 422.0], [697.0, 416.0], [699.0, 424.0], [698.0, 425.0], [678.0, 435.0], [679.0, 422.0], [701.0, 425.0], [702.0, 421.0], [695.0, 414.0], [694.0, 424.0], [690.0, 426.0], [689.0, 423.0], [691.0, 421.0], [692.0, 414.0], [693.0, 421.0], [732.0, 405.0], [709.0, 412.0], [734.0, 403.0], [717.0, 412.0], [718.0, 409.0], [715.0, 408.0], [716.0, 411.0], [708.0, 419.0], [704.0, 415.0], [706.0, 414.5], [705.0, 421.0], [707.0, 423.0], [719.0, 411.0], [733.0, 405.0], [710.0, 427.0], [711.0, 420.0], [728.0, 413.0], [729.0, 409.0], [730.0, 413.0], [731.0, 405.0], [720.0, 415.0], [735.0, 406.0], [722.0, 401.5], [721.0, 409.0], [723.0, 404.0], [726.0, 411.0], [724.0, 410.0], [725.0, 406.0], [727.0, 404.0], [714.0, 412.0], [712.0, 418.0], [713.0, 411.0], [742.0, 399.0], [736.0, 401.0], [738.0, 411.0], [745.0, 401.0], [744.0, 396.0], [746.0, 403.0], [747.0, 392.0], [748.0, 394.0], [751.0, 400.0], [749.0, 402.0], [750.0, 377.0], [763.0, 391.0], [762.0, 396.0], [743.0, 396.0], [760.0, 393.0], [761.0, 389.0], [740.0, 401.0], [741.0, 406.0], [739.0, 404.0], [737.0, 404.0], [756.0, 395.0], [752.0, 399.0], [753.0, 396.0], [754.0, 398.0], [766.0, 387.0], [765.0, 396.0], [759.0, 396.0], [757.0, 403.0], [758.0, 397.0], [764.0, 401.0], [772.0, 385.0], [776.0, 386.0], [780.0, 381.0], [782.0, 386.0], [781.0, 386.0], [778.0, 388.0], [786.0, 380.0], [784.0, 390.0], [785.0, 376.0], [775.0, 389.0], [793.0, 371.0], [798.0, 374.0], [792.0, 375.0], [788.0, 381.0], [791.0, 382.0], [783.0, 389.0], [773.0, 396.0], [774.0, 382.0], [770.0, 389.0], [768.0, 384.5], [771.0, 380.0], [811.0, 368.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 811.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 364.0, "minX": 3.0, "maxY": 1973.0, "series": [{"data": [[3.0, 460.0], [64.0, 1741.0], [102.0, 1747.5], [161.0, 364.0], [287.0, 890.0], [309.0, 1973.0], [307.0, 872.0], [351.0, 469.0], [392.0, 727.0], [412.0, 871.5], [444.0, 819.5], [481.0, 624.0], [506.0, 587.0], [510.0, 621.5], [525.0, 574.0], [536.0, 514.0], [571.0, 524.0], [560.0, 523.0], [552.0, 506.0], [568.0, 546.0], [572.0, 571.5], [591.0, 496.0], [606.0, 515.0], [598.0, 489.0], [585.0, 521.0], [604.0, 474.0], [580.0, 518.0], [605.0, 469.0], [581.0, 494.0], [614.0, 477.5], [616.0, 487.0], [635.0, 459.0], [620.0, 487.5], [623.0, 472.0], [630.0, 454.5], [624.0, 487.0], [619.0, 479.0], [638.0, 456.0], [615.0, 470.0], [631.0, 480.0], [666.0, 442.0], [660.0, 443.0], [664.0, 437.0], [645.0, 458.0], [665.0, 436.0], [655.0, 465.0], [654.0, 440.0], [641.0, 454.0], [643.0, 447.5], [642.0, 447.0], [644.0, 432.0], [662.0, 429.0], [663.0, 473.0], [661.0, 440.0], [653.0, 458.0], [658.0, 421.0], [659.0, 443.0], [669.0, 439.0], [670.0, 436.0], [656.0, 451.0], [657.0, 447.0], [671.0, 429.0], [667.0, 435.0], [650.0, 453.5], [652.0, 447.0], [677.0, 437.0], [700.0, 421.0], [687.0, 426.0], [680.0, 436.0], [681.0, 442.0], [682.0, 438.0], [684.0, 432.0], [685.0, 429.0], [686.0, 431.0], [674.0, 435.0], [672.0, 437.0], [673.0, 429.0], [676.0, 437.0], [675.0, 433.0], [703.0, 415.0], [696.0, 422.0], [697.0, 415.0], [699.0, 423.0], [698.0, 424.0], [678.0, 435.0], [679.0, 422.0], [701.0, 424.0], [702.0, 421.0], [695.0, 414.0], [694.0, 423.0], [690.0, 425.5], [689.0, 422.0], [691.0, 420.0], [692.0, 414.0], [693.0, 421.0], [732.0, 405.0], [709.0, 411.0], [734.0, 403.0], [717.0, 411.0], [718.0, 409.0], [715.0, 407.0], [716.0, 411.0], [708.0, 418.0], [704.0, 414.0], [706.0, 414.0], [705.0, 421.0], [707.0, 423.0], [719.0, 411.0], [733.0, 405.0], [710.0, 427.0], [711.0, 420.0], [728.0, 413.0], [729.0, 408.0], [730.0, 412.0], [731.0, 404.0], [720.0, 414.0], [735.0, 406.0], [722.0, 401.0], [721.0, 408.0], [723.0, 404.0], [726.0, 411.0], [724.0, 410.0], [725.0, 405.0], [727.0, 403.0], [714.0, 412.0], [712.0, 417.0], [713.0, 410.0], [742.0, 399.0], [736.0, 400.5], [738.0, 410.0], [745.0, 401.0], [744.0, 395.0], [746.0, 402.0], [747.0, 391.0], [748.0, 394.0], [751.0, 399.0], [749.0, 401.0], [750.0, 376.0], [763.0, 391.0], [762.0, 395.0], [743.0, 395.0], [760.0, 393.0], [761.0, 389.0], [740.0, 401.0], [741.0, 405.0], [739.0, 403.0], [737.0, 404.0], [756.0, 394.0], [752.0, 398.0], [753.0, 396.0], [754.0, 398.0], [766.0, 386.0], [765.0, 395.0], [759.0, 396.0], [757.0, 402.0], [758.0, 396.0], [764.0, 400.0], [772.0, 385.0], [776.0, 385.0], [780.0, 380.0], [782.0, 385.0], [781.0, 386.0], [778.0, 387.0], [786.0, 379.0], [784.0, 390.0], [785.0, 375.0], [775.0, 389.0], [793.0, 370.0], [798.0, 373.0], [792.0, 375.0], [788.0, 380.0], [791.0, 381.0], [783.0, 389.0], [773.0, 396.0], [774.0, 382.0], [770.0, 388.0], [768.0, 384.0], [771.0, 379.0], [811.0, 368.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 811.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 216.53333333333333, "minX": 1.62045792E12, "maxY": 731.4333333333333, "series": [{"data": [[1.62045834E12, 720.4333333333333], [1.62045816E12, 711.3166666666667], [1.62045822E12, 685.1166666666667], [1.62045804E12, 727.15], [1.62045852E12, 216.53333333333333], [1.6204581E12, 707.05], [1.62045792E12, 387.65], [1.6204584E12, 727.6], [1.62045798E12, 730.7833333333333], [1.62045846E12, 715.0], [1.62045828E12, 731.4333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62045852E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 221.53333333333333, "minX": 1.62045792E12, "maxY": 731.4333333333333, "series": [{"data": [[1.62045834E12, 720.4333333333333], [1.62045816E12, 711.3166666666667], [1.62045822E12, 685.1166666666667], [1.62045804E12, 727.15], [1.62045852E12, 221.53333333333333], [1.6204581E12, 707.05], [1.62045792E12, 382.6666666666667], [1.6204584E12, 727.6], [1.62045798E12, 730.7666666666667], [1.62045846E12, 715.0], [1.62045828E12, 731.4333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62045852E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 221.53333333333333, "minX": 1.62045792E12, "maxY": 731.4333333333333, "series": [{"data": [[1.62045834E12, 720.4333333333333], [1.62045816E12, 711.3166666666667], [1.62045822E12, 685.1166666666667], [1.62045804E12, 727.15], [1.62045852E12, 221.53333333333333], [1.6204581E12, 707.05], [1.62045792E12, 382.6666666666667], [1.6204584E12, 727.6], [1.62045798E12, 730.7666666666667], [1.62045846E12, 715.0], [1.62045828E12, 731.4333333333333]], "isOverall": false, "label": "AuthzRequest-rcdn-2-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62045852E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 221.53333333333333, "minX": 1.62045792E12, "maxY": 731.4333333333333, "series": [{"data": [[1.62045834E12, 720.4333333333333], [1.62045816E12, 711.3166666666667], [1.62045822E12, 685.1166666666667], [1.62045804E12, 727.15], [1.62045852E12, 221.53333333333333], [1.6204581E12, 707.05], [1.62045792E12, 382.6666666666667], [1.6204584E12, 727.6], [1.62045798E12, 730.7666666666667], [1.62045846E12, 715.0], [1.62045828E12, 731.4333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62045852E12, "title": "Total Transactions Per Second"}},
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

