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
        data: {"result": {"minY": 3.0, "minX": 0.0, "maxY": 5665.0, "series": [{"data": [[0.0, 3.0], [0.1, 5.0], [0.2, 5.0], [0.3, 5.0], [0.4, 5.0], [0.5, 5.0], [0.6, 5.0], [0.7, 6.0], [0.8, 6.0], [0.9, 6.0], [1.0, 6.0], [1.1, 6.0], [1.2, 6.0], [1.3, 6.0], [1.4, 6.0], [1.5, 6.0], [1.6, 6.0], [1.7, 6.0], [1.8, 6.0], [1.9, 6.0], [2.0, 6.0], [2.1, 6.0], [2.2, 7.0], [2.3, 7.0], [2.4, 7.0], [2.5, 7.0], [2.6, 7.0], [2.7, 7.0], [2.8, 7.0], [2.9, 7.0], [3.0, 7.0], [3.1, 7.0], [3.2, 7.0], [3.3, 7.0], [3.4, 7.0], [3.5, 7.0], [3.6, 7.0], [3.7, 8.0], [3.8, 8.0], [3.9, 8.0], [4.0, 8.0], [4.1, 8.0], [4.2, 8.0], [4.3, 8.0], [4.4, 8.0], [4.5, 8.0], [4.6, 8.0], [4.7, 8.0], [4.8, 9.0], [4.9, 9.0], [5.0, 9.0], [5.1, 9.0], [5.2, 9.0], [5.3, 9.0], [5.4, 9.0], [5.5, 9.0], [5.6, 9.0], [5.7, 10.0], [5.8, 10.0], [5.9, 10.0], [6.0, 10.0], [6.1, 10.0], [6.2, 10.0], [6.3, 10.0], [6.4, 10.0], [6.5, 10.0], [6.6, 11.0], [6.7, 11.0], [6.8, 11.0], [6.9, 11.0], [7.0, 11.0], [7.1, 11.0], [7.2, 11.0], [7.3, 11.0], [7.4, 11.0], [7.5, 11.0], [7.6, 11.0], [7.7, 11.0], [7.8, 12.0], [7.9, 12.0], [8.0, 12.0], [8.1, 12.0], [8.2, 12.0], [8.3, 12.0], [8.4, 12.0], [8.5, 12.0], [8.6, 12.0], [8.7, 12.0], [8.8, 12.0], [8.9, 13.0], [9.0, 13.0], [9.1, 13.0], [9.2, 13.0], [9.3, 13.0], [9.4, 13.0], [9.5, 13.0], [9.6, 13.0], [9.7, 13.0], [9.8, 13.0], [9.9, 13.0], [10.0, 14.0], [10.1, 14.0], [10.2, 14.0], [10.3, 14.0], [10.4, 14.0], [10.5, 14.0], [10.6, 14.0], [10.7, 14.0], [10.8, 14.0], [10.9, 14.0], [11.0, 14.0], [11.1, 15.0], [11.2, 15.0], [11.3, 15.0], [11.4, 15.0], [11.5, 15.0], [11.6, 15.0], [11.7, 15.0], [11.8, 15.0], [11.9, 15.0], [12.0, 15.0], [12.1, 15.0], [12.2, 16.0], [12.3, 16.0], [12.4, 16.0], [12.5, 16.0], [12.6, 16.0], [12.7, 16.0], [12.8, 16.0], [12.9, 16.0], [13.0, 16.0], [13.1, 16.0], [13.2, 16.0], [13.3, 17.0], [13.4, 17.0], [13.5, 17.0], [13.6, 17.0], [13.7, 17.0], [13.8, 17.0], [13.9, 17.0], [14.0, 17.0], [14.1, 17.0], [14.2, 17.0], [14.3, 17.0], [14.4, 17.0], [14.5, 18.0], [14.6, 18.0], [14.7, 18.0], [14.8, 18.0], [14.9, 18.0], [15.0, 18.0], [15.1, 18.0], [15.2, 18.0], [15.3, 18.0], [15.4, 18.0], [15.5, 18.0], [15.6, 18.0], [15.7, 18.0], [15.8, 18.0], [15.9, 19.0], [16.0, 19.0], [16.1, 19.0], [16.2, 19.0], [16.3, 19.0], [16.4, 19.0], [16.5, 19.0], [16.6, 19.0], [16.7, 19.0], [16.8, 19.0], [16.9, 19.0], [17.0, 19.0], [17.1, 19.0], [17.2, 19.0], [17.3, 19.0], [17.4, 20.0], [17.5, 20.0], [17.6, 20.0], [17.7, 20.0], [17.8, 20.0], [17.9, 20.0], [18.0, 20.0], [18.1, 20.0], [18.2, 20.0], [18.3, 20.0], [18.4, 20.0], [18.5, 20.0], [18.6, 20.0], [18.7, 20.0], [18.8, 20.0], [18.9, 20.0], [19.0, 20.0], [19.1, 21.0], [19.2, 21.0], [19.3, 21.0], [19.4, 21.0], [19.5, 21.0], [19.6, 21.0], [19.7, 21.0], [19.8, 21.0], [19.9, 21.0], [20.0, 21.0], [20.1, 21.0], [20.2, 21.0], [20.3, 21.0], [20.4, 21.0], [20.5, 21.0], [20.6, 21.0], [20.7, 21.0], [20.8, 21.0], [20.9, 21.0], [21.0, 21.0], [21.1, 22.0], [21.2, 22.0], [21.3, 22.0], [21.4, 22.0], [21.5, 22.0], [21.6, 22.0], [21.7, 22.0], [21.8, 22.0], [21.9, 22.0], [22.0, 22.0], [22.1, 22.0], [22.2, 22.0], [22.3, 22.0], [22.4, 22.0], [22.5, 22.0], [22.6, 22.0], [22.7, 22.0], [22.8, 22.0], [22.9, 22.0], [23.0, 22.0], [23.1, 22.0], [23.2, 22.0], [23.3, 22.0], [23.4, 23.0], [23.5, 23.0], [23.6, 23.0], [23.7, 23.0], [23.8, 23.0], [23.9, 23.0], [24.0, 23.0], [24.1, 23.0], [24.2, 23.0], [24.3, 23.0], [24.4, 23.0], [24.5, 23.0], [24.6, 23.0], [24.7, 23.0], [24.8, 23.0], [24.9, 23.0], [25.0, 23.0], [25.1, 23.0], [25.2, 23.0], [25.3, 23.0], [25.4, 23.0], [25.5, 23.0], [25.6, 23.0], [25.7, 23.0], [25.8, 23.0], [25.9, 23.0], [26.0, 23.0], [26.1, 24.0], [26.2, 24.0], [26.3, 24.0], [26.4, 24.0], [26.5, 24.0], [26.6, 24.0], [26.7, 24.0], [26.8, 24.0], [26.9, 24.0], [27.0, 24.0], [27.1, 24.0], [27.2, 24.0], [27.3, 24.0], [27.4, 24.0], [27.5, 24.0], [27.6, 24.0], [27.7, 24.0], [27.8, 24.0], [27.9, 24.0], [28.0, 24.0], [28.1, 24.0], [28.2, 24.0], [28.3, 24.0], [28.4, 24.0], [28.5, 24.0], [28.6, 24.0], [28.7, 24.0], [28.8, 24.0], [28.9, 24.0], [29.0, 25.0], [29.1, 25.0], [29.2, 25.0], [29.3, 25.0], [29.4, 25.0], [29.5, 25.0], [29.6, 25.0], [29.7, 25.0], [29.8, 25.0], [29.9, 25.0], [30.0, 25.0], [30.1, 25.0], [30.2, 25.0], [30.3, 25.0], [30.4, 25.0], [30.5, 25.0], [30.6, 25.0], [30.7, 25.0], [30.8, 25.0], [30.9, 25.0], [31.0, 25.0], [31.1, 25.0], [31.2, 25.0], [31.3, 25.0], [31.4, 25.0], [31.5, 25.0], [31.6, 25.0], [31.7, 25.0], [31.8, 25.0], [31.9, 25.0], [32.0, 25.0], [32.1, 25.0], [32.2, 25.0], [32.3, 26.0], [32.4, 26.0], [32.5, 26.0], [32.6, 26.0], [32.7, 26.0], [32.8, 26.0], [32.9, 26.0], [33.0, 26.0], [33.1, 26.0], [33.2, 26.0], [33.3, 26.0], [33.4, 26.0], [33.5, 26.0], [33.6, 26.0], [33.7, 26.0], [33.8, 26.0], [33.9, 26.0], [34.0, 26.0], [34.1, 26.0], [34.2, 26.0], [34.3, 26.0], [34.4, 26.0], [34.5, 26.0], [34.6, 26.0], [34.7, 26.0], [34.8, 26.0], [34.9, 26.0], [35.0, 26.0], [35.1, 26.0], [35.2, 26.0], [35.3, 26.0], [35.4, 26.0], [35.5, 26.0], [35.6, 26.0], [35.7, 27.0], [35.8, 27.0], [35.9, 27.0], [36.0, 27.0], [36.1, 27.0], [36.2, 27.0], [36.3, 27.0], [36.4, 27.0], [36.5, 27.0], [36.6, 27.0], [36.7, 27.0], [36.8, 27.0], [36.9, 27.0], [37.0, 27.0], [37.1, 27.0], [37.2, 27.0], [37.3, 27.0], [37.4, 27.0], [37.5, 27.0], [37.6, 27.0], [37.7, 27.0], [37.8, 27.0], [37.9, 27.0], [38.0, 27.0], [38.1, 27.0], [38.2, 27.0], [38.3, 27.0], [38.4, 27.0], [38.5, 27.0], [38.6, 27.0], [38.7, 27.0], [38.8, 27.0], [38.9, 27.0], [39.0, 27.0], [39.1, 27.0], [39.2, 27.0], [39.3, 28.0], [39.4, 28.0], [39.5, 28.0], [39.6, 28.0], [39.7, 28.0], [39.8, 28.0], [39.9, 28.0], [40.0, 28.0], [40.1, 28.0], [40.2, 28.0], [40.3, 28.0], [40.4, 28.0], [40.5, 28.0], [40.6, 28.0], [40.7, 28.0], [40.8, 28.0], [40.9, 28.0], [41.0, 28.0], [41.1, 28.0], [41.2, 28.0], [41.3, 28.0], [41.4, 28.0], [41.5, 28.0], [41.6, 28.0], [41.7, 28.0], [41.8, 28.0], [41.9, 28.0], [42.0, 28.0], [42.1, 28.0], [42.2, 28.0], [42.3, 28.0], [42.4, 28.0], [42.5, 28.0], [42.6, 28.0], [42.7, 29.0], [42.8, 29.0], [42.9, 29.0], [43.0, 29.0], [43.1, 29.0], [43.2, 29.0], [43.3, 29.0], [43.4, 29.0], [43.5, 29.0], [43.6, 29.0], [43.7, 29.0], [43.8, 29.0], [43.9, 29.0], [44.0, 29.0], [44.1, 29.0], [44.2, 29.0], [44.3, 29.0], [44.4, 29.0], [44.5, 29.0], [44.6, 29.0], [44.7, 29.0], [44.8, 29.0], [44.9, 29.0], [45.0, 29.0], [45.1, 29.0], [45.2, 29.0], [45.3, 29.0], [45.4, 29.0], [45.5, 29.0], [45.6, 29.0], [45.7, 29.0], [45.8, 29.0], [45.9, 29.0], [46.0, 30.0], [46.1, 30.0], [46.2, 30.0], [46.3, 30.0], [46.4, 30.0], [46.5, 30.0], [46.6, 30.0], [46.7, 30.0], [46.8, 30.0], [46.9, 30.0], [47.0, 30.0], [47.1, 30.0], [47.2, 30.0], [47.3, 30.0], [47.4, 30.0], [47.5, 30.0], [47.6, 30.0], [47.7, 30.0], [47.8, 30.0], [47.9, 30.0], [48.0, 30.0], [48.1, 30.0], [48.2, 30.0], [48.3, 30.0], [48.4, 30.0], [48.5, 30.0], [48.6, 30.0], [48.7, 30.0], [48.8, 30.0], [48.9, 30.0], [49.0, 31.0], [49.1, 31.0], [49.2, 31.0], [49.3, 31.0], [49.4, 31.0], [49.5, 31.0], [49.6, 31.0], [49.7, 31.0], [49.8, 31.0], [49.9, 31.0], [50.0, 31.0], [50.1, 31.0], [50.2, 31.0], [50.3, 31.0], [50.4, 31.0], [50.5, 31.0], [50.6, 31.0], [50.7, 31.0], [50.8, 31.0], [50.9, 31.0], [51.0, 31.0], [51.1, 31.0], [51.2, 31.0], [51.3, 31.0], [51.4, 32.0], [51.5, 32.0], [51.6, 32.0], [51.7, 32.0], [51.8, 32.0], [51.9, 32.0], [52.0, 32.0], [52.1, 32.0], [52.2, 32.0], [52.3, 32.0], [52.4, 32.0], [52.5, 32.0], [52.6, 32.0], [52.7, 32.0], [52.8, 32.0], [52.9, 32.0], [53.0, 32.0], [53.1, 32.0], [53.2, 32.0], [53.3, 33.0], [53.4, 33.0], [53.5, 33.0], [53.6, 33.0], [53.7, 33.0], [53.8, 33.0], [53.9, 33.0], [54.0, 33.0], [54.1, 33.0], [54.2, 33.0], [54.3, 33.0], [54.4, 33.0], [54.5, 33.0], [54.6, 33.0], [54.7, 34.0], [54.8, 34.0], [54.9, 34.0], [55.0, 34.0], [55.1, 34.0], [55.2, 34.0], [55.3, 34.0], [55.4, 34.0], [55.5, 34.0], [55.6, 34.0], [55.7, 35.0], [55.8, 35.0], [55.9, 35.0], [56.0, 35.0], [56.1, 35.0], [56.2, 35.0], [56.3, 35.0], [56.4, 36.0], [56.5, 36.0], [56.6, 36.0], [56.7, 36.0], [56.8, 37.0], [56.9, 37.0], [57.0, 37.0], [57.1, 37.0], [57.2, 38.0], [57.3, 38.0], [57.4, 39.0], [57.5, 39.0], [57.6, 40.0], [57.7, 41.0], [57.8, 42.0], [57.9, 42.0], [58.0, 43.0], [58.1, 44.0], [58.2, 46.0], [58.3, 47.0], [58.4, 48.0], [58.5, 50.0], [58.6, 53.0], [58.7, 56.0], [58.8, 59.0], [58.9, 61.0], [59.0, 63.0], [59.1, 65.0], [59.2, 67.0], [59.3, 69.0], [59.4, 72.0], [59.5, 74.0], [59.6, 76.0], [59.7, 78.0], [59.8, 81.0], [59.9, 83.0], [60.0, 86.0], [60.1, 88.0], [60.2, 90.0], [60.3, 92.0], [60.4, 94.0], [60.5, 96.0], [60.6, 98.0], [60.7, 100.0], [60.8, 103.0], [60.9, 105.0], [61.0, 107.0], [61.1, 110.0], [61.2, 112.0], [61.3, 114.0], [61.4, 117.0], [61.5, 120.0], [61.6, 123.0], [61.7, 125.0], [61.8, 129.0], [61.9, 132.0], [62.0, 136.0], [62.1, 139.0], [62.2, 143.0], [62.3, 146.0], [62.4, 151.0], [62.5, 155.0], [62.6, 159.0], [62.7, 163.0], [62.8, 166.0], [62.9, 170.0], [63.0, 174.0], [63.1, 178.0], [63.2, 181.0], [63.3, 185.0], [63.4, 189.0], [63.5, 192.0], [63.6, 196.0], [63.7, 200.0], [63.8, 204.0], [63.9, 208.0], [64.0, 213.0], [64.1, 219.0], [64.2, 223.0], [64.3, 229.0], [64.4, 235.0], [64.5, 241.0], [64.6, 249.0], [64.7, 257.0], [64.8, 265.0], [64.9, 272.0], [65.0, 280.0], [65.1, 290.0], [65.2, 302.0], [65.3, 315.0], [65.4, 331.0], [65.5, 343.0], [65.6, 353.0], [65.7, 358.0], [65.8, 362.0], [65.9, 364.0], [66.0, 367.0], [66.1, 368.0], [66.2, 370.0], [66.3, 372.0], [66.4, 373.0], [66.5, 374.0], [66.6, 375.0], [66.7, 376.0], [66.8, 377.0], [66.9, 378.0], [67.0, 379.0], [67.1, 380.0], [67.2, 381.0], [67.3, 382.0], [67.4, 383.0], [67.5, 384.0], [67.6, 384.0], [67.7, 385.0], [67.8, 386.0], [67.9, 387.0], [68.0, 387.0], [68.1, 388.0], [68.2, 389.0], [68.3, 389.0], [68.4, 390.0], [68.5, 391.0], [68.6, 391.0], [68.7, 392.0], [68.8, 393.0], [68.9, 393.0], [69.0, 394.0], [69.1, 395.0], [69.2, 395.0], [69.3, 396.0], [69.4, 396.0], [69.5, 397.0], [69.6, 398.0], [69.7, 398.0], [69.8, 399.0], [69.9, 399.0], [70.0, 400.0], [70.1, 401.0], [70.2, 401.0], [70.3, 402.0], [70.4, 402.0], [70.5, 403.0], [70.6, 404.0], [70.7, 404.0], [70.8, 405.0], [70.9, 405.0], [71.0, 406.0], [71.1, 407.0], [71.2, 407.0], [71.3, 408.0], [71.4, 409.0], [71.5, 409.0], [71.6, 410.0], [71.7, 411.0], [71.8, 411.0], [71.9, 412.0], [72.0, 413.0], [72.1, 413.0], [72.2, 414.0], [72.3, 415.0], [72.4, 415.0], [72.5, 416.0], [72.6, 417.0], [72.7, 418.0], [72.8, 418.0], [72.9, 419.0], [73.0, 420.0], [73.1, 421.0], [73.2, 422.0], [73.3, 423.0], [73.4, 424.0], [73.5, 425.0], [73.6, 426.0], [73.7, 427.0], [73.8, 428.0], [73.9, 429.0], [74.0, 430.0], [74.1, 432.0], [74.2, 433.0], [74.3, 435.0], [74.4, 436.0], [74.5, 438.0], [74.6, 440.0], [74.7, 442.0], [74.8, 445.0], [74.9, 447.0], [75.0, 450.0], [75.1, 454.0], [75.2, 459.0], [75.3, 466.0], [75.4, 479.0], [75.5, 507.0], [75.6, 554.0], [75.7, 679.0], [75.8, 695.0], [75.9, 706.0], [76.0, 712.0], [76.1, 715.0], [76.2, 719.0], [76.3, 722.0], [76.4, 724.0], [76.5, 726.0], [76.6, 728.0], [76.7, 730.0], [76.8, 732.0], [76.9, 733.0], [77.0, 735.0], [77.1, 736.0], [77.2, 738.0], [77.3, 739.0], [77.4, 740.0], [77.5, 741.0], [77.6, 742.0], [77.7, 744.0], [77.8, 745.0], [77.9, 746.0], [78.0, 747.0], [78.1, 748.0], [78.2, 749.0], [78.3, 750.0], [78.4, 751.0], [78.5, 752.0], [78.6, 753.0], [78.7, 753.0], [78.8, 754.0], [78.9, 755.0], [79.0, 756.0], [79.1, 757.0], [79.2, 757.0], [79.3, 758.0], [79.4, 759.0], [79.5, 760.0], [79.6, 760.0], [79.7, 761.0], [79.8, 762.0], [79.9, 763.0], [80.0, 763.0], [80.1, 764.0], [80.2, 765.0], [80.3, 765.0], [80.4, 766.0], [80.5, 767.0], [80.6, 767.0], [80.7, 768.0], [80.8, 768.0], [80.9, 769.0], [81.0, 770.0], [81.1, 770.0], [81.2, 771.0], [81.3, 771.0], [81.4, 772.0], [81.5, 773.0], [81.6, 773.0], [81.7, 774.0], [81.8, 775.0], [81.9, 775.0], [82.0, 776.0], [82.1, 776.0], [82.2, 777.0], [82.3, 778.0], [82.4, 778.0], [82.5, 779.0], [82.6, 779.0], [82.7, 780.0], [82.8, 780.0], [82.9, 781.0], [83.0, 782.0], [83.1, 782.0], [83.2, 783.0], [83.3, 783.0], [83.4, 784.0], [83.5, 785.0], [83.6, 785.0], [83.7, 786.0], [83.8, 786.0], [83.9, 787.0], [84.0, 788.0], [84.1, 788.0], [84.2, 789.0], [84.3, 789.0], [84.4, 790.0], [84.5, 791.0], [84.6, 791.0], [84.7, 792.0], [84.8, 792.0], [84.9, 793.0], [85.0, 793.0], [85.1, 794.0], [85.2, 795.0], [85.3, 795.0], [85.4, 796.0], [85.5, 797.0], [85.6, 797.0], [85.7, 798.0], [85.8, 799.0], [85.9, 799.0], [86.0, 800.0], [86.1, 801.0], [86.2, 801.0], [86.3, 802.0], [86.4, 803.0], [86.5, 803.0], [86.6, 804.0], [86.7, 805.0], [86.8, 806.0], [86.9, 806.0], [87.0, 807.0], [87.1, 808.0], [87.2, 809.0], [87.3, 810.0], [87.4, 810.0], [87.5, 811.0], [87.6, 812.0], [87.7, 813.0], [87.8, 814.0], [87.9, 815.0], [88.0, 816.0], [88.1, 817.0], [88.2, 818.0], [88.3, 819.0], [88.4, 820.0], [88.5, 821.0], [88.6, 822.0], [88.7, 823.0], [88.8, 824.0], [88.9, 825.0], [89.0, 826.0], [89.1, 828.0], [89.2, 829.0], [89.3, 830.0], [89.4, 831.0], [89.5, 833.0], [89.6, 834.0], [89.7, 836.0], [89.8, 838.0], [89.9, 839.0], [90.0, 842.0], [90.1, 844.0], [90.2, 846.0], [90.3, 849.0], [90.4, 851.0], [90.5, 855.0], [90.6, 859.0], [90.7, 863.0], [90.8, 868.0], [90.9, 873.0], [91.0, 879.0], [91.1, 891.0], [91.2, 916.0], [91.3, 964.0], [91.4, 1006.0], [91.5, 1042.0], [91.6, 1062.0], [91.7, 1074.0], [91.8, 1082.0], [91.9, 1089.0], [92.0, 1095.0], [92.1, 1101.0], [92.2, 1106.0], [92.3, 1110.0], [92.4, 1113.0], [92.5, 1117.0], [92.6, 1120.0], [92.7, 1123.0], [92.8, 1126.0], [92.9, 1129.0], [93.0, 1132.0], [93.1, 1135.0], [93.2, 1137.0], [93.3, 1140.0], [93.4, 1142.0], [93.5, 1144.0], [93.6, 1147.0], [93.7, 1149.0], [93.8, 1151.0], [93.9, 1154.0], [94.0, 1156.0], [94.1, 1158.0], [94.2, 1160.0], [94.3, 1162.0], [94.4, 1164.0], [94.5, 1166.0], [94.6, 1169.0], [94.7, 1171.0], [94.8, 1173.0], [94.9, 1175.0], [95.0, 1177.0], [95.1, 1180.0], [95.2, 1182.0], [95.3, 1184.0], [95.4, 1187.0], [95.5, 1189.0], [95.6, 1192.0], [95.7, 1195.0], [95.8, 1198.0], [95.9, 1201.0], [96.0, 1204.0], [96.1, 1207.0], [96.2, 1210.0], [96.3, 1213.0], [96.4, 1217.0], [96.5, 1222.0], [96.6, 1228.0], [96.7, 1233.0], [96.8, 1239.0], [96.9, 1245.0], [97.0, 1252.0], [97.1, 1262.0], [97.2, 1275.0], [97.3, 1292.0], [97.4, 1352.0], [97.5, 1426.0], [97.6, 1454.0], [97.7, 1470.0], [97.8, 1485.0], [97.9, 1498.0], [98.0, 1510.0], [98.1, 1519.0], [98.2, 1528.0], [98.3, 1538.0], [98.4, 1547.0], [98.5, 1557.0], [98.6, 1566.0], [98.7, 1576.0], [98.8, 1587.0], [98.9, 1600.0], [99.0, 1618.0], [99.1, 1643.0], [99.2, 1681.0], [99.3, 1801.0], [99.4, 1873.0], [99.5, 1917.0], [99.6, 1959.0], [99.7, 2009.0], [99.8, 2181.0], [99.9, 2389.0], [100.0, 5665.0]], "isOverall": false, "label": "AuthzUser", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 345533.0, "series": [{"data": [[0.0, 345533.0], [600.0, 1063.0], [700.0, 57520.0], [800.0, 29737.0], [900.0, 1330.0], [1000.0, 3909.0], [1100.0, 21581.0], [1200.0, 8352.0], [1300.0, 607.0], [1400.0, 2736.0], [1500.0, 5593.0], [1600.0, 1876.0], [1700.0, 419.0], [1800.0, 896.0], [1900.0, 1310.0], [2000.0, 507.0], [2100.0, 189.0], [2200.0, 238.0], [2300.0, 305.0], [2400.0, 138.0], [2500.0, 59.0], [2600.0, 87.0], [2700.0, 63.0], [2800.0, 48.0], [2900.0, 34.0], [3000.0, 25.0], [3100.0, 19.0], [3200.0, 18.0], [3300.0, 14.0], [3400.0, 3.0], [3500.0, 6.0], [3700.0, 3.0], [3600.0, 3.0], [3800.0, 6.0], [3900.0, 4.0], [4000.0, 3.0], [4200.0, 4.0], [4300.0, 2.0], [4100.0, 1.0], [4400.0, 3.0], [4500.0, 1.0], [4600.0, 1.0], [4800.0, 1.0], [4700.0, 1.0], [5300.0, 2.0], [5600.0, 1.0], [5400.0, 1.0], [100.0, 17218.0], [200.0, 8500.0], [300.0, 27018.0], [400.0, 31604.0], [500.0, 979.0]], "isOverall": false, "label": "AuthzUser", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 11836.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 429900.0, "series": [{"data": [[0.0, 429900.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 127835.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 11836.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 299.81370651580556, "minX": 1.63336218E12, "maxY": 300.0, "series": [{"data": [[1.63336278E12, 300.0], [1.63336308E12, 299.81370651580556], [1.63336236E12, 300.0], [1.63336272E12, 300.0], [1.63336224E12, 300.0], [1.63336284E12, 300.0], [1.6333626E12, 300.0], [1.6333623E12, 300.0], [1.63336248E12, 300.0], [1.63336218E12, 299.99188741721747], [1.6333629E12, 300.0], [1.63336254E12, 300.0], [1.63336302E12, 300.0], [1.63336242E12, 300.0], [1.63336266E12, 300.0], [1.63336296E12, 300.0]], "isOverall": false, "label": "app1", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.63336308E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 5.166666666666667, "minX": 154.0, "maxY": 536.0, "series": [{"data": [[154.0, 5.166666666666667], [196.0, 8.428571428571427], [230.0, 15.74074074074074], [251.0, 19.775000000000006], [252.0, 10.333333333333332], [264.0, 536.0], [287.0, 73.0], [286.0, 15.088235294117645], [278.0, 38.84615384615385], [272.0, 6.5], [300.0, 303.73084981761843], [296.0, 22.775000000000006], [299.0, 7.0], [288.0, 8.0]], "isOverall": false, "label": "AuthzUser", "isController": false}, {"data": [[299.9867303637317, 303.6365966666124]], "isOverall": false, "label": "AuthzUser-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 300.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 16591.55, "minX": 1.63336218E12, "maxY": 534148.6666666666, "series": [{"data": [[1.63336278E12, 172119.6], [1.63336308E12, 116176.35], [1.63336236E12, 65304.61666666667], [1.63336272E12, 119400.78333333334], [1.63336224E12, 68813.63333333333], [1.63336284E12, 172537.68333333332], [1.6333626E12, 65863.98333333334], [1.6333623E12, 68701.18333333333], [1.63336248E12, 65492.03333333333], [1.63336218E12, 534148.6666666666], [1.6333629E12, 172647.25], [1.63336254E12, 65486.26666666667], [1.63336302E12, 172575.16666666666], [1.63336242E12, 60924.833333333336], [1.63336266E12, 65866.86666666667], [1.63336296E12, 172635.71666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.63336278E12, 166198.4], [1.63336308E12, 112173.9], [1.63336236E12, 62662.23333333333], [1.63336272E12, 115282.88333333333], [1.63336224E12, 65963.28333333334], [1.63336284E12, 166601.98333333334], [1.6333626E12, 63579.683333333334], [1.6333623E12, 65921.36666666667], [1.63336248E12, 63179.183333333334], [1.63336218E12, 16591.55], [1.6333629E12, 166707.75], [1.63336254E12, 63215.066666666666], [1.63336302E12, 166638.16666666666], [1.63336242E12, 58459.666666666664], [1.63336266E12, 63582.46666666667], [1.63336296E12, 166696.61666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.63336308E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 35.68336255113083, "minX": 1.63336218E12, "maxY": 936.218543046357, "series": [{"data": [[1.63336278E12, 35.86642550911055], [1.63336308E12, 40.46888491886204], [1.63336236E12, 793.5560510397906], [1.63336272E12, 252.41584779931597], [1.63336224E12, 754.7527863906848], [1.63336284E12, 37.27099587349851], [1.6333626E12, 787.8372805673531], [1.6333623E12, 754.9662567675338], [1.63336248E12, 792.1828387778486], [1.63336218E12, 936.218543046357], [1.6333629E12, 35.68336255113083], [1.63336254E12, 791.5166872138115], [1.63336302E12, 37.55358276265194], [1.63336242E12, 852.9006152389973], [1.63336266E12, 788.4765802836611], [1.63336296E12, 41.212051894274374]], "isOverall": false, "label": "AuthzUser", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.63336308E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 35.62831622005212, "minX": 1.63336218E12, "maxY": 936.0778145695331, "series": [{"data": [[1.63336278E12, 35.814861334405265], [1.63336308E12, 40.41923477743061], [1.63336236E12, 793.5122963486223], [1.63336272E12, 252.36833337357092], [1.63336224E12, 754.7085393446786], [1.63336284E12, 37.215580466779144], [1.6333626E12, 787.7880751214781], [1.6333623E12, 754.9256305871529], [1.63336248E12, 792.1366998327003], [1.63336218E12, 936.0778145695331], [1.6333629E12, 35.62831622005212], [1.63336254E12, 791.4712046495305], [1.63336302E12, 37.50532821112435], [1.63336242E12, 852.8546616185535], [1.63336266E12, 788.4177026790363], [1.63336296E12, 41.1602578016732]], "isOverall": false, "label": "AuthzUser", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.63336308E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.004659697240396927, "minX": 1.63336218E12, "maxY": 1.2519867549668926, "series": [{"data": [[1.63336278E12, 0.007435691318327939], [1.63336308E12, 0.005880601458984677], [1.63336236E12, 0.009139476356572047], [1.63336272E12, 0.004659697240396927], [1.63336224E12, 0.010223749266739359], [1.63336284E12, 0.007651569574151616], [1.6333626E12, 0.008755417414525216], [1.6333623E12, 0.008016116170730638], [1.63336248E12, 0.008717090781016098], [1.63336218E12, 1.2519867549668926], [1.6333629E12, 0.008581684614742442], [1.63336254E12, 0.009202183867559022], [1.63336302E12, 0.007766828127609759], [1.63336242E12, 0.008187411263606247], [1.63336266E12, 0.007967081071616214], [1.63336296E12, 0.007880983787213467]], "isOverall": false, "label": "AuthzUser", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.63336308E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 3.0, "minX": 1.63336218E12, "maxY": 5665.0, "series": [{"data": [[1.63336278E12, 513.0], [1.63336308E12, 616.0], [1.63336236E12, 3913.0], [1.63336272E12, 3176.0], [1.63336224E12, 3105.0], [1.63336284E12, 543.0], [1.6333626E12, 3527.0], [1.6333623E12, 3023.0], [1.63336248E12, 3612.0], [1.63336218E12, 5665.0], [1.6333629E12, 455.0], [1.63336254E12, 3237.0], [1.63336302E12, 515.0], [1.63336242E12, 5325.0], [1.63336266E12, 3545.0], [1.63336296E12, 557.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.63336278E12, 263.0], [1.63336308E12, 315.9900000000016], [1.63336236E12, 1943.9800000000032], [1.63336272E12, 282.0], [1.63336224E12, 1852.0], [1.63336284E12, 300.0], [1.6333626E12, 1933.0], [1.6333623E12, 1869.0], [1.63336248E12, 1975.0], [1.63336218E12, 3243.1800000000003], [1.6333629E12, 269.9900000000016], [1.63336254E12, 1964.0], [1.63336302E12, 273.0], [1.63336242E12, 2081.0], [1.63336266E12, 1956.9900000000016], [1.63336296E12, 297.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.63336278E12, 426.99894546508585], [1.63336308E12, 581.9768002318888], [1.63336236E12, 3014.9673094176615], [1.63336272E12, 446.992618255601], [1.63336224E12, 3069.964145812919], [1.63336284E12, 515.9884001159444], [1.6333626E12, 3170.9889273834015], [1.6333623E12, 2907.994200057972], [1.63336248E12, 3373.943582382093], [1.63336218E12, 5665.0], [1.6333629E12, 427.99314552305805], [1.63336254E12, 3065.8676558682746], [1.63336302E12, 508.98892738340146], [1.63336242E12, 3336.93514610278], [1.63336266E12, 3477.9114190672117], [1.63336296E12, 488.9942000579722]], "isOverall": false, "label": "99.99th percentile", "isController": false}, {"data": [[1.63336278E12, 368.99861038207746], [1.63336308E12, 473.99652595519365], [1.63336236E12, 2624.984019393891], [1.63336272E12, 374.99930519103873], [1.63336224E12, 2332.9965259551936], [1.63336284E12, 442.99930519103873], [1.6333626E12, 2653.995136337271], [1.6333623E12, 2523.924960632183], [1.63336248E12, 2687.9749868773943], [1.63336218E12, 4610.031941299435], [1.6333629E12, 358.99861038207746], [1.63336254E12, 2445.990272674542], [1.63336302E12, 409.99652595519365], [1.63336242E12, 2874.9965259551936], [1.63336266E12, 2682.9993051910387], [1.63336296E12, 401.99930519103873]], "isOverall": false, "label": "99.9th percentile", "isController": false}, {"data": [[1.63336278E12, 3.0], [1.63336308E12, 3.0], [1.63336236E12, 13.0], [1.63336272E12, 4.0], [1.63336224E12, 11.0], [1.63336284E12, 4.0], [1.6333626E12, 12.0], [1.6333623E12, 11.0], [1.63336248E12, 12.0], [1.63336218E12, 14.0], [1.6333629E12, 3.0], [1.63336254E12, 12.0], [1.63336302E12, 4.0], [1.63336242E12, 12.0], [1.63336266E12, 10.0], [1.63336296E12, 4.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.63336278E12, 25.0], [1.63336308E12, 26.0], [1.63336236E12, 779.0], [1.63336272E12, 25.0], [1.63336224E12, 745.0], [1.63336284E12, 25.0], [1.6333626E12, 780.0], [1.6333623E12, 746.0], [1.63336248E12, 786.0], [1.63336218E12, 786.0], [1.6333629E12, 26.0], [1.63336254E12, 791.0], [1.63336302E12, 26.0], [1.63336242E12, 828.0], [1.63336266E12, 781.0], [1.63336296E12, 27.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.63336308E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 22.0, "minX": 1.0, "maxY": 1499.0, "series": [{"data": [[82.0, 963.0], [203.0, 1499.0], [240.0, 1267.5], [255.0, 1218.0], [266.0, 1105.0], [278.0, 1104.5], [284.0, 1046.0], [291.0, 1049.0], [290.0, 1027.0], [301.0, 945.0], [289.0, 1030.0], [297.0, 996.5], [314.0, 950.0], [317.0, 954.0], [304.0, 989.5], [308.0, 982.0], [324.0, 858.0], [333.0, 860.0], [325.0, 943.0], [351.0, 844.0], [350.0, 836.5], [345.0, 806.0], [349.0, 888.0], [347.0, 852.5], [344.0, 859.0], [348.0, 817.0], [336.0, 885.0], [341.0, 846.0], [346.0, 823.0], [353.0, 832.0], [358.0, 825.0], [357.0, 827.0], [363.0, 815.0], [362.0, 814.0], [367.0, 812.0], [356.0, 836.0], [352.0, 847.0], [359.0, 820.0], [360.0, 811.0], [361.0, 818.0], [355.0, 842.0], [364.0, 811.0], [366.0, 808.0], [365.0, 808.0], [380.0, 788.0], [369.0, 805.0], [375.0, 791.0], [368.0, 812.0], [377.0, 785.0], [374.0, 801.0], [378.0, 787.0], [379.0, 795.0], [373.0, 792.0], [370.0, 804.0], [371.0, 805.0], [372.0, 800.0], [383.0, 785.0], [376.0, 790.0], [381.0, 783.0], [382.0, 776.0], [387.0, 773.0], [393.0, 763.0], [394.0, 764.0], [395.0, 760.0], [398.0, 747.0], [391.0, 766.0], [396.0, 755.0], [397.0, 763.5], [392.0, 758.0], [399.0, 750.0], [388.0, 774.0], [384.0, 778.0], [385.0, 775.0], [386.0, 773.0], [390.0, 779.0], [389.0, 770.0], [402.0, 739.0], [400.0, 745.0], [401.0, 755.0], [407.0, 730.0], [403.0, 760.0], [406.0, 743.0], [415.0, 741.0], [408.0, 736.0], [404.0, 747.0], [405.0, 745.0], [414.0, 730.0], [409.0, 727.0], [411.0, 725.0], [413.0, 744.0], [412.0, 716.0], [418.0, 719.0], [420.0, 736.0], [419.0, 695.0], [428.0, 687.0], [431.0, 697.0], [416.0, 710.0], [422.0, 711.0], [417.0, 741.0], [421.0, 729.0], [441.0, 707.0], [715.0, 25.0], [729.0, 26.0], [728.0, 26.0], [725.0, 26.0], [749.0, 26.0], [743.0, 23.0], [745.0, 25.0], [761.0, 23.0], [765.0, 25.0], [767.0, 27.0], [762.0, 26.0], [747.0, 23.0], [736.0, 25.0], [770.0, 26.0], [798.0, 33.0], [780.0, 26.0], [779.0, 27.0], [789.0, 24.0], [788.0, 26.0], [784.0, 25.0], [782.0, 24.0], [768.0, 25.0], [778.0, 25.0], [776.0, 25.0], [777.0, 27.0], [775.0, 25.0], [797.0, 26.0], [801.0, 26.0], [813.0, 34.0], [820.0, 30.0], [822.0, 25.0], [809.0, 24.0], [810.0, 24.0], [811.0, 24.0], [814.0, 25.0], [804.0, 25.0], [817.0, 25.0], [812.0, 26.0], [800.0, 26.0], [863.0, 33.0], [843.0, 33.0], [841.0, 30.0], [849.0, 28.0], [890.0, 63.5], [868.0, 44.0], [891.0, 37.0], [869.0, 37.0], [885.0, 29.0], [923.0, 70.0], [920.0, 35.0], [954.0, 73.5], [948.0, 72.5], [949.0, 60.0], [930.0, 71.5], [933.0, 77.0], [946.0, 66.0], [988.0, 24.0], [985.0, 24.0], [984.0, 24.0], [966.0, 43.5], [978.0, 24.0], [977.0, 25.0], [979.0, 24.0], [976.0, 24.0], [991.0, 25.0], [989.0, 24.0], [990.0, 25.0], [987.0, 24.0], [986.0, 26.0], [971.0, 23.0], [972.0, 25.0], [970.0, 26.0], [974.0, 22.0], [982.0, 24.0], [981.0, 24.0], [983.0, 25.0], [980.0, 25.0], [999.0, 24.0], [1009.0, 25.0], [1010.0, 24.0], [1004.0, 25.0], [1003.0, 25.0], [1002.0, 25.0], [1011.0, 24.0], [1013.0, 25.0], [1012.0, 25.0], [1005.0, 25.0], [1007.0, 25.0], [1006.0, 25.0], [992.0, 26.0], [994.0, 25.0], [993.0, 25.0], [996.0, 24.0], [995.0, 25.0], [997.0, 25.0], [998.0, 25.0], [1000.0, 24.0], [1001.0, 25.0], [1008.0, 24.0], [1081.0, 27.0], [1071.0, 27.0], [1037.0, 26.0], [1038.0, 24.0], [1051.0, 23.0], [1035.0, 26.0], [1084.0, 25.0], [1063.0, 27.0], [1048.0, 24.0], [1046.0, 24.0], [1041.0, 24.0], [1085.0, 27.0], [1149.0, 248.0], [1124.0, 27.0], [1114.0, 25.0], [1121.0, 27.0], [1115.0, 26.0], [1144.0, 25.0], [1107.0, 25.0], [1151.0, 28.0], [1150.0, 32.0], [1140.0, 26.0], [1184.0, 27.0], [1198.0, 29.0], [1170.0, 26.0], [1176.0, 41.0], [1203.0, 30.0], [1181.0, 40.0], [1156.0, 39.0], [1177.0, 55.0], [1190.0, 32.0], [1189.0, 39.0], [1209.0, 31.0], [1210.0, 51.0], [1211.0, 101.0], [1214.0, 57.0], [1215.0, 68.0], [1213.0, 44.0], [1204.0, 38.0], [1192.0, 36.0], [1206.0, 41.0], [1207.0, 40.0], [1208.0, 43.5], [1195.0, 34.0], [1197.0, 43.0], [1224.0, 30.0], [1271.0, 67.0], [1216.0, 27.0], [1247.0, 54.0], [1246.0, 41.0], [1229.0, 30.0], [1231.0, 45.0], [1245.0, 33.0], [1243.0, 45.0], [1237.0, 63.0], [1244.0, 60.5], [1253.0, 98.0], [1250.0, 73.0], [1260.0, 64.0], [1217.0, 52.0], [1221.0, 40.0], [1227.0, 65.0], [1228.0, 35.0], [1.0, 536.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1271.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 22.0, "minX": 1.0, "maxY": 1499.0, "series": [{"data": [[82.0, 963.0], [203.0, 1499.0], [240.0, 1267.0], [255.0, 1218.0], [266.0, 1104.5], [278.0, 1104.0], [284.0, 1046.0], [291.0, 1049.0], [290.0, 1026.5], [301.0, 945.0], [289.0, 1030.0], [297.0, 996.5], [314.0, 950.0], [317.0, 954.0], [304.0, 989.5], [308.0, 982.0], [324.0, 858.0], [333.0, 860.0], [325.0, 943.0], [351.0, 843.5], [350.0, 836.0], [345.0, 806.0], [349.0, 888.0], [347.0, 852.5], [344.0, 859.0], [348.0, 817.0], [336.0, 885.0], [341.0, 846.0], [346.0, 823.0], [353.0, 832.0], [358.0, 825.0], [357.0, 826.0], [363.0, 815.0], [362.0, 814.0], [367.0, 812.0], [356.0, 836.0], [352.0, 847.0], [359.0, 820.0], [360.0, 811.0], [361.0, 818.0], [355.0, 842.0], [364.0, 811.0], [366.0, 808.0], [365.0, 808.0], [380.0, 788.0], [369.0, 805.0], [375.0, 791.0], [368.0, 812.0], [377.0, 785.0], [374.0, 801.0], [378.0, 787.0], [379.0, 795.0], [373.0, 792.0], [370.0, 804.0], [371.0, 805.0], [372.0, 799.0], [383.0, 784.0], [376.0, 790.0], [381.0, 783.0], [382.0, 776.0], [387.0, 773.0], [393.0, 763.0], [394.0, 764.0], [395.0, 760.0], [398.0, 747.0], [391.0, 766.0], [396.0, 755.0], [397.0, 763.0], [392.0, 758.0], [399.0, 750.0], [388.0, 774.0], [384.0, 778.0], [385.0, 775.0], [386.0, 773.0], [390.0, 778.0], [389.0, 770.0], [402.0, 739.0], [400.0, 745.0], [401.0, 755.0], [407.0, 730.0], [403.0, 760.0], [406.0, 743.0], [415.0, 741.0], [408.0, 736.0], [404.0, 747.0], [405.0, 745.0], [414.0, 730.0], [409.0, 727.0], [411.0, 725.0], [413.0, 744.0], [412.0, 716.0], [418.0, 718.5], [420.0, 736.0], [419.0, 695.0], [428.0, 687.0], [431.0, 697.0], [416.0, 710.0], [422.0, 711.0], [417.0, 741.0], [421.0, 729.0], [441.0, 707.0], [715.0, 25.0], [729.0, 26.0], [728.0, 26.0], [725.0, 26.0], [749.0, 26.0], [743.0, 23.0], [745.0, 25.0], [761.0, 23.0], [765.0, 25.0], [767.0, 27.0], [762.0, 26.0], [747.0, 23.0], [736.0, 25.0], [770.0, 26.0], [798.0, 33.0], [780.0, 26.0], [779.0, 27.0], [789.0, 24.0], [788.0, 26.0], [784.0, 25.0], [782.0, 24.0], [768.0, 25.0], [778.0, 25.0], [776.0, 25.0], [777.0, 27.0], [775.0, 25.0], [797.0, 26.0], [801.0, 26.0], [813.0, 34.0], [820.0, 30.0], [822.0, 25.0], [809.0, 24.0], [810.0, 24.0], [811.0, 24.0], [814.0, 25.0], [804.0, 25.0], [817.0, 25.0], [812.0, 26.0], [800.0, 26.0], [863.0, 33.0], [843.0, 33.0], [841.0, 30.0], [849.0, 28.0], [890.0, 63.5], [868.0, 44.0], [891.0, 37.0], [869.0, 37.0], [885.0, 29.0], [923.0, 70.0], [920.0, 35.0], [954.0, 73.5], [948.0, 72.5], [949.0, 60.0], [930.0, 71.0], [933.0, 77.0], [946.0, 66.0], [988.0, 24.0], [985.0, 24.0], [984.0, 23.0], [966.0, 43.5], [978.0, 24.0], [977.0, 25.0], [979.0, 24.0], [976.0, 24.0], [991.0, 25.0], [989.0, 24.0], [990.0, 25.0], [987.0, 24.0], [986.0, 26.0], [971.0, 23.0], [972.0, 25.0], [970.0, 26.0], [974.0, 22.0], [982.0, 24.0], [981.0, 23.0], [983.0, 25.0], [980.0, 25.0], [999.0, 24.0], [1009.0, 25.0], [1010.0, 24.0], [1004.0, 25.0], [1003.0, 24.0], [1002.0, 24.0], [1011.0, 24.0], [1013.0, 25.0], [1012.0, 25.0], [1005.0, 25.0], [1007.0, 25.0], [1006.0, 25.0], [992.0, 26.0], [994.0, 25.0], [993.0, 25.0], [996.0, 24.0], [995.0, 25.0], [997.0, 25.0], [998.0, 25.0], [1000.0, 24.0], [1001.0, 25.0], [1008.0, 24.0], [1081.0, 26.0], [1071.0, 27.0], [1037.0, 26.0], [1038.0, 24.0], [1051.0, 23.0], [1035.0, 26.0], [1084.0, 25.0], [1063.0, 26.0], [1048.0, 24.0], [1046.0, 24.0], [1041.0, 24.0], [1085.0, 27.0], [1149.0, 248.0], [1124.0, 27.0], [1114.0, 25.0], [1121.0, 27.0], [1115.0, 26.0], [1144.0, 25.0], [1107.0, 25.0], [1151.0, 28.0], [1150.0, 32.0], [1140.0, 26.0], [1184.0, 27.0], [1198.0, 29.0], [1170.0, 26.0], [1176.0, 41.0], [1203.0, 30.0], [1181.0, 40.0], [1156.0, 39.0], [1177.0, 55.0], [1190.0, 32.0], [1189.0, 39.0], [1209.0, 31.0], [1210.0, 51.0], [1211.0, 101.0], [1214.0, 57.0], [1215.0, 68.0], [1213.0, 44.0], [1204.0, 37.5], [1192.0, 36.0], [1206.0, 41.0], [1207.0, 40.0], [1208.0, 43.5], [1195.0, 34.0], [1197.0, 43.0], [1224.0, 30.0], [1271.0, 67.0], [1216.0, 27.0], [1247.0, 54.0], [1246.0, 41.0], [1229.0, 30.0], [1231.0, 45.0], [1245.0, 33.0], [1243.0, 45.0], [1237.0, 63.0], [1244.0, 60.5], [1253.0, 98.0], [1250.0, 73.0], [1260.0, 64.0], [1217.0, 52.0], [1221.0, 40.0], [1227.0, 65.0], [1228.0, 35.0], [1.0, 531.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1271.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 105.66666666666667, "minX": 1.63336218E12, "maxY": 998.1833333333333, "series": [{"data": [[1.63336278E12, 994.7], [1.63336308E12, 671.6333333333333], [1.63336236E12, 377.48333333333335], [1.63336272E12, 685.8166666666667], [1.63336224E12, 397.75], [1.63336284E12, 998.1166666666667], [1.6333626E12, 380.71666666666664], [1.6333623E12, 397.1333333333333], [1.63336248E12, 378.56666666666666], [1.63336218E12, 105.66666666666667], [1.6333629E12, 997.75], [1.63336254E12, 378.53333333333336], [1.63336302E12, 997.9], [1.63336242E12, 352.1666666666667], [1.63336266E12, 380.73333333333335], [1.63336296E12, 998.1833333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.63336308E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 100.66666666666667, "minX": 1.63336218E12, "maxY": 998.25, "series": [{"data": [[1.63336278E12, 995.2], [1.63336308E12, 671.7], [1.63336236E12, 377.48333333333335], [1.63336272E12, 690.3166666666667], [1.63336224E12, 397.76666666666665], [1.63336284E12, 997.6166666666667], [1.6333626E12, 380.71666666666664], [1.6333623E12, 397.1166666666667], [1.63336248E12, 378.56666666666666], [1.63336218E12, 100.66666666666667], [1.6333629E12, 998.25], [1.63336254E12, 378.53333333333336], [1.63336302E12, 997.8333333333334], [1.63336242E12, 352.1666666666667], [1.63336266E12, 380.73333333333335], [1.63336296E12, 998.1833333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.63336308E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 100.66666666666667, "minX": 1.63336218E12, "maxY": 998.25, "series": [{"data": [[1.63336278E12, 995.2], [1.63336308E12, 671.7], [1.63336236E12, 377.48333333333335], [1.63336272E12, 690.3166666666667], [1.63336224E12, 397.76666666666665], [1.63336284E12, 997.6166666666667], [1.6333626E12, 380.71666666666664], [1.6333623E12, 397.1166666666667], [1.63336248E12, 378.56666666666666], [1.63336218E12, 100.66666666666667], [1.6333629E12, 998.25], [1.63336254E12, 378.53333333333336], [1.63336302E12, 997.8333333333334], [1.63336242E12, 352.1666666666667], [1.63336266E12, 380.73333333333335], [1.63336296E12, 998.1833333333333]], "isOverall": false, "label": "AuthzUser-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.63336308E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 100.66666666666667, "minX": 1.63336218E12, "maxY": 998.25, "series": [{"data": [[1.63336278E12, 995.2], [1.63336308E12, 671.7], [1.63336236E12, 377.48333333333335], [1.63336272E12, 690.3166666666667], [1.63336224E12, 397.76666666666665], [1.63336284E12, 997.6166666666667], [1.6333626E12, 380.71666666666664], [1.6333623E12, 397.1166666666667], [1.63336248E12, 378.56666666666666], [1.63336218E12, 100.66666666666667], [1.6333629E12, 998.25], [1.63336254E12, 378.53333333333336], [1.63336302E12, 997.8333333333334], [1.63336242E12, 352.1666666666667], [1.63336266E12, 380.73333333333335], [1.63336296E12, 998.1833333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.63336308E12, "title": "Total Transactions Per Second"}},
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

