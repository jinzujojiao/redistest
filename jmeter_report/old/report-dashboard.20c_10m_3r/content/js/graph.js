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
        data: {"result": {"minY": 8.0, "minX": 0.0, "maxY": 208.0, "series": [{"data": [[0.0, 8.0], [0.1, 17.0], [0.2, 18.0], [0.3, 19.0], [0.4, 20.0], [0.5, 21.0], [0.6, 22.0], [0.7, 22.0], [0.8, 23.0], [0.9, 24.0], [1.0, 25.0], [1.1, 26.0], [1.2, 28.0], [1.3, 30.0], [1.4, 31.0], [1.5, 32.0], [1.6, 33.0], [1.7, 33.0], [1.8, 33.0], [1.9, 34.0], [2.0, 34.0], [2.1, 34.0], [2.2, 34.0], [2.3, 35.0], [2.4, 35.0], [2.5, 35.0], [2.6, 35.0], [2.7, 35.0], [2.8, 35.0], [2.9, 35.0], [3.0, 36.0], [3.1, 36.0], [3.2, 36.0], [3.3, 36.0], [3.4, 36.0], [3.5, 36.0], [3.6, 36.0], [3.7, 36.0], [3.8, 36.0], [3.9, 36.0], [4.0, 36.0], [4.1, 37.0], [4.2, 37.0], [4.3, 37.0], [4.4, 37.0], [4.5, 37.0], [4.6, 37.0], [4.7, 37.0], [4.8, 37.0], [4.9, 37.0], [5.0, 37.0], [5.1, 37.0], [5.2, 37.0], [5.3, 37.0], [5.4, 37.0], [5.5, 38.0], [5.6, 38.0], [5.7, 38.0], [5.8, 38.0], [5.9, 38.0], [6.0, 38.0], [6.1, 38.0], [6.2, 38.0], [6.3, 38.0], [6.4, 38.0], [6.5, 38.0], [6.6, 38.0], [6.7, 38.0], [6.8, 38.0], [6.9, 38.0], [7.0, 38.0], [7.1, 38.0], [7.2, 38.0], [7.3, 38.0], [7.4, 39.0], [7.5, 39.0], [7.6, 39.0], [7.7, 39.0], [7.8, 39.0], [7.9, 39.0], [8.0, 39.0], [8.1, 39.0], [8.2, 39.0], [8.3, 39.0], [8.4, 39.0], [8.5, 39.0], [8.6, 39.0], [8.7, 39.0], [8.8, 39.0], [8.9, 39.0], [9.0, 39.0], [9.1, 39.0], [9.2, 39.0], [9.3, 39.0], [9.4, 39.0], [9.5, 39.0], [9.6, 39.0], [9.7, 40.0], [9.8, 40.0], [9.9, 40.0], [10.0, 40.0], [10.1, 40.0], [10.2, 40.0], [10.3, 40.0], [10.4, 40.0], [10.5, 40.0], [10.6, 40.0], [10.7, 40.0], [10.8, 40.0], [10.9, 40.0], [11.0, 40.0], [11.1, 40.0], [11.2, 40.0], [11.3, 40.0], [11.4, 40.0], [11.5, 40.0], [11.6, 40.0], [11.7, 40.0], [11.8, 40.0], [11.9, 40.0], [12.0, 40.0], [12.1, 40.0], [12.2, 41.0], [12.3, 41.0], [12.4, 41.0], [12.5, 41.0], [12.6, 41.0], [12.7, 41.0], [12.8, 41.0], [12.9, 41.0], [13.0, 41.0], [13.1, 41.0], [13.2, 41.0], [13.3, 41.0], [13.4, 41.0], [13.5, 41.0], [13.6, 41.0], [13.7, 41.0], [13.8, 41.0], [13.9, 41.0], [14.0, 41.0], [14.1, 41.0], [14.2, 41.0], [14.3, 41.0], [14.4, 41.0], [14.5, 41.0], [14.6, 41.0], [14.7, 41.0], [14.8, 42.0], [14.9, 42.0], [15.0, 42.0], [15.1, 42.0], [15.2, 42.0], [15.3, 42.0], [15.4, 42.0], [15.5, 42.0], [15.6, 42.0], [15.7, 42.0], [15.8, 42.0], [15.9, 42.0], [16.0, 42.0], [16.1, 42.0], [16.2, 42.0], [16.3, 42.0], [16.4, 42.0], [16.5, 42.0], [16.6, 42.0], [16.7, 42.0], [16.8, 42.0], [16.9, 42.0], [17.0, 42.0], [17.1, 42.0], [17.2, 42.0], [17.3, 43.0], [17.4, 43.0], [17.5, 43.0], [17.6, 43.0], [17.7, 43.0], [17.8, 43.0], [17.9, 43.0], [18.0, 43.0], [18.1, 43.0], [18.2, 43.0], [18.3, 43.0], [18.4, 43.0], [18.5, 43.0], [18.6, 43.0], [18.7, 43.0], [18.8, 43.0], [18.9, 43.0], [19.0, 43.0], [19.1, 43.0], [19.2, 43.0], [19.3, 43.0], [19.4, 43.0], [19.5, 44.0], [19.6, 44.0], [19.7, 44.0], [19.8, 44.0], [19.9, 44.0], [20.0, 44.0], [20.1, 44.0], [20.2, 44.0], [20.3, 44.0], [20.4, 44.0], [20.5, 44.0], [20.6, 44.0], [20.7, 44.0], [20.8, 44.0], [20.9, 44.0], [21.0, 44.0], [21.1, 44.0], [21.2, 44.0], [21.3, 45.0], [21.4, 45.0], [21.5, 45.0], [21.6, 45.0], [21.7, 45.0], [21.8, 45.0], [21.9, 45.0], [22.0, 45.0], [22.1, 45.0], [22.2, 45.0], [22.3, 45.0], [22.4, 45.0], [22.5, 45.0], [22.6, 45.0], [22.7, 45.0], [22.8, 46.0], [22.9, 46.0], [23.0, 46.0], [23.1, 46.0], [23.2, 46.0], [23.3, 46.0], [23.4, 46.0], [23.5, 46.0], [23.6, 46.0], [23.7, 46.0], [23.8, 46.0], [23.9, 47.0], [24.0, 47.0], [24.1, 47.0], [24.2, 47.0], [24.3, 47.0], [24.4, 47.0], [24.5, 47.0], [24.6, 47.0], [24.7, 48.0], [24.8, 48.0], [24.9, 48.0], [25.0, 48.0], [25.1, 48.0], [25.2, 48.0], [25.3, 49.0], [25.4, 49.0], [25.5, 49.0], [25.6, 49.0], [25.7, 50.0], [25.8, 50.0], [25.9, 50.0], [26.0, 50.0], [26.1, 51.0], [26.2, 51.0], [26.3, 51.0], [26.4, 51.0], [26.5, 51.0], [26.6, 52.0], [26.7, 52.0], [26.8, 52.0], [26.9, 52.0], [27.0, 52.0], [27.1, 52.0], [27.2, 53.0], [27.3, 53.0], [27.4, 53.0], [27.5, 53.0], [27.6, 53.0], [27.7, 53.0], [27.8, 53.0], [27.9, 53.0], [28.0, 53.0], [28.1, 53.0], [28.2, 54.0], [28.3, 54.0], [28.4, 54.0], [28.5, 54.0], [28.6, 54.0], [28.7, 54.0], [28.8, 54.0], [28.9, 54.0], [29.0, 54.0], [29.1, 54.0], [29.2, 54.0], [29.3, 54.0], [29.4, 54.0], [29.5, 54.0], [29.6, 54.0], [29.7, 54.0], [29.8, 55.0], [29.9, 55.0], [30.0, 55.0], [30.1, 55.0], [30.2, 55.0], [30.3, 55.0], [30.4, 55.0], [30.5, 55.0], [30.6, 55.0], [30.7, 55.0], [30.8, 55.0], [30.9, 55.0], [31.0, 55.0], [31.1, 55.0], [31.2, 55.0], [31.3, 55.0], [31.4, 55.0], [31.5, 55.0], [31.6, 55.0], [31.7, 55.0], [31.8, 55.0], [31.9, 55.0], [32.0, 55.0], [32.1, 56.0], [32.2, 56.0], [32.3, 56.0], [32.4, 56.0], [32.5, 56.0], [32.6, 56.0], [32.7, 56.0], [32.8, 56.0], [32.9, 56.0], [33.0, 56.0], [33.1, 56.0], [33.2, 56.0], [33.3, 56.0], [33.4, 56.0], [33.5, 56.0], [33.6, 56.0], [33.7, 56.0], [33.8, 56.0], [33.9, 56.0], [34.0, 56.0], [34.1, 56.0], [34.2, 56.0], [34.3, 56.0], [34.4, 56.0], [34.5, 56.0], [34.6, 56.0], [34.7, 56.0], [34.8, 56.0], [34.9, 56.0], [35.0, 56.0], [35.1, 56.0], [35.2, 57.0], [35.3, 57.0], [35.4, 57.0], [35.5, 57.0], [35.6, 57.0], [35.7, 57.0], [35.8, 57.0], [35.9, 57.0], [36.0, 57.0], [36.1, 57.0], [36.2, 57.0], [36.3, 57.0], [36.4, 57.0], [36.5, 57.0], [36.6, 57.0], [36.7, 57.0], [36.8, 57.0], [36.9, 57.0], [37.0, 57.0], [37.1, 57.0], [37.2, 57.0], [37.3, 57.0], [37.4, 57.0], [37.5, 57.0], [37.6, 57.0], [37.7, 57.0], [37.8, 57.0], [37.9, 57.0], [38.0, 57.0], [38.1, 57.0], [38.2, 57.0], [38.3, 57.0], [38.4, 57.0], [38.5, 57.0], [38.6, 57.0], [38.7, 57.0], [38.8, 57.0], [38.9, 57.0], [39.0, 57.0], [39.1, 57.0], [39.2, 57.0], [39.3, 58.0], [39.4, 58.0], [39.5, 58.0], [39.6, 58.0], [39.7, 58.0], [39.8, 58.0], [39.9, 58.0], [40.0, 58.0], [40.1, 58.0], [40.2, 58.0], [40.3, 58.0], [40.4, 58.0], [40.5, 58.0], [40.6, 58.0], [40.7, 58.0], [40.8, 58.0], [40.9, 58.0], [41.0, 58.0], [41.1, 58.0], [41.2, 58.0], [41.3, 58.0], [41.4, 58.0], [41.5, 58.0], [41.6, 58.0], [41.7, 58.0], [41.8, 58.0], [41.9, 58.0], [42.0, 58.0], [42.1, 58.0], [42.2, 58.0], [42.3, 58.0], [42.4, 58.0], [42.5, 58.0], [42.6, 58.0], [42.7, 58.0], [42.8, 58.0], [42.9, 58.0], [43.0, 58.0], [43.1, 58.0], [43.2, 58.0], [43.3, 58.0], [43.4, 58.0], [43.5, 58.0], [43.6, 58.0], [43.7, 58.0], [43.8, 58.0], [43.9, 58.0], [44.0, 58.0], [44.1, 59.0], [44.2, 59.0], [44.3, 59.0], [44.4, 59.0], [44.5, 59.0], [44.6, 59.0], [44.7, 59.0], [44.8, 59.0], [44.9, 59.0], [45.0, 59.0], [45.1, 59.0], [45.2, 59.0], [45.3, 59.0], [45.4, 59.0], [45.5, 59.0], [45.6, 59.0], [45.7, 59.0], [45.8, 59.0], [45.9, 59.0], [46.0, 59.0], [46.1, 59.0], [46.2, 59.0], [46.3, 59.0], [46.4, 59.0], [46.5, 59.0], [46.6, 59.0], [46.7, 59.0], [46.8, 59.0], [46.9, 59.0], [47.0, 59.0], [47.1, 59.0], [47.2, 59.0], [47.3, 59.0], [47.4, 59.0], [47.5, 59.0], [47.6, 59.0], [47.7, 59.0], [47.8, 59.0], [47.9, 59.0], [48.0, 59.0], [48.1, 59.0], [48.2, 59.0], [48.3, 59.0], [48.4, 59.0], [48.5, 59.0], [48.6, 59.0], [48.7, 59.0], [48.8, 59.0], [48.9, 59.0], [49.0, 59.0], [49.1, 59.0], [49.2, 59.0], [49.3, 59.0], [49.4, 60.0], [49.5, 60.0], [49.6, 60.0], [49.7, 60.0], [49.8, 60.0], [49.9, 60.0], [50.0, 60.0], [50.1, 60.0], [50.2, 60.0], [50.3, 60.0], [50.4, 60.0], [50.5, 60.0], [50.6, 60.0], [50.7, 60.0], [50.8, 60.0], [50.9, 60.0], [51.0, 60.0], [51.1, 60.0], [51.2, 60.0], [51.3, 60.0], [51.4, 60.0], [51.5, 60.0], [51.6, 60.0], [51.7, 60.0], [51.8, 60.0], [51.9, 60.0], [52.0, 60.0], [52.1, 60.0], [52.2, 60.0], [52.3, 60.0], [52.4, 60.0], [52.5, 60.0], [52.6, 60.0], [52.7, 60.0], [52.8, 60.0], [52.9, 60.0], [53.0, 60.0], [53.1, 60.0], [53.2, 60.0], [53.3, 60.0], [53.4, 60.0], [53.5, 60.0], [53.6, 60.0], [53.7, 60.0], [53.8, 60.0], [53.9, 60.0], [54.0, 60.0], [54.1, 60.0], [54.2, 60.0], [54.3, 60.0], [54.4, 60.0], [54.5, 60.0], [54.6, 60.0], [54.7, 60.0], [54.8, 60.0], [54.9, 60.0], [55.0, 61.0], [55.1, 61.0], [55.2, 61.0], [55.3, 61.0], [55.4, 61.0], [55.5, 61.0], [55.6, 61.0], [55.7, 61.0], [55.8, 61.0], [55.9, 61.0], [56.0, 61.0], [56.1, 61.0], [56.2, 61.0], [56.3, 61.0], [56.4, 61.0], [56.5, 61.0], [56.6, 61.0], [56.7, 61.0], [56.8, 61.0], [56.9, 61.0], [57.0, 61.0], [57.1, 61.0], [57.2, 61.0], [57.3, 61.0], [57.4, 61.0], [57.5, 61.0], [57.6, 61.0], [57.7, 61.0], [57.8, 61.0], [57.9, 61.0], [58.0, 61.0], [58.1, 61.0], [58.2, 61.0], [58.3, 61.0], [58.4, 61.0], [58.5, 61.0], [58.6, 61.0], [58.7, 61.0], [58.8, 61.0], [58.9, 61.0], [59.0, 61.0], [59.1, 61.0], [59.2, 61.0], [59.3, 61.0], [59.4, 61.0], [59.5, 61.0], [59.6, 61.0], [59.7, 61.0], [59.8, 61.0], [59.9, 61.0], [60.0, 61.0], [60.1, 61.0], [60.2, 61.0], [60.3, 61.0], [60.4, 61.0], [60.5, 62.0], [60.6, 62.0], [60.7, 62.0], [60.8, 62.0], [60.9, 62.0], [61.0, 62.0], [61.1, 62.0], [61.2, 62.0], [61.3, 62.0], [61.4, 62.0], [61.5, 62.0], [61.6, 62.0], [61.7, 62.0], [61.8, 62.0], [61.9, 62.0], [62.0, 62.0], [62.1, 62.0], [62.2, 62.0], [62.3, 62.0], [62.4, 62.0], [62.5, 62.0], [62.6, 62.0], [62.7, 62.0], [62.8, 62.0], [62.9, 62.0], [63.0, 62.0], [63.1, 62.0], [63.2, 62.0], [63.3, 62.0], [63.4, 62.0], [63.5, 62.0], [63.6, 62.0], [63.7, 62.0], [63.8, 62.0], [63.9, 62.0], [64.0, 62.0], [64.1, 62.0], [64.2, 62.0], [64.3, 62.0], [64.4, 62.0], [64.5, 62.0], [64.6, 62.0], [64.7, 62.0], [64.8, 62.0], [64.9, 62.0], [65.0, 62.0], [65.1, 62.0], [65.2, 62.0], [65.3, 63.0], [65.4, 63.0], [65.5, 63.0], [65.6, 63.0], [65.7, 63.0], [65.8, 63.0], [65.9, 63.0], [66.0, 63.0], [66.1, 63.0], [66.2, 63.0], [66.3, 63.0], [66.4, 63.0], [66.5, 63.0], [66.6, 63.0], [66.7, 63.0], [66.8, 63.0], [66.9, 63.0], [67.0, 63.0], [67.1, 63.0], [67.2, 63.0], [67.3, 63.0], [67.4, 63.0], [67.5, 63.0], [67.6, 63.0], [67.7, 63.0], [67.8, 63.0], [67.9, 63.0], [68.0, 63.0], [68.1, 63.0], [68.2, 63.0], [68.3, 63.0], [68.4, 63.0], [68.5, 63.0], [68.6, 63.0], [68.7, 63.0], [68.8, 63.0], [68.9, 63.0], [69.0, 63.0], [69.1, 63.0], [69.2, 63.0], [69.3, 63.0], [69.4, 63.0], [69.5, 64.0], [69.6, 64.0], [69.7, 64.0], [69.8, 64.0], [69.9, 64.0], [70.0, 64.0], [70.1, 64.0], [70.2, 64.0], [70.3, 64.0], [70.4, 64.0], [70.5, 64.0], [70.6, 64.0], [70.7, 64.0], [70.8, 64.0], [70.9, 64.0], [71.0, 64.0], [71.1, 64.0], [71.2, 64.0], [71.3, 64.0], [71.4, 64.0], [71.5, 64.0], [71.6, 64.0], [71.7, 64.0], [71.8, 64.0], [71.9, 64.0], [72.0, 64.0], [72.1, 64.0], [72.2, 64.0], [72.3, 64.0], [72.4, 64.0], [72.5, 64.0], [72.6, 64.0], [72.7, 65.0], [72.8, 65.0], [72.9, 65.0], [73.0, 65.0], [73.1, 65.0], [73.2, 65.0], [73.3, 65.0], [73.4, 65.0], [73.5, 65.0], [73.6, 65.0], [73.7, 65.0], [73.8, 65.0], [73.9, 65.0], [74.0, 65.0], [74.1, 65.0], [74.2, 65.0], [74.3, 65.0], [74.4, 65.0], [74.5, 65.0], [74.6, 65.0], [74.7, 65.0], [74.8, 65.0], [74.9, 65.0], [75.0, 66.0], [75.1, 66.0], [75.2, 66.0], [75.3, 66.0], [75.4, 66.0], [75.5, 66.0], [75.6, 66.0], [75.7, 66.0], [75.8, 66.0], [75.9, 66.0], [76.0, 66.0], [76.1, 66.0], [76.2, 66.0], [76.3, 66.0], [76.4, 66.0], [76.5, 66.0], [76.6, 66.0], [76.7, 67.0], [76.8, 67.0], [76.9, 67.0], [77.0, 67.0], [77.1, 67.0], [77.2, 67.0], [77.3, 67.0], [77.4, 67.0], [77.5, 67.0], [77.6, 67.0], [77.7, 67.0], [77.8, 67.0], [77.9, 68.0], [78.0, 68.0], [78.1, 68.0], [78.2, 68.0], [78.3, 68.0], [78.4, 68.0], [78.5, 68.0], [78.6, 68.0], [78.7, 69.0], [78.8, 69.0], [78.9, 69.0], [79.0, 69.0], [79.1, 69.0], [79.2, 69.0], [79.3, 70.0], [79.4, 70.0], [79.5, 70.0], [79.6, 70.0], [79.7, 70.0], [79.8, 70.0], [79.9, 71.0], [80.0, 71.0], [80.1, 71.0], [80.2, 71.0], [80.3, 71.0], [80.4, 72.0], [80.5, 72.0], [80.6, 72.0], [80.7, 72.0], [80.8, 72.0], [80.9, 72.0], [81.0, 73.0], [81.1, 73.0], [81.2, 73.0], [81.3, 73.0], [81.4, 73.0], [81.5, 73.0], [81.6, 73.0], [81.7, 74.0], [81.8, 74.0], [81.9, 74.0], [82.0, 74.0], [82.1, 74.0], [82.2, 74.0], [82.3, 74.0], [82.4, 74.0], [82.5, 74.0], [82.6, 75.0], [82.7, 75.0], [82.8, 75.0], [82.9, 75.0], [83.0, 75.0], [83.1, 75.0], [83.2, 75.0], [83.3, 75.0], [83.4, 75.0], [83.5, 75.0], [83.6, 76.0], [83.7, 76.0], [83.8, 76.0], [83.9, 76.0], [84.0, 76.0], [84.1, 76.0], [84.2, 76.0], [84.3, 76.0], [84.4, 76.0], [84.5, 76.0], [84.6, 76.0], [84.7, 77.0], [84.8, 77.0], [84.9, 77.0], [85.0, 77.0], [85.1, 77.0], [85.2, 77.0], [85.3, 77.0], [85.4, 77.0], [85.5, 77.0], [85.6, 77.0], [85.7, 77.0], [85.8, 77.0], [85.9, 78.0], [86.0, 78.0], [86.1, 78.0], [86.2, 78.0], [86.3, 78.0], [86.4, 78.0], [86.5, 78.0], [86.6, 78.0], [86.7, 78.0], [86.8, 78.0], [86.9, 78.0], [87.0, 78.0], [87.1, 79.0], [87.2, 79.0], [87.3, 79.0], [87.4, 79.0], [87.5, 79.0], [87.6, 79.0], [87.7, 79.0], [87.8, 79.0], [87.9, 79.0], [88.0, 79.0], [88.1, 79.0], [88.2, 79.0], [88.3, 80.0], [88.4, 80.0], [88.5, 80.0], [88.6, 80.0], [88.7, 80.0], [88.8, 80.0], [88.9, 80.0], [89.0, 80.0], [89.1, 80.0], [89.2, 80.0], [89.3, 80.0], [89.4, 80.0], [89.5, 81.0], [89.6, 81.0], [89.7, 81.0], [89.8, 81.0], [89.9, 81.0], [90.0, 81.0], [90.1, 81.0], [90.2, 81.0], [90.3, 81.0], [90.4, 81.0], [90.5, 81.0], [90.6, 82.0], [90.7, 82.0], [90.8, 82.0], [90.9, 82.0], [91.0, 82.0], [91.1, 82.0], [91.2, 82.0], [91.3, 82.0], [91.4, 82.0], [91.5, 82.0], [91.6, 82.0], [91.7, 83.0], [91.8, 83.0], [91.9, 83.0], [92.0, 83.0], [92.1, 83.0], [92.2, 83.0], [92.3, 83.0], [92.4, 83.0], [92.5, 84.0], [92.6, 84.0], [92.7, 84.0], [92.8, 84.0], [92.9, 84.0], [93.0, 84.0], [93.1, 84.0], [93.2, 84.0], [93.3, 85.0], [93.4, 85.0], [93.5, 85.0], [93.6, 85.0], [93.7, 85.0], [93.8, 85.0], [93.9, 86.0], [94.0, 86.0], [94.1, 86.0], [94.2, 86.0], [94.3, 86.0], [94.4, 87.0], [94.5, 87.0], [94.6, 87.0], [94.7, 87.0], [94.8, 88.0], [94.9, 88.0], [95.0, 88.0], [95.1, 89.0], [95.2, 89.0], [95.3, 89.0], [95.4, 90.0], [95.5, 90.0], [95.6, 91.0], [95.7, 91.0], [95.8, 92.0], [95.9, 92.0], [96.0, 93.0], [96.1, 93.0], [96.2, 93.0], [96.3, 94.0], [96.4, 94.0], [96.5, 95.0], [96.6, 95.0], [96.7, 96.0], [96.8, 96.0], [96.9, 96.0], [97.0, 97.0], [97.1, 97.0], [97.2, 97.0], [97.3, 98.0], [97.4, 98.0], [97.5, 99.0], [97.6, 99.0], [97.7, 100.0], [97.8, 100.0], [97.9, 100.0], [98.0, 101.0], [98.1, 101.0], [98.2, 102.0], [98.3, 102.0], [98.4, 103.0], [98.5, 104.0], [98.6, 104.0], [98.7, 105.0], [98.8, 106.0], [98.9, 107.0], [99.0, 109.0], [99.1, 111.0], [99.2, 112.0], [99.3, 114.0], [99.4, 117.0], [99.5, 119.0], [99.6, 121.0], [99.7, 124.0], [99.8, 131.0], [99.9, 139.0], [100.0, 208.0]], "isOverall": false, "label": "AuthzRequest", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 195297.0, "series": [{"data": [[0.0, 195297.0], [100.0, 4641.0], [200.0, 1.0]], "isOverall": false, "label": "AuthzRequest", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 199939.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 199939.0, "series": [{"data": [[0.0, 199939.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 18.856193640246808, "minX": 1.6183896E12, "maxY": 20.0, "series": [{"data": [[1.6183899E12, 20.0], [1.6183902E12, 19.989652832749066], [1.61838972E12, 20.0], [1.61839002E12, 20.0], [1.61838984E12, 20.0], [1.61839014E12, 20.0], [1.61838966E12, 20.0], [1.61838996E12, 20.0], [1.61838978E12, 20.0], [1.61839008E12, 20.0], [1.6183896E12, 18.856193640246808]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6183902E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 16.549999999999997, "minX": 1.0, "maxY": 71.0, "series": [{"data": [[8.0, 25.42857142857143], [2.0, 71.0], [9.0, 24.61111111111111], [10.0, 27.6], [11.0, 29.476190476190474], [12.0, 32.52941176470588], [3.0, 58.0], [13.0, 34.45], [14.0, 35.411764705882355], [15.0, 38.15], [4.0, 21.866666666666667], [16.0, 42.23809523809524], [1.0, 51.0], [17.0, 44.88235294117647], [18.0, 43.47619047619049], [19.0, 47.900000000000006], [5.0, 16.549999999999997], [20.0, 59.970415564639225], [6.0, 19.588235294117645], [7.0, 22.36842105263158]], "isOverall": false, "label": "AuthzRequest", "isController": false}, {"data": [[19.98703104446873, 59.92771295245007]], "isOverall": false, "label": "AuthzRequest-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 20.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 5197.266666666666, "minX": 1.6183896E12, "maxY": 104006.2, "series": [{"data": [[1.6183899E12, 101419.06666666667], [1.6183902E12, 89523.03333333334], [1.61838972E12, 100415.86666666667], [1.61839002E12, 101014.21666666666], [1.61838984E12, 99808.83333333333], [1.61839014E12, 104006.2], [1.61838966E12, 100787.66666666667], [1.61838996E12, 100306.33333333333], [1.61838978E12, 102897.08333333333], [1.61839008E12, 101215.43333333333], [1.6183896E12, 10669.183333333332]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6183899E12, 49422.13333333333], [1.6183902E12, 43625.46666666667], [1.61838972E12, 48933.73333333333], [1.61839002E12, 49224.8], [1.61838984E12, 48637.73333333333], [1.61839014E12, 50682.6], [1.61838966E12, 49113.8], [1.61838996E12, 48879.46666666667], [1.61838978E12, 50142.4], [1.61839008E12, 49323.46666666667], [1.6183896E12, 5197.266666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6183902E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 52.87802562885624, "minX": 1.6183896E12, "maxY": 60.98806965961768, "series": [{"data": [[1.6183899E12, 59.84822319824288], [1.6183902E12, 60.98806965961768], [1.61838972E12, 60.43754410726915], [1.61839002E12, 60.09079975947077], [1.61838984E12, 60.81139060756665], [1.61839014E12, 58.35722976590251], [1.61838966E12, 60.213299181357094], [1.61838996E12, 60.52003431570465], [1.61838978E12, 58.991735537189726], [1.61839008E12, 59.96629325865179], [1.6183896E12, 52.87802562885624]], "isOverall": false, "label": "AuthzRequest", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6183902E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 52.8305647840532, "minX": 1.6183896E12, "maxY": 60.970485129480736, "series": [{"data": [[1.6183899E12, 59.831153922938704], [1.6183902E12, 60.970485129480736], [1.61838972E12, 60.42010283294671], [1.61839002E12, 60.07215874924819], [1.61838984E12, 60.79450248503882], [1.61839014E12, 58.3405850002436], [1.61838966E12, 60.19265732509659], [1.61838996E12, 60.501211142511075], [1.61838978E12, 58.97466548602878], [1.61839008E12, 59.94953990798127], [1.6183896E12, 52.8305647840532]], "isOverall": false, "label": "AuthzRequest", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6183902E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.008142033246635776, "minX": 1.6183896E12, "maxY": 0.04935927859515901, "series": [{"data": [[1.6183899E12, 0.009233379916150886], [1.6183902E12, 0.008142033246635776], [1.61838972E12, 0.00957757838491782], [1.61839002E12, 0.009721387051513335], [1.61838984E12, 0.008875139466477326], [1.61839014E12, 0.009344429843772761], [1.61838966E12, 0.010396263372005452], [1.61838996E12, 0.008427533306419077], [1.61838978E12, 0.010576544667453747], [1.61839008E12, 0.00865173034606922], [1.6183896E12, 0.04935927859515901]], "isOverall": false, "label": "AuthzRequest", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6183902E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 8.0, "minX": 1.6183896E12, "maxY": 208.0, "series": [{"data": [[1.6183899E12, 194.0], [1.6183902E12, 208.0], [1.61838972E12, 189.0], [1.61839002E12, 185.0], [1.61838984E12, 188.0], [1.61839014E12, 154.0], [1.61838966E12, 190.0], [1.61838996E12, 168.0], [1.61838978E12, 190.0], [1.61839008E12, 178.0], [1.6183896E12, 164.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6183899E12, 81.0], [1.6183902E12, 84.0], [1.61838972E12, 82.0], [1.61839002E12, 81.0], [1.61838984E12, 82.0], [1.61839014E12, 79.0], [1.61838966E12, 80.0], [1.61838996E12, 81.0], [1.61838978E12, 80.0], [1.61839008E12, 80.0], [1.6183896E12, 74.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6183899E12, 107.0], [1.6183902E12, 118.0], [1.61838972E12, 111.0], [1.61839002E12, 108.43000000000029], [1.61838984E12, 108.0], [1.61839014E12, 107.0], [1.61838966E12, 105.0], [1.61838996E12, 106.0], [1.61838978E12, 109.0], [1.61839008E12, 107.0], [1.6183896E12, 100.76000000000022]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6183899E12, 88.0], [1.6183902E12, 97.0], [1.61838972E12, 91.0], [1.61839002E12, 88.0], [1.61838984E12, 87.0], [1.61839014E12, 86.0], [1.61838966E12, 86.0], [1.61838996E12, 87.14999999999782], [1.61838978E12, 89.0], [1.61839008E12, 87.0], [1.6183896E12, 80.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6183899E12, 15.0], [1.6183902E12, 14.0], [1.61838972E12, 13.0], [1.61839002E12, 14.0], [1.61838984E12, 13.0], [1.61839014E12, 13.0], [1.61838966E12, 14.0], [1.61838996E12, 15.0], [1.61838978E12, 15.0], [1.61839008E12, 14.0], [1.6183896E12, 8.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6183899E12, 60.0], [1.6183902E12, 60.0], [1.61838972E12, 60.0], [1.61839002E12, 60.0], [1.61838984E12, 61.0], [1.61839014E12, 58.0], [1.61838966E12, 60.0], [1.61838996E12, 60.0], [1.61838978E12, 58.0], [1.61839008E12, 60.0], [1.6183896E12, 55.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6183902E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 50.0, "minX": 301.0, "maxY": 66.0, "series": [{"data": [[302.0, 65.0], [301.0, 66.0], [319.0, 62.0], [316.0, 63.0], [305.0, 65.0], [304.0, 66.0], [307.0, 65.0], [315.0, 63.0], [313.0, 64.0], [312.0, 64.0], [310.0, 64.0], [309.0, 64.0], [308.0, 65.0], [314.0, 63.0], [311.0, 64.0], [317.0, 63.0], [318.0, 63.0], [321.0, 62.0], [328.0, 61.0], [325.0, 61.0], [324.0, 61.0], [327.0, 61.0], [320.0, 62.0], [326.0, 61.0], [329.0, 60.0], [331.0, 60.0], [330.0, 60.0], [335.0, 59.0], [334.0, 60.0], [333.0, 60.0], [322.0, 62.0], [323.0, 62.0], [332.0, 60.0], [339.0, 59.0], [348.0, 56.0], [349.0, 57.0], [346.0, 57.0], [345.0, 57.0], [342.0, 58.0], [336.0, 59.0], [343.0, 58.0], [338.0, 59.0], [337.0, 59.0], [347.0, 57.0], [350.0, 57.0], [351.0, 57.0], [344.0, 58.0], [341.0, 59.0], [340.0, 58.0], [352.0, 57.0], [366.0, 54.0], [360.0, 56.0], [367.0, 54.0], [363.0, 57.0], [361.0, 55.0], [358.0, 56.0], [359.0, 55.0], [364.0, 55.0], [365.0, 55.0], [356.0, 56.0], [355.0, 56.0], [354.0, 56.0], [353.0, 57.0], [357.0, 56.0], [375.0, 53.0], [376.0, 53.0], [381.0, 52.0], [391.0, 50.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 391.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 50.0, "minX": 301.0, "maxY": 66.0, "series": [{"data": [[302.0, 65.0], [301.0, 66.0], [319.0, 62.0], [316.0, 63.0], [305.0, 65.0], [304.0, 66.0], [307.0, 65.0], [315.0, 63.0], [313.0, 64.0], [312.0, 64.0], [310.0, 64.0], [309.0, 64.0], [308.0, 65.0], [314.0, 63.0], [311.0, 64.0], [317.0, 63.0], [318.0, 63.0], [321.0, 62.0], [328.0, 61.0], [325.0, 61.0], [324.0, 61.0], [327.0, 61.0], [320.0, 62.0], [326.0, 61.0], [329.0, 60.0], [331.0, 60.0], [330.0, 60.0], [335.0, 59.0], [334.0, 60.0], [333.0, 60.0], [322.0, 62.0], [323.0, 62.0], [332.0, 60.0], [339.0, 59.0], [348.0, 56.0], [349.0, 57.0], [346.0, 57.0], [345.0, 57.0], [342.0, 58.0], [336.0, 59.0], [343.0, 58.0], [338.0, 59.0], [337.0, 59.0], [347.0, 57.0], [350.0, 57.0], [351.0, 57.0], [344.0, 58.0], [341.0, 59.0], [340.0, 58.0], [352.0, 57.0], [366.0, 54.0], [360.0, 56.0], [367.0, 54.0], [363.0, 57.0], [361.0, 55.0], [358.0, 56.0], [359.0, 55.0], [364.0, 55.0], [365.0, 55.0], [356.0, 56.0], [355.0, 56.0], [354.0, 56.0], [353.0, 57.0], [357.0, 56.0], [375.0, 53.0], [376.0, 53.0], [381.0, 52.0], [391.0, 50.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 391.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 35.45, "minX": 1.6183896E12, "maxY": 342.45, "series": [{"data": [[1.6183899E12, 333.93333333333334], [1.6183902E12, 294.43333333333334], [1.61838972E12, 330.6333333333333], [1.61839002E12, 332.6], [1.61838984E12, 328.6333333333333], [1.61839014E12, 342.45], [1.61838966E12, 331.85], [1.61838996E12, 330.26666666666665], [1.61838978E12, 338.8], [1.61839008E12, 333.26666666666665], [1.6183896E12, 35.45]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6183902E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 35.11666666666667, "minX": 1.6183896E12, "maxY": 342.45, "series": [{"data": [[1.6183899E12, 333.93333333333334], [1.6183902E12, 294.76666666666665], [1.61838972E12, 330.6333333333333], [1.61839002E12, 332.6], [1.61838984E12, 328.6333333333333], [1.61839014E12, 342.45], [1.61838966E12, 331.85], [1.61838996E12, 330.26666666666665], [1.61838978E12, 338.8], [1.61839008E12, 333.26666666666665], [1.6183896E12, 35.11666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6183902E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 35.11666666666667, "minX": 1.6183896E12, "maxY": 342.45, "series": [{"data": [[1.6183899E12, 333.93333333333334], [1.6183902E12, 294.76666666666665], [1.61838972E12, 330.6333333333333], [1.61839002E12, 332.6], [1.61838984E12, 328.6333333333333], [1.61839014E12, 342.45], [1.61838966E12, 331.85], [1.61838996E12, 330.26666666666665], [1.61838978E12, 338.8], [1.61839008E12, 333.26666666666665], [1.6183896E12, 35.11666666666667]], "isOverall": false, "label": "AuthzRequest-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6183902E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 35.11666666666667, "minX": 1.6183896E12, "maxY": 342.45, "series": [{"data": [[1.6183899E12, 333.93333333333334], [1.6183902E12, 294.76666666666665], [1.61838972E12, 330.6333333333333], [1.61839002E12, 332.6], [1.61838984E12, 328.6333333333333], [1.61839014E12, 342.45], [1.61838966E12, 331.85], [1.61838996E12, 330.26666666666665], [1.61838978E12, 338.8], [1.61839008E12, 333.26666666666665], [1.6183896E12, 35.11666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6183902E12, "title": "Total Transactions Per Second"}},
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

